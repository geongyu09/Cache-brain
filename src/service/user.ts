import { User } from "next-auth";
import { client } from "./sanity";
import { HomeUser } from "@/model/user";

/**
 * 유저의 정보를 받아서, 만약 기존에 없던 유저라면 sanity에 저장
 * -동작 해야하는 시점 : 로그인 시
 *  */
export async function makeNewUser({ name, email, id, image }: User) {
  const newUser = {
    _id: id,
    name,
    username: email?.split("@")[0] || "",
    image,
    _type: "user",
  };
  try {
    return await client.createIfNotExists(newUser);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo(
  username: string,
  { own = false, learning = false }: { own: boolean; learning: boolean }
): Promise<HomeUser> {
  const query = `*[_type == "user" && username == "${username}"]{"id":_id,name,username,image,${
    own ? `own[]->,` : ""
  }${learning ? `learning[]->` : ""}}[0]`;
  return await client.fetch(query);
}

export async function getUserById(userId: string): Promise<HomeUser> {
  const query = `*[_type == "user" && _id == "${userId}"]{"id":_id,name,username,image}[0]`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

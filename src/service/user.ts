import { User } from "next-auth";
import { client } from "./sanity";

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
) {
  // const query = `*[_type == "user" && username == "${username}"]{"id":_id,name,username,image,${
  //   own ? `own[]->,` : ""
  // }${learning ? `learning[]->` : ""}}`;

  console.log("aa");
  const data =
    await client.fetch(`*[_type == "user" && username == "geongyu09"]{
    "id" : _id,
      name,
      username,
      image,
      own[]->,
      learning[]->
  }`);
  console.log(data);
  return data;
}

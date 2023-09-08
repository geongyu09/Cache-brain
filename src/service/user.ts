import { User } from "next-auth";
import { client } from "./sanity";

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

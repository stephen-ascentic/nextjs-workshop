"use server";

import { cookies } from "next/headers";

// import { revalidatePath } from "next/cache";

export default async function submit() {
  console.log("Submitted");
  //   revalidatePath("/categories");
  cookies().set("name", "lee");
  //   revalidateTag("number");
}

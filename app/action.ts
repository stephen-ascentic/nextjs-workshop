"use server";

import { revalidatePath } from "next/cache";

export default async function submit() {
  console.log("Submitted");
  revalidatePath("/categories");
}

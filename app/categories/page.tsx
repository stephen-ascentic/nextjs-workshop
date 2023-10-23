// "use client";
import ChildServerComponent from "@/components/ChildServerComponent/ChildServerComponent";
import RefreshCategory from "@/components/RefreshButton/RefreshCategory";
import { getCategory } from "@/lib/api";
import { headers } from "next/headers";
// export const dynamic = "force-dynamic";
// export const revalidate = 10;

export default async function page() {
  const category = await getCategory();

  const headersList = headers();
  //   const referer = headersList.get("referer");

  return (
    <div>
      <div className="m-auto text-center">
        <h1>Random category</h1>
        <div className="p-6 my-6 text-3xl font-bold shadow-2xl text-red-500">{category}</div>

        <RefreshCategory />
        <ChildServerComponent />
      </div>
      {/* <div>Referer: {referer}</div>; */}
    </div>
  );
}

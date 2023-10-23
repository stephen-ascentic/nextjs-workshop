import Form from "@/components/RefreshButton/Form";
import RefreshButton from "@/components/RefreshButton/RefreshButton";
import { getCategory } from "@/lib/api";
// import { headers } from "next/headers";
// export const dynamic = "force-dynamic";
// export const revalidate = 10;

export default async function page() {
  const category = await getCategory();
  //   const headersList = headers();
  //   const referer = headersList.get("referer");

  return (
    <div className="m-auto text-center">
      <h1>Random number</h1>
      <div className="p-6 my-6 text-3xl font-bold shadow-2xl text-red-500">{Math.random()}</div>
      <div className="flex gap-2 justify-center">
        <RefreshButton />
        <Form />
      </div>
    </div>
  );
}

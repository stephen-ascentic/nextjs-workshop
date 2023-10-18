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
  console.log(category);

  return (
    <div>
      <p>{Math.random()}</p>
      <RefreshButton />
      <Form />
    </div>
  );
}

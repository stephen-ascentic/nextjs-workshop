import { getCategory } from "@/lib/api";

const ChildServerComponent = async () => {
  const category = await getCategory();

  return (
    <div>
      <h1>ChildServerComponent</h1>
      <p>{category}</p>
    </div>
  );
};

export default ChildServerComponent;

import { getTime } from "@/lib/api";

const ChildServerComponent = async () => {
  const time = await getTime();

  return (
    <div>
      <div className="text-black">Time : {time}</div>
    </div>
  );
};

export default ChildServerComponent;

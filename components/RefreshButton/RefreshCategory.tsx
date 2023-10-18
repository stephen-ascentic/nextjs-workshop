"use client";
import { refreshTime } from "@/lib/api";

const RefreshCategory = () => {
  return (
    <button className="bg-black text-white p-3 rounded-md" type="button" onClick={() => refreshTime()}>
      Refresh category
    </button>
  );
};

export default RefreshCategory;

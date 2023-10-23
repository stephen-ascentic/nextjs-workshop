"use client";

import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return (
    <button type="button" className="bg-black text-white p-3 rounded-md" onClick={() => router.refresh()}>
      Refresh route
    </button>
  );
}

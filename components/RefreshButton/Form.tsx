"use client";

import submit from "../../app/action";

export default function Form() {
  return (
    <form action={submit}>
      <button type="submit" className="bg-orange-400 text-white p-3 rounded-md">
        Add to Cart
      </button>
    </form>
  );
}

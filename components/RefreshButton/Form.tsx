"use client";

import submit from "../../app/action";

export default function Form() {
  return (
    <form action={submit}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}

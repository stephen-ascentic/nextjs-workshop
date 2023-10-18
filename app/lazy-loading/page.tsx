"use client";

import { useState } from "react";
// const ComponentC = dynamic(
//   () => import("../../components/HeavyFunctionalComponent/HeavyFunctionalComponent"),
//   { ssr: false }
// );

const page = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Load on demand, only when/if the condition is met */}
      {/* <ComponentC /> */}
      {/* {showMore && <HeavyFunctionalComponent />} */}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>
    </div>
  );
};

export default page;

// export default function Page() {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search"
//         onChange={async (e) => {
//           const { value } = e.currentTarget;
//           // Dynamically load fuse.js
//           const Fuse = (await import("fuse.js")).default;
//           const fuse = new Fuse(names);

//           console.log(fuse.search(value));
//         }}
//       />
//     </div>
//   );
// }

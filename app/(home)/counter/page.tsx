import type { Metadata } from "next";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Increment The numbers by 1",
};

const page = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default page;

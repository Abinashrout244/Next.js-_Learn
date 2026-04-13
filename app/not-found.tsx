"use client";
import { usePathname } from "next/navigation";

const notFound = () => {
  const pathName = usePathname();

  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];

  return (
    <h1 className="flex min-h-screen justify-center items-center bg-cyan-500 text-2xl text-white">
      Not Found Page <br></br>The ProductId is{productId} & The reviewId is
      {reviewId};
    </h1>
  );
};

export default notFound;

import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "iPhone 15", price: "$999" },
  { id: 2, name: "Nike Shoes", price: "$199" },
  { id: 3, name: "DSLr Camera", price: "$99" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h1>Product not found</h1>;
  return (
    <div className=" flex flex-col gap-3 justify-center items-center">
      <Link href={"/products"}>
        <button className=" px-5 py-2 rounded-4xl bg-white text-black">
          Back
        </button>
      </Link>
      <div className="rounded-lg bg-transparent flex flex-col gap-3 justify-center items-center border border-gray-300 w-fit p-5 h-30 ">
        <h2 className="font-semibold text-2xl text-green-400">
          {product.name}
        </h2>
        <h2 className="font-semibold text-2xl text-green-400">
          {product.price}
        </h2>
      </div>
    </div>
  );
}

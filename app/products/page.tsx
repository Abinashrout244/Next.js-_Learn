import Link from "next/link";
export default function First() {
  const products = [
    { id: 1, name: "iPhone 15", price: "$999" },
    { id: 2, name: "Nike Shoes", price: "$199" },
    { id: 3, name: "DSLr Camera", price: "$99" },
  ];
  return (
    <div className="flex  gap-5 items-center justify-center min-h-screen   text-2xl ">
      {products.map((item) => {
        return (
          <Link key={item.id} href={`/products/${item.id}`}>
            <div className="bg-gray-300 p-5 flex flex-col justify-center items-center rounded-3xl text-slate-600 backdrop-blur-2xl">
              <p className="text-lg font-semibold ">{item.id}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p className="text-lg font-semibold ">{item.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

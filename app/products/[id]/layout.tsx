export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      {children}
      <p className="text-2xl font-semibold p-5 bg-gray-300 text-black ">
        product Details
      </p>
    </div>
  );
}

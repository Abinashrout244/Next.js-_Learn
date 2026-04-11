// 1. Make the component async
export default async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // 2. Await the params
  const { slug = [] } = await params;

  if (slug.length === 2) {
    return (
      <h1 className="p-10 text-center mt-20 text-2xl font-semibold ">
        Viewing for docs Feature{" "}
        <span className="text-cyan-400 text-3xl">{slug[0]}</span> and concept{" "}
        <span className="text-slate-300 text-3xl">{slug[1]}</span>
      </h1>
    );
  } else if (slug.length === 1) {
    return (
      <h1 className="p-10 text-center mt-20 text-2xl font-semibold ">
        Viewing for docs Feature{" "}
        <span className="text-cyan-400 text-3xl">{slug[0]}</span>
      </h1>
    );
  }

  return (
    <h1 className="p-10 text-center mt-20 text-2xl font-semibold ">
      This is The Docs page
    </h1>
  );
}

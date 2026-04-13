import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ id: string; reviewId: string }>;
}) {
  const { id, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1 className="flex justify-center items-center min-h-screen text-4xl ">
      The ReviewId {reviewId} of the product id is {id}
    </h1>
  );
}

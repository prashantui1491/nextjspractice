import { notFound } from "next/navigation";

export default function ReviewsProducts({
    params,
  }: {
    params: {
      reviewId: string;
      productId: string;
    };
  }) {
    // Direct destructuring of params (no need to await)
    const { reviewId, productId } = params;

    if(parseInt(reviewId)> 1000){
      notFound()

    }
  
    return (
      <h2>
        Product ID: {productId} is review of Review ID: {reviewId}
      </h2>
    );
  }
  
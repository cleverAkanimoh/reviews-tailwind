import { useState } from "react";
import Reviews from "./Components/Reviews";
import data from "./Components/data";

export default function () {
  const [reviews, setReviews] = useState(data);
  return (
    <Reviews reviews={reviews} />
  )
}
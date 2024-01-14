interface RatingProps {
  value: number;
  maxValue: number;
}

export const Rating = ({ value, maxValue }: RatingProps) => {
  const stars = Array.from({ length: maxValue }, (_, index) => (
    <span key={index} className={index < value ? "filled" : ""}>
      <i className="fa-solid fa-star"></i>
    </span>
  ));

  return <div className="rating">{stars}</div>;
};

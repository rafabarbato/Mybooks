export const RatingsStar = ({ count }) => {
  return (
    <>
      <div className="rating">
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <input
              key={item}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400 w-5"
              checked={count == item + 1}
            />
          );
        })}
      </div>
    </>
  );
};
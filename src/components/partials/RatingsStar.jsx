import PropTypes from 'prop-types';

export const RatingsStar = ({ count, name }) => {
  return (
    <>
      <div className="rating">
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <input
              key={item}
              type="radio"
              name={name}
              className="mask mask-star-2 bg-orange-400 w-5"
              checked={count == item + 1}
            />
          );
        })}
      </div>
    </>
  );
};

RatingsStar.propTypes = {
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
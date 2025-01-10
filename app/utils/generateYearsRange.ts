const START_YEAR = 2015;

const generateYearsRange = (
  start = START_YEAR,
  end = new Date().getFullYear()
) => Array.from({ length: end - start + 1 }, (_, index) => end - index);

export default generateYearsRange;

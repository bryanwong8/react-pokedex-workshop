export const calculateStatTotal = stats => {
  let total = 0;

  stats.map(stat => {
    total += stat.base_stat;
  });

  return total;
};

export const uppercaseWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

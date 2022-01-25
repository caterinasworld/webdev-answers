const formatTime = (time) => {
  let result = 'Time elapsed: ';

  if (time.years === 1) {
    result += `${time.years} year, `;
  } else if (time.years > 1) {
    result += `${time.years} years, `;
  }

  if (time.months === 1) {
    result += `${time.months} month`;
  } else if (time.months > 1) {
    result += `${time.months} months`;
  }

  return result;
};

const calculateTime = (item1, item2) => {
  // Given a date, return the time of the person with that birthday, in years, months, and days
  const time = {};

  let date1 = new Date(item1);
  let date2 = new Date(item2);

  if (
    !(date1 instanceof Date) ||
    isNaN(date1) ||
    !(date2 instanceof Date) ||
    isNaN(date2)
  )
    return 'Invalid input provided.';

  // Calculate time in milliseconds
  const time_in_ms = date1.getTime() - date2.getTime();

  // The milliseconds in a day
  // day_ms = 1000 * 60 * 60 * 24 = 86400000
  const day_in_ms = 86400000;
  const time_in_days = Math.floor(time_in_ms / day_in_ms);

  // Calculate years
  time.years = Math.floor(time_in_days / 365);

  // Calculate months
  const months_in_days = time_in_days - time.years * 365;
  time.months = Math.floor(months_in_days / 31);

  const result = formatTime(time);

  return result;
};

// Date() formats
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.

const formatAge = (age) => {
  let result = 'Age: ';

  if (age.years === 1) {
    result += `${age.years} year, `;
  } else if (age.years > 1) {
    result += `${age.years} years, `;
  }

  if (age.months === 1) {
    result += `${age.months} month`;
  } else if (age.months > 1) {
    result += `${age.months} months`;
  }

  return result;
};

const calculateAge = (item1, item2) => {
  // Given a date, return the age of the person with that birthday, in years, months, and days
  const age = {};

  let date1 = new Date(item1);
  let date2 = new Date(item2);

  if (
    !(date1 instanceof Date) ||
    isNaN(date1) ||
    !(date2 instanceof Date) ||
    isNaN(date2)
  )
    return 'Invalid input provided.';

  // Calculate age in milliseconds
  const age_in_ms = date1.getTime() - date2.getTime();

  // The milliseconds in a day
  // day_ms = 1000 * 60 * 60 * 24 = 86400000
  const day_in_ms = 86400000;
  const age_in_days = Math.floor(age_in_ms / day_in_ms);

  // Calculate years
  age.years = Math.floor(age_in_days / 365);

  // Calculate months
  const months_in_days = age_in_days - age.years * 365;
  age.months = Math.floor(months_in_days / 31);

  const result = formatAge(age);

  return result;
};

// Date() formats
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateAge(1635176171332, 'May 1, 1995'));
// Age: 26 years, 5 months
console.log(calculateAge(1635176171332, '1975-8-11'));
// Age: 46 years, 2 months
console.log(calculateAge(1635176171332, 2021, 5, 23));
// Age: 4 months
console.log(calculateAge(1635176171332, 1031814000000));
// Age: 19 years, 1 month
console.log(calculateAge(1635176171332, 'birthdate'));
// Error: Invalid input provided.

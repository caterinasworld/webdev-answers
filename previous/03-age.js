const formatAge = (age) => {
  let result = 'Age: ';

  if (age.years === 1) {
    result += `${age.years} year, `;
  } else if (age.years > 1) {
    result += `${age.years} years, `;
  }

  if (age.months === 1) {
    result += `${age.months} month, `;
  } else if (age.months > 1) {
    result += `${age.months} months, `;
  }

  if (age.days === 1) {
    result += `${age.days} day.`;
  } else if (age.days > 1) {
    result += `${age.days} days.`;
  }

  return result;
};

const calculateAge = (birthday) => {
  // Given a date, return the age of the person with that birthday, in years, months, and days
  const age = {};

  if (!(birthday instanceof Date)) return 'Invalid input provided.';

  // Calculate age in milliseconds
  const age_in_ms = Date.now() - birthday.getTime();

  // The milliseconds in a day
  // day_ms = 1000 * 60 * 60 * 24 = 86400000
  const day_in_ms = 86400000;
  const age_in_days = Math.floor(age_in_ms / day_in_ms);

  // Calculate years
  age.years = Math.floor(age_in_days / 365);

  // Calculate months
  const months_in_days = age_in_days - age.years * 365;
  age.months = Math.floor(months_in_days / 31);

  // Calculate days
  age.days = months_in_days - age.months * 31;

  const result = formatAge(age);

  return result;
};

// Date() formats
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2019, 7, 8)
// new Date(2021, 5, 23)
// new Date(628021800000)

// console.log(calculateAge(birthday));
console.log(calculateAge(new Date('December 1, 1995')));
// Age: 25 years, 10 months, 24 days.
// Age: 25 years, 10 months, 25 days.
console.log(calculateAge(new Date('2008-1-11')));
// Age: 13 years, 9 months, 14 days.
// Age: 13 years, 9 months, 12 days.
console.log(calculateAge(new Date(2019, 7, 8)));
// Age: 2 years, 2 months, 17 days.
// Age: 2 years, 2 months, 17 days.
console.log(calculateAge(new Date(1960, 4, 26)));
console.log(calculateAge(new Date(2021, 5, 23)));
console.log(calculateAge(new Date(628021800000)));
console.log(calculateAge('birthday'));
// Age: 25 years, 4 months, 3 days
// Age: 15 years, 1 day
// Age: 4 months, 10 days
// Age: 1 month, 1 day

// Sample error messages
// console.log(calculateAge('birthday'));
// Error: Invalid input provided.
// Error: Could not calculate age from the information provided.

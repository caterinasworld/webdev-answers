let form = document.querySelector('form');

form.onsubmit = (event) => {
  // Prevent default behavior for the onclick event
  event.preventDefault();

  let submission = getInputForm();

  // Destructure fields from submission object
  let { name, email, newsletter, date } = submission;

  if (name || email) {
    console.group('========= Form Submission ========= ');
    console.log('Username:', name);
    console.log('Email:', email);
    console.log('Newsletter:', newsletter);
    console.log('Date:', date);
    console.groupEnd();
  } else {
    // Console warning if the name and email fields were not submitted
    console.warn('You must enter a name or email to submit this form');
  }
};

let getInputForm = () => {
  let submission = {};

  // console.log(form.elements);

  // Query the name, email, registration, and class section fields
  submission.name = form.elements.name.value;
  submission.email = form.elements.email.value;
  submission.newsletter = form.elements.newsletter.value || 'no submission';
  submission.date = form.elements.date.value || 'no submission';

  // console.table(submission);

  return submission;
};

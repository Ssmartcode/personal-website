// input validators
const checkLength = (elem, length, message) => {
  if (elem.value.length >= length) return true;
  return { elem, message };
};

// add message under input if input is invalid
const addMessage = (elem, message) => {
  elem.classList.add("input-invalid");
  elem.nextElementSibling.innerText = message;
};

// check if all inputs are valid
const validateForm = () => {
  const inputs = [
    checkLength(
      document.querySelector(".name input"),
      3,
      "Name should be at least 3 characters long"
    ),
    checkLength(
      document.querySelector(".subject input"),
      5,
      "Subject should be at least 5 characters long"
    ),

    checkLength(
      document.querySelector(".message textarea"),
      10,
      "Message should be at least 10 characters long"
    ),
  ];

  const invalidInputs = inputs.filter((input) => input !== true);

  if (invalidInputs.length === 0) return true;

  invalidInputs.forEach((input) => addMessage(input.elem, input.message));
};

export default validateForm;

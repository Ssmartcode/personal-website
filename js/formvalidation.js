const nameInput = document.querySelector(".name");
const subjectInput = document.querySelector(".subject");
const messageInput = document.querySelector(".message");
const checkLength = (elem, length) => {
  if (!elem.value) return;
  if (elem.value.length < length) return;
  return true;
};

const validateForm = () => {
  if (
    checkLength(nameInput, 2) &&
    checkLength(subjectInput, 3) &&
    checkLength(messageInput, 10)
  )
    return true;
  return false;
};
export default validateForm;

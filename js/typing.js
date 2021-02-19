// TYPING EFFECT
const pause = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};
async function type(
  typeEffectParagraph,
  index = 0,
  text = "Hello world. I am Andrew, full stack web developer."
) {
  typeEffectParagraph.textContent += text[index++];
  if (index == text.length) {
    index = 0;
    await pause(1);
    typeEffectParagraph.textContent = "";
  }
  setTimeout(() => type(typeEffectParagraph, index), 150);
}
export default type;

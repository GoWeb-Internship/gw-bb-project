export const getVisibleText = (text = '', limit = 500, skip = false) => {
  if (text.length <= limit || skip) {
    return text;
  }
  const words = text.split(' ');

  let characters = -1;
  let id = 0;

  while (characters <= limit) {
    characters += words[id].length + 1;
    id += 1;
  }

  return words.slice(0, id - 1).join(' ');
};

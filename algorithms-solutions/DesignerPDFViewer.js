/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let maxHeight = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterIndex = alphabet.indexOf(letter);
    if (maxHeight < h[letterIndex]) {
      maxHeight = h[letterIndex];
    }
  }
  const area = maxHeight * word.length;
  return area;
}

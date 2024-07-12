function analyzeSentence(sentence) {
  // Initialize counters
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Define vowels
  const vowels = "aeiouAEIOU";

  // Read character by character
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    length++; // Increment length for each character

    if (vowels.includes(char)) {
      vowelCount++; // Increment vowel count if char is a vowel
    }
  }

  // Calculate number of words (spaces + 1)
  // Since the last character is a period, we should ignore it in the word count calculation
  wordCount = sentence.trim().split(/\s+/).length;

  return {
    length,
    wordCount,
    vowelCount,
  };
}

// Example usage:
const sentence = "Hello world.";
const result = analyzeSentence(sentence);
console.log("Length:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);

export const startTypewriterEffect = () => {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');

  // Make the first line visible and apply the typewriter effect
  line1.classList.add('visible'); // Add the 'visible' class to show the paragraph
  line1.style.animation = 'typing 3s steps(59, end)'; // Typewriter effect

  // Start the second line after the first finishes typing
  setTimeout(() => {
    line2.classList.add('visible'); // Add the 'visible' class to show the second paragraph
    line2.style.animation = 'typing 3s steps(63, end)';
  }, 3000); // Match timing to line 1's typing duration
};

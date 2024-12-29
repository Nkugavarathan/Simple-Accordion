// Select all questions
const questions = document.querySelectorAll(".question");

// Add event listeners to each question
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const container = question.parentElement;

    // Toggle active state
    container.classList.toggle("active");

    // Close other active containers
    questions.forEach((q) => {
      const otherContainer = q.parentElement;
      if (
        otherContainer !== container &&
        otherContainer.classList.contains("active")
      ) {
        otherContainer.classList.remove("active");
      }
    });
  });
});

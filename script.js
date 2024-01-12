let currentSection = 1;

function nextSection() {
  const totalSections = document.querySelectorAll('.tutorial-section').length;

  if (currentSection < totalSections) {
    currentSection++;
    showSection();
  }
}

function prevSection() {
  if (currentSection > 1) {
    currentSection--;
    showSection();
  }
}

function showSection() {
  document.querySelectorAll('.tutorial-section').forEach(section => {
    section.style.display = 'none';
  })

  const currentSectionElement = document.getElementById(`section-${currentSection}`);
  currentSectionElement.style.display = 'block';

  updateButtons();
}

function updateButtons() {
  const prevButton = document.querySelector('.tutorial-section button:first-of-type');
  const nextButton = document.querySelector('.tutorial-section button:last-of-type');

  prevButton.disabled = currentSection === 1;
  nextButton.disabled = currentSection === document.querySelectorAll('.tutorial-section').length;
}

document.addEventListener('DOMContentLoaded', function () {
  showSection();
});




  


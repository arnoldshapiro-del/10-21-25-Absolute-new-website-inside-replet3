// Personality Disorder Questionnaire (PDQ-4) Screening Implementation
const questions = [
  "I have always been a loner",
  "I often feel empty inside",
  "I have trouble making decisions",
  "I worry a lot about being abandoned or rejected",
  "My relationships are very intense and unstable",
  "I often feel like I don't know who I really am",
  "I have trouble controlling my anger",
  "I often feel suspicious of other people",
  "I have a hard time trusting people",
  "I often feel like people are out to get me",
  "I need to be the center of attention",
  "I think I'm better than most people",
  "I have trouble feeling empathy for others",
  "I often manipulate others to get what I want",
  "I avoid social situations because I'm afraid of being criticized"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please indicate whether each statement is true or false for you:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="1" style="margin-right:8px;">
        True
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="0" style="margin-right:8px;">
        False
      </label>
    </div>`;
  });
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      score += parseInt(selected.value);
      answered++;
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  let level, color, recommendation;
  
  if (score <= 3) {
    level = "Low likelihood of personality disorder";
    color = "#10b981";
    recommendation = "Your responses suggest low likelihood of personality disorder traits. Continue healthy relationship patterns.";
  } else if (score <= 6) {
    level = "Some personality disorder traits";
    color = "#f59e0b";
    recommendation = "Your responses suggest some personality traits that may benefit from discussion with Dr. Shapiro.";
  } else {
    level = "Significant personality disorder traits";
    color = "#ef4444";
    recommendation = "Your responses suggest significant personality traits. Recommend comprehensive evaluation with Dr. Shapiro.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/15</strong></p>
      <p><strong>Assessment: ${level}</strong></p>
      <p>${recommendation}</p>
      <div style="margin-top:16px;">
        <a href="tel:859-341-7453" class="cta">Call Dr. Shapiro: (859) 341-7453</a>
        <a href="mailto:arnold.shapiro@gmail.com" class="cta orange">Email for Consultation</a>
      </div>
    </div>
    <div class="small" style="margin-top:16px;">
      <p><strong>Disclaimer:</strong> This screening tool is for educational purposes only and does not constitute a medical diagnosis. Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  renderForm();
  document.getElementById('go').addEventListener('click', calculateResults);
});
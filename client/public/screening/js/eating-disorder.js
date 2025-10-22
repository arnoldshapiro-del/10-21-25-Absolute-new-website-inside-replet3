// SCOFF Eating Disorder Screening Implementation
const questions = [
  "Do you make yourself Sick because you feel uncomfortably full?",
  "Do you worry you have lost Control over how much you eat?",
  "Have you recently lost more than One stone (14 pounds) in a 3-month period?",
  "Do you believe yourself to be Fat when others say you are too thin?",
  "Would you say that Food dominates your life?"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please answer the following questions honestly:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="1" style="margin-right:8px;">
        Yes
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="0" style="margin-right:8px;">
        No
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
  
  if (score >= 2) {
    level = "Positive screen for eating disorder";
    color = "#ef4444";
    recommendation = "Your responses suggest possible eating disorder symptoms. Strongly recommend evaluation with Dr. Shapiro for comprehensive assessment and treatment options.";
  } else {
    level = "Low likelihood of eating disorder";
    color = "#10b981";
    recommendation = "Your responses suggest a low likelihood of eating disorder. Continue maintaining healthy eating habits and consult Dr. Shapiro if concerns develop.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/5</strong></p>
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
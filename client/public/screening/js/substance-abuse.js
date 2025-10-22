// CAGE-AID Substance Abuse Screening Implementation
const questions = [
  "Have you ever felt you ought to Cut down on your drinking or drug use?",
  "Have people Annoyed you by criticizing your drinking or drug use?",
  "Have you felt bad or Guilty about your drinking or drug use?",
  "Have you ever had a drink or used drugs first thing in the morning to steady your nerves or get rid of a hangover (Eye-opener)?"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please answer the following questions about your alcohol and drug use:</strong></p>';
  
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
    level = "Positive screen for substance use disorder";
    color = "#ef4444";
    recommendation = "Your responses suggest possible substance use concerns. Strongly recommend evaluation with Dr. Shapiro for assessment and treatment options.";
  } else if (score === 1) {
    level = "Some substance use concerns";
    color = "#f59e0b";
    recommendation = "Your responses suggest some substance use concerns. Consider discussing your use patterns with Dr. Shapiro.";
  } else {
    level = "Low likelihood of substance use disorder";
    color = "#10b981";
    recommendation = "Your responses suggest low risk for substance use disorder. Continue practicing healthy habits.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/4</strong></p>
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
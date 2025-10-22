// GAD-7 Anxiety Screening Implementation
const questions = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things", 
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen"
];

const options = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Over the last 2 weeks, how often have you been bothered by the following problems?</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>`;
    
    options.forEach((option, optIndex) => {
      html += `<label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="${optIndex}" style="margin-right:8px;">
        ${option}
      </label>`;
    });
    
    html += '</div>';
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
  
  if (score <= 4) {
    level = "Minimal anxiety";
    color = "#10b981";
    recommendation = "Your responses suggest minimal anxiety symptoms. Continue practicing stress management and self-care.";
  } else if (score <= 9) {
    level = "Mild anxiety";
    color = "#f59e0b";
    recommendation = "Your responses suggest mild anxiety symptoms. Consider discussing anxiety management strategies with Dr. Shapiro.";
  } else if (score <= 14) {
    level = "Moderate anxiety";
    color = "#f97316";
    recommendation = "Your responses suggest moderate anxiety symptoms. Recommend evaluation with Dr. Shapiro for treatment options.";
  } else {
    level = "Severe anxiety";
    color = "#ef4444";
    recommendation = "Your responses suggest severe anxiety symptoms. Strongly recommend immediate evaluation with Dr. Shapiro for comprehensive treatment.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/21</strong></p>
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
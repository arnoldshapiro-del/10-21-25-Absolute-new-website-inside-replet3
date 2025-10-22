// PHQ-9 Depression Screening Implementation
const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless", 
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed, or being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way"
];

const options = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Over the last 2 weeks, how often have you been bothered by any of the following problems?</strong></p>';
  
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
  let suicidalThoughts = false;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const value = parseInt(selected.value);
      score += value;
      answered++;
      
      // Check for suicidal thoughts (question 9)
      if (i === 8 && value > 0) {
        suicidalThoughts = true;
      }
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  let level, color, recommendation;
  
  if (score <= 4) {
    level = "Minimal depression";
    color = "#10b981";
    recommendation = "Your responses suggest minimal depression symptoms. Continue monitoring your mood and practice self-care.";
  } else if (score <= 9) {
    level = "Mild depression";
    color = "#f59e0b";
    recommendation = "Your responses suggest mild depression symptoms. Consider discussing your mood with Dr. Shapiro.";
  } else if (score <= 14) {
    level = "Moderate depression";
    color = "#f97316";
    recommendation = "Your responses suggest moderate depression symptoms. Recommend evaluation with Dr. Shapiro for treatment options.";
  } else if (score <= 19) {
    level = "Moderately severe depression";
    color = "#ef4444";
    recommendation = "Your responses suggest moderately severe depression. Strongly recommend immediate evaluation with Dr. Shapiro.";
  } else {
    level = "Severe depression";
    color = "#dc2626";
    recommendation = "Your responses suggest severe depression. Please contact Dr. Shapiro immediately for urgent evaluation and treatment.";
  }
  
  let crisisAlert = '';
  if (suicidalThoughts) {
    crisisAlert = `
      <div class="banner" style="background:#fee2e2;border:2px solid #fecaca;margin-bottom:16px;">
        <strong>⚠️ CRISIS ALERT:</strong> You indicated thoughts of self-harm. Please reach out for immediate help:
        <br><strong>Crisis Lifeline: Call or Text 988</strong>
        <br><strong>Emergency: Call 911</strong>
        <br><strong>Dr. Shapiro: (859) 341-7453</strong>
      </div>
    `;
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    ${crisisAlert}
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/27</strong></p>
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
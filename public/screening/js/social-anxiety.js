// Social Phobia Inventory (SPIN) Implementation
const questions = [
  "I am afraid of people in authority",
  "I am bothered by blushing in front of people",
  "Parties and social events scare me",
  "I avoid talking to people I don't know",
  "Being criticized scares me a lot",
  "I avoid doing things or speaking to people for fear of embarrassment",
  "Sweating in front of people causes me distress",
  "I avoid going to parties",
  "I avoid activities in which I am the center of attention",
  "Talking to strangers scares me",
  "I avoid having to give speeches",
  "I would do anything to avoid being criticized",
  "Heart palpitations bother me when I am around people",
  "I am afraid of doing things when people might be watching",
  "Being embarrassed or looking stupid are among my worst fears",
  "I avoid speaking to anyone in authority",
  "Trembling or shaking in front of others is distressing to me"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please indicate how much the following problems have bothered you during the past week:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="0" style="margin-right:8px;">
        Not at all
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="1" style="margin-right:8px;">
        A little bit
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="2" style="margin-right:8px;">
        Moderately
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="3" style="margin-right:8px;">
        Quite a bit
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="4" style="margin-right:8px;">
        Extremely
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
  
  if (score <= 20) {
    level = "Minimal social anxiety";
    color = "#10b981";
    recommendation = "Your responses suggest minimal social anxiety symptoms. Continue practicing social skills and self-confidence building.";
  } else if (score <= 30) {
    level = "Mild social anxiety";
    color = "#f59e0b";
    recommendation = "Your responses suggest mild social anxiety. Consider discussing social situations with Dr. Shapiro.";
  } else if (score <= 40) {
    level = "Moderate social anxiety";
    color = "#f97316";
    recommendation = "Your responses suggest moderate social anxiety. Recommend evaluation with Dr. Shapiro for treatment options.";
  } else {
    level = "Severe social anxiety";
    color = "#ef4444";
    recommendation = "Your responses suggest severe social anxiety. Strongly recommend immediate evaluation with Dr. Shapiro.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/68</strong></p>
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
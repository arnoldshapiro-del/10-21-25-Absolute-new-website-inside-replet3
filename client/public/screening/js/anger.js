// State-Trait Anger Expression Inventory (STAXI-2) Screening Implementation
const questions = [
  "I am quick tempered",
  "I have a fiery temper",
  "I am a hotheaded person",
  "I fly off the handle",
  "When I get mad, I say nasty things",
  "I make sarcastic comments to others",
  "When I get frustrated, I feel like hitting someone",
  "I feel infuriated when I do a good job and get a poor evaluation",
  "I feel annoyed when I am not given recognition for doing good work",
  "I get angry when I'm slowed down by others' mistakes"
];

const options = ["Almost Never", "Sometimes", "Often", "Almost Always"];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please indicate how you generally feel or react in the situations described:</strong></p>';
  
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
  
  if (score <= 10) {
    level = "Low anger levels";
    color = "#10b981";
    recommendation = "Your responses suggest healthy anger management. Continue practicing positive coping strategies.";
  } else if (score <= 20) {
    level = "Moderate anger levels";
    color = "#f59e0b";
    recommendation = "Your responses suggest some anger management concerns. Consider discussing anger management techniques with Dr. Shapiro.";
  } else {
    level = "High anger levels";
    color = "#ef4444";
    recommendation = "Your responses suggest significant anger management issues. Strongly recommend evaluation with Dr. Shapiro for anger management treatment.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/30</strong></p>
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
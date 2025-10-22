// Insomnia Severity Index (ISI) Implementation
const questions = [
  {
    text: "Difficulty falling asleep",
    options: ["None", "Mild", "Moderate", "Severe", "Very Severe"]
  },
  {
    text: "Difficulty staying asleep",
    options: ["None", "Mild", "Moderate", "Severe", "Very Severe"]
  },
  {
    text: "Problem waking up too early",
    options: ["None", "Mild", "Moderate", "Severe", "Very Severe"]
  },
  {
    text: "How satisfied/dissatisfied are you with your current sleep pattern?",
    options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
  },
  {
    text: "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
    options: ["Not at all noticeable", "A little", "Somewhat", "Much", "Very much noticeable"]
  },
  {
    text: "How worried/distressed are you about your current sleep problem?",
    options: ["Not at all worried", "A little", "Somewhat", "Much", "Very much worried"]
  },
  {
    text: "To what extent do you consider your sleep problem to interfere with your daily functioning?",
    options: ["Not at all interfering", "A little", "Somewhat", "Much", "Very much interfering"]
  }
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please rate the current (i.e., last 2 weeks) severity of your insomnia problem(s):</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question.text}</strong></p>`;
    
    question.options.forEach((option, optIndex) => {
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
  
  if (score <= 7) {
    level = "No clinically significant insomnia";
    color = "#10b981";
    recommendation = "Your responses suggest minimal sleep difficulties. Continue practicing good sleep hygiene.";
  } else if (score <= 14) {
    level = "Subthreshold insomnia";
    color = "#f59e0b";
    recommendation = "Your responses suggest mild sleep difficulties. Consider discussing sleep habits with Dr. Shapiro.";
  } else if (score <= 21) {
    level = "Clinical insomnia (moderate severity)";
    color = "#f97316";
    recommendation = "Your responses suggest moderate insomnia. Recommend evaluation with Dr. Shapiro for treatment options.";
  } else {
    level = "Clinical insomnia (severe)";
    color = "#ef4444";
    recommendation = "Your responses suggest severe insomnia. Strongly recommend immediate evaluation with Dr. Shapiro.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/28</strong></p>
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
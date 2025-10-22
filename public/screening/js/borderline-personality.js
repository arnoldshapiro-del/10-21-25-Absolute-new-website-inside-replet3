// McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD) Implementation
const questions = [
  "Have you been extremely moody?",
  "Have you felt very angry a lot of the time? How about often acted in ways that other people thought were dramatic, erratic, or unpredictable?",
  "Have you chronically felt empty?",
  "Have you often not known who you are or what you believe in?",
  "Have you been very different with different people or in different situations, so that you sometimes don't know who you really are?",
  "Have you done things impulsively that got you into trouble, like spending sprees, sex, drinking, shoplifting, or eating binges?",
  "Have you tried to hurt or kill yourself or threatened to do so?",
  "Have you had at least two problems with things like feeling very suspicious, feeling unreal, or having unusual experiences?",
  "Have your relationships been very intense, unstable, and conflicted?",
  "Have you made desperate efforts to avoid feeling abandoned or being abandoned (like repeatedly called someone, begged them not to leave, or clung to them physically)?"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please answer the following questions about your experiences:</strong></p>';
  
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
  let suicidalThoughts = false;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const value = parseInt(selected.value);
      score += value;
      answered++;
      
      // Check for suicidal thoughts (question 7)
      if (i === 6 && value > 0) {
        suicidalThoughts = true;
      }
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  let level, color, recommendation;
  
  if (score <= 6) {
    level = "Low likelihood of borderline personality disorder";
    color = "#10b981";
    recommendation = "Your responses suggest low likelihood of borderline personality traits. Continue healthy relationship patterns.";
  } else {
    level = "Possible borderline personality disorder";
    color = "#ef4444";
    recommendation = "Your responses suggest possible borderline personality traits. Strongly recommend evaluation with Dr. Shapiro for comprehensive assessment.";
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
      <p><strong>Total Score: ${score}/10</strong></p>
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
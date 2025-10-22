// PTSD Checklist for DSM-5 (PCL-5) Implementation
const questions = [
  "Repeated, disturbing, and unwanted memories of the stressful experience",
  "Repeated, disturbing dreams of the stressful experience",
  "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)",
  "Feeling very upset when something reminded you of the stressful experience",
  "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)",
  "Avoiding memories, thoughts, or feelings related to the stressful experience",
  "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)",
  "Trouble remembering important parts of the stressful experience",
  "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)",
  "Blaming yourself or someone else for the stressful experience or what happened after it",
  "Having strong negative feelings such as fear, horror, anger, guilt, or shame",
  "Loss of interest in activities that you used to enjoy",
  "Feeling distant or cut off from other people",
  "Trouble experiencing positive feelings (for example, being unable to feel happiness, satisfaction, love, joy, or hope)",
  "Irritable behavior, angry outbursts, or acting aggressively",
  "Taking too many risks or doing things that could cause you harm",
  "Being super alert or watchful or on guard",
  "Feeling jumpy or easily startled",
  "Having difficulty concentrating",
  "Trouble falling or staying asleep"
];

const options = ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>In the past month, how much were you bothered by:</strong></p>';
  
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
  
  if (score < 33) {
    level = "Low likelihood of PTSD";
    color = "#10b981";
    recommendation = "Your responses suggest a low likelihood of PTSD. Continue monitoring your symptoms and practice self-care strategies.";
  } else if (score < 45) {
    level = "Possible PTSD symptoms";
    color = "#f59e0b";
    recommendation = "Your responses suggest possible PTSD symptoms. Consider discussing your experiences with Dr. Shapiro for further evaluation.";
  } else {
    level = "High likelihood of PTSD";
    color = "#ef4444";
    recommendation = "Your responses suggest significant PTSD symptoms. Strongly recommend evaluation with Dr. Shapiro for comprehensive assessment and treatment options.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/80</strong></p>
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
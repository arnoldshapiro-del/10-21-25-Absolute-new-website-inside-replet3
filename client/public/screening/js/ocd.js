// Yale-Brown Obsessive Compulsive Scale (Y-BOCS) Screening Implementation
const obsessionQuestions = [
  "Time occupied by obsessive thoughts: How much of your time is occupied by obsessive thoughts?",
  "Interference due to obsessive thoughts: How much do your obsessive thoughts interfere with your social or work functioning?",
  "Distress associated with obsessive thoughts: How much distress do your obsessive thoughts cause you?",
  "Resistance against obsessions: How much of an effort do you make to resist the obsessive thoughts?",
  "Degree of control over obsessive thoughts: How much control do you have over your obsessive thoughts?"
];

const compulsionQuestions = [
  "Time spent performing compulsive behaviors: How much time do you spend performing compulsive behaviors?",
  "Interference due to compulsive behaviors: How much do your compulsive behaviors interfere with your social or work functioning?",
  "Distress associated with compulsive behavior: How would you feel if prevented from performing your compulsions?",
  "Resistance against compulsions: How much of an effort do you make to resist the compulsions?",
  "Degree of control over compulsive behavior: How strong is the drive to perform the compulsive behavior?"
];

const options = [
  "None",
  "Mild (less than 1 hr/day or occasional interference)",
  "Moderate (1-3 hrs/day or frequent interference)",
  "Severe (greater than 3 and up to 8 hrs/day or very frequent interference)",
  "Extreme (greater than 8 hrs/day or near constant interference)"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please rate each item based on your experiences during the past week:</strong></p>';
  
  html += '<h2>Obsessions</h2>';
  obsessionQuestions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>`;
    
    options.forEach((option, optIndex) => {
      html += `<label style="display:block;margin:8px 0;">
        <input type="radio" name="obs${index}" value="${optIndex}" style="margin-right:8px;">
        ${optIndex}: ${option}
      </label>`;
    });
    
    html += '</div>';
  });
  
  html += '<h2>Compulsions</h2>';
  compulsionQuestions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 6}. ${question}</strong></p>`;
    
    options.forEach((option, optIndex) => {
      html += `<label style="display:block;margin:8px 0;">
        <input type="radio" name="comp${index}" value="${optIndex}" style="margin-right:8px;">
        ${optIndex}: ${option}
      </label>`;
    });
    
    html += '</div>';
  });
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let obsessionScore = 0;
  let compulsionScore = 0;
  let answered = 0;
  
  // Calculate obsession score
  for (let i = 0; i < obsessionQuestions.length; i++) {
    const selected = document.querySelector(`input[name="obs${i}"]:checked`);
    if (selected) {
      obsessionScore += parseInt(selected.value);
      answered++;
    }
  }
  
  // Calculate compulsion score
  for (let i = 0; i < compulsionQuestions.length; i++) {
    const selected = document.querySelector(`input[name="comp${i}"]:checked`);
    if (selected) {
      compulsionScore += parseInt(selected.value);
      answered++;
    }
  }
  
  if (answered < 10) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  const totalScore = obsessionScore + compulsionScore;
  let level, color, recommendation;
  
  if (totalScore <= 7) {
    level = "Subclinical OCD symptoms";
    color = "#10b981";
    recommendation = "Your responses suggest minimal OCD symptoms. Continue monitoring and practice stress management techniques.";
  } else if (totalScore <= 15) {
    level = "Mild OCD symptoms";
    color = "#f59e0b";
    recommendation = "Your responses suggest mild OCD symptoms. Consider discussing these experiences with Dr. Shapiro.";
  } else if (totalScore <= 23) {
    level = "Moderate OCD symptoms";
    color = "#f97316";
    recommendation = "Your responses suggest moderate OCD symptoms. Recommend evaluation with Dr. Shapiro for treatment options.";
  } else if (totalScore <= 31) {
    level = "Severe OCD symptoms";
    color = "#ef4444";
    recommendation = "Your responses suggest severe OCD symptoms. Strongly recommend immediate evaluation with Dr. Shapiro.";
  } else {
    level = "Extreme OCD symptoms";
    color = "#dc2626";
    recommendation = "Your responses suggest extreme OCD symptoms. Please contact Dr. Shapiro immediately for urgent evaluation and treatment.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Obsession Score: ${obsessionScore}/20</strong></p>
      <p><strong>Compulsion Score: ${compulsionScore}/20</strong></p>
      <p><strong>Total Score: ${totalScore}/40</strong></p>
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
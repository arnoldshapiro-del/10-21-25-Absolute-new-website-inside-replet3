// Panic Disorder Severity Scale (PDSS) Implementation
const questions = [
  "How many panic and limited symptom attacks did you have during the week?",
  "If you had any panic attacks during the past week, how distressing (uncomfortable, frightening) were they while they were happening?",
  "During the past week, how much have you worried or felt anxious about when your next panic attack would occur or about fears related to the attacks?",
  "During the past week, were there any places or situations (e.g., public transportation, movie theaters, crowds, bridges, tunnels, shopping malls, being alone) you avoided, or felt afraid of (uncomfortable in, wanted to avoid or leave), because of fear of having a panic attack?",
  "During the past week, were there any activities (e.g., physical exertion, sexual relations, taking a hot shower or bath, drinking coffee, watching an exciting or scary movie) that you avoided, or felt afraid of (uncomfortable doing, wanted to avoid or stop), because they caused physical sensations like those you feel during panic attacks?",
  "During the past week, how much did the above symptoms altogether (panic and limited symptom attacks, worry about attacks, and phobic avoidance of situations and activities) interfere with your ability to work or carry out your responsibilities at home?",
  "During the past week, how much did these symptoms interfere with your social life and relationships?"
];

const options = [
  ["0", "1", "2", "3", "4 or more"],
  ["Not at all distressing", "Mildly distressing", "Moderately distressing", "Markedly distressing", "Extremely distressing"],
  ["Not at all", "Occasionally or only mildly", "Frequently or moderately", "Very frequently or to a very disturbing degree", "Nearly constantly and to a disabling extent"],
  ["None", "Avoided 1 situation", "Avoided 2-3 situations", "Avoided 4-6 situations", "Avoided 7 or more situations"],
  ["None", "Avoided 1 activity", "Avoided 2-3 activities", "Avoided 4-6 activities", "Avoided 7 or more activities"],
  ["None", "Slightly", "Moderately", "Markedly", "Extremely"],
  ["None", "Slightly", "Moderately", "Markedly", "Extremely"]
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please answer the following questions about panic attacks and related symptoms during the past week:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>`;
    
    options[index].forEach((option, optIndex) => {
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
    level = "Mild panic disorder symptoms";
    color = "#10b981";
    recommendation = "Your responses suggest mild panic symptoms. Continue monitoring and practice relaxation techniques.";
  } else if (score <= 14) {
    level = "Moderate panic disorder symptoms";
    color = "#f59e0b";
    recommendation = "Your responses suggest moderate panic symptoms. Consider discussing with Dr. Shapiro for treatment options.";
  } else {
    level = "Severe panic disorder symptoms";
    color = "#ef4444";
    recommendation = "Your responses suggest severe panic symptoms. Strongly recommend immediate evaluation with Dr. Shapiro.";
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
// Autism Spectrum Quotient (AQ-10) Implementation
const questions = [
  "I often notice small sounds when others do not",
  "I usually concentrate more on the whole picture, rather than the small details",
  "I find it easy to do more than one thing at once",
  "If there is an interruption, I can switch back to what I was doing very quickly",
  "I find it easy to 'read between the lines' when someone is talking to me",
  "I know how to tell if someone listening to me is getting bored",
  "When I'm reading a story I find it difficult to work out the characters' intentions",
  "I like to collect information about categories of things (types of car, types of bird, types of train, types of plant, etc)",
  "I find it easy to work out what someone is thinking or feeling just by looking at their face",
  "I find it difficult to work out people's intentions"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>For each question, please select the response that best describes you:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question}</strong></p>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="1" style="margin-right:8px;">
        Definitely agree
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="1" style="margin-right:8px;">
        Slightly agree
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="0" style="margin-right:8px;">
        Slightly disagree
      </label>
      <label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="0" style="margin-right:8px;">
        Definitely disagree
      </label>
    </div>`;
  });
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  
  // Reverse scoring for questions 2, 3, 4, 5, 6, 9
  const reverseScored = [1, 2, 3, 4, 5, 8];
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      let value = parseInt(selected.value);
      if (reverseScored.includes(i)) {
        value = 1 - value; // Reverse the score
      }
      score += value;
      answered++;
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  let level, color, recommendation;
  
  if (score <= 3) {
    level = "Low likelihood of autism spectrum traits";
    color = "#10b981";
    recommendation = "Your responses suggest few autism spectrum traits. Continue monitoring if you have concerns.";
  } else if (score <= 6) {
    level = "Some autism spectrum traits present";
    color = "#f59e0b";
    recommendation = "Your responses suggest some autism spectrum traits. Consider discussing with Dr. Shapiro for further evaluation.";
  } else {
    level = "Significant autism spectrum traits";
    color = "#ef4444";
    recommendation = "Your responses suggest significant autism spectrum traits. Recommend comprehensive evaluation with Dr. Shapiro.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
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
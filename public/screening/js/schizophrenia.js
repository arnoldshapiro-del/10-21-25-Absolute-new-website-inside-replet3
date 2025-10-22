// PRIME Screen for Psychosis Risk Implementation
const questions = [
  "I think that I have felt that there are odd or unusual things going on that I can't explain",
  "I think that I might be able to predict the future",
  "I may have felt that there could possibly be something interrupting or controlling my thoughts, feelings, or actions",
  "I have had the experience of doing something differently because of my superstitions",
  "I think that I may get confused at times whether something I experienced was real or imaginary",
  "I have thought that it might be possible that other people can read my mind, or that I can read other's minds",
  "I wonder if people may be planning to hurt me or even may be about to hurt me",
  "I believe that I have special natural or supernatural gifts beyond those of ordinary people",
  "I think I might feel like my mind is 'playing tricks' on me",
  "I have had the experience of hearing faint or clear sounds of people or a person mumbling or talking when there is no one near me",
  "I think that I may have felt that there are odd or unusual things going on that I can't explain",
  "I think that I have had experiences that are strange or unusual"
];

const options = [
  "Definitely disagree",
  "Somewhat disagree", 
  "Somewhat agree",
  "Definitely agree"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please indicate how much you agree or disagree with each statement:</strong></p>';
  
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
      const value = parseInt(selected.value);
      // Score 1 point for "somewhat agree" or "definitely agree"
      if (value >= 2) {
        score += 1;
      }
      answered++;
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  let level, color, recommendation;
  
  if (score <= 2) {
    level = "Low risk for psychosis";
    color = "#10b981";
    recommendation = "Your responses suggest low risk for psychotic symptoms. Continue monitoring your mental health.";
  } else if (score <= 5) {
    level = "Moderate risk for psychosis";
    color = "#f59e0b";
    recommendation = "Your responses suggest some unusual experiences. Consider discussing with Dr. Shapiro for evaluation.";
  } else {
    level = "High risk for psychosis";
    color = "#ef4444";
    recommendation = "Your responses suggest significant unusual experiences. Strongly recommend immediate evaluation with Dr. Shapiro.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/12</strong></p>
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
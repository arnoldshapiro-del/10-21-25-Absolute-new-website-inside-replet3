// ADHD Self-Report Scale (ASRS-18) Implementation
const questions = [
  "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
  "How often do you have difficulty getting things in order when you have to do a task that requires organization?", 
  "How often do you have problems remembering appointments or obligations?",
  "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
  "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
  "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
  "How often do you make careless mistakes when you have to work on a boring or difficult project?",
  "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
  "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
  "How often do you misplace or have difficulty finding things at home or at work?",
  "How often are you distracted by activity or noise around you?",
  "How often do you leave your seat in meetings or other situations where you are expected to remain seated?",
  "How often do you feel restless or fidgety?",
  "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
  "How often do you find yourself talking too much when you are in social situations?",
  "When you're in a conversation, how often do you find yourself finishing the sentences of people you are talking to before they can finish them themselves?",
  "How often do you have difficulty waiting your turn in situations when turn taking is required?",
  "How often do you interrupt others when they are busy?"
];

const options = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];

let responses = {};

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Over the past 6 months, how often have you been bothered by the following problems?</strong></p>';
  
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
  
  if (score <= 24) {
    level = "Low likelihood of ADHD";
    color = "#10b981";
    recommendation = "Your responses suggest a low likelihood of ADHD. Continue monitoring your symptoms and consult Dr. Shapiro if symptoms worsen.";
  } else if (score <= 36) {
    level = "Moderate likelihood of ADHD";
    color = "#f59e0b";
    recommendation = "Your responses suggest possible ADHD symptoms. Consider scheduling an evaluation with Dr. Shapiro to discuss your symptoms.";
  } else {
    level = "High likelihood of ADHD";
    color = "#ef4444";
    recommendation = "Your responses suggest significant ADHD symptoms. Strongly recommend evaluation with Dr. Shapiro for proper assessment and treatment options.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Total Score: ${score}/72</strong></p>
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
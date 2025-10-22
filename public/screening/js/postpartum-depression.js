// Edinburgh Postnatal Depression Scale (EPDS) Implementation
const questions = [
  {
    text: "I have been able to laugh and see the funny side of things",
    options: [
      "As much as I always could",
      "Not quite so much now",
      "Definitely not so much now",
      "Not at all"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have looked forward with enjoyment to things",
    options: [
      "As much as I ever did",
      "Rather less than I used to",
      "Definitely less than I used to",
      "Hardly at all"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have blamed myself unnecessarily when things went wrong",
    options: [
      "No, never",
      "Not very often",
      "Yes, some of the time",
      "Yes, most of the time"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have been anxious or worried for no good reason",
    options: [
      "No, not at all",
      "Hardly ever",
      "Yes, sometimes",
      "Yes, very often"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have felt scared or panicky for no very good reason",
    options: [
      "No, not at all",
      "No, not much",
      "Yes, sometimes",
      "Yes, quite a lot"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "Things have been getting on top of me",
    options: [
      "No, I have been coping as well as ever",
      "No, most of the time I have coped quite well",
      "Yes, sometimes I haven't been coping as well as usual",
      "Yes, most of the time I haven't been able to cope at all"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have been so unhappy that I have had difficulty sleeping",
    options: [
      "No, not at all",
      "Not very often",
      "Yes, sometimes",
      "Yes, most of the time"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have felt sad or miserable",
    options: [
      "No, not at all",
      "Not very often",
      "Yes, quite often",
      "Yes, most of the time"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "I have been so unhappy that I have been crying",
    options: [
      "No, never",
      "Only occasionally",
      "Yes, quite often",
      "Yes, most of the time"
    ],
    scores: [0, 1, 2, 3]
  },
  {
    text: "The thought of harming myself has occurred to me",
    options: [
      "Never",
      "Hardly ever",
      "Sometimes",
      "Yes, quite often"
    ],
    scores: [0, 1, 2, 3],
    crisis: true
  }
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Please choose the answer that comes closest to how you have felt in the past 7 days:</strong></p>';
  
  questions.forEach((question, index) => {
    html += `<div class="card">
      <p><strong>${index + 1}. ${question.text}</strong></p>`;
    
    question.options.forEach((option, optIndex) => {
      html += `<label style="display:block;margin:8px 0;">
        <input type="radio" name="q${index}" value="${question.scores[optIndex]}" style="margin-right:8px;">
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
  let suicidalThoughts = false;
  
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      const value = parseInt(selected.value);
      score += value;
      answered++;
      
      // Check for suicidal thoughts (question 10)
      if (i === 9 && value > 0) {
        suicidalThoughts = true;
      }
    }
  }
  
  if (answered < questions.length) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  let level, color, recommendation;
  
  if (score <= 9) {
    level = "Low risk for postpartum depression";
    color = "#10b981";
    recommendation = "Your responses suggest low risk for postpartum depression. Continue self-care and monitor your mood.";
  } else if (score <= 12) {
    level = "Possible postpartum depression";
    color = "#f59e0b";
    recommendation = "Your responses suggest possible postpartum depression. Consider discussing your feelings with Dr. Shapiro.";
  } else {
    level = "Likely postpartum depression";
    color = "#ef4444";
    recommendation = "Your responses suggest likely postpartum depression. Strongly recommend immediate evaluation with Dr. Shapiro.";
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
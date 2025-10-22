// Mood Disorder Questionnaire (MDQ) Implementation
const questions = [
  "You felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?",
  "You were so irritable that you shouted at people or started fights or arguments?",
  "You felt much more self-confident than usual?",
  "You got much less sleep than usual and found you didn't really miss it?",
  "You were much more talkative or spoke much faster than usual?",
  "Thoughts raced through your mind or you couldn't slow your mind down?",
  "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
  "You had much more energy than usual?",
  "You were much more active or did many more things than usual?",
  "You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
  "You were much more interested in sex than usual?",
  "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
  "Spending money got you or your family into trouble?"
];

function renderForm() {
  const formDiv = document.getElementById('form');
  let html = '<p><strong>Has there ever been a period of time when you were not your usual self and...</strong></p>';
  
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
  
  // Additional questions
  html += `<div class="card">
    <p><strong>If you checked YES to more than one of the above, have several of these ever happened during the same period of time?</strong></p>
    <label style="display:block;margin:8px 0;">
      <input type="radio" name="same_period" value="1" style="margin-right:8px;">
      Yes
    </label>
    <label style="display:block;margin:8px 0;">
      <input type="radio" name="same_period" value="0" style="margin-right:8px;">
      No
    </label>
  </div>`;
  
  html += `<div class="card">
    <p><strong>How much of a problem did any of these cause you?</strong></p>
    <label style="display:block;margin:8px 0;">
      <input type="radio" name="problem_level" value="0" style="margin-right:8px;">
      No problem
    </label>
    <label style="display:block;margin:8px 0;">
      <input type="radio" name="problem_level" value="1" style="margin-right:8px;">
      Minor problem
    </label>
    <label style="display:block;margin:8px 0;">
      <input type="radio" name="problem_level" value="2" style="margin-right:8px;">
      Moderate problem
    </label>
    <label style="display:block;margin:8px 0;">
      <input type="radio" name="problem_level" value="3" style="margin-right:8px;">
      Serious problem
    </label>
  </div>`;
  
  formDiv.innerHTML = html;
}

function calculateResults() {
  let score = 0;
  let answered = 0;
  
  // Count yes answers to main questions
  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      score += parseInt(selected.value);
      answered++;
    }
  }
  
  const samePeriod = document.querySelector('input[name="same_period"]:checked');
  const problemLevel = document.querySelector('input[name="problem_level"]:checked');
  
  if (answered < questions.length || !samePeriod || !problemLevel) {
    alert('Please answer all questions before seeing results.');
    return;
  }
  
  const samePeriodValue = parseInt(samePeriod.value);
  const problemLevelValue = parseInt(problemLevel.value);
  
  let level, color, recommendation;
  let isPositive = score >= 7 && samePeriodValue === 1 && problemLevelValue >= 2;
  
  if (isPositive) {
    level = "Positive screen for bipolar disorder";
    color = "#ef4444";
    recommendation = "Your responses suggest possible bipolar disorder. This screening indicates you should discuss these symptoms with Dr. Shapiro for comprehensive evaluation and potential treatment options.";
  } else if (score >= 7 && samePeriodValue === 1) {
    level = "Possible bipolar symptoms";
    color = "#f97316";
    recommendation = "Your responses suggest some manic/hypomanic symptoms. Consider discussing these experiences with Dr. Shapiro to determine if further evaluation is needed.";
  } else {
    level = "Low likelihood of bipolar disorder";
    color = "#10b981";
    recommendation = "Your responses suggest a low likelihood of bipolar disorder. Continue monitoring your mood patterns and consult Dr. Shapiro if you experience significant mood changes.";
  }
  
  const resultDiv = document.getElementById('out');
  resultDiv.innerHTML = `
    <div class="card" style="border-left: 4px solid ${color};">
      <h2>Your Results</h2>
      <p><strong>Manic Symptoms: ${score}/13</strong></p>
      <p><strong>Same Period: ${samePeriodValue ? 'Yes' : 'No'}</strong></p>
      <p><strong>Problem Level: ${['None', 'Minor', 'Moderate', 'Serious'][problemLevelValue]}</strong></p>
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
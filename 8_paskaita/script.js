const salaryCheckerForm = document.querySelector("form");

salaryCheckerForm.addEventListener("submit", handleSalaryCheckerForm);

function handleSalaryCheckerForm(event) {
  event.preventDefault();

  const field = document.querySelector("select[name=workingField]").value;
  const position = document.querySelector("input[name=position]").value;
  const gender = document.querySelector("input[name=gender]:checked").value;
  const experience = document.querySelector("input[name=experience]").value;

  // management - 48000, it - 91000, construction 66000, pharmacy 128000 +
  // women gets 17% less then men +
  // 0-2 minus 50%, 2-5, +5 plus 50% +
  // show final salary in h2 element with position value

  if (field === "management") {
    const genderSalary = calculateGenderSalary(gender, 48000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);

    alert(`Avarage salary is $${finalSalary}`);
  } else if (field === "it") {
    const genderSalary = calculateGenderSalary(gender, 91000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);

    alert(`Avarage salary is $${finalSalary}`);
  } else if (field === "construction") {
    const genderSalary = calculateGenderSalary(gender, 66000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);

    alert(`Avarage salary is $${finalSalary}`);
  } else {
    const genderSalary = calculateGenderSalary(gender, 12800);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);

    alert(`Avarage salary is $${finalSalary}`);
  }
}

function calculateGenderSalary(gender, salary) {
  if (gender === "male") {
    return salary;
  } else if (gender === "female") {
    return salary * 0.83;
  } else {
    return salary * 0.91;
  }
}

function calculateExperienceSalary(experience, salary) {
  const flooredExperience = Math.floor(experience);

  if (flooredExperience >= 0 && flooredExperience <= 2) {
    return salary * 0.5;
  } else if (flooredExperience >= 3 && flooredExperience <= 5) {
    return salary;
  } else {
    return salary * 1.5;
  }
}

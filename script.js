let yearInputField = document.querySelector("#year");
let monthInputField = document.querySelector("#month");
let dayInputField = document.querySelector("#day");
let submitBtn = document.querySelector("#submit-btn");
let previousSelectedDay;

populateDays(monthInputField.value);
populateYears(yearInputField.value);

submitBtn.onclick = function () {
  //get the latest values at the time of check button click

  verifyAge();
};

function verifyAge() {
  let day = dayInputField.value;
  let month = monthInputField.value;
  let year = yearInputField.value;

  if (new Date().getFullYear() - Number(year) >= 18) {
    location.href = "http://www.google.com";
  } else {
    alert("You are restricted");
  }
}

monthInputField.onchange = function () {
  populateDays(monthInputField.value);
};

yearInputField.onchange = function () {
  populateDays(monthInputField.value);
};

dayInputField.onchange = function () {
  previousSelectedDay = dayInputField.value;
};

function populateDays(month) {
  let numOfdays;
  let leapFlag;
  let selectedYear = Number(yearInputField.value);

  //remove existiong options of dateInput Field
  while (dayInputField.firstChild) {
    dayInputField.removeChild(dayInputField.firstChild);
  }

  if (month === "February") {
    //check if currentYear is Leap
    console.log("currentYear =", selectedYear);
    if (selectedYear % 4 == 0) {
      if (selectedYear % 100 === 0 && selectedYear % 400 === 0) {
        numOfdays = 29;
        leapFlag = true;
      } else {
        numOfdays = 28;
      }
    } else {
      numOfdays = 28;
    }
  } else if (
    //31 days long months
    month === "January" ||
    month === "March" ||
    month === "May" ||
    month === "July" ||
    month === "August" ||
    month === "October" ||
    month === "December"
  ) {
    numOfdays = 31;
  } else {
    //30 days long months
    numOfdays = 30;
  }

  //now populate day field according to number of days in a selected month
  for (let i = 1; i <= numOfdays; i++) {
    let optionElement = document.createElement("option");
    optionElement.textContent = i;
    dayInputField.appendChild(optionElement);
  }

  if (previousSelectedDay && !leapFlag) {
    dayInputField.value = previousSelectedDay;
  } else {
    dayInputField.value = dayInputField.lastChild.value;
  }
}

function populateYears(year) {
  currentYear = new Date().getFullYear();

  for (let i = 0; i < 100; i++) {
    optionElement = document.createElement("option");
    optionElement.textContent = currentYear - i;
    yearInputField.appendChild(optionElement);
  }
}

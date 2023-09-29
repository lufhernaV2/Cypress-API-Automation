let supportingData = {

  authToken: "3a24966a500e8a103896dcb22f436c789b0cc607651618851f0d71ae8af91862",

  randomEmployeeNameGenerator: function() {
    let employeeName = ['Lucy', 'Evelyn', 'Abel', 'Alex', 'Fidel', 'Kyle', 'Sir Wimbledore'];
    let randomEmployeeName = employeeName[Math.floor(Math.random() * employeeName.length)];

    return randomEmployeeName
  },

  randomEmployeeGenderGenerator: function() {
    let gender = ['male', 'female'];
    let randomGender = gender[Math.floor(Math.random() * gender.length)];

    return randomGender
  },

  randomEmployeeStatusGenerator: function() {
    let employeeStatus = ['active', 'inactive'];
    let randomEmployeeStatus = employeeStatus[Math.floor(Math.random() * employeeStatus.length)];

    return randomEmployeeStatus
  },

  randomNumberGenerator: function() {
    let randomNumber = Math.floor(Math.random() * 1000 + 1);

    return randomNumber
  }
}

export default supportingData;
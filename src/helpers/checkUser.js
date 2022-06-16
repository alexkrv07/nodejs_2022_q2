const isExistAllRequiredField = (testUser) => {
  const arrayOfFieldUser = Object.keys(testUser);
  const arrayRequiredFields = ['age', "hobbies", "username"];
  const isAllRequired =  arrayRequiredFields.every(field => {
    return arrayOfFieldUser.includes(field);
  });
  return isAllRequired;
}

const isCorrectUserName = (userName) => {
  if (typeof userName !== 'string') {
    return false;
  }
  return true;
};

const isCorrectUserAge = (userAge) => {
  if (typeof userAge !== 'number') {
    return false;
  }
  return true;
};

const isCorrectUserHobbies = (UserHobbies) => {
  if (!Array.isArray(UserHobbies)) {
    return false;
  }
  if (UserHobbies.length !== 0) {
    if (!UserHobbies.every(hobby => typeof hobby === 'string')) {
      return false;
    }
  }
  return true;
}

const isCorrectUser = (user) => {
  if (!isExistAllRequiredField(user) || !isCorrectUserName(user.username) || !isCorrectUserAge(user.age) || !isCorrectUserHobbies(user.hobbies)) {
    return false;
  }
  return true;
}

export { isCorrectUser, isCorrectUserHobbies, isCorrectUserAge, isCorrectUserName, isExistAllRequiredField };

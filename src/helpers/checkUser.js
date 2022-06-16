const checkRequiredField = (testUser) => {
  const arrayOfFieldUser = Object.keys(testUser);
  const arrayRequiredFields = ['age', "hobbies", "username"];
  const isAllRequired =  arrayRequiredFields.every(field => {
    return arrayOfFieldUser.includes(field);
  });
  console.log(`isAllRequired: ${isAllRequired}`);
  return isAllRequired;
}

const checkUserName = (userName) => {
  if (typeof userName !== 'string') {
    console.log(`isname: false`);
    return false;
  }
  console.log(`isname: true`);
  return true;
};

const checkUserAge = (userAge) => {
  if (typeof userAge !== 'number') {
    return false;
  }
  return true;
};

const checkUserHobbies = (UserHobbies) => {
  if (!Array.isArray(UserHobbies)) {
    return false;
  }
  if (UserHobbies.length !== 0) {
    console.log('array');
    if (!UserHobbies.every(hobby => typeof hobby === 'string')) {
      return false;
    }
  }
  return true;
}

const checkUser = (user) => {
  if (!checkRequiredField(user) || !checkUserName(user.username) || !checkUserAge(user.age) || !checkUserHobbies(user.hobbies)) {
    return false;
  }
  return true;
}

export { checkUser, checkUserHobbies, checkUserAge, checkUserName, checkRequiredField };

import { IUser } from '../interfaces/iUser';

const isExistAllRequiredField = (testUser: IUser) => {
  const arrayOfFieldUser = Object.keys(testUser);
  const arrayRequiredFields = ['age', "hobbies", "username"];
  const isAllRequired =  arrayRequiredFields.every(field => {
    return arrayOfFieldUser.includes(field);
  });
  return isAllRequired;
}

const isCorrectUserName = (userName: string) => {
  if (typeof userName !== 'string') {
    return false;
  }
  return true;
};

const isCorrectUserAge = (userAge: number) => {
  if (typeof userAge !== 'number') {
    return false;
  }
  return true;
};

const isCorrectUserHobbies = (UserHobbies: string[]) => {
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

const isCorrectUser = (user: IUser) => {
  if (!isExistAllRequiredField(user) || !isCorrectUserName(user.username) || !isCorrectUserAge(user.age) || !isCorrectUserHobbies(user.hobbies)) {
    return false;
  }
  return true;
}

export { isCorrectUser, isCorrectUserHobbies, isCorrectUserAge, isCorrectUserName, isExistAllRequiredField };

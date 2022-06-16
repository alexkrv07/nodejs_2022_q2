import { v4 as uuidv4 } from 'uuid';
const users = [];

const findAll = () => {
  return new Promise((resolve, regect) => {
    resolve(users);
  })
};

const createUser = (user) => {
  return new Promise((resolve, regect) => {
    const newUser = { ...user };
    newUser.id = uuidv4();
    users.push(newUser);
    resolve(newUser);
  });
};


export { findAll, createUser };

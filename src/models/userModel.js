import { v4 as uuidv4 } from 'uuid';
let users = [];

const findAll = () => {
  return new Promise((resolve, regect) => {
    resolve(users);
  })
};

const findById = (id) => {
  return new Promise((resolve, regect) => {
    const user = users.find(user => user.id === id);
    resolve(user);
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

const deleteById = (id) => {
  return new Promise((resolve, regect) => {
    users = users.filter(user => user.id !== id);
    resolve(true);
  })
};

const updateById = (newUser, id) => {
  console.log('put');
  return new Promise((resolve, regect) => {
    const index = users.findIndex(user => user.id === id);
    console.log(index)
    users[index] = {...users[index], ...newUser};
    console.log(users[index])
    resolve(users[index]);
  });
};




export { findAll, createUser, findById, deleteById, updateById };

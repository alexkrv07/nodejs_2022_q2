import { v4 as uuidv4 } from 'uuid';
import { IUser, ICreateUser } from '../interfaces/iUser'

let users: IUser[] = [];

const findAll = () => {
  return new Promise((resolve, regect) => {
    resolve(users);
  })
};

const findById = (id: string) => {
  return new Promise((resolve, regect) => {
    const user = users.find(user => user.id === id);
    resolve(user);
  })
};

const createUser = (user: ICreateUser) => {
  return new Promise((resolve, regect) => {
    const newUser:  IUser = { ...user, id: uuidv4() };
    users.push(newUser);
    resolve(newUser);
  });
};

const deleteById = (id: string) => {
  return new Promise((resolve, regect) => {
    users = users.filter(user => user.id !== id);
    resolve(true);
  })
};

const updateById = (newUser: ICreateUser, id: string) => {
  return new Promise((resolve, regect) => {
    const index = users.findIndex(user => user.id === id);
    users[index] = {...users[index], ...newUser};
    resolve(users[index]);
  });
};

export { findAll, createUser, findById, deleteById, updateById };

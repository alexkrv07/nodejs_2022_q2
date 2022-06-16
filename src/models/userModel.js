const users = [];

const findAll = () => {
  return new Promise((resolve, regect) => {
    resolve(users);
  })
};


export { findAll, };

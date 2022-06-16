import { findAll, } from '../models/userModel.js';

const getUsers = async (req, res) => {
  try {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const users = await findAll();
    res.end(JSON.stringify(users))
  } catch (error) {
    console.log(error);
  }
}


export { getUsers, };

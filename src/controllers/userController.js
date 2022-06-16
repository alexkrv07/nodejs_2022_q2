import * as User from '../models/userModel.js';
import { STATUS_CODE } from '../constants/statusCode.js';
import * as CheckUser from '../helpers/checkUser.js';

const getUsers = async (req, res) => {
  try {
    res.writeHead(STATUS_CODE.OK, {'Content-Type': 'application/json'});
    const users = await User.findAll();
    res.end(JSON.stringify(users))
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString().trim();
    });

    req.on('end', async () => {
      const testUser = JSON.parse(body);
      if (!CheckUser.checkUser(testUser)) {
        res.writeHead(STATUS_CODE.BAD_REQUEST, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'User does not contain required fields'}));
        return;
      }
      const newUser = {
        username: testUser.username,
        age: testUser.age,
        hobbies: testUser.hobbies
      };
      const createdUser = await  User.createUser(newUser);
      res.writeHead(STATUS_CODE.CREATED, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(createdUser));
    });


    // const newUser = {};
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify(users))
  } catch (error) {
    console.log(error);
  }
}


export { getUsers, createUser};

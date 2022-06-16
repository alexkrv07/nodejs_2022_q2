import * as UserModel from '../models/userModel.js';
import { STATUS_CODE } from '../constants/statusCode.js';
import * as CheckUser from '../helpers/checkUser.js';
import { isValidUIID }  from '../helpers/checkvalid.js';


const getUsers = async (req, res) => {
  try {
    res.writeHead(STATUS_CODE.OK, {'Content-Type': 'application/json'});
    const users = await UserModel.findAll();
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
      if (!CheckUser.isCorrectUser(testUser)) {
        res.writeHead(STATUS_CODE.BAD_REQUEST, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'User does not contain required fields'}));
        return;
      }
      const newUser = {
        username: testUser.username,
        age: testUser.age,
        hobbies: testUser.hobbies
      };
      const createdUser = await UserModel.createUser(newUser);
      res.writeHead(STATUS_CODE.CREATED, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(createdUser));
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    res.writeHead(STATUS_CODE.INTERNAL_SERVER_ERROR, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Internal Server Error'}));
  }
}

const findById = async (req, res, pathId) => {
  try {
    if (!isValidUIID(pathId)) {
      res.writeHead(STATUS_CODE.BAD_REQUEST, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({message: `UserId: ${pathId} is invalid (not uuid)`}));
      return;
    }

    const user = await UserModel.findById(pathId);

    if (!user) {
      res.writeHead(STATUS_CODE.NOT_FOUND, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({message: `User with id = ${pathId} doesn't exist`}));
      return;
    }

    res.writeHead(STATUS_CODE.OK, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(user))
  } catch (error) {
    console.log(error);
  }
};


export { getUsers, createUser, findById };

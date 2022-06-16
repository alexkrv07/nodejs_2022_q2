import * as http from 'http';
import { PATH_USERS } from './constants/pathes.js';
import { HTTP_METHODS } from './constants/httpMethods.js';
import { STATUS_CODE } from './constants/statusCode.js';
import { splitPath}  from './helpers/splitPath.js';
import * as UserController from './controllers/userController.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  const { mainPath, pathId } = splitPath(req.url);

  if (req.url === PATH_USERS && req.method === HTTP_METHODS.GET)  {
    UserController.getUsers(req, res);
  } else if (req.url === PATH_USERS && req.method === HTTP_METHODS.POST) {
    UserController.createUser(req, res);
  } else if (mainPath === PATH_USERS && req.method === HTTP_METHODS.GET) {
    UserController.findById(req, res, pathId);
  }

  else {
    res.writeHead(STATUS_CODE.NOT_FOUND, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: `Path: ${req.url} with method: ${req.method} not allowed`}));
  }

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

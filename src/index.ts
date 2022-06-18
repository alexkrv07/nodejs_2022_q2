import * as http from 'http';
import { PATH_USERS } from './constants/pathes';
import { HTTP_METHODS } from './constants/httpMethods';
import { STATUS_CODE } from './constants/statusCode';
import { splitPath}  from './helpers/splitPath';
import * as UserController from './controllers/userController';
import 'dotenv/config';


const PORT = process.env.PORT;

const server = http.createServer((req, res ) => {

  const { mainPath, pathId } = splitPath(req.url);

  if (req.url === PATH_USERS && req.method === HTTP_METHODS.GET)  {
    UserController.getUsers(req, res);
  } else if (req.url === PATH_USERS && req.method === HTTP_METHODS.POST) {
    UserController.createUser(req, res);
  } else if (mainPath === PATH_USERS && req.method === HTTP_METHODS.GET) {
    UserController.findById(req, res, pathId);
  } else if (mainPath === PATH_USERS && req.method === HTTP_METHODS.DELETE) {
    UserController.deleteById(req, res, pathId);
  } else if (mainPath === PATH_USERS && req.method === HTTP_METHODS.PUT) {
    UserController.updateById(req, res, pathId);
  } else {
    res.writeHead(STATUS_CODE.NOT_FOUND, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: `Path: ${req.url} with method: ${req.method} not allowed`}));
  }

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

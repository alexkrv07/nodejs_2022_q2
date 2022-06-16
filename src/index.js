import * as http from 'http';
import { PATH_USERS } from './constants/pathes.js';
import { getUsers, } from './controllers/userController.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === PATH_USERS) {
    getUsers(req, res);
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: `Path: ${req.url} not found`}));
  }

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

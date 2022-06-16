import { PATH_USERS } from '../constants/pathes.js';

export const splitPath = (url) => {
  let mainPath = '';
  let pathId = '';
  if (url.startsWith(`${PATH_USERS}/`)) {
    mainPath = PATH_USERS;
    pathId = url.slice(PATH_USERS.length + 1);
  }

  return { mainPath, pathId };
}

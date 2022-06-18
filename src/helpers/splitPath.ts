import { PATH_USERS } from '../constants/pathes';

export const splitPath = (url: string | undefined) => {
  let mainPath = '';
  let pathId = '';
  if (url!.startsWith(`${PATH_USERS}/`)) {
    mainPath = PATH_USERS;
    pathId = url!.slice(PATH_USERS.length + 1);
  }

  return { mainPath, pathId };
}

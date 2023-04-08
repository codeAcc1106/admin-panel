import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const set = (name, value, expire = 3600 * 1000 * 24) => {
  cookies.set(name, value, {
    expires: new Date(new Date().getTime() + expire),
    path: '/',
  });
};

const get = (name) => {
  return cookies.get(name);
};

const remove = (name) => {
  cookies.remove(name, {
    path: '/',
  });
};

const clean = () => {
  const cookies2 = cookies.getAll();
  Object.keys(cookies2).forEach((cookie) => {
    cookies.remove(cookie, { path: '/' });
  });
};

export const cookie = {
  get,
  set,
  remove,
  clean,
};

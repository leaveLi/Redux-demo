/**
 * Mocking client-server processing
 */
import URL_USER from "./URL_USER.json";
import URL_INFO from "./URL_INFO.json";
import URL_STAT from "./URL_STAT.json";

const TIMEOUT = 100;

const getUserNames = (timeout) =>
  new Promise((resovle) =>
    setTimeout(() => resovle(URL_USER), timeout || TIMEOUT)
  );
const getUserMails = (timeout) =>
  new Promise((resovle) =>
    setTimeout(() => resovle(URL_INFO), timeout || TIMEOUT)
  );
const getUserStats = (timeout) =>
  new Promise((resovle) =>
    setTimeout(() => resovle(URL_STAT), timeout || TIMEOUT)
  );

export default {
  getUserNames,
  getUserMails,
  getUserStats,
};

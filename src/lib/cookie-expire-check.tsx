/* eslint-disable no-plusplus */
function isCookieExpired(cookieName :string) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const [name, value] = cookie.split('=');
      if (name === cookieName) {
        const expiresIndex = value.indexOf('expires=');
        if (expiresIndex !== -1) {
          const expiresDateStr = value.substring(expiresIndex + 8);
          const expiresDate = new Date(expiresDateStr);
          return new Date() > expiresDate;
        }
        return false; // Cookie doesn't have an expiration date
      }
    }
    return true; // Cookie not found
  }
  export default isCookieExpired
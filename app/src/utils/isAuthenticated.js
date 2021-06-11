const isAuthenticated = () => {
  return localStorage.getItem('userId') != null ? true : false;
}

export default isAuthenticated;
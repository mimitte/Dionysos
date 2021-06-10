class Auth {
  isAuthenticated= false;

  authenticate(cb) {
    this.isAuthenticated = true;
  }

  signout(cb) {
    this.isAuthenticated = false;
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  }
}
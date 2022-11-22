import { useState } from 'react';
import AppRouter from 'components/Router';
//import { authService } from "fbase";

function App() {
  //console.log(authService.currentUser);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
  <>
  <AppRouter  isLoggedin={isLoggedin} />
  <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
  </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from '../components/Navigation/NavBar';
import SocialLinks from '../components/SocialLinks/SocialLinks';

function App() {
  return (
    <>
      <CssBaseline>
        <NavBar />
        <SocialLinks />
      </CssBaseline>
    </>
  );
}

export default App;

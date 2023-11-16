import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './Components/Shared/NavBar'
import Footer from './Components/Shared/Footer';

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App;

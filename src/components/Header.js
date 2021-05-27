import './Header.css'
import logo from '../assets/DanaMSLogo.png'

const Header = () => {
  return(
    <header>
      <img src={logo} alt='Dana Middle School logo'/>
      <h1>Dana Middle School Inventory</h1>
      <button>Sign out</button>
    </header>
  );
}

export default Header
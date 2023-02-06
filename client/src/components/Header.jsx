/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './assets/toothless.png';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  function returnHome() {
    navigate('/home');
  }

  function login() {
    navigate('/login');
  }

  function logout() {
    navigate('/home');
  }

  function register() {
    navigate('/register');
  }

  return (
    <nav className='navbar bg-light mb-4 p-0 flex'>
      <div className="container">
        <a className="navbar-brand" onClick={returnHome}>
          <div className="d-flex">
            <img src={logo} alt="logo" className='mr-2' />
            <div>Dragons - Rise of Berk</div>
          </div>
        </a>
        <div className='loginButtons'>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Log out</button>
          </div>
      </div>
    </nav>
  )
}

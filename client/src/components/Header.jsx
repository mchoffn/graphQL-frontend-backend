/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './assets/toothless.png';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  function returnHome() {
    navigate('/');
  }

  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a className="navbar-brand" onClick={returnHome}>
          <div className="d-flex">
            <img src={logo} alt="logo" className='mr-' />
            <div>Dragons - Rise of Berk</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

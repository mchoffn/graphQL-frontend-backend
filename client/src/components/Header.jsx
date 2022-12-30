import logo from './assets/toothless.png';

export const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className='mr-' />
            <div>Dragons - Rise of Berk</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

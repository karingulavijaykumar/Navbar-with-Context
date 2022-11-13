// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const activeThemeWebsiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const activeThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const activeThemeClassName = isDarkTheme
        ? 'dark-theme-header'
        : 'light-theme-header'

      return (
        <nav className={`nav-bar ${activeThemeClassName}`}>
          <img
            src={activeThemeWebsiteLogo}
            alt="website logo"
            className="logo"
          />
          <ul className="home-about-container">
            <Link to="/" className="link-name">
              <li>
                <p className={isDarkTheme ? 'dark-text' : 'light-text'}>Home</p>
              </li>
            </Link>
            <Link to="/about" className="link-name">
              <li>
                <p className={isDarkTheme ? 'dark-text' : 'light-text'}>
                  About
                </p>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            testid="theme"
            className="btn-theme-switch"
            onClick={onClickChangeTheme}
          >
            <img src={activeThemeImg} alt="theme img" className="theme-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

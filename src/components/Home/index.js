// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const themeHomeClassName = isDarkTheme ? 'home-dark' : 'home-light'

      const activeThemeSeparator = isDarkTheme
        ? 'separator-dark'
        : 'separator-light'

      const activeThemeHomeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const activeThemeBg = isDarkTheme ? 'dark-bg' : 'light-bg'

      return (
        <div className="main-container">
          <Navbar />
          <hr className={activeThemeSeparator} />
          <div className={`home-container ${activeThemeBg}`}>
            <img src={activeThemeHomeLogo} className="home-logo" alt="home" />
            <h1 className={`home-text ${themeHomeClassName}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

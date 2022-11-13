// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const themeAboutClassName = isDarkTheme ? 'about-dark' : 'about-light'

      const activeThemeSeparator = isDarkTheme
        ? 'separator-dark'
        : 'separator-light'

      const activeThemeAboutLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const activeThemeBackground = isDarkTheme ? 'dark-bg' : 'light-bg'

      return (
        <div className="main-container">
          <Navbar />
          <hr className={activeThemeSeparator} />
          <div className={`body-container ${activeThemeBackground}`}>
            <img
              src={activeThemeAboutLogo}
              className="about-logo"
              alt="about"
            />
            <h1 className={`about-text ${themeAboutClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

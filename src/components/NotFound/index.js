// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const activeThemeText = isDarkTheme
        ? 'light-text-theme'
        : 'dark-text-theme'

      const darkThemeBg = isDarkTheme ? 'dark-bg' : ''
      return (
        <div className={`not-found-container ${darkThemeBg}`}>
          <Navbar />
          <div className="not-found-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              className="not-found"
              alt="not found"
            />
            <h1 className={`heading ${activeThemeText}`}>Lost Your Way?</h1>
            <p className={`caption ${activeThemeText}`}>
              We cannot seem to find the Page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

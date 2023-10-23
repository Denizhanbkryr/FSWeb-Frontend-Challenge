import "./App.css";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import { data } from "./data";

function App() {
  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  /*
  localStorage.setItem("darkMode", "enabled");

  const darkModePreference = localStorage.getItem("darkMode");

  if (darkModePreference === "enabled") {
    document.documentElement.classList.toggle("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  */

  //for HomePage Component
  const githubURL = "https://github.com/Denizhanbkryr";
  const linkedinURL =
    "https://www.linkedin.com/in/denizhan-bakiryor-049729170/";

  const handleButtonClickGithub = () => {
    window.open(githubURL, "/_blank");
  };

  const handleButtonClickLinkedin = () => {
    window.open(linkedinURL, "_blank");
  };

  // for Projects Component
  const viewSiteUrl = "https://workintech.com.tr";
  const viewSiteUrlJourney = "https://www.journeyapp.com/";
  const githubUrl = "https://github.com/";

  const handleClickGithub = () => {
    window.open({ githubUrl }, "/_blank");
  };

  const handleClickViewsite = () => {
    window.open(viewSiteUrl, "_blank");
  };

  const handleClickViewsiteJourney = () => {
    window.open(viewSiteUrlJourney, "_blank");
  };

  return (
    <div className="App">
      <div>
        <HomePage
          changeTheme={changeTheme}
          handleButtonClickGithub={handleButtonClickGithub}
          handleButtonClickLinkedin={handleButtonClickLinkedin}
        />
      </div>
      <div
        style={{ padding: "5%" }}
        className="skillsPage  dark:bg-skills-Bg text-white"
      >
        <Skills />
      </div>
      <>
        <Profile data={data[0]} />
      </>
      <div>
        <Projects
          handleClickGithub={handleClickGithub}
          handleClickViewsite={handleClickViewsite}
          handleClickViewsiteJourney={handleClickViewsiteJourney}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

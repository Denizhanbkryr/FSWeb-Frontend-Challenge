import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Button } from "reactstrap";
import NightMode from "./NightMode";

const HomePage = ({
  handleButtonClickGithub,
  handleButtonClickLinkedin,
  changeTheme,
}) => {
  const imageSize = {
    width: "22vw",
    height: "22vw",
    marginRight: "",
    borderRadius: "5%",
  };

  return (
    <div
      className="mainDivHomePage"
      style={{ display: "flex", color: "white" }}
    >
      <div className="hero-content dark:bg-homePage-Bg1">
        <div className="hero-left">
          <div className="i-am-a-frontend">
            I am a Frontend
            <br />
            Developer...
          </div>
          <p className="text-wrapper">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="buttons dark:bg-skills-Bg border-none">
            <Button
              onClick={handleButtonClickGithub}
              outline
              color="white"
              size="lg"
              active
            >
              <i class="fa-brands fa-github" style={{ color: "#4731d3;" }} />
              github
            </Button>
            <Button
              onClick={handleButtonClickLinkedin}
              color="white"
              size="lg"
              active
            >
              <i class="fa-brands fa-linkedin " style={{ color: "#4731d3;" }} />
              Linkedin
            </Button>
          </div>
        </div>
        <img
          className="hero-right"
          style={imageSize}
          alt="Hero right"
          src="https://ychef.files.bbci.co.uk/976x549/p0982k70.jpg"
        />
      </div>

      <div class="bg-yesil-1 dark:bg-black " style={{ width: "60%" }}>
        <NightMode />
        <Button
          style={{ float: "left", marginLeft: "3%" }}
          onClick={changeTheme}
        >
          dark mode
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

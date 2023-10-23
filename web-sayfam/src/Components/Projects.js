import React from "react";
import img1 from "../images/Rectangle 41.png";
import img2 from "../images/Rectangle 412.png";

const Projects = ({
  handleClickGithub,
  handleClickViewsite,
  handleClickViewsiteJourney,
}) => {
  return (
    <div
      className="mainDivProjects"
      class="bg-yesil-1 text-3xl font-bold dark:bg-project-bg"
      style={{
        paddingBottom: "8%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <h1
        style={{
          marginBottom: "3%",
          paddingTop: "5%",
          marginLeft: "14%",
          textAlign: "left",
        }}
        class="text-indigo-700"
      >
        Projects
      </h1>
      <div
        style={{ width: "68%", marginBottom: "3%" }}
        href="#"
        className="flex flex-col  bg-white rounded-lg shadow md:flex-row mx-auto  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700   "
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-none md:rounded-l-lg"
          src={img1}
          alt="Project Image"
        />
        <div class="dark:bg-box-bg">
          <div className="flex flex-col  p-4 leading-normal m-10 ">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-indigo-700 dark:text-white text-left">
              Workintech
            </h5>

            <p className="text-wrapper dark:text-white">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>

            <div className="devSites">
              <div className="pill-react dark:bg-projects-btn">
                <div style={{ marginRight: "4%", color: "white" }}>react</div>
              </div>
              <div className="pill-react dark:bg-projects-btn">
                <div style={{ marginRight: "4%", color: "white" }}>redux</div>
              </div>
              <div className="pill-react dark:bg-projects-btn">
                <div style={{ color: "white" }}>vercel</div>
              </div>
            </div>
            <div
              className="devSites2"
              style={{
                textDecoration: "underline",
                color: "#120b39",
                marginTop: "5%",
              }}
            >
              <a
                class="dark:text-yesil-1 cursor-pointer"
                onClick={handleClickViewsite}
                style={{ margin: "0 5% 0 5%" }}
              >
                View Site
              </a>
              <a
                onClick={handleClickGithub}
                class="dark:text-yesil-1 cursor-pointer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: "68%" }}
        href="#"
        className="flex flex-col  bg-white   rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-auto mt-0.5 mb-0.5"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-none md:rounded-l-lg"
          src={img2}
          alt="Project Image"
        />
        <div class="dark:bg-box-bg">
          <div className="flex flex-col  p-4 leading-normal m-10">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-indigo-700 dark:text-white text-left">
              Journey
            </h5>

            <p className="text-wrapper dark:text-white">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>

            <div className="devSites">
              <div className="pill-react dark:bg-projects-btn">
                <div style={{ marginRight: "4%", color: "white" }}>react</div>
              </div>
              <div className="pill-react dark:bg-projects-btn">
                <div style={{ marginRight: "4%", color: "white" }}>redux</div>
              </div>
              <div className="pill-react dark:bg-projects-btn">
                <div style={{ color: "white" }}>vercel</div>
              </div>
            </div>
            <div
              className="devSites2"
              style={{
                textDecoration: "underline",
                color: "#120b39",
                marginTop: "5%",
              }}
            >
              <a
                onClick={handleClickViewsiteJourney}
                class="dark:text-yesil-1 cursor-pointer"
                style={{ margin: "0 5% 0 5%" }}
              >
                View Site
              </a>
              <a
                onClick={handleClickGithub}
                class="dark:text-yesil-1 cursor-pointer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

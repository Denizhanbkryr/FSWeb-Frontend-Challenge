import vscodeLogo from "../images/Rectangle 34.png";
import nodeLogo from "../images/node-logo 1.png";

const Skills = () => {
  const imageSize = {
    width: "9rem",
    height: "9rem",
    marginRight: "2rem",
    borderRadius: "10%",
  };

  const skillContainerStyle = {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <>
      <div class="text-3xl font-bold text-regal-blue  mt-8">SKILLS</div>
      <div className="skillImages">
        <div className="firstTrio">
          <div class="dark:text-white" style={skillContainerStyle}>
            <img
              alt="Javascript"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              style={imageSize}
            />
            <span class="dark:text-white">JAVASCRIPT</span>
          </div>
          <div style={skillContainerStyle}>
            <img
              class="bg-black"
              alt="Node.js"
              src={nodeLogo}
              style={imageSize}
            />
            <span class="dark:text-white">NODE.JS</span>
          </div>
          <div style={skillContainerStyle}>
            <img
              alt="Redux"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--8JgggMJn--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/4hz72bexko5ol6aq5be4.png"
              style={imageSize}
            />
            <span class="dark:text-white">REDUX</span>
          </div>
        </div>
        <div className="secondTrio">
          <div style={skillContainerStyle}>
            <img
              alt="Figma"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sUpfUvJRtNSF3sriKoMNMo0hkEQPPSbcxg&usqp=CAU"
              style={imageSize}
            />
            <span class="dark:text-white">FIGMA</span>
          </div>
          <div style={skillContainerStyle}>
            <img alt="VSCode" src={vscodeLogo} style={imageSize} />
            <span class="dark:text-white">VSCODE</span>
          </div>
          <div style={skillContainerStyle}>
            <img
              alt="React"
              src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
              style={imageSize}
            />
            <span class="dark:text-white">REACT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

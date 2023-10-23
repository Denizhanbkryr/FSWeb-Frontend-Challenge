const Footer = () => {
  return (
    <div
      className="mainDivFooter dark:bg-skills-Bg"
      style={{ fontSize: "30px", height: "33vw" }}
    >
      <h1
        style={{ paddingTop: "5%" }}
        class="text-4xl font-bold text-indigo-700	mt dark:text-projects-btn"
      >
        Send me a message!
      </h1>
      <div>
        <p
          class="dark:text-white"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </p>
      </div>
      <a
        class="dark:text-projects-btn"
        href="mailto:denizhanbakiryor@gmail.com"
      >
        denizhanbakiryor@gmail.com
      </a>
      <nav
        style={{
          margin: "5% 30% 5% 30%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <a href="https://twitter.com">
          <i class="fa-brands fa-twitter " style={{ color: "#4731d3" }}></i>
        </a>
        <a href="https://codepen.io/Dnzhn">
          <i class="fa-brands fa-codepen" style={{ color: "#4731d3" }}></i>
        </a>
        <a href="https://instagram.com">
          <i
            class="fa-brands fa-instagram dark"
            style={{ color: "#4731d3" }}
          ></i>
        </a>
        <a href="https://drive.google.com">
          <i class="fa-brands fa-google-drive" style={{ color: "#4731d3" }}></i>
        </a>
      </nav>
    </div>
  );
};

export default Footer;

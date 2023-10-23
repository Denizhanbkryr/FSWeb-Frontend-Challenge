const Profile = ({ data }) => {
  const imageSize = {
    width: "305.68px",
    height: "305.68px",
    borderRadius: "5%",
    marginBottom: "13%",
  };

  return (
    <div className="zaa" class="bg-indigo-700 text-white dark:bg-homePage-Bg1">
      <header
        style={{
          textAlign: "left",
          marginLeft: "14.7%",
          marginRight: "14%",
          marginBottom: "2%",
          paddingTop: "5%",
        }}
      >
        <h1 className="text-4xl font-bold text-lime-300">Profile</h1>
      </header>

      <div className="contentPageProfil" style={{ fontSize: "30px" }}>
        <div className="basic-info">
          <div className="text-wrapper">Basic Information</div>
          <div className="profile-info">
            <p className="do-um-tarihi-kamet">
              Doğum tarihi
              <br />
              <br />
              İkamet Şehri
              <br />
              <br />
              Eğitim Durumu
              <br />
              <br />
              Tercih Ettiği Rol
            </p>
            <div className="element-ankara">
              {data.birthday}
              <br />
              <br />
              {data.city}
              <br />
              <br />
              {data.Education}
              <br />
              {data.Degree}
              <br />
              <br />
              {data.role}
            </div>
          </div>
        </div>
        <div className="aboutPartProfile">
          <img alt="" style={imageSize} src={data.img} />
          <div className="about-box">
            <div className="text-wrapper">About Me</div>
            <p className="lorem-ipsum-dolor">
              {data.about1}
              <br />
              <br />
              {data.about2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

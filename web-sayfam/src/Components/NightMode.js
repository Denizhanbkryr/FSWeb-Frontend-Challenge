import PropTypes from "prop-types";
import React, { useReducer } from "react";

const NightMode = ({
  property1,
  rectangleClassName,
  ellipseClassName,
  divClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "button-off",
  });

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  // Burada state.property1, "button-off" veya "button-on" değerine göre çalışacak.
  if (state.property1 === "button-on") {
    changeTheme(); // Tema değiştirme işlevi sadece "button-on" durumunda çalışacak.
  }

  return (
    <div
      className={`night-mode ${state.property1}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="overlap-group">
        <div className={`rectangle ${rectangleClassName}`} />
        <div className="ellipse" />
        <div className={`div ${ellipseClassName}`} />
      </div>
      <div className={`DARK-MODE ${divClassName}`}>
        {state.property1 === "button-off" && <>DARK MODE</>}

        {state.property1 === "button-on" && <>LIGHT MODE</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "button-off") {
    switch (action) {
      case "click":
        return {
          property1: "button-on",
        };
    }
  }

  if (state.property1 === "button-on") {
    switch (action) {
      case "click":
        return {
          property1: "button-off",
        };
    }
  }

  return state;
}

NightMode.propTypes = {
  property1: PropTypes.oneOf(["button-on", "button-off"]),
};

export default NightMode;

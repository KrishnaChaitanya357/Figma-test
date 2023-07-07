import React from "react";
import "./Project.css";

const Sidebar = () => {
  return (
    <>
      <div className="left-panel">
        <div className="sidebar">
          <div className="caption">
            <h3> Hi Reader, </h3>
            <h6> Here's your news </h6>
          </div>

          <div className="side-toggle-btns">
            <h3>View Toggle </h3>
            <span>
              {" "}
              <button className="toggle1">Toggle 1 </button>{" "}
            </span>{" "}
            <span>
              {" "}
              <button className="toggle2">Toggle 2 </button>{" "}
            </span>
          </div>

          <div className="Feedback-block">
            <h3 className="Feedback-title"> Have a Feedback ? </h3>
            <button className="Feedback-btn"> We are Listening </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

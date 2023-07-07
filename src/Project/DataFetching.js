import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Project.css";

const DataFromAPI = () => {
  const [posts, SetPosts] = useState([]);

  const renderPosts = posts.map((post) => {
    const { id, title, body } = post;

    return (
      <div className="card" key={id}>
        <div className="content-wrapper">
          <h3 className="cardTitle"> {title} </h3>
          <p className="cardText">{body} </p>
        </div>

        <div className="card-btn ">
          <button className="close-btn"> X </button>
        </div>
      </div>
    );
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => SetPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cardFormat = () => {};

  return (
    <>
      <div className="web-page">
        <div className="left-panel">
          <div className="sidebar">
            <div className="caption">
              <h3> Hi Reader, </h3>
              <h5> Here's your news </h5>
            </div>

            <div className="side-toggle-btns">
              <h3>View Toggle </h3>
              <span>
                {" "}
                <button className="toggle1">Toggle 1 </button>{" "}
              </span>{" "}
              <span>
                {" "}
                <button className="toggle2" onClick={cardFormat()}>
                  Toggle 2{" "}
                </button>{" "}
              </span>
            </div>

            <div className="Feedback-block">
              <h3 className="Feedback-title"> Have a Feedback ? </h3>
              <button className="Feedback-btn"> We are Listening </button>
            </div>
          </div>
        </div>
        <div className="right-panel">{renderPosts}</div>
      </div>
      <div className="footer">
        <span>
          {" "}
          <button className="page1">1</button>
        </span>
        <span>
          {" "}
          <button className="page2">2</button>
        </span>
        <span>
          {" "}
          <button className="page3">3</button>
        </span>
        <span>
          {" "}
          <button className="next-btn"> >>> </button>
        </span>
      </div>
    </>
  );
};

export default DataFromAPI;

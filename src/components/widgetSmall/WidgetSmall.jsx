import React from "react";
import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";

const WidgetSmall = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="wid-img"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgwtSmUsername">Karthikeyan</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="wid-img"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgwtSmUsername">John</span>
            <span className="widgetSmUserTitle">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="wid-img"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgwtSmUsername">Steve</span>
            <span className="widgetSmUserTitle">Project Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3987107/pexels-photo-3987107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="wid-img"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgwtSmUsername">Rebecca</span>
            <span className="widgetSmUserTitle">FullStack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="wid-img"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgwtSmUsername">Susan</span>
            <span className="widgetSmUserTitle">HR</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;

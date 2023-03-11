import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5 mb-5">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />,{""}{" "}
              {props.data.description}
            </li>
            <li>
              Humidity:{" "}
              <span className="humidity-wind-value">
                {props.data.humidity}%
              </span>
              , Wind:{" "}
              <span className="humidity-wind-value">
                {props.data.wind} km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

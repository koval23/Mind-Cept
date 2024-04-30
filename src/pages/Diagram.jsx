import React, { Component } from "react";
import HoverComponent from "../pages/HoverComponent ";
import "../css/Diagram.css";

export default class Diagram extends Component {
  render() {
    return (
      <div className="container-diagram">
        <div
          className="diagram-position "
          style={{
            marginTop: "120px",
            height: "850px",
            width: "800px",
          }}
        >
          <div className="row-right-contaier">
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "red", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "blue", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 20 50 A 60,80 0 0,1 190,50"
                stroke="url(#gradient)"
                fill="transparent"
                stroke-width="10"
                transform="rotate(90 60 50)"
              />
            </svg>
          </div>

          <div className="row-right-contaier-2">
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "red", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "blue", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 20 50 A 60,80 0 0,1 190,50"
                stroke="url(#gradient)"
                fill="transparent"
                stroke-width="10"
                transform="rotate(90 60 50)"
              />
            </svg>
          </div>
          <div className="row-left-contaier-2">
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "red", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "blue", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 20 50 A 60,80 0 0,1 190,50"
                stroke="url(#gradient)"
                fill="transparent"
                stroke-width="10"
                transform="rotate(90 60 50)"
              />
            </svg>
          </div>
          <HoverComponent
            className="diagram-style"
            bodyText={<div>наведи</div>}
            positionStyles={{ bottom: "60px", left: "220px" }}
          >
            <div className="custom-content">
              <ul>
                <li>Punkt1</li>
                <li>Punkt2</li>
                <li>Punkt3</li>
                <li>Punkt4</li>
              </ul>
            </div>
          </HoverComponent>

          <HoverComponent
            className="diagram-style"
            bodyText={<div>наведи</div>}
            positionStyles={{ bottom: "60px", right: "220px" }}
          >
            <div className="custom-content">
              <ul>
                <li>Punkt1</li>
                <li>Punkt2</li>
                <li>Punkt3</li>
                <li>Punkt4</li>
              </ul>
            </div>
          </HoverComponent>

          <HoverComponent
            className="diagram-style"
            bodyText={<div>наведи</div>}
            positionStyles={{ bottom: "60px", left: "220px" }}
          >
            <div className="custom-content">
              <ul>
                <li>Punkt1</li>
                <li>Punkt2</li>
                <li>Punkt3</li>
                <li>Punkt4</li>
              </ul>
            </div>
          </HoverComponent>

          <HoverComponent
            className="diagram-style"
            bodyText={<div>наведи</div>}
            positionStyles={{ bottom: "60px", right: "220px" }}
          >
            <div className="custom-content">
              <ul>
                <li>Punkt1</li>
                <li>Punkt2</li>
                <li>Punkt3</li>
                <li>Punkt4</li>
              </ul>
            </div>
          </HoverComponent>
        </div>
      </div>
    );
  }
}

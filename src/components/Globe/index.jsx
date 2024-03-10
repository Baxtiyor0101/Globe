import React, { useEffect } from "react";
import "./style.css";

const Globe = () => {
  useEffect(() => {
    const globe = document.getElementById("globe");

    // Function to create dots around the globe
    function createDots(numDots) {
      const colors = ["#339966", "#66ccff", "#ffcc66"];

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        const color = colors[i % colors.length];
        dot.style.backgroundColor = color;
        !globe.textContent && globe.appendChild(dot);
        positionDot(dot, i, numDots);
      }

      // Create a text element for the word "scale"
      const scaleText = document.createElement("div");
      scaleText.className = "scale-text";
 
      scaleText.style = "font-size:55px;color:#20CE70;text-align:center";

      scaleText.textContent = "stable";
      !globe.textContent && globe.appendChild(scaleText);
      positionText(scaleText);
    }

    // Function to position dots in a spherical arrangement
    function positionDot(dot, index, totalDots) {
      const phi = Math.acos(-1 + (2 * index) / totalDots);
      const theta = Math.sqrt(totalDots * Math.PI) * phi;

      const x = Math.cos(theta) * Math.sin(phi) * 70;
      const y = Math.sin(theta) * Math.sin(phi) * 70;
      const z = Math.cos(phi) * 70;

      dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }

    // Function to position the "scale" text in the center of the sphere
    function positionText(textElement) {
      textElement.style.transform = "translate(-50%, -50%)";
    }

    // Function to create circles for axes
    function createCircles() {
      const axes = ["x", "y", "z"];

      axes.forEach((axis) => {
        const circle = document.createElement("div");
        circle.className = `circle circle-${axis}`;
        globe.appendChild(circle);
      });
    }

    // Create a complete sphere of dots around the globe
    const totalDots = 1000;
    createDots(totalDots);

    // Create circles for axes
    createCircles();
  }, []);

  return (
    <div className="wrapperr">
      <div id="globe-container">
        <div id="globe"></div>
      </div>
    </div>
  );
};

export default Globe;

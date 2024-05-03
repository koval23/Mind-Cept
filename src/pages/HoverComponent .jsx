import React, { useState } from "react";
import "../css/Diagram.css";
const HoverComponent = ({
  bodyText,
  children,
  hoverClassName,
  positionStyles,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  // Стандартные стили для всплывающего окна
  const defaultPositionStyles = {
    position: "absolute",
    border: "1px solid black",
    padding: "10px",
    backgroundColor: "rgba(214, 208, 208, 0.886)",
    boxShadow: "5px 10px 20px 5px rgba(250, 167, 0, 0.5)",

    ...positionStyles, // Переопределяем стандартные стили, если были переданы через пропсы
  };

  return (
    <div style={{ position: "relative" }}>
      {" "}
      {/* Установим relative для контейнера */}
      <div
        className="diagram-style"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          zIndex: "5",
          width: "120px",
          height: "120px",
          borderRadius: "60px",
          textAlign: "center",
          lineHeight: "120px", // Исправлено для вертикального центрирования текста в круге
          cursor: "pointer",
        }}
      >
        {bodyText}
      </div>
      {isHovering && (
        <div
          className={hoverClassName || "my-custom-tooltip"}
          style={defaultPositionStyles}
        >
          {children || "Всплывающее окно с текстом"}
        </div>
      )}
    </div>
  );
};

export default HoverComponent;

import React from "react";
import "./Button.css";

interface IBaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export enum EIntent {
  Solid = "solid",
  Transparent = "transparent",
}

interface IButtonProps extends IBaseProps {
  text: string;
  intent: EIntent;
  onClick?: any;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
      <button
          style={props.style}
          className={`btn-default ${props.className} ${props.intent}`}
          onClick={props.onClick}
      >
        {props.text}
      </button>
  );
};

export default Button;

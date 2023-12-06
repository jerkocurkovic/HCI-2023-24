import { FC, SVGProps } from "react";

const LogoIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 110,
  height = 110,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 226 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-opacity-0"
      {...rest}
    >
        <path fill="url(#a)" d="M0 0h189v205H0z"/>
        <defs>
        <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
            <use href="#b" transform="matrix(.00052 0 0 .00048 0 .039)"/>
         </pattern>
        </defs>
    </svg>

  );
};

export default LogoIcon;
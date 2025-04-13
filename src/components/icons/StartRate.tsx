import * as React from "react";
import { SVGProps } from "react";
const StarRate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.28125 25.75L8.1875 16.25L0.5 10.75H10L13 0.75L16 10.75H25.5L17.8125 16.25L20.7188 25.75L13 19.875L5.28125 25.75Z"
      fill="currentColor"
    />
  </svg>
);
export default StarRate;

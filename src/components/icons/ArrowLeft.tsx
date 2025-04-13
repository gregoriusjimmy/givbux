import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={12}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12L0 6L6 0L7.4 1.45L3.85 5H16V7H3.85L7.4 10.55L6 12Z"
      fill="white"
    />
  </svg>
);
export default ArrowLeft;

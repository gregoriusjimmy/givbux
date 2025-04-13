import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={12}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
      fill="white"
    />
  </svg>
);
export default ArrowRight;

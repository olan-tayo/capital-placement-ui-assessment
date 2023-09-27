import { type IconProps } from "./libs/types";

export const CpIcon = ({
  width,
  height,
  viewBox,
  fill,
  stroke,
  d,
  pathFill,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
    >
      <path
        d={d}
        fill={pathFill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap={strokeLinecap}
        stroke-linejoin={strokeLinejoin}
      />
    </svg>
  );
};

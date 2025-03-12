/* eslint-disable react/prop-types */
import React from "react";
type IProps= React.SVGProps<SVGElement>
const GHIcon = ({width=53,height=36}:IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 53 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.519531 12.2729H52.5195V23.7275H0.519531V12.2729Z" fill="#F9CB38" />
      <path
        d="M44.3945 0H8.64453C3.26009 0 0.519531 4.02955 0.519531 9V12.2727H52.5195V9C52.5195 4.02955 49.779 0 44.3945 0Z"
        fill="#EC1C24"
      />
      <path
        d="M0.519531 26.9998C0.519531 31.9702 3.26009 35.9998 8.64453 35.9998H44.3945C49.779 35.9998 52.5195 31.9702 52.5195 26.9998V23.7271H0.519531V26.9998Z"
        fill="#137A08"
      />
      <path
        d="M26.3391 12.9478L27.9211 16.1755L31.4595 16.6975L28.9009 19.2109L29.5054 22.7561L26.3391 21.0813L23.1736 22.7561L23.7781 19.2109L21.2188 16.6975L24.758 16.1755L26.3391 12.9478Z"
        fill="#25333A"
      />
    </svg>
  );
};

export default GHIcon;

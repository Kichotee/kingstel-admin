import React from "react";
type IProps= React.SVGProps<SVGElement>
// eslint-disable-next-line react/prop-types
const NGIcon = ({width=53,height=36}:IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 53 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.70135 0C3.27926 0 0.519531 4.02955 0.519531 9V27C0.519531 31.9705 3.27926 36 8.70135 36H18.5195V0H8.70135ZM44.7013 0H34.8832V36H44.7013C50.1234 36 52.8832 31.9705 52.8832 27V9C52.8832 4.02955 50.1234 0 44.7013 0Z"
        fill="#128807"
      />
    </svg>
  );
};

export default NGIcon;

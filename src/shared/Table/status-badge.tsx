import React from "react";

const StatusBadge = ({ value }: { value: "successful" | "pending" | "failed"|"approved" }) => {
    const getColor =React.useCallback( () => {
      // eslint-disable-next-line default-case
      switch (value) {
        case "pending":
          return { bgColor: "bg-[#FFF0C2]", color: "text-[#F9CB38]", border: "border-[#F9CB38]" };
        case "failed":
          return { bgColor: "bg-[#FFBFBF]", color: "text-[#EC1C24]", border: "border-[#EC1C24]" };
        case "successful":
          return { bgColor: "bg-[#DDFFDA]", color: "text-[#2FBE22]", border: "border-[#2FBE22]" };
        case "approved":
          return { bgColor: "bg-[#DDFFDA]", color: "text-[#2FBE22]", border: "border-[#2FBE22]" };
      }
    },[value]);
    return (
      <div
        className={`capitalize ${getColor()?.bgColor} ${
          getColor()?.color
        } px-3 py-2 border w-[100px] rounded-[10px] flex items-center justify-center ${getColor()?.border} `}
      >
        {value}
      </div>
    );
  };
  export default React.memo(StatusBadge)
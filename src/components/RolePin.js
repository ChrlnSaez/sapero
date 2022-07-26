import React from "react";

const RolePin = ({ children, role }) => {
  if (role === "user") {
    return (
      <div className="flex items-start">
        <div className="py-1 px-2 bg-green-600 flex items-start rounded-full uppercase">
          <div className="text-xs text-white">{children}</div>
        </div>
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div className="flex items-start">
        <div className="py-1 px-2 bg-orange-600 flex items-start rounded-full uppercase">
          <div className="text-xs text-white">{children}</div>
        </div>
      </div>
    );
  }
};

export default RolePin;

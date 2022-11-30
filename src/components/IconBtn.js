import React from "react";

function IconBtn({ Icon, isActive, color, children, ...props }) {
     const spanclass = children != null ? "mr-1" : ""
     const buttonclass = isActive ? "icon-btn-active" : ""
     const buttoncolor = color || ""
     return (
          <button className={"btn icon-btn " + buttonclass + " " + buttoncolor} {...props}>
               <span className={spanclass}>
                    <Icon />
               </span>
               {children}
          </button>
     );
}

export default IconBtn;

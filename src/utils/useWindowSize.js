import React from "react";

const useWindowSize = props => {
  const [size, setSize] = React.useState([
    window.outerWidth,
    window.outerHeight
  ]);

  React.useLayoutEffect(() => {
    function onResize() {
      setSize([window.outerWidth, window.outerHeight]);
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  });

  return size;
};

export default useWindowSize;

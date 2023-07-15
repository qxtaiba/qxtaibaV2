import React, { useEffect, useRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollbar = container?.querySelector("::-webkit-scrollbar");

      if (container?.scrollTop && container.scrollTop > 0) {
        scrollbar?.style.setProperty("opacity", "1");
      } else {
        scrollbar?.style.setProperty("opacity", "0");
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      {children}
    </div>
  );
};

export default Container;

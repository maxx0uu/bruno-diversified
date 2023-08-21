import React, { createContext, useContext, useState, useEffect } from "react";

interface WindowWidthContextType {
  windowWidth: number;
}

const WindowWidthContext = createContext<WindowWidthContextType | undefined>(
  undefined
);

export const useWindowWidthContext = () => {
  const context = useContext(WindowWidthContext);
  if (!context) {
    throw new Error(
      "useWindowWidthContext must be used within a WindowWidthProvider"
    );
  }
  return context;
};

export function WindowWidthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
}

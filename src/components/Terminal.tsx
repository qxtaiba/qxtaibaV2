import React, {
    createContext,
    useCallback,
    useEffect,
    useRef,
    useState,
  } from "react";

import TerminalPrefix from "./TerminalPrefix";

import {CmdNotFound} from "./styles/Terminal.styled";

export const commands: String[] = ["help", "about", "skills", "github", "linkedin", "email", "resume", "credits"];

const Terminal = () => {
    return (
      <div>
        This is the Terminal component.
      </div>
    );
  }
  
export default Terminal;

  type Term = {
    arg: string[];
    history: string[];
    rerender: boolean;
    index: number;
    clearHistory?: () => void;
  };
  
  export const termContext = createContext<Term>({
    arg: [],
    history: [],
    rerender: false,
    index: 0,
  });
    

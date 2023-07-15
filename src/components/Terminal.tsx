import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { split, trim, find, drop, uniqueId } from "lodash";

import Output from "./Output";
import TerminalPrefix from "./TerminalPrefix";

import {
  CmdNotFound,
  Empty,
  Form,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";

// Move the type and context to separate files
export const commands: string[] = ["help", "about", "banner", "themes", "skills", "github", "linkedin", "email", "resume", "credits"];

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

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState({
    userInputValue: "",
    terminalHistory: [],
    rerender: false,
    autocompleteHints: [],
    commandPointer: -1,
  });

  const { userInputValue, terminalHistory, rerender, autocompleteHints, commandPointer } = state;

  const clearTerminalHistory = () => {
    setState((prevState) => ({
      ...prevState,
      terminalHistory: [],
      autocompleteHints: [],
    }));
  };

  const handleUserInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      rerender: false,
      userInputValue: e.target.value,
    }));
  }, []);

  const handleUserSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      terminalHistory: [userInputValue, ...terminalHistory],
      userInputValue: "",
      rerender: true,
      autocompleteHints: [],
      commandPointer: -1,
    }));
  };

  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      rerender: false,
    }));

    if (e.ctrlKey && e.key === "l") {
      clearTerminalHistory();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, userInputValue, commandPointer]);

  return (
    <>
      <Wrapper ref={containerRef}>
        <Form onSubmit={handleUserSubmission}>
          <label htmlFor="terminal-input">
            <TerminalPrefix />
            <MobileBr />
            <MobileSpan>&#62;</MobileSpan>
          </label>
          <Input
            title="terminal-input"
            type="text"
            id="terminal-input"
            autoComplete="off"
            spellCheck="false"
            autoFocus
            autoCapitalize="off"
            ref={inputRef}
            value={userInputValue}
            onKeyDown={handleKeyDown}
            onChange={handleUserInput}
          />
        </Form>

        {terminalHistory.map((commandHistory, index) => {
          const commandArray = split(trim(commandHistory), " ");
          const isValidCommand = find(commands, (cmd) => cmd === commandArray[0]);
          const contextValue = {
            arg: drop(commandArray),
            history: terminalHistory,
            rerender,
            index,
            clearTerminalHistory,
          };

          return (
            <div key={uniqueId(`${commandHistory}_`)}>
              <div>
                <TerminalPrefix />
                <MobileBr />
                <MobileSpan>&#62;</MobileSpan>
                <span>{commandHistory}</span>
              </div>
              {isValidCommand ? (
                <termContext.Provider value={contextValue}>
                  <Output index={index} cmd={commandArray[0]} />
                </termContext.Provider>
              ) : commandHistory === "" ? (
                <Empty />
              ) : (
                <CmdNotFound>command not found: {commandHistory}</CmdNotFound>
              )}
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Terminal;

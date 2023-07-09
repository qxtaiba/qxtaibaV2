import React, {
    createContext,
    useCallback,
    useEffect,
    useRef,
    useState,
  } from "react";

import Output from "./Output";

import TerminalPrefix from "./TerminalPrefix";
import _ from "lodash";

import {
    CmdNotFound,
    Empty,
    Form,
    Input,
    MobileBr,
    MobileSpan,
    Wrapper,
  } from "./styles/Terminal.styled";

export const commands: string[] = ["help", "about", "skills", "github", "linkedin", "email", "resume", "credits"];

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

    const [userInputValue, setUserInputValue] = useState("");
    // TODO: replace this with a welcome banner command
    const [terminalHistory, setTerminalHistory] = useState<string[]>(["about"]);
    const [rerender, setRerender] = useState(false)
    const [autocompleteHints, setAutocompleteHints] = useState<string[]>([]);
    const [commandPointer, setCommandPointer] = useState(-1);
  
    const clearTerminalHistory = () => {
        setTerminalHistory([]);
        setAutocompleteHints([]);
    }

    const handleUserInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
        setRerender(false);
        setUserInputValue(e.target.value);
    }, [userInputValue]
    );

    const handleUserSubmission = 
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); 
            setTerminalHistory([userInputValue, ...terminalHistory]);  
            setUserInputValue("");
            setRerender(true);
            setAutocompleteHints([]);   
            setCommandPointer(-1);  
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
        setRerender(false);

        if (e.ctrlKey && e.key === "l") {
            clearTerminalHistory();
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        inputRef?.current?.focus();
        }, 1);
        return () => clearTimeout(timer);
    }, [inputRef, userInputValue, commandPointer]);
  


    return (
        <Wrapper ref={containerRef}>   
            <Form onSubmit={handleUserSubmission}>
                <label htmlFor="terminal-input">
                    <TerminalPrefix /> <MobileBr />
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

      {terminalHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const isValidCommand = _.find(commands, (cmd) => cmd === commandArray[0]);
        const contextValue = {
          arg: _.drop(commandArray),
          history: terminalHistory,
          rerender,
          index,
          clearTerminalHistory,
        };
        console.log(isValidCommand)
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div>
              <TerminalPrefix />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span>{cmdH}</span>
            </div>
            {isValidCommand ? (
              <termContext.Provider value={contextValue}>
                <Output index={index} cmd={commandArray[0]} />
              </termContext.Provider>
            ) : cmdH === "" ? (
              <Empty /> 
            ) : (
              <CmdNotFound>
                command not found: {cmdH}
              </CmdNotFound>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Terminal;
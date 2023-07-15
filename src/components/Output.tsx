import About from "./commands/About";
import Banner from "./commands/Banner";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import Themes from "./commands/Themes";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv>Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer>
      {
        {
          about: <About />,
          banner: <Banner />,
          themes: <Themes />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
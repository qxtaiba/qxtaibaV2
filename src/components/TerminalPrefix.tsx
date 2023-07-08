import { User, WebsiteName, Wrapper } from "./styles/TerminalPrefix.styled";

const TerminalPrefix = () => {
  return (
    <Wrapper>
      <User>anon</User>@<WebsiteName>qxtaiba.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TerminalPrefix;
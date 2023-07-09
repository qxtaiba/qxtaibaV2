import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
  } from "../styles/About.styled";
  
  const About: React.FC = () => {
    return (
      <AboutWrapper data-testid="about">
        <p>
          hello <HighlightSpan>world</HighlightSpan>!
        </p>
      </AboutWrapper>
    );
  };
  
  export default About;
import {
  AboutWrapper,
  ProgressBar,
  Link
  } from "../styles/About.styled";
  
  const About: React.FC = () => {
    return (
      <AboutWrapper data-testid="about">
      <div>
        <pre>
          &gt;   Name:         Qutaiba Al-Nuaimy
          <br />
          &gt;   Location:     London, United Kingdom &amp; Abu Dhabi, United Arab Emirates
          <br />
          <br />
          &gt;   English:       []-<ProgressBar>#################################################</ProgressBar>-[]
          <br />
          &gt;   Arabic:        []-<ProgressBar>#################################################</ProgressBar>-[]
          <br />
          <br />
          &gt;   Education:     Electrical and Software Engineering at <Link href="https://nyuad.nyu.edu">NYU(AD)</Link> 
          <br />
          &gt;   Employment:    Forward Deployed Software Engineer at <Link href="https://www.palantir.com">Palantir</Link> 
          <br />
          <br />
        </pre>
      </div>
      </AboutWrapper>
    );
  };
  
  
  export default About;
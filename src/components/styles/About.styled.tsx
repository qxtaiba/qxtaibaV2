import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`;

export const HighlightSpan = styled.span`
  font-weight: 700;
`;

export const HighlightAlt = styled.span`
  font-weight: 700;
`;

export const ProgressBar = styled.span`
  color: #00ff00;
`;

export const Link = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed #cbd5e1;

  &:hover {
    border-bottom-style: solid;
  }
`;

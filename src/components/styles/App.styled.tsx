import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 1500px;
  height: 900px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export const OuterArea = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b1b1e;
  `;


  export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  background-color: #E0E2E5;
  border-radius: 8px 8px 0 0;
`;


export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
`;

export const RedCircle = styled(Circle)`
  background-color: #FF605C;
`;

export const OrangeCircle = styled(Circle)`
  background-color: #FFBD44;
`;

export const GreenCircle = styled(Circle)`
  background-color: #32D74B;
`;

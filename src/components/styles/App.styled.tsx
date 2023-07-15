import styled, { keyframes } from 'styled-components';



// Wrapper styles
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1B1B1E;
`;

const popFade = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Window styles
export const Window = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  height: calc(100vh - 10px);
  max-height: 600px;
  width: 800px;
  padding: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  animation: ${popFade} 0.25s 1 forwards cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

// TitleBar styles
export const TitleBar = styled.div`
  position: relative;
  background-color: #2B2630;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex: 0 0;
  align-items: center;
  color: var(--muted);
  font-size: var(--font-size-header);
  font-family: var(--font-normal);
  font-weight: 900;
  padding: 7px 10px;
  user-select: none;
  -webkit-user-select: none;
`;

// DotHolder styles
export const DotHolder = styled.div`
  display: flex;
  align-items: center; /* Add this line */
`;

// Dot styles
export const Dot = styled.div<{ dotColor: string }>`
  content: '';
  background-color: ${(props) => props.dotColor};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 5px;
`;

// MainContent styles
export const MainContent = styled.div`
  padding: 20px;
  flex: 1 1;
  overflow: hidden scroll;

  background-color: ${({ theme }) => theme.colors.body};

  border-radius: 0px 0px 8px 8px;


	scrollbar-color: transparent transparent;
	scrollbar-width: thin;

	transition: scrollbar-color 0.25s;
	transition-delay: 0.75s;

	&:hover {
		scrollbar-color: gray transparent;
		transition-delay: 0s;
		transition-duration: 0;
	}

	&::-webkit-scrollbar {
		width: 0.5em;
		height: 100%;
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: gray;
		border-radius: 0.5em;
	}
  i {
    font-size: var(--font-size-icon);
  }
`;

// Responsive code
export const ResponsiveWindow = styled(Window)`
  @media only screen and (max-width: 700px), (max-height: 300px) {
    width: 100%;
    height: 100%;
    max-height: unset;
    left: 0;
    top: 0;
  }
`;

export const ResponsiveMainContent = styled(MainContent)`
  @media only screen and (max-width: 700px), (max-height: 300px) {
    padding: 10px;
  }
`;

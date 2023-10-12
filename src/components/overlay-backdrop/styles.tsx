import styled from 'styled-components';

interface OverlayBackdropWrapperProps {
    backgroundColor: string
}
export const OverlayBackdropWrapper = styled.div<OverlayBackdropWrapperProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

import styled from 'styled-components';

export const ToggleCheckBox = styled.input.attrs({ type: "checkbox" })`
  display: none;
  width: 0;
  height: 0;
`;

interface ToggleLabelProps {
    checked: boolean;
    disabledBackgroundColor: string;
    disabledForegroundColor: string;
    enabledBackgroundColor: string;
    enabledForegroundColor: string;
}
export const ToggleLabel = styled.label<ToggleLabelProps>`
  width: 30px;
  min-width: 30px;
  height: 20px;
  display: inline-block;
  background-color: ${(props) => (props.checked ? props.enabledBackgroundColor : props.disabledBackgroundColor)};
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  //box-shadow: 0 0 20px #477a8550;

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: ${(props) => (props.checked ? props.enabledForegroundColor : props.disabledForegroundColor)};
    position: absolute;
    border-radius: 11px;
    top: 2px;
    left: ${(props) => (props.checked ? 12 : 2)}px;
    transition: 0.5s;
  }
`;
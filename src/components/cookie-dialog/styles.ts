import styled from 'styled-components';
import {Colors} from '../../utils/colors'
export const CookieDialogWrapper = styled.div`
  width: 80%;
  max-width: 400px;
  max-height: 60vh;
  background-color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-family: Arial;
`;

export const CookieDialogHeader = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

export const CookieDialogBody = styled.div`
  overflow-y: auto;
`;

export const CookieDialogFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CookieDialogFooterButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const cookieDialogFooterLink = styled.div``;
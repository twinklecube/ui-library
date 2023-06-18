import styled from 'styled-components';
import {Colors} from '../../utils'
export const CookieDialogWrapper = styled.div`
  width: 80%;
  max-width: 400px;
  max-height: 60vh;
  background-color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-family: Arial,serif;
`;

export const CookieDialogHeader = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

export const CookieDialogBody = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CookieDialogBodyLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  
`;

export const CookieDialogFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CookieDialogFooterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const CookieDialogSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CookieDialogAcceptSelectedLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;
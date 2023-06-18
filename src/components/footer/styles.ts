import styled from "styled-components";
import {Colors} from "../../utils";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 0.5rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const FooterCopyRight = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.6rem;
  color: ${Colors.GREY};
`;
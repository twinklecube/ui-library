import styled from "styled-components";
import {Colors} from "../../utils";

export const CookieSettingItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const CookieSettingItemBrief = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CookieSettingItemDescription = styled.div`
  font-size: 12px;
  color: ${Colors.GREY};
  margin: 0.5rem;
  text-align: justify;
  
  & p {
    margin-top: 0.5rem;
  }
`

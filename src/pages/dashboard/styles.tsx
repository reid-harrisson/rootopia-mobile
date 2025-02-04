import styled from "styled-components";
import { COLORS } from "../../consts";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ScrollArea = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 10px 20px;
  height: 50px;
  color: ${COLORS.CHINESE_BLACK}A0;
  width: 100%;
  background-color: ${COLORS.CHINESE_BLACK}40;
  display: flex;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  gap: 10px;
`;

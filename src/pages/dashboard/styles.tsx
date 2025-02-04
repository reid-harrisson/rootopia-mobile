import styled from "styled-components";
import { COLORS } from "../../consts";
import LogoImage from "../../assets/logo.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${COLORS.ONYX};
`;

export const ScrollArea = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: ${COLORS.DARK_JUNGLE_GREEN};
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  border: solid ${COLORS.JET_STREAM};
  border-width: 5px 0 0 0;
  box-shadow: 0 0 10px ${COLORS.CHINESE_BLACK}40;
`;

export const Group = styled.div`
  display: flex;
  gap: 10px;
`;

export const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: ${COLORS.DARK_JUNGLE_GREEN};
  display: flex;
  padding: 0px 30px;
  align-items: center;
  border: solid ${COLORS.JET_STREAM};
  border-width: 0 0 5px 0;
  box-shadow: 0 0 10px ${COLORS.CHINESE_BLACK}40;
`;

export const Link = styled.button`
  border: none;
  padding: none;
  background: transparent;
  color: ${COLORS.RAJAH};
  text-shadow: 0px 3px 3px ${COLORS.CHINESE_BLACK}A0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

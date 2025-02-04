import styled from "styled-components";
import { COLORS } from "../../consts";

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${COLORS.JET_STREAM};
`;

export const SmallAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${COLORS.JET_STREAM};
`;

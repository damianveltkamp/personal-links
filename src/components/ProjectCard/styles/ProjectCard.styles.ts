import styled from "@emotion/styled";

export const ProjectCardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

export const ProjectCardContainer = styled("a")`
  position: relative;
  background: #999;
  padding: 120px;
  color: #fff;
  overflow: hidden;
  border-radius: 10px;
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  & > span {
    transition: 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    & > span {
      transform: scale(1.1);
    }
  }
`;

export const ProjectCardContentContainer = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

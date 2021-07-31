import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 37.5em) {
    align-items: flex-start;
  };
`;

export const ContentsContainer = styled.div`
  width: 60vw;
  height: 80vh;
  border-radius: .5rem;
  background-color: ${props => props.theme.contentColor};
  box-shadow: 0 0 .5rem ${props => props.theme.greyColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${'' /* @include respond(tab-land){
  }; */}

  @media only screen and (max-width: 37.5em) {
    width: 100vw;
    height: 90vh;
  };
`;

export const ToggleSwitch = styled.span`
  background-color: ${props => props.theme.fontColor};
  color: ${props => props.theme.contentColor};
  cursor: pointer;
  ${'' /* padding : .2rem; */}
  height: 3.6rem;
  width: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000rem;
  position: absolute;
  top: 3vh;
  right: 3vw;
  transition: all .5s ease;

  @media only screen and (max-width: 37.5em) {
    top: initial;
    bottom: 1vh;
    right: 1vw;
    height: 2.5rem;
    width: 2.5rem;
  };

  &:hover{
    box-shadow: 0 0 .6rem ${props => props.theme.fontColor};
    transform: scale(1.1);
  }
`;
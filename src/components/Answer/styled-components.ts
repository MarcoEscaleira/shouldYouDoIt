import styled from "styled-components";
import { sizes, pallete } from "~styles/_settings";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${sizes.s} 0 1rem 0;
  max-width: 30rem;

  @media (min-width: ${sizes.desktop_breakpoint}) {
    max-width: 50rem;
  }
`;

export const Title = styled.h1`
  color: ${pallete.lightest};
  font-size: 2rem;
  border-left: 0.3rem solid darken(${pallete.lightest}, 20%);
  border-right: 0.3rem solid darken(${pallete.lightest}, 20%);
  padding-left: ${sizes.m};
  text-align: center;
  text-transform: capitalize;

  @media (min-width: ${sizes.desktop_breakpoint}) {
    font-size: 2.6rem;
  }
`;

export const Image = styled.img`
  width: 30rem;
  height: 25rem;
  margin-bottom: ${sizes.m};

  @media (min-width: ${sizes.desktop_breakpoint}) {
    width: 50rem;
    height: 42rem;
  }
`;

export const CleanButton = styled.button`
  flex-grow: 1;
  background-color: ${pallete.third_dark};
  height: ${sizes.xl};
  color: ${pallete.white};
  border: none;
  border-radius: 0.5rem;
`;

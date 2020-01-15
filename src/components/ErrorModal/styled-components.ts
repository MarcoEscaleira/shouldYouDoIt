import styled, { css } from "styled-components";
import { sizes, pallete } from "~/styles/_settings";

type ContainerProps = {
  isHidden: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${props =>
    props.isHidden &&
    css`
      visibility: hidden;
    `};
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  background-color: ${pallete.fifth_light};
  color: ${pallete.white};
  width: 30rem;
  border-radius: 1rem;
  outline: none;
  padding: ${sizes.s};
  text-align: center;
  word-break: break-all;

  @media (min-width: ${sizes.desktop_breakpoint}) {
    width: 40rem;
  }
`;

export const Title = styled.h1`
  margin: 0 0 ${sizes.m} 0;
`;

export const Text = styled.p`
  font-size: ${sizes.m};
  font-weight: 300;
  margin: 0 0 ${sizes.l} 0;
  word-break: normal;
`;

export const Button = styled.button`
  background-color: ${pallete.third_dark};
  border: none;
  border-radius: 1rem;
  width: 10rem;
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 500;
  padding: ${sizes.s};
  margin: 0 auto;
`;

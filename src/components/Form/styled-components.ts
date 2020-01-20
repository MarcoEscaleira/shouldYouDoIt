import styled, { keyframes } from "styled-components";
// @ts-ignore
import { fadeInLeft, fadeInRight, fadeInUp } from "react-animations";
import { sizes, pallete, normalFont } from "~/styles/_settings";

const titleAnimation = keyframes`${fadeInUp}`;

const inputAnimation = keyframes`${fadeInLeft}`;

const submitAnimation = keyframes`${fadeInRight}`;

export const Container = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 30rem;
  font-family: ${normalFont};

  @media (min-width: ${sizes.desktop_breakpoint}) {
    width: 50rem;
  }
`;

export const Title = styled.h1`
  color: ${pallete.sixth_light};
  font-size: 2.5rem;
  animation: 2s ${titleAnimation};

  @media (min-width: ${sizes.desktop_breakpoint}) {
    font-size: 3rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Input = styled.input`
  height: ${sizes.xl};
  flex-grow: 1;
  background-color: ${pallete.second_dark};
  border: none;
  border-radius: 1rem;
  color: ${pallete.white};
  font-size: 1.3rem;
  padding: ${sizes.s};
  margin-bottom: ${sizes.s};
  outline: none;
  font-family: ${normalFont};
  animation: 1s ${inputAnimation};
`;

export const Submit = styled.button`
  height: ${sizes.l};
  flex-grow: 1;
  background-color: ${pallete.fourth_dark};
  border: none;
  border-radius: 1rem;
  color: ${pallete.white};
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
  margin-bottom: 1.5rem;
  outline: none;
  animation: 1s ${submitAnimation};
`;

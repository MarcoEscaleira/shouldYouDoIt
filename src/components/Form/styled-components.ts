import styled from "styled-components";
import { sizes, pallete } from "~/styles/_settings";

export const Container = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 30rem;

  @media (min-width: ${sizes.desktop_breakpoint}) {
    width: 50rem;
  }
`;

export const Title = styled.h1`
  color: ${pallete.sixth_light};
  font-size: 2.5rem;

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
`;

// @ts-nocheck
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pallete, sizes, normalFont } from "~/styles/_settings";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${sizes.m};
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${normalFont};
`;

export const Label = styled.p`
  font-size: 8rem;
  color: ${pallete.lightest};
`;

export const Text = styled.p`
  font-size: ${sizes.m};
  text-align: center;
  color: ${pallete.second_light};
  margin-bottom: ${sizes.xl};
`;

export const Button = styled(Link)`
  align-items: center;
  color: ${pallete.fifth_light};
  width: 10rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${pallete.second_dark};
`;

import styled from "styled-components";
import {
  sizes,
  pallete,
  footerHeight,
  footerDesktopHeight
} from "~/styles/_settings";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${footerHeight};

  @media (min-width: ${sizes.desktop_breakpoint}) {
    height: ${footerDesktopHeight};
  }
`;

export const Text = styled.p`
  text-align: center;
  color: ${pallete.second_light};
  align-items: center;
  font-size: 1.3rem;

  @media (min-width: ${sizes.desktop_breakpoint}) {
    font-size: ${sizes.m};
  }
`;

export const NameLink = styled.a`
  text-decoration: underline;
  letter-spacing: 0.15rem;
  color: ${pallete.second_light};
  font-weight: 500;
`;

export const Heart = styled.span`
  color: red;
`;

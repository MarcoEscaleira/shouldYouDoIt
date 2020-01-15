// @ts-nocheck
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
  pallete,
  sizes,
  normalFont,
  headerHeight,
  headerDesktopHeight
} from "~/styles/_settings";

export const Container = styled.header`
  width: 100%;
  font-family: ${normalFont};
  background-color: rgba(29, 154, 108, 0.3);
  padding: 0 1.5rem;
  height: ${headerHeight};

  @media (min-width: ${sizes.desktop_breakpoint}) {
    height: ${headerDesktopHeight};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: ${sizes.m};
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
`;

type HeaderLink = {
  isTitle?: boolean;
  isNavLink?: boolean;
};

const linkBorder = `${pallete.fifth_light} 0.1rem solid`;

export const Link = styled(NavLink)<HeaderLink>`
  ${({ isTitle }) =>
    isTitle &&
    css`
      font-size: 1.6rem;
      font-weight: 300;
      color: ${pallete.fifth_light};

      @media (min-width: ${sizes.desktop_breakpoint}) {
        font-size: 2.2rem;
      }
    `}
  ${({ isNavLink }) =>
    isNavLink &&
    css`
    font-size: ${sizes.s}
    margin: 0 1rem;
    padding: 0.6rem 0;
    letter-spacing: 0.2rem;
    color: ${pallete.lightest};

    &:hover {
      border-top: ${linkBorder};
      border-bottom: ${linkBorder};
    }

    @media (min-width: ${sizes.desktop_breakpoint}) {
      font-size: 1.3rem;
    }
  `}

  &:last-of-type {
    margin-right: 0;
  }
`;

export const TitleSpan = styled.span`
  color: ${pallete.second_light};
  font-weight: 600;
`;

import styled from 'styled-components';
import { sizes, pallete } from '../../styles/_settings';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 0 1rem 0;
`;

export const Title = styled.h1`
  margin: ${sizes.m} 0;
  text-align: center;
  color: ${pallete.sixth_light};
  letter-spacing: 0.2rem;
  font-size: ${sizes.l};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: ${sizes.desktop_breakpoint}) {
    flex-direction: row;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0px auto;
  padding: 10px;
  max-width: 78rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SubTitle  = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${pallete.second_light};
  border-bottom: ${pallete.middle_color} solid 0.1rem;
  padding-bottom: ${sizes.s};
  margin: 0 2rem;
`;

export const DoIt  = styled.div``;

export const DontDoIt  = styled.div``;

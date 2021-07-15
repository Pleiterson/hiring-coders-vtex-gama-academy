import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

// criando uma constante Title que vai receber a tag <h1> e dar estilo a ela
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333333;
`;

// criando uma constante List que vai receber a tag <ul> e dar estilo a ela
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

// criando uma constante ListItem que vai receber a tag <li> e dar estilo a ela
export const ListItem = styled.li`
  margin: .5rem 0;
  background-color: #000;
  color: #fff;
  padding: .5rem
`;

// criando uma constante LinkHome que vai receber a tag <Link> do react-router-dom e dar estilo a ela
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  padding: .5rem 0;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-family: sans-serif;
`;
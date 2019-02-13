import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import { SidenavItem } from './SidenavItem/SidenavItem'

export const Sidenav = () => {
  return (
    <Wrapper>
      <NavLink exact to="/"><Logo src="/assets/images/logo_10x.png" alt="logo" /></NavLink>
      <ItemsWrapper>
        <ul>
          <li><StyledLink exact to="/" activeClassName="active">Home</StyledLink></li>
          <li><StyledLink exact to="/about" activeClassName="active">About</StyledLink></li>
          <li><StyledLink exact to="/contact" activeClassName="active">Contact</StyledLink></li>
        </ul>
      </ItemsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 20vw;
  /* border: 1px solid #000; */
  overflow: hidden;

  .active {
    color: orange;

    :hover {
      opacity: 1;
      cursor: default;
    }
  }
`

const ItemsWrapper = styled.div`
  /* margin: 0 auto; */
  /* text-align: center; */
  margin-left: 50%;
  transform: translateX(-50%);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 1.25em;
      font-weight: 400;
      margin-bottom: 1.5em;

      a {
        color: #000;

        :hover {
          opacity: .5;
        }
      }
    }
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
`

const Logo = styled.img`
  width: 50%;
  margin: 5em 0 4em 0;
  margin-left: 50%;
  transform: translateX(-50%);
`
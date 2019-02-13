import React from 'react'
import styled from 'styled-components'

export const HeroImage = (props) => {
  const StyledHeroImage = styled.div`
      position: absolute;
      top: 0;
      right: 0;
      background-image: url("${props.currentHeroImage}");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    `
  return (
    <StyledHeroImage />
  )
}
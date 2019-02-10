import React from 'react'
import styled from 'styled-components'


export const ImageDrawer = (props) => {
  const ToggleArrow = styled.div`
    text-align: right;
    img {
      transform: ${props.showImageDrawer ? 'rotate(90deg)' : 'rotate(-90deg)'};
      width: 24px;
      margin: 1em 2em;
      :hover {
        cursor: pointer;
      }
      svg {
        box-shadow: 0 1px 4px rgba(0,0,0,0.8);
      }
    }
  `

  const images = props.allImages.map(image => (
    <ImageItem src={image} alt={image} onClick={() => props.handleImageChange(image)} />
  ))

  return (
    <Wrapper>
      <ToggleArrow onClick={props.handleShowImageDrawerChange}>
        <img src="/assets/icons/arrow.svg" alt="arrow" />
      </ToggleArrow>
      {
        props.showImageDrawer ?
          <ImagesWrapper>
            {images}
          </ImagesWrapper>
          : null
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
`

const ImageItem = styled.img`
  height: 16vh;
  margin: 0 .25em .5em 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.8);

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  :hover {
    cursor: pointer;
  }
`
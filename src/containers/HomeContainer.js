import React, { Component } from 'react'
import styled from 'styled-components'

import { ImageDrawer } from '../components/ImageDrawer/ImageDrawer'

import { getImages } from '../actions/images'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentHeroImage: '',
      allImages: [],
      showImageDrawer: true
    }

    this.getAllImages = this.getAllImages.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleShowImageDrawerChange = this.handleShowImageDrawerChange.bind(this)
  }

  componentDidMount() {
    this.getAllImages()
  }

  getAllImages() {
    const images = getImages(require.context('../../public/assets/images/'))
    console.log('images', images)
    this.setState({
      currentHeroImage: images[0],
      allImages: images
    })
  }

  handleImageChange(image) {
    this.setState({
      currentHeroImage: image
    })
  }

  handleShowImageDrawerChange() {
    this.setState({
      showImageDrawer: !this.state.showImageDrawer
    })
  }

  render() {
    const HeroImage = styled.div`
      position: absolute;
      top: 0;
      right: 0;
      background-image: url("${this.state.currentHeroImage}");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    `

    return (
      <Wrapper>
        <HeroImage />
        <ImageDrawer allImages={this.state.allImages}
          handleImageChange={this.handleImageChange}
          handleShowImageDrawerChange={this.handleShowImageDrawerChange}
          showImageDrawer={this.state.showImageDrawer}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`



export default HomeContainer
import React, { Component } from 'react'
import styled from 'styled-components'

// import { ImageDrawer } from '../components/ImageDrawer/ImageDrawer'
// import { HeroImage } from '../components/HeroImage/HeroImage'
import { Sidenav } from '../components/Sidenav/Sidenav'

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
    return (
      <Wrapper>
        HomeContainer
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

export default HomeContainer
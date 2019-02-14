import React, { Component } from 'react'
import styled from 'styled-components'

class CategoryContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        CategoryContainer {this.props.category}
      </div>
    )
  }
}

export default CategoryContainer
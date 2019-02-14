import React, { Component } from 'react'
import styled from 'styled-components'
class ContactContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ContactWrapper>
        <CenteredText>
          Get in Touch
        </CenteredText>
        <FormWrapper>
          <ContactForm>
            <TextLabel>E-mail Address</TextLabel>
            <InputField placeholder="email address"/>
            <TextLabel>Phone Number</TextLabel>
            <InputField placeholder="phone number"/>
            <TextLabel>How can we help?</TextLabel>
            <TextAreaField placeholder="message"/>
          </ContactForm>
          <div>
            <img height="200px" width="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"/>
            <h3>Venkat Uppala</h3>
            <UnderlineText>venkat@aurumfx.com</UnderlineText>
            <p>Washington, D.C.</p>
          </div>
        </FormWrapper>
      </ContactWrapper>
    )
  }
}

const ContactWrapper = styled.div`
  width: 70vw;
  margin-top: 7.5rem;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`

const UnderlineText = styled.p`
  text-decoration: underline;
`

const InputField = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 20rem;
  margin-bottom: 1.5rem;
  border: 1px solid gray;
`

const TextAreaField = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  width: 20rem;
  margin-bottom: 1.5rem;
  border: 1px solid gray;
`

const CenteredText = styled.h1`
  text-align: center;
`

const TextLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
`

const ContactForm = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default ContactContainer
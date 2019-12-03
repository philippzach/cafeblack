import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import styled from '@emotion/styled'

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Top = styled.h3`
  padding-top: 3em;
  font-size: 2.2em;
  padding-left: 15px;
  font-family: didot;
`
const Bottom = styled.h3`
  margin: 0;
  padding-bottom: 1em;
  padding-left: 15px;
  font-family: didot;
`

const Form = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Container = styled.div`
  max-width: 45em;
  padding-bottom: 5em;
`
const Button = styled.button`
  color: black;
  border: solid black 2px;
  box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 8px;
  padding: 1em 4.5em;
  font-family: 'Didot';
  cursor: pointer;
  text-transform: uppercase;
  font-style: normal;
  margin: 10px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px;
    background-color: black;
    color: white;
  }
  &:focus {
    outline: none;
  }
`
const InputField = styled.input`
  padding: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 8px;
  border: solid black 2px;
  color: black;
  font-size: 1.1em;
  font-family: 'didot';
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px;
    outline: none;
  }
`

const CustomForm = ({ status, message, onValidated }) => {
  let email
  let name
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    })

  return (
    <div>
      {status === 'sending' && <div style={{ color: 'blue', paddingRight: '15px' }}>Senden...</div>}
      {status === 'error' && (
        <div style={{ color: 'red', paddingRight: '15px' }}>Bitte versuche es später nochmals</div>
      )}
      {status === 'success' && (
        <div style={{ color: 'green', paddingRight: '15px' }}>Erfolg! Vielen Dank fürs abonnieren</div>
      )}
      <Form>
        <InputField ref={node => (name = node)} type="text" placeholder="Name" />
        <br />
        <InputField ref={node => (email = node)} type="email" placeholder="Email Addresse" />
        <br />
        <Button id="cta-subscribe-submit" onClick={submit} className="button-blue">
          Abonnieren
        </Button>
      </Form>
    </div>
  )
}

class Demo extends Component {
  render() {
    const url = 'https://black1966.us4.list-manage.com/subscribe/post?u=90f5effd889ac28f50522547b&amp;id=26ecd6fffa'
    return (
      <Background>
        <Container>
          <Top>Bleibe auf immer dem laufenden!</Top>
          <Bottom>Erhalte Neuigkeiten und Promos</Bottom>
          <div>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
              )}
            />
          </div>
        </Container>
      </Background>
    )
  }
}

export default Demo

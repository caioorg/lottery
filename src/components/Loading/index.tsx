import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from './styles'

const Loading: React.FC = () => {
  return (
    <Container>
      <ReactLoading type='spin' color='#FFFFFF' />
    </Container>
  )
}

export default Loading;
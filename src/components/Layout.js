import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Footer from '/components/Footer/Footer'
import Header from '/components/Header/Header'
const LayoutContainer = styled.div`
 
`
const ContainerContent = styled.div`
 
`
export default class Layout extends PureComponent {
  render () {
    return (
      <LayoutContainer className='layout'>
        <Header />
        <ContainerContent className='main-container'>
          {this.props.children}
        </ContainerContent>
        <Footer />
      </LayoutContainer>
    )
  }
}

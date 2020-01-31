import React from 'react'
import styled from 'styled-components'

const ContainerErrorPage = styled.div`
margin: 70px auto 0px;
max-width: 650px;
@media (min-width: 768px) {
    margin: 130px auto 0px;
}
`
const ImgNotFound = styled.img`
margin: 0px auto;
display: block;
@media (min-width: 786px) {
    float: left;
}
`
const DivContainerText = styled.div`
margin: 0 15px;
padding: 20px;
max-width: 500px;
text-align: center;
padding-bottom: 60px;
@media (min-width: 768px) {
    float: right;
    padding: 12px;
    text-align: left;
    padding-bottom: 60px;
}
`
const DivText = styled.div`
color: #292a2a;
font-size: 38px;
font-weight: 600;
margin-bottom: 15px;
`
const DivSubtext = styled.div`
color: #b0b0b0;
font-size: 14px;
font-weight: 600;
`

class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <div className='row'>
        <ContainerErrorPage>
          <ImgNotFound src='/static/coin_magnifying_glass.gif' alt='404' />
          <DivContainerText>
            {this.props.statusCode
              ? (<DivText>Sorry we couldn't find the page you're looking for.</DivText>)
              : (<DivText>'An error occurred on client.'</DivText>)}
            <DivSubtext>Please try retyping the address or just head back to our <a href='/'>homepage</a></DivSubtext>
          </DivContainerText>
        </ContainerErrorPage>
      </div>
    )
  }
}

export default Error

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const DivContainerAbout = styled.div`
width: 100%;
border: 1px solid #e7e7e7;
box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.07);
border-radius: 3px;
background-color: white;
padding: 25px;
@media (max-width: 1000px) {
  margin-top: 30px;
}
`
const RowAbout = styled.div`
@media (max-width: 1000px) {
  padding-left: 10px;
  padding-right: 10px;
}
`
const H2Title = styled.h2`
font-size: 16px;
font-weight: 700;
color: #505050;
`
const DivContentAbout = styled.div`
`
const P = styled.p`
margin: 0 0 18px;
line-height: 23px;
font-size: 14px;
`
const About = () => {
  const contentDescription = 'Kioloa is a free website that helps consumer find the best available discount coupon for your shopping!'
  return (
    <RowAbout className='row'>
      <Helmet>
        <title>About Kioloa</title>
        <meta name='description' content={contentDescription} />
      </Helmet>
      <div className='col-sm-10' />
    </RowAbout>
  )
}
export default About

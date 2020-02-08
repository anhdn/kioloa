import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderComponent = styled.header`
  top: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  z-index: 100;
  padding: 0px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  justify-content: center;
`
const ImgLogo = styled.img`
  width: 150px;
  margin-top: 10px;
`

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      isLogin: false
    }
  }

  componentWillReceiveProps () {
    this.setState({
      show: false,
      isLogin: true
    })
  }

  handleOnClick = () => {
    if (this.state.show) {
      this.setState({
        show: false
      })
    } else {
      this.setState({
        show: true
      })
    }
  };

  render () {
    return (
      <HeaderComponent>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-5'>
              <Link href='/'>
                <ImgLogo src='./static/logo.svg' alt='Logo' />
              </Link>
            </div>
            <div className='col-lg-3 col-3' />
          </div>
        </div>
      </HeaderComponent>
    )
  }
}
export default Header

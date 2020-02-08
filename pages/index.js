import React from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Figure } from 'react-bootstrap'

class Index extends React.Component {
  render () {
    return (
      <>
        <div>
          <div className='hero-wrap js-fullheight'
            style={{ backgroundImage: "url('./static/eventalk/images/banner.jpg')" }}>
            <div className='overlay' />
            <div className='container'>
              <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-start'
                data-scrollax-parent='true'>
                <div className='col-xl-10 ftco-animate' data-scrollax=" properties: { translateY: '70%' }">
                  <h1 className='mb-4'
                    data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Pikn<span>wash</span>
                  </h1>
                  <p className='mb-4' data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We pick & wash your clothes from anywhere in HCMC.</p>
                  <Row>
                    <Col lg= "6" >
                      <Row>
                        <Col>
                          <Figure className='text-center'>
                            <Figure.Image 
                            width={80}
                            height={80}
                            alt="Pick up & Delivery"
                            src ="./static/icon/box.svg">
                            </Figure.Image>
                            <Figure.Caption>
                              Pick up & Delivery
                            </Figure.Caption>
                          </Figure>
                        </Col>
                        <Col>
                          <Figure className='text-center'>
                              <Figure.Image 
                              width={80}
                              height={80}
                              alt="Fast turnaround"
                              src ="./static/icon/24-hours-delivery.svg">
                              </Figure.Image>
                              <Figure.Caption>
                                Fast turnaround
                              </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                          <Figure className='text-center'>
                              <Figure.Image 
                              width={80}
                              height={80}
                              alt="English"
                              src ="./static/icon/operator-avatar.svg">
                              </Figure.Image>
                              <Figure.Caption>
                                English
                              </Figure.Caption>
                            </Figure>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <Button variant="primary" size="lg" block>Book now</Button>
                      <Button variant="outline-primary" block> Track your order</Button> 
                    </Col>     
                  </Row>                 
                </div>
              </div>
            </div>
          </div>

          <section className='ftco-section bg-light'>
            <div className='container'>
              <div className='row justify-content-center mb-5 pb-3'>
                <div className='col-md-7 heading-section ftco-animate text-center'>
                  <span className='subheading'>Pricing Tables</span>
                  <h2 className='mb-1'><span>Our</span> Pakage</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4 ftco-animate'>
                  <div className='block-7'>
                    <div className='text-center'>
                      <h2 className='heading'>Small Standard</h2>
                      <span className='price'><sup>đ</sup> <span className='number'>200k</span></span>
                      <h3 className='heading-2 my-4'>Returned in 24hrs</h3>
                      <ul className='pricing-text mb-5'>
                        <li>5-8 shirts / jackets</li>
                        <li>2-3 pairs of jeans / trousers</li>
                      </ul>
                      <a href='#' className='btn btn-primary d-block px-2 py-3'>Buy Pakage</a>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 ftco-animate'>
                  <div className='block-7'>
                    <div className='text-center'>
                      <h2 className='heading'>Medium Standard</h2>
                      <span className='price'><sup>đ</sup> <span className='number'>200k</span></span>
                      <h3 className='heading-2 my-4'>Returned in 24hrs</h3>
                      <ul className='pricing-text mb-5'>
                        <li>10-15 shirts / jackets</li>
                        <li>4-5 pairs of jeans / trousers</li>
                      </ul>
                      <a href='#' className='btn btn-primary d-block px-2 py-3'>Buy Pakage</a>
                    </div>
                  </div>
                </div>
                
                <div className='col-md-4 ftco-animate'>
                  <div className='block-7'>
                    <div className='text-center'>
                      <h2 className='heading'>Large</h2>
                      <span className='price'><sup>đ</sup> <span className='number'>200k</span></span>
                      <h3 className='heading-2 my-4'>Returned in 24hrs</h3>
                      <ul className='pricing-text mb-5'>
                        <li>>15 shirts / jackets</li>
                        <li>>5 pairs of jeans / trousers</li>
                      </ul>
                      <a href='#' className='btn btn-primary d-block px-2 py-3'>Buy Ticket</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
         
          <section className='ftco-section-parallax'>
            <div className='parallax-img d-flex align-items-center'>
              <div className='container'>
                <div className='row d-flex justify-content-center'>
                  <div className='col-md-7 text-center heading-section heading-section-white ftco-animate'>
                    <h2>Track your order</h2>
                    <p>Keep track of your clothes with just a simple click.</p>
                    <div className='row d-flex justify-content-center mt-5 mb-5'>
                      <div className='col-md-8'>
                        <form action='#' className='subscribe-form'>
                          <div className='form-group d-flex'>
                            <input type='text' className='form-control' placeholder='Enter your phone number' />
                            <input type='submit' value='Show my order' className='submit px-3' />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='ftco-section testimony-section'>
            <div className='container'>
              <div className='row justify-content-center mb-5 pb-3'>
                <div className='col-md-7 text-center heading-section ftco-animate'>
                  <span className='subheading'>Testimonial</span>
                  <h2 className='mb-4'><span>Happy</span> Clients</h2>
                </div>
              </div>
              <div className='row ftco-animate'>
                <div className='col-md-12'>
                  <div className='carousel-testimony owl-carousel ftco-owl'>
                    <div className='item'>
                      <div className='testimony-wrap text-center py-4 pb-5'>
                        <div className='user-img mb-4'
                          style={{ backgroundImage: 'url(./static/eventalk/images/person_1.jpg)' }}>
                          <span className='quote d-flex align-items-center justify-content-center'>
                            <i className='icon-quote-left' />
                          </span>
                        </div>
                        <div className='text'>
                          <p className='mb-4'>Quick and easy booking, return on time as expected.</p>
                          <p className='name'>Roger Scott</p>
                        </div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='testimony-wrap text-center py-4 pb-5'>
                        <div className='user-img mb-4'
                          style={{ backgroundImage: 'url(./static/eventalk/images/person_2.jpg)' }}>
                          <span className='quote d-flex align-items-center justify-content-center'>
                            <i className='icon-quote-left' />
                          </span>
                        </div>
                        <div className='text'>
                          <p className='mb-4'>They pick up at our hotel and deliver at the time we want. Seamless service. Would use again if they have at other cities too.</p>
                          <p className='name'>Roger Scott</p>
                        </div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='testimony-wrap text-center py-4 pb-5'>
                        <div className='user-img mb-4'
                          style={{ backgroundImage: 'url(./static/eventalk/images/person_3.jpg)' }}>
                          <span className='quote d-flex align-items-center justify-content-center'>
                            <i className='icon-quote-left' />
                          </span>
                        </div>
                        <div className='text'>
                          <p className='mb-4'>Much easy picking their offers thanks to items count. English supporting staff. Paid in VND only.</p>
                          <p className='name'>Roger Scott</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}
Index.propTypes = {}

export default connect(mapStateToProps, {})(Index)

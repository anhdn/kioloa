import React from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Figure } from 'react-bootstrap'

class Index extends React.Component {
  render () {
    return (
      <>
        <div>
          <div className='hero-wrap js-fullheight'
            style={{ backgroundImage: "url('./static/eventalk/images/bg_1.jpg')" }}>
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
                  <h2 className='mb-1'><span>Our</span> Ticket Pricing</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4 ftco-animate'>
                  <div className='block-7'>
                    <div className='text-center'>
                      <h2 className='heading'>Personal</h2>
                      <span className='price'><sup>$</sup> <span className='number'>85</span></span>
                      <span className='excerpt d-block'>per Month</span>

                      <h3 className='heading-2 my-4'>Enjoy All The Features</h3>

                      <ul className='pricing-text mb-5'>
                        <li>Conference Seats</li>
                        <li>Free Wifi</li>
                        <li>Coffee Breaks</li>
                        <li>Lunch</li>
                        <li>Workshops</li>
                        <li>One Speakers</li>
                        <li>Papers</li>
                      </ul>

                      <a href='#' className='btn btn-primary d-block px-2 py-3'>Buy Ticket</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 ftco-animate'>
                  <div className='block-7'>
                    <div className='text-center'>
                      <h2 className='heading'>Small Team</h2>
                      <span className='price'><sup>$</sup> <span className='number'>200</span></span>
                      <span className='excerpt d-block'>per Month</span>

                      <h3 className='heading-2 my-4'>Enjoy All The Features</h3>

                      <ul className='pricing-text mb-5'>
                        <li>Conference Seats</li>
                        <li>Free Wifi</li>
                        <li>Coffee Breaks</li>
                        <li>Lunch</li>
                        <li>Workshops</li>
                        <li>One Speakers</li>
                        <li>Papers</li>
                      </ul>

                      <a href='#' className='btn btn-primary d-block px-2 py-3'>Buy Ticket</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 ftco-animate'>
                  <div className='block-7'>
                    <div className='text-center'>
                      <h2 className='heading'>Family Pack</h2>
                      <span className='price'><sup>$</sup> <span className='number'>499</span></span>
                      <span className='excerpt d-block'>per Month</span>

                      <h3 className='heading-2 my-4'>Enjoy All The Features</h3>

                      <ul className='pricing-text mb-5'>
                        <li>Conference Seats</li>
                        <li>Free Wifi</li>
                        <li>Coffee Breaks</li>
                        <li>Lunch</li>
                        <li>Workshops</li>
                        <li>One Speakers</li>
                        <li>Papers</li>
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
                    <h2>Subcribe to our Newsletter</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live
                      the blind texts. Separated they live in</p>
                    <div className='row d-flex justify-content-center mt-4 mb-4'>
                      <div className='col-md-8'>
                        <form action='#' className='subscribe-form'>
                          <div className='form-group d-flex'>
                            <input type='text' className='form-control' placeholder='Enter email address' />
                            <input type='submit' value='Subscribe' className='submit px-3' />
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
                          <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia
                            and
                            Consonantia, there live the blind texts.</p>
                          <p className='name'>Roger Scott</p>
                          <span className='position'>Marketing Manager</span>
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
                          <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia
                            and
                            Consonantia, there live the blind texts.</p>
                          <p className='name'>Roger Scott</p>
                          <span className='position'>Interface Designer</span>
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
                          <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia
                            and
                            Consonantia, there live the blind texts.</p>
                          <p className='name'>Roger Scott</p>
                          <span className='position'>UI Designer</span>
                        </div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='testimony-wrap text-center py-4 pb-5'>
                        <div className='user-img mb-4'
                          style={{ backgroundImage: 'url(./static/eventalk/images/person_1.jpg)' }}>
                          <span className='quote d-flex align-items-center justify-content-center'>
                            <i className='icon-quote-left' />
                          </span>
                        </div>
                        <div className='text'>
                          <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia
                            and
                            Consonantia, there live the blind texts.</p>
                          <p className='name'>Roger Scott</p>
                          <span className='position'>Web Developer</span>
                        </div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='testimony-wrap text-center py-4 pb-5'>
                        <div className='user-img mb-4'
                          style={{ backgroundImage: 'url(./static/eventalk/images/person_1.jpg)' }}>
                          <span className='quote d-flex align-items-center justify-content-center'>
                            <i className='icon-quote-left' />
                          </span>
                        </div>
                        <div className='text'>
                          <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia
                            and
                            Consonantia, there live the blind texts.</p>
                          <p className='name'>Roger Scott</p>
                          <span className='position'>System Analyst</span>
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

import React from 'react'
import { connect } from 'react-redux'
import { Row,Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import OrderForm from 'components/order-form'
import PropTypes from 'prop-types'
import { createOrder } from 'actions/order'
class CreateOrder extends React.Component {

  static async getInitialProps (ctx) {
    console.log('getInitialProps ==> ')
    createOrder()
  }
  submit = values =>{
    console.log(values)
  }
  render () {
    return (
      <section className='order-form my-4 mx-4'>
        <div className='container pt-4'>
          <Row>
            <Col md={6} sm={12}>
              <OrderForm onSubmit={this.submit}></OrderForm>
            </Col>
            <Col md={6} sm={12} className='mt-3'>
              <Card>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>
                    My cart
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="text-left">
                    Pakage's price: 50.000 VND
                  </ListGroupItem>
                  <ListGroupItem>
                    Delivery: 50.000 VND
                  </ListGroupItem>
                  <ListGroupItem>
                    <b>Total : 100.000 VND</b>
                  </ListGroupItem>
                </ListGroup>

              </Card>
            </Col>
          </Row>

        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
CreateOrder.propTypes = {
  createOrder: PropTypes.func.isRequired

}

export default connect(mapStateToProps, {
  createOrder
})(CreateOrder)

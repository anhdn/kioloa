import React from 'react'
import { connect } from 'react-redux'
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
          <OrderForm onSubmit={this.submit}></OrderForm>
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

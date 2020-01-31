import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createOrder } from 'actions/order'

class CreateOrder extends React.Component {
  static async getInitialProps (ctx) {
    console.log('getInitialProps ==> ')
    createOrder()
  }

  render () {
    return (

      <section className='order-form my-4 mx-4'>
        <div className='container pt-4'>

          <div className='row'>
            <div className='col-12'>
              <h1>You can see my Order Form</h1>
              <span>with some explanation below</span>
              <hr className='mt-1' />
            </div>
            <div className='col-12'>

              <div className='row mx-4'>
                <div className='col-12 mb-2'>
                  <label className='order-form-label'>Name</label>
                </div>
                <div className='col-12 col-sm-6'>
                  <input className='order-form-input' placeholder='First' />
                </div>
                <div className='col-12 col-sm-6 mt-2 mt-sm-0'>
                  <input className='order-form-input' placeholder='Last' />
                </div>
              </div>

              <div className='row mt-3 mx-4'>
                <div className='col-12'>
                  <label className='order-form-label'>Type of thing you want to order</label>
                </div>
                <div className='col-12'>
                  <input className='order-form-input' placeholder=' ' />
                </div>
              </div>

              <div className='row mt-3 mx-4'>
                <div className='col-12'>
                  <label className='order-form-label'>Another type of thing you want to order</label>
                </div>
                <div className='col-12'>
                  <input className='order-form-input' placeholder=' ' />
                </div>
              </div>

              <div className='row mt-3 mx-4'>
                <div className='col-12'>
                  <label className='order-form-label' htmlFor='date-picker-example'>Date</label>
                </div>
                <div className='col-12'>
                  <input
                    className='order-form-input datepicker'
                    placeholder='Selected date' type='text'
                    id='date-picker-example' />
                </div>
              </div>

              <div className='row mt-3 mx-4'>
                <div className='col-12'>
                  <label className='order-form-label'>Adress</label>
                </div>
                <div className='col-12'>
                  <input className='order-form-input' placeholder='Street Address' />
                </div>
                <div className='col-12 mt-2'>
                  <input className='order-form-input' placeholder='Street Address Line 2' />
                </div>
                <div className='col-12 col-sm-6 mt-2 pr-sm-2'>
                  <input className='order-form-input' placeholder='City' />
                </div>
                <div className='col-12 col-sm-6 mt-2 pl-sm-0'>
                  <input className='order-form-input' placeholder='Region' />
                </div>
                <div className='col-12 col-sm-6 mt-2 pr-sm-2'>
                  <input className='order-form-input' placeholder='Postal / Zip Code' />
                </div>
                <div className='col-12 col-sm-6 mt-2 pl-sm-0'>
                  <input className='order-form-input' placeholder='Country' />
                </div>
              </div>

              <div className='row mt-3 mx-4'>
                <div className='col-12'>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' name='validation' id='validation' value='1' />
                    <label htmlFor='validation' className='form-check-label'>I know what I need to know</label>
                  </div>
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col-12'>
                  <button type='button' id='btnSubmit' className='btn btn-dark d-block mx-auto btn-submit'>Submit
                  </button>
                </div>
              </div>

            </div>
          </div>
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

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, FormControl, Button, Col} from 'react-bootstrap'

const FieldInput = ({ input, meta, type, placeholder, min, max }) => {
  return (
      <FormControl
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          value={input.value}
          onChange={input.onChange} />
  )
}

let OrderForm = props => {
    const { handleSubmit } = props
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Label>
          Pick up
        </Form.Label>
        <Form.Group controlId="pick-up">
          <Form.Row>
            <Col>
              <Field 
                name="pick-up-city"
                component={FieldInput}
                placeholder ="City"
              >
              </Field>
            </Col>
            <Col>
              <Field 
                name="pick-up-state"
                component={FieldInput}
                placeholder ="State"
              >
              </Field>
            </Col>
          </Form.Row>
        </Form.Group> 
        <Form.Row>
            <Col>
              <Field
                name="pick-up-address"
                component={FieldInput}
                placeholder ="Address">
              </Field>
            </Col>   
        </Form.Row>
        <hr>
        </hr>
        <Form.Label>
          Delivery
        </Form.Label>
        <Form.Group controlId="delivery">
          <Form.Row>
            <Col>
              <Field 
                name="city"
                component={FieldInput}
                placeholder ="City"
              >
              </Field>
            </Col>
            <Col>
              <Field 
                name="state"
                component={FieldInput}
                placeholder ="State"
              >
              </Field>
            </Col>
          </Form.Row>
        </Form.Group> 
        <Form.Group>
            <Field
              name="address"
              component={FieldInput}
              placeholder ="Address">
            </Field>
        </Form.Group>
        <hr>
        </hr>
        <Form.Label>
          Personal Information
        </Form.Label>
        
        <Form.Group>
          <Field
            name="fullname"
            component={FieldInput}
            placeholder ="Full Name">
          </Field>
        </Form.Group>

        <Form.Group>
          <Field
            name="phone"
            component={FieldInput}
            placeholder ="Phone Number">
          </Field>
        </Form.Group>

        <Form.Group>
          <Field
            name="email"
            type="email"
            component={FieldInput}
            placeholder ="Email Address">
          </Field>
          
        </Form.Group>
        
        <Form.Label>
          Payment method
        </Form.Label>
        <Form.Group>
          <Form.Row>
            <Col>
              <Field name="payment" component="input" label="COD" type="radio" value="cod" />{' '}
              COD
            </Col>
            <Col>
              <Field name="payment" component="input" type="radio" value="visa" />{' '}
                Visa
            </Col>
            <Col>
              <Field name="payment" component="input" type="radio" value="atm" />{' '}
                ATM
            </Col>
          </Form.Row>
        </Form.Group>
        <Button className="text-align-center" type="submit" block>Submit</Button>
      </Form>
    )
  }

OrderForm = reduxForm({
  form: 'order'
})(OrderForm)

export default OrderForm

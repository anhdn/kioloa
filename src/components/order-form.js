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
          <h1>
            Create Order
          </h1>
        </Form.Label>
        <Form.Label>
          Personal Information
        </Form.Label>
        <Form.Group controlId="adrress">
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
                name="wards"
                component={FieldInput}
                placeholder ="Wards"
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

        <Button type="submit">Submit</Button>
      </Form>
    )
  }

OrderForm = reduxForm({
  form: 'order'
})(OrderForm)

export default OrderForm

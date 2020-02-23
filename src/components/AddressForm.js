import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { useForm } from 'react-hook-form'

const AddressForm = (props) => {
  const { handleInputValue } = props
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const onSubmit = data => {
    handleInputValue(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Your Information</Form.Label>

          <Form.Group>
            <Form.Control name='fullname' type='text' placeholder='Your Full Name' ref={register({required: true})}/>
            {errors.fullname && 'Full name is required.'}
          </Form.Group>

          <Form.Control
            name='email'
            type='text'
            placeholder='Email'
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}/>
          {errors.email && 'Email is required.'}
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control
            name='phonenumber'
            type='text'
            placeholder='Your Phone Number'
            ref={register({required: true})}
          />
          {errors.phonenumber && 'Phone Number is required.'}
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Seclect your city</Form.Label>
          <Form.Control as='select' name='city' ref={register({required: true})}>
            <option>Ho Chi Minh</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>District</Form.Label>
          <Form.Control name='district' as='select' ref={register({required: true})}>
            <option value=''>Chọn Quận/Huyện</option>
            <option value='Quận 1'>Quận 1</option>
            <option value='Quận 2'>Quận 2</option>
            <option value='Quận 3'>Quận 3</option>
            <option value='Quận 4'>Quận 4</option>
            <option value='Quận 5'>Quận 5</option>
            <option value='Quận 6'>Quận 6</option>
            <option value='Quận 7'>Quận 7</option>
            <option value='Quận 8'>Quận 8</option>
            <option value='Quận 9'>Quận 9</option>
            <option value='Quận 10'>Quận 10</option>
            <option value='Quận 11'>Quận 11</option>
            <option value='Quận 12'>Quận 12</option>
            <option value='Quận Bình Tân'>Quận Bình Tân</option>
            <option value='Quận Bình Thạnh'>Quận Bình Thạnh</option>
            <option value='Quận Gò Vấp'>Quận Gò Vấp</option>
            <option value='Quận Phú Nhuận'>Quận Phú Nhuận</option>
            <option value='Quận Tân Bình'>Quận Tân Bình</option>
            <option value='Quận Tân Phú'>Quận Tân Phú</option>
            <option value='Quận Thủ Đức'>Quận Thủ Đức</option>
            <option value='Huyện Bình Chánh'>Huyện Bình Chánh</option>
            <option value='Huyện Cần Giờ'>Huyện Cần Giờ</option>
            <option value='Huyện Củ Chi'>Huyện Củ Chi</option>
            <option value='Huyện Hóc Môn'>Huyện Hóc Môn</option>
            <option value='Huyện Nhà Bè'>Huyện Nhà Bè</option>
          </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </form>
  );
}
export default AddressForm;

import React from 'react'
import Helmet from 'react-helmet'

const Contact = () => {
  const contentDescription = 'Contact us or partner with us. Please send us an email if you have questions or feedback.'
  return (
    <div className='row'>
      <Helmet>
        <title>Contact Us</title>
        <meta name='description' content={contentDescription} />
      </Helmet>
    </div>
  )
}
export default Contact

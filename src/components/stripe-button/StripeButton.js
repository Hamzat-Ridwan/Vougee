import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Lir4SJlvMfgZhQcD20veAZ7cQ9Hu9S8AgBXPPZAQGh3i3r7iw3NXjResTmFXAMg6R7uDl94aysTFkDaoSECLJxb00uoGfgfeI'
    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
  return (
    <StripeCheckout
    label = 'Pay Now'
    name='Crown Clothing'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description= {`Your total is ${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeButton
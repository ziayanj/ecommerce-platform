import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K7dBoFv1amqEKp4ToRPdLVFLY2PkfNrFJ7m3rsw0V7euibr8Jq2lGcPirstBKaxfXKsxzkbNgfDZfL5rOmzcSMH00uVpz5YNp';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful')
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with the payment. Please make sure to use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Zion's Ecommerce Platform"
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      shippingAddress
      billingAddress
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
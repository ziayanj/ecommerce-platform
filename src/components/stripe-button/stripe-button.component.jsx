import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K7dBoFv1amqEKp4ToRPdLVFLY2PkfNrFJ7m3rsw0V7euibr8Jq2lGcPirstBKaxfXKsxzkbNgfDZfL5rOmzcSMH00uVpz5YNp';

  const onToken = token => {
    console.log(token);
    alert("Payment Sucessful");
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
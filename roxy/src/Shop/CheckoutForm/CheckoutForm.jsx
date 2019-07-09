import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ stripe, totalCost }) {
  const [status, setStatus] = useState('default');

  const submit = async e => {
    e.preventDefault();

    setStatus('submitting');

    try {
      let { token } = await stripe.createToken({ name: 'Name' });

      let response = await fetch('/.netlify/functions/charge', {
        method: 'POST',
        body: JSON.stringify({
          amount: totalCost * 100,
          token: token.id,
        }),
      });

      if (response.ok) {
        setStatus('complete');
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'complete') {
    return <div className="CheckoutForm-complete">Payment successful!</div>;
  }

  return (
    <form className="CheckoutForm" onSubmit={submit}>
      <h4>Would you like to complete the purchase?</h4>
      <input className="checkout-input" type="text" placeholder="name"/><br/>
      <input className="checkout-input" type="text" placeholder="address"/><br/>
      <input className="checkout-city" type="text" placeholder="city"/>
      <input className="checkout-state" type="text" placeholder="state"/>
      <input className="checkout-zip" type="text" placeholder="zip code"/><br/>
      <input className="checkout-input" type="text" placeholder="email"/>
      <CardElement />
      <button
        className="CheckoutForm-button"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting' : 'Submit Order'}
      </button>
      {status === 'error' && (
        <div className="CheckoutForm-error">Something went wrong.</div>
      )}
    </form>
  );
}

export default injectStripe(CheckoutForm);
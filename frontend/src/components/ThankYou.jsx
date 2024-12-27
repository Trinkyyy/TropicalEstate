import React from 'react';
import '../styles/thankyou.css'; // You'll create this CSS for styling

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed. We hope you enjoy your island adventure!</p>
      <p>A confirmation email has been sent to your registered email address.</p>
      <a href="/" className="home-link">Back to Home</a>
    </div>
  );
};

export default ThankYou;

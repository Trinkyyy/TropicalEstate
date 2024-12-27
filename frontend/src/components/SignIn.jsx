import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation
import '../styles/SignIn.css';

const SignIn = () => {
  const [formType, setFormType] = useState("Login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "", authCode: "" });
  const navigate = useNavigate();

  // Generate random authentication code
  const generateAuthCode = () => {
    const code = Math.random().toString(36).substring(2, 10); // Generate a random code
    return code.toUpperCase();
  };

  // Download authentication code as a PDF
  const downloadAuthCode = (code) => {
    const doc = new jsPDF();
    doc.text(`Your Authentication Code: ${code}`, 10, 10);
    doc.save("authCode.pdf"); // Save the PDF with the authentication code
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password, authCode: formData.authCode })
      });
      const data = await response.json();
      if (data.success) {
        alert("Login successful");
        navigate("/"); // Redirect to home
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred during login.");
    }
  };

  const handleSignup = async () => {
    try {
      const authCode = generateAuthCode(); // Generate authentication code
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password, authCode }) // Include authCode in the signup request
      });
      const data = await response.json();
      if (data.success) {
        downloadAuthCode(authCode); // Allow user to download the generated authentication code
        alert("Signup successful. Check your downloads for your authentication code.");
        navigate("/"); // Redirect to home after signup
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="signin">
      <div className="form-container">
        <div className="security-prompt">
          <p>Warning: Avoid making prior payments to prevent scams. For assistance, contact our agents.</p>
        </div>

        <h1>{formType === "Login" ? "Login" : "Sign Up"}</h1>

        {formType === "Sign Up" && (
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required // Make the username field required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required // Make the email field required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required // Make the password field required
        />

        {formType === "Login" && (
          <input
            type="text"
            placeholder="Authentication Code"
            name="authCode"
            value={formData.authCode}
            onChange={handleInputChange}
            required // Make the authentication code field required
          />
        )}

        <button onClick={formType === "Login" ? handleLogin : handleSignup}>
          {formType === "Login" ? "Login" : "Sign Up"}
        </button>

        {formType === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setFormType("Sign Up")}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setFormType("Login")}>Login</span>
          </p>
        )}

        <div className="agreement">
          <input type="checkbox" required /> {/* Require the checkbox for agreement */}
          <p>
            By continuing, you agree to our terms of use and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

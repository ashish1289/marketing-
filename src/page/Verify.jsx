import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP_LENGTH = 6;

const Verify = () => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value[0];
    setOtp(newOtp);

    // Move to next input
    if (idx < OTP_LENGTH - 1 && value) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Here you would verify the OTP with your backend
    // For now, just redirect to login
    navigate("/login");
  };

  const handleResend = () => {
    // Implement resend OTP logic here
    alert("OTP resent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6e3] to-[#f5f7fa]">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col items-center">
        <div className="text-3xl font-bold text-[#4F46E5] mb-2">Walytic</div>
        <div className="text-lg text-gray-700 mb-6">Verify your email</div>
        <form className="w-full flex flex-col items-center" onSubmit={handleVerify}>
          <label className="mb-2 text-gray-600 font-medium">Enter the 6-digit OTP sent to your email</label>
          <div className="flex space-x-2 mb-6">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={el => (inputsRef.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(e, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition"
                autoFocus={idx === 0}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 mb-3 bg-[#4F46E5] text-white rounded-lg font-semibold text-lg hover:bg-[#3730a3] transition"
          >
            Verify
          </button>
        </form>
        <button
          onClick={handleResend}
          className="text-[#4F46E5] hover:underline text-sm mt-2"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default Verify;
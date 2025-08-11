import React, { useState } from "react";
import { Eye, EyeOff, MessageCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function WbizToolSignup() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    setApiError("");
    setApiSuccess("");
    if (formData.password !== formData.repeatPassword) {
      setApiError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5001/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setApiSuccess(res.data.message || "Signup successful!");
      // Optionally, redirect to verify page or login page here
      navigate("/verify");
    } catch (err) {
      setApiError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-800 transform rotate-45 opacity-80"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gray-700 transform rotate-45 opacity-60"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gray-800 transform rotate-45 opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gray-700 transform rotate-45 opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gray-800 transform rotate-45 opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gray-700 transform rotate-45 opacity-80"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Brand and Features */}
          <div className="text-white space-y-8 px-4 lg:px-8 order-2 lg:order-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold">Walytic</h1>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
              Automate WhatsApp Messaging—Easily and Affordably
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  Send messages from your own WhatsApp using Excel or APIs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  Use Webhooks or API to automate workflows via Zapier, Pabbly,
                  Make, and more
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  Instantly verify phone numbers before sending messages
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm lg:text-base">
                  Set up automated reminders and scheduled messaging
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-md mx-auto w-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Create Account
                </h3>
                <p className="text-gray-500 text-sm lg:text-base">
                  Grow Your Business with WhatsApp API
                </p>
              </div>

              <div className="space-y-6">
                {/* Google Signup */}
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-600 font-medium">
                    Sign up with Google
                  </span>
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or with email
                    </span>
                  </div>
                </div>

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required
                  />
                </div>
                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 -mt-2">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </p>

                {/* Repeat Password Field */}
                <div className="relative">
                  <input
                    type={showRepeatPassword ? "text" : "password"}
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    value={formData.repeatPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showRepeatPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <p className="text-sm text-gray-600">
                    I Accept the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms
                    </a>
                  </p>
                </div>

                {/* Sign Up Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Sign up
                </button>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-600">
                  Already have an Account?{" "}
                  <a
                    href="/signin"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-white rounded-lg shadow-lg p-3 mb-2 max-w-48 hidden lg:block">
          <p className="text-sm font-medium text-gray-900">We're Online!</p>
          <p className="text-xs text-gray-600">How may I help you today?</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

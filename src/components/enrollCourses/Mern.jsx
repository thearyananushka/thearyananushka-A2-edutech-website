import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Mern = () => {
  const courseId = "67baa0977cb9660e85c9fc5b";
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch Course Details
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/a2/course/get/${courseId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        if (data.success) {
          setCourse(data.data);
        } else {
          console.error("Failed to load course data");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  // ✅ Load Razorpay Script before initializing payment
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Handle Payment Process
  const handlePayment = async () => {
    if (!course) return;
    setLoading(true);

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Failed to load Razorpay SDK. Check your internet connection.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `http://localhost:8000/api/a2/pay/initialize-payment/${courseId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!data.success) {
        alert("Failed to initialize payment");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_Bp55NAok5a31TY",  //Your razorpay id here
        amount: data.data.amount,
        currency: "INR",
        name: course.courseName,
        description: course.description,
        order_id: data.data.id,
        handler: function (response) {
          alert("Payment Successful! Redirecting to Course...");
          navigate("/mern-course");
        },
        prefill: {
          name: "Ankit Dwivedi",
          email: "test@example.com",
          contact: "+91 9999999999",
        },
        theme: { color: "blue" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Course Information */}
      <div className="md:w-1/2 flex flex-col items-start text-left p-6">
        <h1 className="text-4xl font-bold text-green-600">MERN STACK DEVELOPMENT</h1>
        <p className="mt-4 text-lg text-gray-700">6 Months • Online • 100% Live Sessions</p>
        <p className="mt-2 text-2xl font-semibold">
          Course Fee: ₹{course ? course.price : "Loading..."}
        </p>
        <button
          onClick={handlePayment}
          className={`mt-6 px-6 py-3 rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>

      {/* Course Banner Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://wallpapercave.com/wp/wp8903890.jpg"
          alt="MERN Course"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default Mern;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import axios from "axios";
export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/bookings", formData);
      console.log(response.data);
      alert("Booking Confirmed");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

return (
      <div className="container mx-auto p-6">
            <div className="grid grid-cols-2 gap-6">
                  <form onSubmit={handleSubmit}>
                        <BookingForm />
                        <button type="submit" disabled={loading}>
                              {loading ? "Processing..." : "Confirm & Pay"}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                  </form>
                  <OrderSummary bookingDetails={null} />
                  <CancellationPolicy />
            </div>
      </div>
);
}

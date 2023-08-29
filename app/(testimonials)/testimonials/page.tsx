import testimonialsList from "@/app/testimonials.json";
import { TestimonialsList } from "@/components/testimonialsList";
import React from "react";

const TestimonialsPage = () => {
  return <TestimonialsList testimonials={testimonialsList} />;
};

export default TestimonialsPage;

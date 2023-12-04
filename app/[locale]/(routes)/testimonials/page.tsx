import { getTestimonials } from "@/actions/testimonials";
import testimonialsList from "@/app/testimonials.json";
import { TestimonialsList } from "@/components/testimonialsList";
import React from "react";

const TestimonialsPage = async () => {
  const testimonials = await getTestimonials();

  return <TestimonialsList testimonials={testimonials} />;
};

export default TestimonialsPage;

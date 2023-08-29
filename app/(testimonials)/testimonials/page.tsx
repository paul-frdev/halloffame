import React from 'react';
import testimonialsList from "@/app/testimonials.json";
import { TestimonialsList } from '@/components/testimonialsList';

const TestimonialsPage = () => {
  return (
    <TestimonialsList testimonials={testimonialsList} />
  )
}

export default TestimonialsPage
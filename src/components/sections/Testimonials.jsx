import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '../../lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "We sincerely appreciate your efficient, gracious business service, the level of detail and accountability your company has demonstrated, and the way you conduct business as a whole.",
    author: 'Exotic Impex',
    role: 'Trading Company',
    rating: 5,
  },
  {
    id: 2,
    quote: "The training session material was very interesting and the discussions were truly inspiring. I particularly enjoyed the visual illustrations, which made the content easily understandable. I look forward to attending future training sessions.",
    author: 'Kashif Nizam Usmani',
    role: 'Business Professional',
    rating: 5,
  },
  {
    id: 3,
    quote: "Thanks for the answer to my query! It was very well explained and cites a lot of examples. The content is highlighted with points and easy to refer to, as compared to other expert advice pieces. Really appreciate the attention to detail!",
    author: 'Neha Singla',
    role: 'Entrepreneur',
    rating: 5,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-subtle relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="gold-line w-12" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              What Our Clients
              <span className="text-gradient-gold"> Say About Us</span>
            </h2>
            <p className="text-body text-muted-foreground text-lg mb-8">
              We take pride in delivering exceptional consulting services that transform businesses. Here's what our valued clients have to say.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      idx === activeIndex ? 'w-8 bg-secondary' : 'w-2 bg-muted-foreground/30'
                    )}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>

          {/* Right: Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Quote Icon Background */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center">
              <Quote className="w-12 h-12 text-secondary/30" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card-elevated p-8 lg:p-10 relative"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-body text-foreground text-lg lg:text-xl leading-relaxed mb-8">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonials[activeIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Corner */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-secondary rounded-br-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

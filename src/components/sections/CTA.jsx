import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          service: formData.service || 'General Inquiry',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-hero relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-0.5 w-12 bg-secondary rounded" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Transform
              <span className="text-gradient-gold"> Your Business?</span>
            </h2>
            <p className="text-body text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Whether you're starting a new venture or looking to scale your existing business, our expert consultants are here to guide you every step of the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a href="mailto:info@daaccretion.in" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Email Us</div>
                  <div className="text-primary-foreground font-medium">info@daaccretion.in</div>
                </div>
              </a>
              <a href="tel:+919624110441" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Call Us</div>
                  <div className="text-primary-foreground font-medium">+91 96241 10441</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Visit Us</div>
                  <div className="text-primary-foreground font-medium">Vadodara, Gujarat, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-elevated p-8 lg:p-10">
              <h3 className="heading-primary text-xl text-foreground mb-6">Schedule a Free Consultation</h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Message sent successfully!</p>
                    <p className="text-sm text-green-700">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Failed to send message</p>
                    <p className="text-sm text-red-700">Please try again or email us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Startup Advisory">Startup Advisory</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Training Programs">Training Programs</option>
                    <option value="Export/Import Services">Export/Import Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    minLength={10}
                    placeholder="Tell us about your business needs..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

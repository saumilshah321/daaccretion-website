import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

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
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
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
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-hero overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />
                <div className="relative container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
                            Get In <span className="text-gradient-gold">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                            Ready to transform your business? Let's discuss how we can help you achieve your goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="heading-primary text-2xl lg:text-3xl text-foreground mb-6">
                                Send Us a Message
                            </h2>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-green-800">Message sent successfully!</p>
                                        <p className="text-sm text-green-700">Thank you for your inquiry. We will get back to you within 24 hours.</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-red-800">Failed to send message</p>
                                        <p className="text-sm text-red-700">Please try again or contact us directly via phone or email.</p>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            minLength={2}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                            placeholder="+91 96241 10441"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Service of Interest *
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="consulting">Business Consulting</option>
                                        <option value="startup">Startup Consultancy</option>
                                        <option value="trading">Export / Import</option>
                                        <option value="training">Professional Training</option>
                                        <option value="research">Market Research</option>
                                        <option value="financial">Financial Advisory</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        minLength={10}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="gold"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="heading-primary text-2xl lg:text-3xl text-foreground mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                                        <p className="text-muted-foreground">
                                            DA Accretion Consultants<br />
                                            Business Hub, Floor 5<br />
                                            Ahmedabad, Gujarat 380015<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <p className="text-muted-foreground">
                                            +91 96241 10441
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <p className="text-muted-foreground">
                                            info@daaccretion.in<br />
                                            contact@daaccretion.in
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                                        <p className="text-muted-foreground">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 2:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 rounded-xl overflow-hidden h-64 bg-muted flex items-center justify-center">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80)',
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;

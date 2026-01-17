import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Target, Lightbulb, Handshake } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'We analyze ideas, concepts, and visions to create actionable business strategies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Transforming entrepreneurial concepts into market-ready business ventures.',
  },
  {
    icon: Handshake,
    title: 'Partnership Approach',
    description: 'We work alongside you, bridging gaps in direction, resources, and implementation.',
  },
];

const checkpoints = [
  'Research & Market Survey',
  'Advisory & Consultation',
  'Business Project Development',
  'Strategy & Planning',
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-subtle relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?auto=format&fit=crop&w=800&q=80"
                  alt="Business consulting meeting"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-card rounded-xl shadow-elevated p-6 max-w-xs border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">14+</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Years of</div>
                    <div className="font-semibold text-foreground">Excellence</div>
                  </div>
                </div>
                <div className="gold-line w-full" />
              </motion.div>

              {/* Accent Box */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-secondary rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="gold-line w-12" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
            </div>

            {/* Headline */}
            <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Empowering Entrepreneurs to
              <span className="text-gradient-gold"> Build Their Vision</span>
            </h2>

            {/* Description */}
            <p className="text-body text-muted-foreground text-lg mb-8 leading-relaxed">
              DA Accretion provides opportunity to contemporary entrepreneurs who have business concepts and ideas but need direction, implementation, and resources to transform their vision into reality.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {checkpoints.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Values Grid */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="card-elevated p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

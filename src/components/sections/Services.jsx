import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Rocket,
  PiggyBank,
  BarChart3,
  GraduationCap,
  Search,
  Ship,
  Store,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const services = [
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business Idea Development',
    shortDesc: 'Transform concepts into viable business models',
    fullDesc: 'We follow comprehensive Idea Assessment stages including exploration, assessment, refinement, and feasibility studies to validate and strengthen your business concept.',
    features: ['Idea Exploration', 'Feasibility Studies', 'Market Validation', 'Business Model Design'],
  },
  {
    id: 'startup',
    icon: Rocket,
    title: 'Startup Consultancy',
    shortDesc: 'Launch your venture with expert guidance',
    fullDesc: 'We provide consultation services to our clients at the start-up stage of their business, showing them the right steps in establishing their business venture.',
    features: ['Launch Strategy', 'Legal Setup', 'Funding Guidance', 'Go-to-Market Planning'],
  },
  {
    id: 'financial',
    icon: PiggyBank,
    title: 'Financial Planning',
    shortDesc: 'Build sustainable financial foundations',
    fullDesc: 'Create effective plans for cash flows and goals, balancing expenses with financial forecasts. Enterprise budget consulting services for sustainable growth.',
    features: ['Cash Flow Management', 'Budget Planning', 'Financial Forecasting', 'Investment Strategy'],
  },
  {
    id: 'marketing',
    icon: BarChart3,
    title: 'Marketing Consultancy',
    shortDesc: 'Drive growth with strategic marketing',
    fullDesc: 'We deliver end-to-end marketing strategy that ultimately helps in generating leads, sales, and conversion marketing for maximum business impact.',
    features: ['Brand Strategy', 'Digital Marketing', 'Lead Generation', 'Conversion Optimization'],
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Professional Training',
    shortDesc: 'Develop skills for business success',
    fullDesc: 'We provide practical business training to individuals and groups for setting up their own business and assist them with consultancy for generating profits.',
    features: ['Business Workshops', 'Leadership Training', 'Skill Development', 'Mentorship Programs'],
  },
  {
    id: 'research',
    icon: Search,
    title: 'Market Research',
    shortDesc: 'Data-driven insights for decisions',
    fullDesc: 'Whether domestic or international, market and product research are the main keys to unlock the door of business opportunities. We provide comprehensive research services.',
    features: ['Market Analysis', 'Competitor Research', 'Consumer Insights', 'Industry Reports'],
  },
  {
    id: 'trade',
    icon: Ship,
    title: 'Export / Import Services',
    shortDesc: 'Navigate global trade confidently',
    fullDesc: 'As merchant traders, we are involved in trading products on both national and international levels, assisting clients in exporting and importing with in-depth knowledge.',
    features: ['Trade Documentation', 'Customs Compliance', 'Logistics Support', 'International Markets'],
  },
  {
    id: 'retail',
    icon: Store,
    title: 'Retail Consultation',
    shortDesc: 'Optimize retail operations',
    fullDesc: '"Retail is Detail" - detailing is required in every aspect of the business, which can be challenging without proper guidance. We provide comprehensive retail consultancy.',
    features: ['Store Operations', 'Inventory Management', 'Customer Experience', 'Sales Optimization'],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--secondary) / 0.08) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="gold-line w-12" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
            <div className="gold-line w-12" />
          </div>
          <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Solutions for
            <span className="text-gradient-gold"> Business Growth</span>
          </h2>
          <p className="text-body text-muted-foreground text-lg">
            From ideation to execution, we provide end-to-end services that help businesses thrive in competitive markets.
          </p>
        </motion.div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Service Cards - Left */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={cn(
                  'p-5 rounded-xl cursor-pointer transition-all duration-300 border',
                  activeService.id === service.id
                    ? 'bg-primary border-primary shadow-lg'
                    : 'bg-card border-border hover:border-primary/30 hover:shadow-md'
                )}
                onClick={() => setActiveService(service)}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
                      activeService.id === service.id
                        ? 'bg-primary-foreground/20'
                        : 'bg-primary/10'
                    )}
                  >
                    <service.icon
                      className={cn(
                        'w-6 h-6 transition-colors',
                        activeService.id === service.id ? 'text-primary-foreground' : 'text-primary'
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={cn(
                        'font-semibold transition-colors',
                        activeService.id === service.id ? 'text-primary-foreground' : 'text-foreground'
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        'text-sm transition-colors',
                        activeService.id === service.id
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground'
                      )}
                    >
                      {service.shortDesc}
                    </p>
                  </div>
                  <ArrowRight
                    className={cn(
                      'w-5 h-5 transition-all',
                      activeService.id === service.id
                        ? 'text-primary-foreground translate-x-0 opacity-100'
                        : 'text-muted-foreground -translate-x-2 opacity-0'
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Service Detail - Right */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="card-elevated h-full p-8 lg:p-10"
              >
                <div className="h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg">
                      <activeService.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="heading-primary text-2xl lg:text-3xl text-foreground mb-2">
                        {activeService.title}
                      </h3>
                      <div className="gold-line w-20" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-body text-muted-foreground text-lg mb-8 leading-relaxed">
                    {activeService.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {activeService.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link to="/contact">
                      <Button variant="gold" size="lg" className="group">
                        Learn More About This Service
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Services Grid - Mobile */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{service.shortDesc}</p>
              <Link to="/contact" className="w-full mt-auto">
                <Button variant="outline" size="sm" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

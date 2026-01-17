import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const positions = [
  {
    id: 1,
    title: 'Senior Business Consultant',
    location: 'Vadodara, Gujarat',
    type: 'Full-time',
    department: 'Consulting',
  },
  {
    id: 2,
    title: 'Market Research Analyst',
    location: 'Remote',
    type: 'Full-time',
    department: 'Research',
  },
  {
    id: 3,
    title: 'Training Program Manager',
    location: 'Vadodara, Gujarat',
    type: 'Full-time',
    department: 'Training',
  },
];

export const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="careers" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="gold-line w-12" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Careers</span>
            </div>
            <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Join Our Team of
              <span className="text-gradient-gold"> Expert Consultants</span>
            </h2>
            <p className="text-body text-muted-foreground text-lg mb-8 leading-relaxed">
              A career at DA Accretion is an opportunity to work with remarkable people, address India's most important business challenges, and learn and grow constantly.
            </p>

            {/* Career Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-primary-foreground font-semibold text-lg">Building Tomorrow's Leaders</div>
                <div className="text-primary-foreground/70 text-sm">We welcome applications from outstanding graduates and experienced professionals.</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Job Listings */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-foreground text-xl">Open Positions</h3>
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                {positions.length} openings
              </span>
            </div>

            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link to="/careers" className="block">
                  <div className="card-elevated p-6 group cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {position.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{position.type}</span>
                            </div>
                          </div>
                          <span className="inline-block mt-3 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                            {position.department}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            <Link to="/careers">
              <Button variant="outline" size="lg" className="w-full group mt-4">
                View All Positions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

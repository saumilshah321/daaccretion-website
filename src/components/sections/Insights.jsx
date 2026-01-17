import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '../ui/button';

const insights = [
  {
    id: 1,
    category: 'Business Strategy',
    title: 'Successful Business Transformation: A Comprehensive Guide',
    excerpt: 'Learn what it takes to achieve successful transformation and navigate the complexities of modern business landscapes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    author: 'DA Accretion Team',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'Startup Insights',
    title: 'Empowering Entrepreneurs: From Idea to Execution',
    excerpt: 'Discover the essential steps to transform your business concept into a thriving venture.',
    image: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?auto=format&fit=crop&w=600&q=80',
    author: 'Business Advisory',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'Market Research',
    title: 'Global Trade Opportunities in the Modern Economy',
    excerpt: 'Understanding international markets and leveraging opportunities for business growth.',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80',
    author: 'Trade Consultants',
    readTime: '5 min read',
    featured: false,
  },
];

export const Insights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="insights" className="py-24 lg:py-32 bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-0.5 w-12 bg-secondary rounded" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Insights & Resources</span>
            </div>
            <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Latest Thinking &
              <span className="text-gradient-gold"> Industry Insights</span>
            </h2>
            <p className="text-body text-primary-foreground/70 text-lg">
              Stay ahead with our expert analysis and strategic perspectives on business transformation.
            </p>
          </div>
          <Link to="/insights">
            <Button variant="hero" size="lg" className="self-start lg:self-auto group">
              View All Insights
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:row-span-2 group cursor-pointer"
          >
            <Link to="/insights">
              <div className="h-full bg-card/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-secondary/30 transition-all duration-300">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={insights[0].image}
                    alt={insights[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-secondary text-sm font-medium">{insights[0].category}</span>
                  <h3 className="heading-primary text-xl lg:text-2xl text-primary-foreground mt-2 mb-4 group-hover:text-secondary transition-colors">
                    {insights[0].title}
                  </h3>
                  <p className="text-body text-primary-foreground/70 mb-6">
                    {insights[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-primary-foreground/60">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{insights[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{insights[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Side Articles */}
          <div className="space-y-6">
            {insights.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to="/insights">
                  <div className="flex gap-5 bg-card/10 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-foreground/10 hover:border-secondary/30 transition-all duration-300 p-4">
                    <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-secondary text-xs font-medium">{article.category}</span>
                      <h3 className="font-serif font-semibold text-primary-foreground mt-1 mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-primary-foreground/60">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

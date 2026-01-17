import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const insights = [
    {
        id: 1,
        category: 'Strategy',
        title: 'The Future of Business Consulting in the AI Era',
        excerpt: 'How artificial intelligence is reshaping the consulting landscape and what it means for businesses seeking strategic guidance.',
        author: 'DA Accretion Team',
        date: 'January 10, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        category: 'Export & Import',
        title: 'Navigating Global Trade: A Guide for Indian SMEs',
        excerpt: 'Essential strategies for small and medium enterprises looking to expand their reach into international markets.',
        author: 'DA Accretion Team',
        date: 'January 5, 2026',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        category: 'Startups',
        title: 'From Idea to Market: The Complete Startup Journey',
        excerpt: 'A comprehensive roadmap for entrepreneurs transitioning from concept to a fully operational business.',
        author: 'DA Accretion Team',
        date: 'December 28, 2025',
        readTime: '15 min read',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        category: 'Finance',
        title: 'Financial Planning for Business Growth',
        excerpt: 'Expert insights on managing cash flow, securing funding, and building a sustainable financial foundation.',
        author: 'DA Accretion Team',
        date: 'December 20, 2025',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        category: 'Market Research',
        title: 'Understanding Consumer Behavior in Emerging Markets',
        excerpt: 'Key trends and insights for businesses targeting consumers in rapidly developing economies.',
        author: 'DA Accretion Team',
        date: 'December 15, 2025',
        readTime: '11 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 6,
        category: 'Training',
        title: 'Building High-Performance Teams Through Training',
        excerpt: 'How structured training programs can transform your workforce and drive organizational success.',
        author: 'DA Accretion Team',
        date: 'December 10, 2025',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    },
];

const InsightsPage = () => {
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
                            Latest <span className="text-gradient-gold">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                            Expert perspectives on business strategy, market trends, and industry developments
                            to help you stay ahead in a rapidly evolving landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="card-elevated overflow-hidden">
                            <div className="grid lg:grid-cols-2">
                                <div
                                    className="h-64 lg:h-auto bg-cover bg-center"
                                    style={{ backgroundImage: `url(${insights[0].image})` }}
                                />
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-3">
                                        Featured — {insights[0].category}
                                    </span>
                                    <h2 className="heading-primary text-2xl lg:text-3xl text-foreground mb-4">
                                        {insights[0].title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        {insights[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                        <span className="flex items-center gap-1.5">
                                            <User className="w-4 h-4" />
                                            {insights[0].author}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {insights[0].date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
                                            {insights[0].readTime}
                                        </span>
                                    </div>
                                    <Link
                                        to="#"
                                        className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                                    >
                                        Read Article
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* All Articles */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="heading-primary text-3xl lg:text-4xl text-foreground mb-4">
                            All Articles
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Explore our collection of insights and perspectives.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insights.slice(1).map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card-elevated overflow-hidden group"
                            >
                                <div
                                    className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${article.image})` }}
                                />
                                <div className="p-6">
                                    <span className="text-secondary font-medium text-xs uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span>{article.date}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InsightsPage;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';

const jobPostings = [
    {
        id: 1,
        title: 'Senior Business Consultant',
        department: 'Consulting',
        location: 'Vadodara, India',
        type: 'Full-time',
        experience: '5-8 years',
        description: 'Lead strategic consulting engagements for enterprise clients, driving business transformation and growth initiatives.',
    },
    {
        id: 2,
        title: 'Market Research Analyst',
        department: 'Research',
        location: 'Remote',
        type: 'Full-time',
        experience: '2-4 years',
        description: 'Conduct comprehensive market research and analysis to support client decision-making and strategy development.',
    },
    {
        id: 3,
        title: 'Business Development Manager',
        department: 'Trading',
        location: 'Ahmedabad, India',
        type: 'Full-time',
        experience: '4-6 years',
        description: 'Drive business growth through strategic partnerships and expand our trading network across domestic and international markets.',
    },
    {
        id: 4,
        title: 'Corporate Trainer',
        department: 'Training',
        location: 'Remote',
        type: 'Contract',
        experience: '3-5 years',
        description: 'Design and deliver impactful training programs for entrepreneurs and corporate teams on business development and strategy.',
    },
    {
        id: 5,
        title: 'Financial Consultant',
        department: 'Finance',
        location: 'Bangalore, India',
        type: 'Full-time',
        experience: '4-7 years',
        description: 'Provide financial advisory services to startups and SMEs, including cash flow management, budgeting, and investment planning.',
    },
];

const CareersPage = () => {
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
                            Join Our <span className="text-gradient-gold">Team</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                            Be part of a team that's transforming businesses across India and beyond.
                            We're looking for passionate individuals who want to make a real impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="heading-primary text-3xl lg:text-4xl text-foreground mb-4">
                            Open Positions
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Explore our current opportunities and find your perfect role.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {jobPostings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card-elevated p-6 lg:p-8 hover:shadow-elevated transition-all"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                                                {job.department}
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                                                {job.type}
                                            </span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                            {job.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Briefcase className="w-4 h-4" />
                                                {job.experience}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link to="/contact">
                                            <Button variant="gold" className="group">
                                                Apply Now
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-primary text-3xl lg:text-4xl text-foreground mb-4">
                            Don't See the Right Role?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <a href="mailto:info@daaccretion.in?subject=Resume Submission">
                            <Button variant="primary" size="lg">
                                Submit Your Resume
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;

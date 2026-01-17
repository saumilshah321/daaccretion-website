import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    {
        id: 1,
        src: '/images/gallery/BUSINESS-PROMOTION-1-768x984.jpg',
        title: 'Business Promotion',
        category: 'Marketing',
    },
    {
        id: 2,
        src: '/images/gallery/CONCEPT-BUSINESS-DIRECTORY-768x981.jpg',
        title: 'Business Directory Concept',
        category: 'Consulting',
    },
    {
        id: 3,
        src: '/images/gallery/CONTENT-DESIGN-683x1024.jpg',
        title: 'Content Design',
        category: 'Design',
    },
    {
        id: 4,
        src: '/images/gallery/INTERNATIONAL-BUSINESS-CONSULTATION.jpg',
        title: 'International Business Consultation',
        category: 'Consulting',
    },
    {
        id: 5,
        src: '/images/gallery/ONLINE-BUSINESS-VENTURE-WEG-1.jpg',
        title: 'Online Business Venture',
        category: 'Digital',
    },
    {
        id: 6,
        src: '/images/gallery/SKILL-TRAINING-VADODARA-768x978.jpg',
        title: 'Skill Training Vadodara',
        category: 'Training',
    },
    {
        id: 7,
        src: '/images/gallery/Training-1-1-300x225.jpeg',
        title: 'Training Session',
        category: 'Training',
    },
    {
        id: 8,
        src: '/images/gallery/Training-4-1536x1153.jpeg',
        title: 'Corporate Training',
        category: 'Training',
    },
    {
        id: 9,
        src: '/images/gallery/WEBINAR-BUSINESS-TRAINING-1-768x768.jpg',
        title: 'Webinar Business Training',
        category: 'Training',
    },
];

const categories = ['All', 'Training', 'Consulting', 'Marketing', 'Design', 'Digital'];

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

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
                            Our <span className="text-gradient-gold">Gallery</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                            A visual journey through our work, training sessions, and business consulting engagements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 lg:px-8">
                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                        ? 'bg-primary text-primary-foreground shadow-lg'
                                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Gallery Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <span className="text-secondary text-xs font-medium uppercase tracking-wider">
                                                {image.category}
                                            </span>
                                            <h3 className="text-primary-foreground font-semibold text-lg mt-1">
                                                {image.title}
                                            </h3>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                                                <ZoomIn className="w-5 h-5 text-primary-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-lg"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 p-2 text-primary-foreground hover:text-secondary transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent rounded-b-lg">
                                <span className="text-secondary text-sm font-medium uppercase tracking-wider">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-primary-foreground font-semibold text-xl mt-1">
                                    {selectedImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default GalleryPage;

'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const galleryImages = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop',
            alt: 'Intimate dining atmosphere',
            aspectRatio: 'aspect-[2/1]', // wide
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=900&fit=crop',
            alt: 'Artisanal dish presentation',
            aspectRatio: 'aspect-[2/3]', // tall
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=700&fit=crop',
            alt: 'Chef at work',
            aspectRatio: 'aspect-[12/7]', // wide
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&h=1000&fit=crop',
            alt: 'Wine selection',
            aspectRatio: 'aspect-[7/10]', // tall
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
            alt: 'Seasonal ingredients',
            aspectRatio: 'aspect-[2/1]', // wide
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=1200&fit=crop',
            alt: 'Evening ambiance',
            aspectRatio: 'aspect-[2/3]', // tall
        },
    ];
=======

    return (
        <div className="min-h-screen bg-amber-50" data-oid="qrl86gl">
            {/* Sticky Header */}
            <header
                className="sticky top-0 left-0 right-0 z-40 bg-amber-50/80 backdrop-blur-md border-b border-amber-100"
                data-oid="sticky-header"
            >
                <div
                    className="max-w-[1040px] mx-auto px-8 py-4 flex justify-between items-center"
                    data-oid="header-container"
                >
                    <div className="flex items-center space-x-2" data-oid="logo-container">
                        <div
                            className="text-2xl font-display font-light tracking-wide text-amber-900"
                            data-oid="wordmark"
                        >
                            latitude
                        </div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-amber-700"
                            data-oid="compass-icon"
                        >
                            <circle cx="12" cy="12" r="10" data-oid=".b01lh." />
                            <polygon
                                points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"
                                data-oid="mn6fgpm"
                            />
                        </svg>
                    </div>
                    <a
                        href="#join"
                        className="border border-violet-600 text-violet-600 px-6 py-2 text-sm font-body hover:bg-violet-600 hover:text-white transition-colors"
                        data-oid="join-waitlist-btn"
                    >
                        Join Waitlist
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden" data-oid="hero-section">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop)',
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                    data-oid="hero-bg"
                ></div>
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/8 to-purple-600/12"
                    data-oid="hero-overlay"
                ></div>
                <div
                    className="relative z-10 h-full flex items-center justify-center text-center text-white"
                    data-oid="hero-content"
                >
                    <div className="max-w-2xl px-8" data-oid="hero-text">
                        <p
                            className="text-xs font-body font-medium uppercase tracking-widest mb-6 opacity-90"
                            data-oid="hero-microline"
                        >
                            Seasonal Dinners in NYC
                        </p>
                        <h1
                            className="text-7xl md:text-8xl font-display font-light tracking-wide mb-6"
                            data-oid="hero-title"
                        >
                            Latitude
                        </h1>
                        <p
                            className="text-lg md:text-xl font-body font-light tracking-wide opacity-80 mb-12"
                            data-oid="hero-subtitle"
                        >
                            8 seats • ingredient-driven • wine-friendly
                        </p>
                        <button
                            className="bg-violet-600 text-white px-10 py-4 font-body text-lg hover:bg-violet-700 transition-colors"
                            data-oid="hero-cta"
                        >
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-40 px-8" data-oid="about-section">
                <div className="max-w-5xl mx-auto text-center" data-oid="about-content">
                    <h2
                        className="text-5xl md:text-6xl font-display font-light text-amber-900 mb-20 tracking-wide"
                        data-oid="about-title"
                    >
                        Where stories unfold
                    </h2>
                    <div className="grid md:grid-cols-2 gap-24 items-center" data-oid="about-grid">
                        <div className="space-y-8 text-left" data-oid="about-text">
                            <p
                                className="text-lg text-amber-800 leading-relaxed font-body"
                                data-oid="about-p1"
                            >
                                Latitude is more than a supper club—it's a carefully curated
                                experience where seasonal ingredients meet innovative techniques in
                                an atmosphere of understated elegance.
                            </p>
                            <p
                                className="text-lg text-amber-800 leading-relaxed font-body"
                                data-oid="about-p2"
                            >
                                Each evening, we welcome a select number of guests to share in our
                                chef's interpretation of contemporary cuisine, paired with
                                thoughtfully chosen wines and genuine hospitality.
                            </p>
                            <div className="pt-6" data-oid="about-cta">
                                <button
                                    className="bg-violet-600 text-white px-8 py-3 font-body hover:bg-violet-700 transition-colors"
                                    data-oid="kt1tls4"
                                >
                                    Reserve Your Table
                                </button>
                            </div>
                        </div>
                        <div className="relative" data-oid="about-image">
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=800&fit=crop"
                                alt="Chef preparing dishes"
                                className="w-full h-96 object-cover"
                                data-oid="about-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section
                id="gallery"
                className="py-40 px-8 bg-white border-t border-amber-100"
                data-oid="gallery-section"
            >
                <div className="max-w-7xl mx-auto" data-oid="gallery-content">
                    <h2
                        className="text-5xl md:text-6xl font-display font-light text-amber-900 mb-24 text-center tracking-wide"
                        data-oid="gallery-title"
                    >
                        Moments captured
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        data-oid="gallery-grid"
                    >
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                                data-oid="gallery-item"
                            >
                                <div
                                    className="relative overflow-hidden"
                                    data-oid="gallery-item-container"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        data-oid="gallery-img"
                                    />

                                    <div
                                        className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/5 transition-colors duration-300"
                                        data-oid="gallery-overlay"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section
                id="menu"
                className="py-40 px-8 bg-amber-25 border-t border-amber-100"
                data-oid="menu-section"
            >
                <div className="max-w-5xl mx-auto text-center" data-oid="menu-content">
                    <h2
                        className="text-5xl md:text-6xl font-display font-light text-amber-900 mb-24 tracking-wide"
                        data-oid="menu-title"
                    >
                        Seasonal offerings
                    </h2>
                    <div className="grid md:grid-cols-2 gap-20" data-oid="menu-grid">
                        <div className="text-left space-y-12" data-oid="menu-left">
                            <div data-oid="menu-item-1">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="menu-item-title-1"
                                >
                                    Tasting Menu
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed"
                                    data-oid="menu-item-desc-1"
                                >
                                    Seven courses celebrating the season's finest ingredients, each
                                    dish a story of place and time.
                                </p>
                            </div>
                            <div data-oid="menu-item-2">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="menu-item-title-2"
                                >
                                    Wine Pairings
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed"
                                    data-oid="menu-item-desc-2"
                                >
                                    Carefully selected wines from small producers, chosen to
                                    complement each course perfectly.
                                </p>
                            </div>
                        </div>
                        <div className="text-left space-y-12" data-oid="menu-right">
                            <div data-oid="menu-item-3">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="menu-item-title-3"
                                >
                                    Private Events
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed"
                                    data-oid="menu-item-desc-3"
                                >
                                    Intimate gatherings for special occasions, with bespoke menus
                                    crafted for your celebration.
                                </p>
                            </div>
                            <div data-oid="menu-item-4">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="menu-item-title-4"
                                >
                                    Chef's Table
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed"
                                    data-oid="menu-item-desc-4"
                                >
                                    An exclusive experience at the kitchen counter, witnessing the
                                    artistry behind each dish.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-40 px-8 bg-white border-t border-amber-100"
                data-oid="contact-section"
            >
                <div className="max-w-5xl mx-auto text-center" data-oid="contact-content">
                    <h2
                        className="text-5xl md:text-6xl font-display font-light text-amber-900 mb-24 tracking-wide"
                        data-oid="contact-title"
                    >
                        Join us
                    </h2>
                    <div className="grid md:grid-cols-2 gap-20" data-oid="contact-grid">
                        <div className="text-left space-y-10" data-oid="contact-info">
                            <div data-oid="contact-address">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="contact-address-title"
                                >
                                    Location
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed"
                                    data-oid="contact-address-text"
                                >
                                    1847 Union Street
                                    <br data-oid="esia-qi" />
                                    San Francisco, CA 94123
                                </p>
                            </div>
                            <div data-oid="contact-hours">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="contact-hours-title"
                                >
                                    Hours
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed"
                                    data-oid="contact-hours-text"
                                >
                                    Tuesday - Saturday
                                    <br data-oid="34krl27" />
                                    6:00 PM - 10:00 PM
                                </p>
                            </div>
                        </div>
                        <div className="text-left space-y-10" data-oid="contact-booking">
                            <div data-oid="contact-reservations">
                                <h3
                                    className="text-2xl font-display font-light text-amber-900 mb-4"
                                    data-oid="contact-reservations-title"
                                >
                                    Reservations
                                </h3>
                                <p
                                    className="text-amber-800 font-body leading-relaxed mb-6"
                                    data-oid="contact-reservations-text"
                                >
                                    hello@latitude-sf.com
                                    <br data-oid="h8reapl" />
                                    (415) 555-0147
                                </p>
                                <button
                                    className="border border-violet-600 text-violet-600 px-6 py-2 font-body hover:bg-violet-600 hover:text-white transition-colors"
                                    data-oid=":572vts"
                                >
                                    Call Now
                                </button>
                            </div>
                            <div data-oid="contact-note">
                                <p
                                    className="text-amber-700 font-body text-sm leading-relaxed"
                                    data-oid="contact-note-text"
                                >
                                    Reservations are required and limited to 24 guests per evening.
                                    We recommend booking 2-3 weeks in advance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-16 px-8 bg-amber-50 border-t border-amber-100 text-center"
                data-oid="footer"
            >
                <div className="max-w-5xl mx-auto" data-oid="footer-content">
                    <p className="text-sm font-body text-amber-700" data-oid="footer-text">
                        © 2024 Latitude Supper Club. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-8"
                    onClick={() => setSelectedImage(null)}
                    data-oid="modal"
                >
                    <div className="relative max-w-5xl max-h-full" data-oid="modal-content">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-sm"
                            data-oid="modal-img"
                        />

                        <button
                            className="absolute top-4 right-4 text-white text-3xl hover:text-stone-300 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            data-oid="modal-close"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { MasonryTile } from './masonry-tiles';

export interface MasonryItem {
    id: string;
    type: 'photo' | 'feature-photo' | 'hero-feature' | 'content' | 'rsvp' | 'spacer';
    width: 1 | 2;
    height?: number;
    content?: {
        title?: string;
        items?: string[];
        subtitle?: string;
    };
    image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
        caption?: string;
    };
}

// rearranged for even text distribution + sized melon photo
const masonryItems: MasonryItem[] = [
    // t01 — hero feature (2-col) → IMG_2362.jpeg (melon dessert - now hero)
    {
        id: 't01-hero',
        type: 'hero-feature',
        width: 2,
        image: {
            src: '/images/IMG_2362.jpeg',
            alt: '',
            width: 664,
            height: 400,
        },
        content: {
            title: 'INTIMATE DINING IN THE HEART OF MANHATTAN',
            subtitle: 'latitude',
            items: ['a seasonal tasting-menu supper club.'],
        },
    },
    // t02 — photo → IMG_2263.jpeg (artichoke - now regular size)
    {
        id: 't02-photo',
        type: 'photo',
        width: 1,
        image: {
            src: '/images/IMG_2263.jpeg',
            alt: '',
            width: 320,
            height: 380,
            caption: 'Trio of melon: charentais, canary, watermelon',
        },
    },
    // t03 — content → next dinner (early placement)
    {
        id: 't03-next',
        type: 'content',
        width: 1,
        content: {
            title: 'Next Dinner',
            items: [
                'Date: Saturday, August 30th, 2025',
                'Theme: "Summer Abundance"',
                'Interested? <a href="https://lu.ma/qh4pf4r9" class="text-cobalt-blue hover:text-cobalt-blue/80 hover:bg-cobalt-blue/10 underline font-medium transition-all duration-200 px-1 py-0.5 rounded-sm">Join the list</a>',
            ],
        },
    },
    // t04 — photo → IMG_1980.jpeg (now regular photo)
    {
        id: 't04-photo',
        type: 'photo',
        width: 1,
        image: {
            src: '/images/IMG_1980.jpeg',
            alt: '',
            width: 320,
            height: 320,
            caption: "Artichoke 'flower', mint, peas",
        },
    },
    // t05 — photo → IMG_2328.jpeg (plate rim - now regular photo)
    {
        id: 't05-photo',
        type: 'photo',
        width: 1,
        image: {
            src: '/images/IMG_2328.jpeg',
            alt: '',
            width: 320,
            height: 240, // sized down from 320
            caption: 'Baby artichoke tartlet',
        },
    },
    // t06 — content → what to expect (mid placement)
    {
        id: 't06-expect',
        type: 'content',
        width: 1,
        content: {
            title: 'What To Expect',
            items: [
                'Seasonal tasting, six to eight courses, meticulously paired wines',
                "The nuance and refinement of restarurant cooking; the warmth and hospitality of a friend's dinner party",
                "Address shared after RSVP (Hell's Kitchen)",
            ],
        },
    },
    // t07 — feature photo (2-col) → IMG_2218.jpeg (squash fan - now the big one)
    {
        id: 't07-feature',
        type: 'feature-photo',
        width: 2,
        image: {
            src: '/images/IMG_2218.jpeg',
            alt: '',
            width: 664,
            height: 320,
            caption:
                "'Apricot and its imitators': preserved apricot, chanterelle, summer squash, and flounder",
        },
    },
    // t08 — photo → IMG_2415.jpeg (lobster - now regular size)
    {
        id: 't08-photo',
        type: 'photo',
        width: 1,
        image: {
            src: '/images/IMG_2415.jpeg',
            alt: '',
            width: 320,
            height: 380,
            caption: "'The lifecycle of honey: Honey panna cotta, summer flowers, chocolate bee",
        },
    },
    // t09 — content → how it works (later placement)
    {
        id: 't09-works',
        type: 'content',
        width: 1,
        content: {
            title: 'How It Works',
            items: [
                'Small drops, one to two dates a month',
                '<a href=https://lu.ma/latitude class="text-cobalt-blue hover:text-cobalt-blue/80 hover:bg-cobalt-blue/10 underline font-medium transition-all duration-200 px-1 py-0.5 rounded-sm">Join the list</a>; we email a soft-hold when seats open',
                'Confirm within 24 hours or pass to the next guest',
                'Allergies and restrictions catered to; specify in RSVP',
                'Price: $70–$100 per guest',
            ],
        },
    },
    // t10 — rsvp (2-col) → final cta
    {
        id: 't10-rsvp',
        type: 'rsvp',
        width: 2,
        content: {
            title: 'Join The List',
            subtitle: "Add your email — we'll offer soft-holds as seats open.",
            items: ['We only email about dates. You can add a guest after confirmation.'],
        },
    },
];

export function MasonryGrid() {
    const [selectedImage, setSelectedImage] = useState<MasonryItem | null>(null);
    const [columns, setColumns] = useState(4);
    const containerRef = useRef<HTMLDivElement>(null);
    const masonryRef = useRef<any>(null);
    // responsive column calculation
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setColumns(1);
            } else if (width < 1024) {
                setColumns(2);
            } else if (width < 1280) {
                setColumns(3);
            } else {
                setColumns(4);
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    // initialize masonry.js
    useEffect(() => {
        const initMasonry = async () => {
            if (typeof window === 'undefined') return;

            const Masonry = (await import('masonry-layout')).default;

            if (containerRef.current && columns > 1) {
                // destroy existing masonry instance
                if (masonryRef.current) {
                    masonryRef.current.destroy();
                }

                // create new masonry instance
                masonryRef.current = new Masonry(containerRef.current, {
                    itemSelector: '.masonry-item',
                    columnWidth: columns === 2 ? 352 : 320,
                    gutter: 56, // maximum spacing to prevent overlap
                    fitWidth: true,
                    transitionDuration: 0, // we handle animations ourselves
                });

                // layout after images load
                setTimeout(() => {
                    if (masonryRef.current) {
                        masonryRef.current.layout();
                    }
                }, 200);

                // additional layout after longer delay to handle any late-loading content
                setTimeout(() => {
                    if (masonryRef.current) {
                        masonryRef.current.layout();
                    }
                }, 500);
            }
        };

        initMasonry();

        return () => {
            if (masonryRef.current) {
                masonryRef.current.destroy();
                masonryRef.current = null;
            }
        };
    }, [columns]);

    const handleImageClick = (item: MasonryItem) => {
        if (item.image) {
            setSelectedImage(item);
        }
    };

    // single column: simple flow
    if (columns === 1) {
        return (
            <div className="max-w-sm mx-auto px-6 space-y-6">
                {masonryItems.map((item, index) => (
                    <div key={item.id} className="">
                        <MasonryTile
                            item={{ ...item, width: 1, column: 0, order: index, style: {} }}
                            onImageClick={handleImageClick}
                        />
                    </div>
                ))}
                {renderImageModal()}
            </div>
        );
    }

    // multi-column: masonry.js layout
    return (
        <div className="max-w-6xl mx-auto px-6">
            <div ref={containerRef} className="mx-auto" style={{ maxWidth: '1304px' }}>
                {masonryItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="masonry-item"
                        style={{
                            width:
                                item.width === 2 && columns >= 3
                                    ? '664px'
                                    : columns === 2
                                      ? '352px'
                                      : '320px',
                            marginBottom: '48px', // increased bottom margin to prevent overlap
                        }}
                    >
                        <MasonryTile
                            item={{
                                ...item,
                                column: 0,
                                order: index,
                                style: {},
                            }}
                            onImageClick={handleImageClick}
                        />
                    </div>
                ))}
            </div>
            {renderImageModal()}
        </div>
    );

    function renderImageModal() {
        if (!selectedImage?.image) return null;

        return (
            <div
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
                onClick={() => setSelectedImage(null)}
            >
                <div className="relative max-w-4xl max-h-full">
                    <img
                        src={selectedImage.image.src}
                        alt={selectedImage.image.alt}
                        className="max-w-full max-h-full object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                    {/* Caption in fullscreen */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                        <p className="text-sm">
                            Fullscreen caption placeholder - {selectedImage.id}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

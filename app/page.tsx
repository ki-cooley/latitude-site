'use client';

import { useState } from 'react';

export default function Page() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
            alt: 'Abstract pink composition',
            aspect: 'aspect-[4/3]',
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop',
            alt: 'Hand gesture portrait',
            aspect: 'aspect-[2/3]',
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop',
            alt: 'Urban architecture',
            aspect: 'aspect-[4/5]',
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
            alt: 'Street photography',
            aspect: 'aspect-[4/3]',
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
            alt: 'Neon lights',
            aspect: 'aspect-square',
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
            alt: 'Los Angeles street',
            aspect: 'aspect-[4/3]',
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
            alt: 'Industrial workspace',
            aspect: 'aspect-[4/5]',
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
            alt: 'Director chair',
            aspect: 'aspect-square',
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
            alt: 'Vintage t-shirt',
            aspect: 'aspect-[4/3]',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex" data-oid="qrl86gl">
            {/* Left Sidebar */}
            <div
                className="w-80 bg-white p-8 flex flex-col justify-between border-r border-gray-200"
                data-oid="wh9actw"
            >
                <div data-oid="ow544:s">
                    {/* Logo/Name */}
                    <div className="mb-8" data-oid="yal:uqi">
                        <div className="flex items-center mb-2" data-oid="e2n_f5f">
                            <div
                                className="w-2 h-2 bg-black rounded-full mr-2"
                                data-oid="9eojom7"
                            ></div>
                            <div
                                className="w-2 h-2 bg-black rounded-full mr-2"
                                data-oid=":gmzhe3"
                            ></div>
                            <div className="w-2 h-2 bg-black rounded-full" data-oid="k.i4dxe"></div>
                        </div>
                        <h1 className="text-xl font-medium text-black mb-1" data-oid="n:4yyfe">
                            Mark O. Davis
                        </h1>
                        <p className="text-sm text-gray-500" data-oid="s0jf9pd">
                            Los Angeles • Writer
                        </p>
                    </div>

                    {/* Bio */}
                    <div className="mb-12" data-oid="o073tzk">
                        <p
                            className="text-sm text-gray-700 leading-relaxed mb-6"
                            data-oid="czv2u-."
                        >
                            I have a passion for writing and creating images that capture the beauty
                            of moments.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-3" data-oid="ceorn3i">
                        <a
                            href="#"
                            className="block text-sm text-gray-700 hover:text-black transition-colors"
                            data-oid="8cll0le"
                        >
                            Photos
                        </a>
                        <a
                            href="#"
                            className="block text-sm text-gray-700 hover:text-black transition-colors"
                            data-oid="b1eruy2"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="block text-sm text-gray-700 hover:text-black transition-colors"
                            data-oid="gozvd2."
                        >
                            Journal
                        </a>
                        <a
                            href="#"
                            className="block text-sm text-gray-700 hover:text-black transition-colors"
                            data-oid="ga0y2a8"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Resume Button */}
                    <div className="mt-8" data-oid="sq_oazo">
                        <button
                            className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                            data-oid="_87nsd_"
                        >
                            Resume
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-xs text-gray-400" data-oid="9wh-xr-">
                    © 2024 • Template by GrayGrids
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8" data-oid="tbg1dzz">
                <div className="max-w-6xl mx-auto" data-oid="h9j25r6">
                    {/* Masonry Grid */}
                    <div className="columns-2 lg:columns-3 gap-6 space-y-6" data-oid="0.id5pe">
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className="break-inside-avoid cursor-pointer group"
                                onClick={() => setSelectedImage(image)}
                                data-oid="fkd13bx"
                            >
                                <div
                                    className="relative overflow-hidden bg-gray-200 hover:shadow-lg transition-shadow duration-300"
                                    data-oid="opdvxkf"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                        style={{
                                            aspectRatio:
                                                index % 3 === 0
                                                    ? '4/5'
                                                    : index % 3 === 1
                                                      ? '3/4'
                                                      : '1/1',
                                        }}
                                        data-oid="coejsxo"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-8"
                    onClick={() => setSelectedImage(null)}
                    data-oid="697rgb8"
                >
                    <div className="relative max-w-4xl max-h-full" data-oid="i2quvym">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain"
                            data-oid="d97kl1q"
                        />

                        <button
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                            onClick={() => setSelectedImage(null)}
                            data-oid="wlhe921"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

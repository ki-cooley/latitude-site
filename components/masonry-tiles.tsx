'use client';

// define types inline
import { MasonryItem } from './masonry-grid';
// import Image from 'next/image';

interface TileProps {
    item: MasonryItem & { column: number; order: number; style: any };
    onImageClick?: (item: MasonryItem) => void;
}

export function PhotoTile({ item, onImageClick }: TileProps) {
    if (!item.image) return null;

    return (
        <div
            className="break-inside-avoid cursor-pointer group tile-hover-keyline photo-tile"
            style={item.style}
            onClick={() => onImageClick?.(item)}
        >
            <div className="relative overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                {item.image.caption && <div className="photo-caption">{item.image.caption}</div>}
            </div>
        </div>
    );
}

export function FeaturePhotoTile({ item, onImageClick }: TileProps) {
    if (!item.image) return null;

    return (
        <div
            className="break-inside-avoid cursor-pointer group col-span-2 tile-hover-keyline photo-tile"
            style={item.style}
            onClick={() => onImageClick?.(item)}
        >
            <div className="relative overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                {item.image.caption && <div className="photo-caption">{item.image.caption}</div>}
            </div>
        </div>
    );
}

export function HeroFeatureTile({ item, onImageClick }: TileProps) {
    if (!item.image) return null;

    const scrollToJoin = () => {
        const element = document.getElementById('join');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="break-inside-avoid group col-span-2 tile-hover-keyline" style={item.style}>
            <div className="relative overflow-hidden bg-gray-100  shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-auto object-cover"
                    loading="eager"
                />

                {/* diagonal blue→purple wash for legibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/8 via-brand-purple/6 to-transparent" />

                {/* dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

                <div className="absolute top-10 left-10 right-10 text-white">
                    {item.content?.title && (
                        <div className="text-eyebrow text-white/80 mb-2">{item.content.title}</div>
                    )}
                    {item.content?.subtitle && (
                        <h1 className="font-display text-hero text-white mb-3">
                            {item.content.subtitle}
                        </h1>
                    )}
                    {item.content?.items && item.content.items[0] && (
                        <p className="text-body text-white/90 mb-8 leading-relaxed">
                            {item.content.items[0]}
                        </p>
                    )}
                    <button
                        onClick={scrollToJoin}
                        className="text-white border-2 px-8 py-3.5 font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] relative z-10 backdrop-blur-sm"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderColor: 'rgba(255, 255, 255, 0.8)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(0, 71, 171, 0.3)';
                            e.currentTarget.style.borderColor = '#0047AB';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                        }}
                    >
                        Join The List
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ContentTile({ item }: TileProps) {
    if (!item.content) return null;

    return (
        <div
            className="break-inside-avoid border border-hairline p-6 shadow-lg hover:shadow-2xl transition-shadow duration-200 tile-hover-keyline"
            style={{ backgroundColor: '#F9F7F2', ...item.style }}
        >
            {item.content.title && (
                <h2 className="font-display text-xl mb-4 text-ink capitalize">
                    {item.content.title}
                </h2>
            )}
            {item.content.items && (
                <ul className="space-y-2">
                    {item.content.items.map((text, index) => (
                        <li
                            key={index}
                            className="text-sm text-ink leading-relaxed flex items-start border-b border-hairline pb-2 last:border-b-0 last:pb-0"
                        >
                            <div className="w-1.5 h-1.5 bg-cobalt-blue rounded-full mt-1.5 mr-3 flex-shrink-0" />
                            <div className="flex-1" dangerouslySetInnerHTML={{ __html: text }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export function RSVPTile({ item }: TileProps) {
    return (
        <div
            className="break-inside-avoid border border-hairline shadow-lg hover:shadow-2xl transition-shadow duration-200 p-8 col-span-2 tile-hover-keyline"
            style={{ backgroundColor: '#F9F7F2', ...item.style }}
            id="join"
        >
            <div className="text-center">
                {item.content?.title && (
                    <h2 className="font-display text-section mb-4 text-ink capitalize">
                        {item.content.title}
                    </h2>
                )}
                {item.content?.subtitle && (
                    <p className="text-body text-ink/80 mb-6 leading-relaxed">
                        {item.content.subtitle}
                    </p>
                )}
                {item.content?.items && item.content.items[0] && (
                    <p className="text-sm text-ink/70 mb-8 leading-relaxed">
                        {item.content.items[0]}
                    </p>
                )}

                {/* luma calendar embed */}
                <div className="flex justify-center mt-6">
                    <div className="w-full max-w-lg">
                        <iframe
                            src="https://lu.ma/embed/calendar/cal-GTJ8ev4fhwEFHCY/events?lt=light"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            style={{
                                border: '1px solid rgb(234, 230, 223)',
                                borderRadius: '0px',
                                minWidth: '100%',
                            }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SpacerTile({ item }: TileProps) {
    const height = item.height || 'auto';

    return (
        <div
            className="border border-hairline shadow-subtle"
            style={{
                backgroundColor: '#F9F7F2',
                ...item.style,
                height: typeof height === 'number' ? `${height}px` : height,
            }}
        />
    );
}

export function MasonryTile({ item, onImageClick }: TileProps) {
    switch (item.type) {
        case 'photo':
            return <PhotoTile item={item} onImageClick={onImageClick} />;
        case 'feature-photo':
            return <FeaturePhotoTile item={item} onImageClick={onImageClick} />;
        case 'hero-feature':
            return <HeroFeatureTile item={item} onImageClick={onImageClick} />;
        case 'content':
            return <ContentTile item={item} />;
        case 'rsvp':
            return <RSVPTile item={item} />;
        case 'spacer':
            return <SpacerTile item={item} />;
        default:
            return null;
    }
}

'use client';

export function Header() {
    const scrollToJoin = () => {
        const element = document.getElementById('join');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className="sticky top-0 z-50 backdrop-blur-sm border-b border-hairline"
            style={{ backgroundColor: 'rgba(249, 247, 242, 0.8)' }}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Left - Title */}
                <div className="font-display text-2xl text-ink">
                    latitude
                    <span className="latitude-degree">°</span>
                </div>

                {/* Center - Compass Logo */}
                <img
                    src="/images/compass-logo-5-small.svg"
                    alt="Latitude compass logo"
                    className="h-12 w-12 compass-rotate absolute left-1/2 transform -translate-x-1/2"
                />

                {/* Right - CTA */}
                <button
                    onClick={scrollToJoin}
                    className="px-6 py-2.5 text-sm font-semibold border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md"
                    style={{
                        color: '#0047AB',
                        borderColor: '#0047AB',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 71, 171, 0.2)';
                        e.currentTarget.style.color = '#0047AB';
                        e.currentTarget.style.borderColor = '#0047AB';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#0047AB';
                        e.currentTarget.style.borderColor = '#0047AB';
                    }}
                >
                    Join The List
                </button>
            </div>
        </header>
    );
}

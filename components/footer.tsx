export function Footer() {
    return (
        <footer className="border-t border-hairline py-12" style={{ backgroundColor: '#F9F7F2' }}>
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left side - Copyright and Location */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-sm text-muted">© 2024 Latitude. All rights reserved.</p>
                        <p className="text-sm text-muted">New York, NY</p>
                    </div>

                    {/* Right side - Contact */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <a
                            href="https://instagram.com/latitude.nyc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-cobalt-blue hover:text-cobalt-blue/80 transition-colors"
                        >
                            @latitude.nyc
                        </a>
                        <a
                            href="mailto:hello@latitude.nyc"
                            className="text-sm text-cobalt-blue hover:text-cobalt-blue/80 transition-colors"
                        >
                            hello@latitude.nyc
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

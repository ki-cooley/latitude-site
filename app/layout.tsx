import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Latitude — Seasonal Dinners In NYC',
    description:
        "An eight-seat supper club in Hell's Kitchen. Seasonal tasting menu; intimate table. Invitations go first to the list.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                        html { visibility: hidden; opacity: 0; transition: opacity 0.3s ease; }
                        html.fonts-loaded { visibility: visible; opacity: 1; }
                    `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        document.fonts.ready.then(() => {
                            document.documentElement.classList.add('fonts-loaded');
                        });
                        // fallback in case fonts don't load
                        setTimeout(() => {
                            document.documentElement.classList.add('fonts-loaded');
                        }, 1000);
                    `,
                    }}
                />
            </head>
            <body className="antialiased text-ink font-sans" style={{ backgroundColor: '#F9F7F2' }}>
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Latitude - Supper Club',
    description:
        'An intimate culinary journey in San Francisco. Seasonal tasting menus and wine pairings in an elegant atmosphere.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="tf61uj7">
            <body className="" data-oid="cvleyo4">
                {children}
            </body>
        </html>
    );
}

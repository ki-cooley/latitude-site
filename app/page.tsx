import { Header } from '../components/header';
import { MasonryGrid } from '../components/masonry-grid';
import { Footer } from '../components/footer';

export default function Page() {
    return (
        <div className="min-h-screen bg-porcelain font-sans">
            <Header />
            <main className="py-20 lg:py-24">
                <MasonryGrid />
            </main>
            <Footer />
        </div>
    );
}

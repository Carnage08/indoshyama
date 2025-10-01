// pages/index.js (or wherever you want to use it)
import Carousel from '../components/Carousel';

export default function Homepage() {
  return (
    <div className="min-h-screen my-10">
      <main className="container mx-auto py-12">
        <Carousel />
        
      </main>
    </div>
  );
}
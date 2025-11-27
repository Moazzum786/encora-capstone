import TopStrip from "./components/TopStrip";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import PromoBanner from "./components/PromoBanner";

export default function App() {
  return (
    <div className="bg-base-200 min-h-screen">
      <TopStrip />
      <HeroBanner />
      <CategoryGrid />
      <PromoBanner />
    </div>
  );
}

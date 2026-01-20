import HeroSection from "@/components/heroSection";
import MiddleSection from "@/components/middleSection";
import LastSection from "@/components/lastSection";

export default function Page() {
  return (
    <main className="relative">
      <HeroSection/>
      <MiddleSection />
      <LastSection />
    </main>
  );
}
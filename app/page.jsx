import { createSharingMetadata } from "@/lib/sharing-metadata";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { EditorialStory } from "@/components/sections/EditorialStory";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { PantryIndex } from "@/components/sections/PantryIndex";
import { SeasonalRecipes } from "@/components/sections/SeasonalRecipes";

export const metadata = createSharingMetadata({
  title: "Nourish - Modern Pantry Journal",
  description: "A modern journal for a thoughtful kitchen and pantry.",
  image: "/images/sharing/home.jpg",
  alt: "Heirloom tomatoes and basil on a ceramic plate beside linen and olive oil in warm sunlight",
  type: "website",
});

export default function HomePage() {
  return (
    <main id="main-content">
      <EditorialHero />
      <SeasonalRecipes />
      <PantryIndex />
      <EditorialStory />
      <JournalPreview />
      <Newsletter />
    </main>
  );
}

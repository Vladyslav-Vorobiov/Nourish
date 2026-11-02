import { EditorialHero } from "@/components/sections/EditorialHero";
import { EditorialStory } from "@/components/sections/EditorialStory";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { PantryIndex } from "@/components/sections/PantryIndex";
import { SeasonalRecipes } from "@/components/sections/SeasonalRecipes";

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

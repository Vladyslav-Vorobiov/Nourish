import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Fragment } from "react";

import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";

const title = "The quiet ritual of Sunday cooking";
const lead =
  "Before the week begins, there is a little time to chop slowly, let something simmer, and make a meal without watching the clock.";

const opening = [
  "By Sunday afternoon, the kitchen has usually gathered a few loose ends. A couple of carrots in the vegetable drawer. Half a loaf wrapped in paper. A jar of beans that never quite became dinner. There is enough here to begin, even if there is no particular plan.",
  "Put a pot on the stove. Clear a little space beside the chopping board. The meal can take shape as you go, with time to taste the broth, look out of the window, or simply wait for the onions to soften.",
];

const sections = [
  {
    id: "start-with-what-is-already-there",
    title: "Start with what is already there.",
    paragraphs: [
      "Before making a shopping list, take a moment to look. Behind the mustard, beneath the bunch of herbs, at the back of the cupboard. A good Sunday meal often begins with something you had almost forgotten.",
      "Carrots and an onion might become soup with a handful of lentils. Cooked beans can warm gently with garlic and a little stock. Yesterday’s bread can turn crisp in a pan while the rest comes together. You only need to choose one thing that sounds good to eat.",
      "There is pleasure in using what you have while it is still good. Wash the vegetables, trim what needs trimming, and set the scraps in a bowl. Already, the kitchen feels a little more settled.",
    ],
  },
  {
    id: "let-the-kitchen-set-the-pace",
    title: "Let the kitchen set the pace.",
    paragraphs: [
      "Once the chopping begins, there are small things to notice. The clean snap of a carrot. The papery skin of an onion. The change in sound when a pot reaches a simmer and you turn the heat down.",
      "Somewhere between stirring and tasting, your attention finds a place to rest. Leave the spoon beside the stove. Wipe the board. Open the window a little if the room grows warm.",
      "There may be music playing, or someone sitting at the table. There may only be the occasional sound of a lid shifting on the pot. Either way, you can stay with the meal for a while, following each small task until it is done.",
    ],
  },
  {
    id: "make-a-little-extra",
    title: "Make a little extra.",
    paragraphs: [
      "If the pot is already on, an extra handful of lentils or another carrot will hardly ask much of you. A tray of vegetables can hold tomorrow’s lunch as easily as tonight’s dinner.",
      "Keep whatever is left for another meal. Later, once it has cooled, put it away in the fridge. Perhaps the soup will be lunch with a piece of toast. Perhaps the vegetables will find their way into warm grains with a spoonful of yoghurt.",
      "It is a small kindness to your future self: something ready to eat when Monday is busy and your attention is elsewhere. You can decide what to do with it when the time comes.",
    ],
  },
];

export const metadata = {
  title,
  description: lead,
};

export default function SundayCookingPage() {
  return (
    <main id="main-content" className="pb-20 pt-6 sm:pb-28 md:pt-10">
      <Container>
        <Link
          href="/#journal-title"
          className="nav-link arrow-link inline-flex min-h-11 items-center gap-2 pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive"
        >
          <ArrowLeft className="link-arrow link-arrow-left" size={17} strokeWidth={1.5} aria-hidden="true" />
          <span className="nav-link-label">Back to journal</span>
        </Link>

        <article aria-labelledby="article-title" className="mt-10 md:mt-14">
          <header className="mx-auto max-w-[880px]">
            <EditorialLabel>From the journal</EditorialLabel>
            <h1 id="article-title" className="mt-4 text-balance font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.045em] text-ink">
              {title}
            </h1>
            <p className="mt-6 max-w-[65ch] text-base leading-7 text-text-secondary">
              {lead}
            </p>
          </header>

          <figure className="mx-auto mt-10 max-w-[1120px] md:mt-14">
            <div className="relative aspect-4/3 overflow-hidden bg-surface-2 md:aspect-3/2">
              <Image
                src="/images/journal/sunday-cooking.png"
                alt="Hands slicing a carrot on a pale wooden board in a warmly lit kitchen."
                fill
                loading="eager"
                sizes="(min-width: 1184px) 1120px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover object-[70%_50%] md:object-center"
              />
            </div>
            <figcaption className="mt-3 text-[0.8125rem] leading-5 tracking-[0.04em] text-text-secondary">
              A little chopping, a slow simmer, and nowhere else to be.
            </figcaption>
          </figure>

          <div className="mx-auto mt-10 max-w-[65ch] space-y-12 md:mt-14 md:space-y-16">
            <div className="space-y-5 text-base leading-7">
              {opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            {sections.map((section, index) => (
              <Fragment key={section.id}>
                <section aria-labelledby={section.id}>
                  <h2 id={section.id} className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-7">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
                {index === 1 && (
                  <blockquote className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.035em] text-ink">
                    <p>“Leave a little room in the afternoon for the meal to take its time.”</p>
                  </blockquote>
                )}
              </Fragment>
            ))}

            <div className="space-y-5 text-base leading-7">
              <p>For now, bring a bowl to the table. Tear off some bread, sit down, and eat while everything is warm. There will be time to wipe the stove and fold the towel afterwards.</p>
              <p>The week can wait until the dishes are done.</p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}

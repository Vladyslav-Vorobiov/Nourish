import { createSharingMetadata } from "@/lib/sharing-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ArticleEntrance } from "@/components/ui/ArticleEntrance";

const title = "What to buy at the market this week";
const lead =
  "A few ripe things, a handful of herbs, and enough room in the basket for something unexpected.";

const opening = [
  "Late summer makes a generous shopping list. Tomatoes crowd the stalls, peaches perfume the air, and the first dark berries sit beside piles of corn. You don’t need to bring everything home.",
  "Choose a few things that look good today. Think about what you’ll cook first, what can wait, and what might become tomorrow’s lunch. Here are seven things we’re making room for.",
];

const products = [
  {
    number: "01",
    id: "tomatoes",
    name: "Tomatoes",
    subtitle: "A little variety goes a long way.",
    look: "Choose tomatoes that feel heavy for their size, with fragrant skins and no leaking or split patches. Mix larger slicing tomatoes with a handful of small ones: each brings something different to the table.",
    keep: "Leave firm tomatoes out of direct sunlight to finish ripening. Once fully ripe, refrigerate them if you won’t use them soon, and bring them back towards room temperature before serving.",
    cook: "Slice generously for Tomato & White Bean Toast. Save the juices left on the board for a dressing, or mop them up with the last piece of bread.",
  },
  {
    number: "02",
    id: "peaches",
    name: "Peaches",
    subtitle: "Buy a few for now, a few for later.",
    look: "A fragrant peach with a little give is ready to eat. Choose slightly firmer fruit for grilling, and avoid bruised spots or wrinkled skin.",
    keep: "Let firm peaches soften at room temperature, checking them each day. Move ripe fruit to the fridge if you need a little more time.",
    cook: "Make Charred Peach Salad while the fruit is still firm enough to hold its shape. Softer peaches are lovely sliced over yogurt, with any juices spooned on top.",
  },
  {
    number: "03",
    id: "courgettes",
    name: "Courgettes",
    subtitle: "Small ones make easy suppers.",
    look: "Pick firm courgettes with smooth skins and a fresh-looking stem. Smaller ones are often tender, with fewer developed seeds and very little preparation needed.",
    keep: "Refrigerate unwashed and keep them dry. Handle gently: their delicate skins mark more easily than they look.",
    cook: "Cut into thick slices and brown in a hot pan without crowding them. Finish with lemon zest, olive oil, and torn mint. Add bread and a spoonful of ricotta to make a meal.",
  },
  {
    number: "04",
    id: "sweetcorn",
    name: "Sweetcorn",
    subtitle: "Something worth cooking first.",
    look: "Choose ears with green husks that fit closely around the cob. The silk should feel slightly moist; avoid husks that look very dry or kernels that appear shrivelled.",
    keep: "Refrigerate with the husks on and plan to cook soon after buying. Fresh corn is a good reason to change tonight’s dinner plans.",
    cook: "Char the cobs, brush with butter, and scatter with chopped herbs. Cut leftover kernels into a tomato salad or fold them through warm grains.",
  },
  {
    number: "05",
    id: "eggplant",
    name: "Eggplant",
    subtitle: "Give it time to turn soft.",
    look: "Choose eggplant with taut, glossy skin and a fresh green cap. It should feel firm and substantial, without soft or sunken patches.",
    keep: "Keep in the fridge’s vegetable drawer and use within a few days. Leave it whole until you’re ready to cook.",
    cook: "Roast halved eggplant until the flesh is completely tender. Spoon over lemony yogurt, olive oil, and parsley. Any leftovers make a good sandwich filling the next day.",
  },
  {
    number: "06",
    id: "blackberries",
    name: "Blackberries",
    subtitle: "A small basket is plenty.",
    look: "Look for plump, deeply coloured berries in a dry container. Check beneath the top layer for crushed fruit or signs of mould.",
    keep: "Refrigerate without washing, then rinse gently just before eating. Make these one of the first things you use.",
    cook: "Eat with thick yogurt and toasted oats. If the berries are soft, simmer them briefly with a little sugar and lemon for a spoonable compote.",
  },
  {
    number: "07",
    id: "fresh-herbs",
    name: "Fresh herbs",
    subtitle: "Choose the bunch you can smell.",
    look: "Basil, mint, and parsley should look lively, with fragrant leaves and stems that still have some strength. One generous bunch can carry several meals.",
    keep: "Trim basil stems and stand them in a little water away from direct sun. Refrigerate mint and parsley loosely wrapped in a barely damp kitchen towel.",
    cook: "Use basil for Basil Oil Pasta, mint with courgettes or peaches, and parsley over roasted eggplant. Chop tender stems into dressings instead of discarding them.",
  },
];

const recipeLinks = {
  "Tomato & White Bean Toast": "/recipes/tomato-white-bean-toast",
  "Charred Peach Salad": "/recipes/charred-peach-salad",
  "Basil Oil Pasta": "/recipes/basil-oil-pasta",
};

function RecipeText({ children }) {
  return children
    .split(/(Tomato & White Bean Toast|Charred Peach Salad|Basil Oil Pasta)/g)
    .map((part, index) =>
      recipeLinks[part] ? (
        <Link
          key={index}
          href={recipeLinks[part]}
          className="group font-medium"
        >
          <span className="underline decoration-border-strong decoration-1 underline-offset-4 transition-colors duration-200 group-hover:text-tomato group-hover:decoration-current group-focus-visible:text-tomato group-focus-visible:decoration-current">
            {part}
          </span>
        </Link>
      ) : (
        part
      ),
    );
}

export const metadata = {
  title,
  description: lead,
  ...createSharingMetadata({
    title,
    description: lead,
    image: "/images/sharing/what-to-buy-at-the-market-this-week.jpg",
    alt: "Late-summer market produce on a pale kitchen table, including tomatoes, peaches, courgettes, sweetcorn, eggplant, blackberries and fresh herbs",
    type: "article",
  }),
};

export default function LateSummerMarketPage() {
  return (
    <main id="main-content" className="pb-20 pt-6 sm:pb-28 md:pt-10">
      <Container>
        <div className="mx-auto max-w-[1120px]">
          <Link
            href="/#journal-title"
            className="nav-link arrow-link inline-flex min-h-11 items-center gap-2 pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive"
          >
            <ArrowLeft
              className="link-arrow link-arrow-left"
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="nav-link-label">Back to journal</span>
          </Link>

          <ArticleEntrance
            aria-labelledby="article-title"
            className="mt-8 md:mt-12"
          >
            <header className="max-w-[880px]">
              <EditorialLabel>Seasonal guide · Late summer</EditorialLabel>
              <h1
                id="article-title"
                className="mt-4 text-balance font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.045em] text-ink"
              >
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-base leading-7 text-text-secondary">
                {lead}
              </p>
            </header>

            <Image
              src="/images/journal/late-summer-market.png"
              alt="Late-summer market produce on a pale kitchen table, including tomatoes, peaches, courgettes, sweetcorn, eggplant, blackberries and fresh herbs"
              width={1536}
              height={1024}
              loading="eager"
              sizes="(min-width: 1184px) 1120px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
              className="mt-10 h-auto w-full bg-surface-2 md:mt-14"
            />

            <div className="mx-auto my-10 max-w-[65ch] space-y-5 text-base leading-7 md:my-16">
              {opening.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div>
              {products.map((product) => (
                <section
                  key={product.id}
                  aria-labelledby={product.id}
                  className="grid grid-cols-1 gap-8 border-t border-border-subtle py-8 lg:grid-cols-12 lg:gap-6 lg:py-12"
                >
                  <header className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] self-start items-baseline gap-x-4 gap-y-2 lg:col-span-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-y-0">
                    <span className="col-start-2 row-start-1 text-lg leading-none tracking-[0.08em] text-tomato lg:col-start-1 lg:text-lg lg:font-normal">
                      {product.number}
                    </span>
                    <h2
                      id={product.id}
                      className="col-start-1 row-start-1 min-w-0 font-display text-[2.125rem] leading-tight tracking-[-0.04em] text-ink lg:col-start-2 lg:text-4xl"
                    >
                      {product.name}
                    </h2>
                    <h3 className="col-span-2 col-start-1 row-start-2 min-w-0 max-w-[30ch] font-display text-xl font-normal leading-[1.35] tracking-normal text-text-secondary lg:col-span-1 lg:col-start-2 lg:mt-4 lg:text-[1.375rem] lg:leading-snug lg:tracking-[-0.02em]">
                      {product.subtitle}
                    </h3>
                  </header>
                  <dl className="max-w-[65ch] space-y-6 text-base leading-7 lg:col-span-7">
                    {[
                      ["Look for", product.look],
                      ["Keep", product.keep],
                      ["Cook", product.cook],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <dt className="font-semibold text-ink">{label}</dt>
                        <dd className="mt-2">
                          <RecipeText>{text}</RecipeText>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>

            <section
              aria-labelledby="one-basket"
              className="mt-8 bg-surface-2 px-6 py-10 sm:px-10 lg:mt-12 lg:py-14"
            >
              <div className="mx-auto max-w-[65ch]">
                <h2
                  id="one-basket"
                  className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink sm:text-4xl"
                >
                  One basket, a few good meals.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-7">
                  <p>
                    Start with the corn, ripe peaches, and berries. Let firmer
                    fruit wait while you roast the eggplant or cook a pan of
                    courgettes.
                  </p>
                  <p>
                    Tomorrow, put the leftover vegetables between slices of
                    bread. Toss the herbs through pasta. Slice another tomato.
                  </p>
                  <p>
                    A good market trip leaves you with a few meals to look
                    forward to-and something delicious to eat while you unpack.
                  </p>
                </div>
              </div>
            </section>
          </ArticleEntrance>
        </div>
      </Container>
    </main>
  );
}

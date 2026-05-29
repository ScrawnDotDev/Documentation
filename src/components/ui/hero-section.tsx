"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export const HeroSection = () => {
  return (
    <div>
      <main>
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-fd-background dark:bg-fd-background">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl text-fd-foreground">
                Usage Based Billing: for You and Your Agents.
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl text-fd-muted-foreground">
                {/*Fire-and-forget your events. The rest is on us.*/}
                Simple enough to power your grandma's (👵) AI B2B SaaS.
              </p>

              <Button
                asChild
                size="lg"
                className="group bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 text-zinc-300 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:bg-zinc-950 hover:text-zinc-100 hover:border-zinc-800 hover:shadow-[0_4px_25px_rgba(254,170,2,0.25)]"
              >
                <Link href="/">
                  <span className="btn-label flex items-center gap-2 font-medium tracking-wide">
                    Get Started
                    <span className="text-zinc-500 transition-all duration-300 group-hover:text-fd-primary group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto -mt-16 max-w-7xl overflow-visible">
            <div className="[perspective:1200px] -mr-16 pl-16 lg:-mr-56 lg:pl-34">
              <div className="relative skew-x-[.36rad]">
                <img
                  src="/Hero.png"
                  alt="Scrawn"
                  width={2880}
                  height={2074}
                  className="
                                        rounded-[--radius]
                                        z-[2]
                                        relative
                                        border border-fd-border
                                        [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%),linear-gradient(to_right,black_55%,transparent_100%)]
                                        [mask-size:100%_100%]
                                        [mask-position:center]
                                        [mask-repeat:no-repeat]
                                        [-webkit-mask-composite:source-in]
                                        [mask-composite:intersect]
                                    "
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-fd-background relative z-10 py-24">
          <div className="m-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-fd-foreground mb-4">
                Three ways to bill
              </h2>
              <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
                All of them are terrible ideas. But we help simplify ALL of your horrendous decisions. No questions asked.
              </p>
            </div>

            <div className="mt-20 space-y-32">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-fd-foreground mb-4">
                    Billing the Vercel AI SDK hasn't been easier.
                  </h3>
                  <p className="text-lg text-fd-muted-foreground">
                    One import. One call. Your AI SDK calls are now billed
                    automatically. No webhooks, no spreadsheets, no crying in
                    the bathroom.
                  </p>
                </div>
                <div className="min-w-0">
                  <DynamicCodeBlock
                    lang="ts"
                    code={`import { generateText } from 'ai';
import { scrawn } from 'scrawn/vercel';

const { text } = await generateText({
  model: scrawn('gpt-4'),
  prompt: 'I want you to bill me like one of your French girls',
});`}
                  />
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="order-last md:order-first min-w-0">
                  <DynamicCodeBlock
                    lang="ts"
                    code={`const usage = await db.logs.count({
  where: { userId },
});
if (usage % 100 === 0) {
  await stripe.invoice.create({ ... });
  await slack.send('#billing-prayers');
}
// TODO: reconcile (lol)`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-fd-foreground mb-4">
                    Bill your self rolled abomination in one-ish line.
                  </h3>
                  <p className="text-lg text-fd-muted-foreground">
                    You have a Stripe integration, three cron jobs, a Google
                    Sheet, and a prayer. The dishwasher is right there, but you
                    choose the pain. Respect. We did what we could.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-fd-foreground mb-4">
                    Charge per API request
                  </h3>
                  <p className="text-lg text-fd-muted-foreground">
                    No metering. No tracking. Just vibes. Your investors will
                    either applaud your hustle or file a lawsuit. There is no
                    in-between.
                  </p>
                </div>
                <div className="min-w-0">
                  <DynamicCodeBlock
                    lang="ts"
                    code={`export async function POST(req) {
  await charge(9.99); // per message?
  return streamText({
    model: openai('gpt-4'),
    prompt: 'u up?',
  });
}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-fd-border bg-fd-background/50 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-4 flex justify-center">
            <Logo className="h-6 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          </div>
          <p className="text-sm text-fd-muted-foreground">
            Simplifying and supporting your worst billing decisions because unlike Stripe, we actually love you.
          </p>
        </div>
      </footer>
    </div>
  );
};

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
    >
      <text
        x="10"
        y="22"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="url(#logo-gradient)"
      >
        Scrawn
      </text>
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="10"
          y1="0"
          x2="10"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B99FE" />
          <stop offset="1" stopColor="#2BC8B7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

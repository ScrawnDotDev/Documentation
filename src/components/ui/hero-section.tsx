"use client"

import * as React from "react"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const menuItems = [
    { name: 'Features', href: '/docs' },
    { name: 'API Reference', href: '/docs/api-reference' },
    { name: 'Quick Start', href: '/docs/quick-start' },
    { name: 'Dashboard', href: '/docs/dashboard-setup' },
]

export const HeroSection = () => {
    return (
        <div>

            <main>
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-fd-background dark:bg-fd-background">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl text-fd-foreground">
                                Scrawn: End-to-end billing infrastructure for builders
                            </h1>
                            <p className="mx-auto my-8 max-w-2xl text-xl text-fd-muted-foreground">
                                Track usage, manage API keys, process payments. Stop wrestling with Stripe webhooks and start shipping features.
                            </p>

                            <Button
                                asChild
                                size="lg">
                                <Link href="/docs" className="padding-sm border rounded-full">
                                    <span className="btn-label">Get Started</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                            <div className="[transform:rotateX(20deg);]">
                                <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                                    <img
                                        className="rounded-[--radius] z-[2] relative border border-fd-border"
                                        src="/Hero.png"
                                        alt="Scrawn dashboard - track events, manage API keys, and process payments"
                                        width={2880}
                                        height={2074}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-fd-background relative z-10 py-24">
                    <div className="m-auto max-w-6xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-fd-foreground mb-4">Built with modern technologies</h2>
                            <p className="text-lg text-fd-muted-foreground max-w-3xl mx-auto">
                                Powered by industry-standard tools and frameworks that developers trust. 
                                From gRPC for fast communication to Next.js for beautiful interfaces.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-7 w-fit dark:invert"
                                    src="https://cdn.simpleicons.org/typescript/black"
                                    alt=""
                                    height="28"
                                    width="auto"
                                />
                                <span className="text-sm font-semibold text-fd-foreground">TypeScript</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-7 w-fit dark:invert"
                                    src="https://cdn.simpleicons.org/nodedotjs/black"
                                    alt=""
                                    height="28"
                                    width="auto"
                                />
                                <span className="text-sm font-semibold text-fd-foreground">Node.js</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-7 w-fit dark:invert"
                                    src="https://cdn.simpleicons.org/nextdotjs/black"
                                    alt=""
                                    height="28"
                                    width="auto"
                                />
                                <span className="text-sm font-semibold text-fd-foreground">Next.js</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-7 w-fit dark:invert"
                                    src="https://cdn.simpleicons.org/postgresql/black"
                                    alt=""
                                    height="28"
                                    width="auto"
                                />
                                <span className="text-sm font-semibold text-fd-foreground">PostgreSQL</span>
                            </div>
                            <img
                                className="h-7 w-fit"
                                src="https://raw.githubusercontent.com/grpc/grpc.io/main/static/img/logos/grpc-logo-dark.png"
                                alt="gRPC"
                                height="28"
                                width="auto"
                            />
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-7 w-fit dark:invert"
                                    src="https://cdn.simpleicons.org/drizzle/black"
                                    alt=""
                                    height="28"
                                    width="auto"
                                />
                                <span className="text-sm font-semibold text-fd-foreground">Drizzle</span>
                            </div>
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                                alt="Tailwind CSS"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/vercel.svg"
                                alt="Vercel"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                alt="Stripe"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-6 w-auto', className)}>
            <text
                x="10"
                y="22"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="24"
                fontWeight="700"
                fill="url(#logo-gradient)">
                Scrawn
            </text>
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="30"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop
                        offset="1"
                        stopColor="#2BC8B7"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}

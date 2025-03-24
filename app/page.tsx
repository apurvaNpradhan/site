import { BlogPosts } from '@/components/posts'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div className="flex flex-col gap-4 mt-4 md:mt-10">
                <header>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Apurva Narayan Pradhan
                        </h1>
                    </div>

                    <span className="text-muted-foreground text-sm">
                        West Bengal, India
                    </span>
                </header>

                <section className="space-y-6  text-gray-700 dark:text-gray-200">
                    <div className="prose dark:prose-invert max-w-none">
                        <ul className="space-y-1 list-none pl-0">
                            <li className="text-base">
                                Hey, I am Apurva Narayan Pradhan, a fullstack
                                developer building web solutions for me and
                                others.
                            </li>
                            <li className="text-base">
                                An avid learner currently learning about Network
                                Programming.
                            </li>
                            <li className="text-base">
                                Currently, I&apos;m working on a web app called{' '}
                                <Link
                                    href="#"
                                    className="font-medium text-primary underline underline-offset-4"
                                >
                                    Frugal Cove
                                </Link>
                                , an open-source budgeting platform.
                            </li>
                            <li className="text-base">
                                <div className="">
                                    Learn more about me{' '}
                                    <Link
                                        href="/about"
                                        className="underline underline-offset-4 text-primary"
                                    >
                                        here
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <div>
                    Experience
                </div>
                <div>
                    Code
                </div> */}
                <div className="w-full">
                    <span className="text-xl font-bold ">Writing</span>
                    <BlogPosts />
                </div>
            </div>
        </div>
    )
}

import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/header'
export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'Apurva Narayan Pradhan',
        template: '%s | Apurva Pradhan',
    },
    description: 'FullStack Developer,',
}
const inter = Inter({
    subsets: ['latin'],
})
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${inter.className}`}
            suppressHydrationWarning
        >
            <body className="tracking-tight antialiased">
                <ThemeProvider
                    attribute="class"
                    enableSystem={true}
                    disableTransitionOnChange={true}
                >
                    <div className="flex min-h-screen flex-col p-8 pt-3">
                        <Header />
                        <main className="mx-auto w-full max-w-[80ch] space-y-6">
                            <ViewTransition name="test">
                                {children}
                            </ViewTransition>
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

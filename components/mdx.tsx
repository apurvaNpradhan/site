import React, { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { highlight } from 'sugar-high'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image, { type ImageProps } from 'next/image'

type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>

const components = {
    Image: (props: ImageProps) => (
        <Image
            className="rounded-md border border-gray-200 dark:border-zinc-700"
            {...props}
        />
    ),
    h1: (props: HeadingProps) => (
        <h1
            className="mt-12 mb-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
            {...props}
        />
    ),
    h2: (props: HeadingProps) => (
        <h2
            className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200"
            {...props}
        />
    ),
    h3: (props: HeadingProps) => (
        <h3
            className="mt-8 mb-3 text-xl font-medium tracking-tight text-gray-800 dark:text-gray-200"
            {...props}
        />
    ),
    h4: (props: HeadingProps) => (
        <h4
            className="mt-6 mb-2 text-lg font-medium tracking-tight text-gray-700 dark:text-gray-300"
            {...props}
        />
    ),
    p: (props: ParagraphProps) => (
        <p
            className="my-4 leading-relaxed tracking-tight text-gray-700 dark:text-gray-300"
            {...props}
        />
    ),
    ol: (props: ListProps) => (
        <ol
            className="my-4 list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300"
            {...props}
        />
    ),
    ul: (props: ListProps) => (
        <ul
            className="my-4 list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300"
            {...props}
        />
    ),
    li: (props: ListItemProps) => (
        <li className="pl-1 tracking-wide" {...props} />
    ),
    em: (props: ComponentPropsWithoutRef<'em'>) => (
        <em className="italic text-gray-600 dark:text-gray-400" {...props} />
    ),
    strong: (props: ComponentPropsWithoutRef<'strong'>) => (
        <strong
            className="font-semibold text-gray-800 dark:text-gray-200"
            {...props}
        />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
        const className =
            'text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-300 transition-colors duration-200 tracking-wide underline underline-offset-4 decoration-1'
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            )
        }
        if (href?.startsWith('#')) {
            return (
                <a href={href} className={className} {...props}>
                    {children}
                </a>
            )
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} relative after:content-['↗'] after:ml-1 after:text-sm`}
                {...props}
            >
                {children}
            </a>
        )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
        const codeHTML = highlight(children as string)
        return (
            <code
                className="bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md text-sm  font-mono text-red-600 dark:text-red-400 tracking-tight"
                dangerouslySetInnerHTML={{ __html: codeHTML }}
                {...props}
            />
        )
    },
    Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
        <table className="my-6 w-full border-collapse text-gray-700 dark:text-gray-300">
            <thead>
                <tr className="border-b border-gray-200 dark:border-zinc-700">
                    {data.headers.map((header, index) => (
                        <th
                            key={index}
                            className="py-2 px-4 text-left font-medium tracking-wide"
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, index) => (
                    <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-zinc-800"
                    >
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                className="py-2 px-4 tracking-wide"
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    ),
    blockquote: (props: BlockquoteProps) => (
        <blockquote
            className="my-4 pl-4 border-l-4 border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-400 italic tracking-wide"
            {...props}
        />
    ),
}

declare global {
    type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
    return components
}

export function CustomMDX(
    props: React.JSX.IntrinsicAttributes & MDXRemoteProps
) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}

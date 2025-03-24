'use client'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

import { navItems, socialItems } from '@/config/site'
import { NavigationMenu } from './ui/navigation-menu'
import SiteNavItem from './nav'
import { ModeToggle } from './mode-toggle'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './ui/drawer'
export default function Header() {
    return (
        <div className="  flex w-full flex-row items-center justify-between ">
            <div className="flex flex-row gap-4">
                <Link href="/">
                    <h1 className="text-lg font-bold text-primary  duration-300 hover:text-primary/80 md:text-lg">
                        Apurva N Pradhan
                    </h1>
                </Link>
            </div>
            <NavigationMenu className="text-md hidden list-none flex-row items-center gap-3 md:flex">
                {navItems.items
                    .filter((p) => p.title !== 'Home')
                    .map(({ title, href }) => (
                        <SiteNavItem href={href} key={title} title={title} />
                    ))}
                {socialItems.items.map(({ title, href, icon }) => (
                    <SiteNavItem
                        href={href}
                        key={title}
                        icon={icon}
                        title={title}
                    />
                ))}
                <ModeToggle />
            </NavigationMenu>
            <Drawer>
                <DrawerTrigger className="flex md:hidden">
                    <MenuIcon className="h-4 w-4" />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="flex flex-col items-center justify-center gap-2">
                        <DrawerTitle className="flex items-center justify-center">
                            <span className=" ">Apurva N Pradhan</span>

                            <div className="absolute right-10 justify-end">
                                <ModeToggle />
                            </div>
                        </DrawerTitle>
                        <div className="flex flex-row items-center gap-2">
                            {
                                <NavigationMenu className="list-none gap-4">
                                    {socialItems.items.map(
                                        ({ title, href, icon }) => (
                                            <SiteNavItem
                                                href={href}
                                                key={title}
                                                icon={icon}
                                                title={title}
                                            />
                                        )
                                    )}
                                </NavigationMenu>
                            }
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <div className="flex flex-col items-center">
                            {navItems.items.map(({ title, href }) => (
                                <DrawerHeader className="py-1" key={title}>
                                    <Link href={href}>{title}</Link>
                                </DrawerHeader>
                            ))}
                            <div className="absolute right-10 top-8"></div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

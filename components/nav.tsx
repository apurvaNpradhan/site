import Link from 'next/link'
import { cn } from '@/lib/utils'
import { type navItem } from '@/config/site'
import React from 'react'
import { usePathname } from 'next/navigation'
import { NavigationMenuItem, NavigationMenuLink } from './ui/navigation-menu'

const SiteNavItem = ({ href, title, icon }: navItem) => {
    const Icon = icon
    const path = usePathname()
    const isActive = path === href
    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={cn(isActive && 'text-primary')}>
                    <div className="flex items-center justify-center gap-3">
                        {Icon && (
                            <Icon
                                aria-label={title}
                                className="h-4 w-4 md:h-5 md:w-5"
                            />
                        )}
                        {!Icon && title}
                    </div>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}
export default SiteNavItem

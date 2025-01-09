'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
    {
        href: '/',
        label: 'Home'
    },
    
    // {
    //     href: "/posts",
    //     label: "Posts"
    // },
    // {
    //     href: '/create-post',
    //     label: "Create post"
    // }
]
export default function Header() {
    const pathname = usePathname();
    return (
        <header>
            <nav>
                <ul className="flex gap-x-5 text-[14px] absolute top-0 right-0 z-10">
                    {
                        navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    className={`font-bold ${pathname === link.href ? 'text-zinc-900' : "text-zinc-400"
                                        }`}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
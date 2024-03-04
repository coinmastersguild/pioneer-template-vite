import { Button } from "@/components/ui/button"
import Link from "next/link"


export function Footer() {
    return (
        <div className="flex flex-row text-zinc-500 items-center justify-center text-sm">
            <Button variant="link">
                <Link href="https://pioneers.dev/">
                    {new Date().getFullYear()} - pioneers.dev
                </Link>
            </Button>
        </div>
    )
}

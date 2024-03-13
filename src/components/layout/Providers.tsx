"use client"

import * as React from "react"
import { ThemeProvider } from "../ThemeProvider"
// @ts-ignore
import { PioneerProvider } from "@coinmasters/pioneer-react"

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem>
        <PioneerProvider>
            {children}
        </PioneerProvider>
    </ThemeProvider>
}

"use client"

import * as React from "react"
import { ThemeProvider } from "../ThemeProvider"
import { PioneerProvider } from "@pioneer-sdk/pioneer-react"

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
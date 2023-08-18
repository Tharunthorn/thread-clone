import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import "../globals.css";

export const metadata: Metadata = {
	title: 'thread',
	description: 'sign in to thread application'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-black`}>{children}</body>
			</html>
		</ClerkProvider>
	)
}

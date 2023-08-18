import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Bottombar from '@/components/shared/Bottombar'
import Leftsidebar from '@/components/shared/Leftsidebar'
import Rightsidebar from '@/components/shared/Rightsidebar'
import Topbar from '@/components/shared/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'thread',
	description: 'Welcome to threads'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<ClerkProvider>
		<html lang="en">
			<body className={inter.className}>
				<Topbar />
				<main>
					<Leftsidebar />
					<section className="main-container">
						<div className='w-full max-4xl:'>
							{children}
						</div>
					</section>
					<Rightsidebar />
					</main>
				<Bottombar />
			</body>
		</html>
	</ClerkProvider>
  )
}

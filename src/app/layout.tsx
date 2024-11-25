import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Header-Footer/Footer";
import Header from "@/Components/Header-Footer/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MEETUP - Organize, Plan & Participate !",
	description: "An events planning website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Toaster position="top-left" reverseOrder={false} />
				<main className="flex min-h-[90vh] flex-col items-center gap-4 bg-slate-200">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}

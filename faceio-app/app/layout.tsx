// The Header shows the name of the company at the top, the main content is where your dashboard and other content will go
// and finally the footer displays the copyright notice at the bottom.
// It also includes some metadata for better SEO.

// Imports that are needed
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Employee Dashboard with Facial Authentication',
  description: 'A cutting-edge employee dashboard featuring facial recognition for secure authentication and efficient workplace management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-white p-4">
          <h1 className="text-2xl font-bold">Faceio Solutions</h1>
        </header>
        <main className="container mx-auto p-4">
        {children}
        </main>
        <footer className="bg-gray-100 text-center p-4 mt-8">
          <p>&copy; 2024 Faceio . All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

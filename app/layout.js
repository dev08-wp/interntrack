import "./globals.css";

export const metadata = {
  title: "InternTrack - Track Your Internship Applications",
  description:
    "Never lose track of your internship applications. Organize, manage, and land your dream internship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

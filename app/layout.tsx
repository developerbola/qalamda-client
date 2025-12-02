import "./globals.css";

import { Poppins, Playwrite_DE_VA } from "next/font/google";

const playwrite = Playwrite_DE_VA({
  weight: "400",
  display: "swap",
  variable: "--font-playwrite",
});

const poppins = Poppins({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Qalamda</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
        <meta
          name="description"
          content="Maqolalar o'qish va bilimlaringizni boshqalar bilan ulashish uchun
            yangi imkoniyat."
        />
      </head>
      <body className={`${playwrite.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

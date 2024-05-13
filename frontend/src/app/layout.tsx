import { fontClasses } from "@/utils/fonts";
import { classNames } from "@/utils/helpers/classNames";
import { MantineProvider } from "@mantine/core";

import "./globals.css";
import "@/styles/MyWebfontsKit.css";
import "@mantine/core/styles.css";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClasses = classNames(
    fontClasses,
    "relative bg-black min-h-screen text-white !overflow-hidden"
  );
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout;

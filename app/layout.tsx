import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ТитанИнструмент — Лопаты и садовый инструмент оптом',
  description: 'Производство и продажа лопат и садового инструмента оптом. Доставка по России.',
  keywords: ['лопаты', 'инструмент', 'лопата штыковая', 'оптом'],
  openGraph: {
    title: 'ТитанИнструмент',
    description: 'Лопаты и садовый инструмент оптом',
    url: 'https://titan-instrument.ru',
    siteName: 'ТитанИнструмент',
    locale: 'ru_RU',
    type: 'website',
  },
  verification: {
    google: 'DnVMONGwpuTzdl4htebLn3AZ9GKUv2ZsoiAmxcyn2Jo',
    yandex: '3583c7adeaa7f95c',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

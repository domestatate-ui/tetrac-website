import './globals.css';

export const metadata = {
  title: 'Tetrac — Property Management for Modern Landlords',
  description:
    'Track rent, manage tenants, and stay on top of your properties — all in one place. DOM Maintenance by Tetrac helps independent landlords know who has paid and who hasn\'t, instantly.',
  keywords: [
    'property management',
    'rent tracking',
    'landlord software',
    'tenant management',
    'DOM Maintenance',
    'Tetrac',
  ],
  openGraph: {
    title: 'Tetrac — Property Management for Modern Landlords',
    description:
      'Track rent, manage tenants, and stay on top of your properties — all in one place.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}

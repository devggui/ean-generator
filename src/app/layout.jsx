import './globals.css'

export const metadata = {
  title: 'Gerador de EAN',
  description: 'Generated by devggui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
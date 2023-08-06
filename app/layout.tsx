import './globals.css'
import { AnalyticsWrapper } from './components/analytics';
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="wrapper">
          {children}
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  )
}

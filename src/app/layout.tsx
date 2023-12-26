import { title, description, image, twitterHandle } from '../../content/meta'
import { Providers } from './providers'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: image,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

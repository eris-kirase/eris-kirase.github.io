import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

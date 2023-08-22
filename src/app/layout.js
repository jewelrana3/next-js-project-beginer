
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight:['100','300','400','500'],
  variable:'--font-roboto'
 })

export const metadata = {
  title: 'Next',
  description: 'Next',
}

const RootLayout = ({ children }) => {
  console.log('form rootlaout')
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
       
        {children}
        
      </body>
    </html>
  )
}
export default RootLayout
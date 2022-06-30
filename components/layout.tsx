import Header from "./header"

interface LayoutProps {
    children : React.ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
        <Header /> 
        <div className="max-w-7xl mx-auto">
        { children }
        </div> 
    </>
  )
}

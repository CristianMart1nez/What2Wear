import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components/"


export const RootLayout = () => {
  return (
    <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

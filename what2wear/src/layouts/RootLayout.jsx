import { Outlet } from "react-router-dom"


export const RootLayout = () => {
  return (
    <>
    <div>Header</div>
    <main>
        <Outlet />
    </main>
    <div>Footer</div>
    </>
  )
}

import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./Home"
import  Login  from "./login"
import BookDetails  from './BookDetails'
import { GoogleOAuthProvider } from "@react-oauth/google"
import {GoogleProvider} from "./Context/GoogleContext"
import { Toaster } from "react-hot-toast"

function App() {


  return (
    <>
      <BrowserRouter>
      <GoogleOAuthProvider clientId="150494240816-64hjjooke2pes7i15icv5e37n3pd0gl9.apps.googleusercontent.com">
        <GoogleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Toaster
              toastOptions={{
                style: {
                  zIndex: 999999,
                },
              }}
            />
        </GoogleProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

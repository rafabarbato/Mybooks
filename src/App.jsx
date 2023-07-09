import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./Home"
import  Login  from "./login"
import BookDetails  from './BookDetails'
import { GoogleOAuthProvider } from "@react-oauth/google"

function App() {


  return (
    <>
      <BrowserRouter>
      <GoogleOAuthProvider clientId="150494240816-64hjjooke2pes7i15icv5e37n3pd0gl9.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

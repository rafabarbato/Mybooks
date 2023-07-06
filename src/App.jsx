import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./Home"
import BookDetails  from './BookDetails'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

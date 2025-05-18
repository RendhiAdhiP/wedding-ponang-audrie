import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./page/Index"
import NotFound from "./page/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/:nama" element={<Index/>} />
        <Route path="/" element={<Index/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Layout from "./pages/Layout.jsx";

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='post' element={<PostPage/>}/>

          <Route path='*' element={<h4>Not found</h4>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

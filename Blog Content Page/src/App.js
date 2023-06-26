import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Page from "./Components/Page"
import "./App.css"
import { useContext, useEffect } from "react"
import { AppContex } from "./Context/AppComponent"
import Spinner from "./Components/Spinner"

export default function App() {

  const {fetchBlogs} = useContext(AppContex);

  useEffect( () => {
    fetchBlogs();
  },[] )

  return (
    <div className="bg-[#2F2F2F] flex flex-col gap-6">
      <Header></Header>
      <Blogs></Blogs>
      <Page></Page>
    </div>
  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/admin/Login"
import UploadSong from "./components/admin/UploadSong"
import UploadPhoto from "./components/admin/UploadPhoto"
import Music from "./components/main/Music"
import CreateTrendingSongs from "./components/admin/CreateTrendingSongs"
import TrendingSong from "./components/admin/TrendingSong"
import TrendingTracks from "./components/main/TrendingTracks"
import CreateNewSong from "./components/admin/CreateNewSong"
// import DiscoverSongs from "./components/main/DiscoverSongs"
// import SearchComp from "./components/search/SearchComp"
import SearchResults from "./components/search/SearchResults"
import SearchedItem from "./components/search/SearchedItem"
import Header from "./components/nav/Header"
import Home from "./components/home/Home"
import SingleNewSong from "./components/main/SingleNewSong"
import PageNotFound from "./components/main/PageNotFound"





function App() {

  
  
  return(
    <>
    <BrowserRouter>
  <Header />
  

    <Routes>
  <Route path="/" element={<Home />} />
      <Route path="/smogazboard" element={<Login />} />
      <Route path="/upload_song" element={ <UploadSong/> } />
      <Route path="/upload_photo" element={ <UploadPhoto /> } />
      <Route path="/music" element={<Music />} />
      <Route path="/create_trending_song" element={<CreateTrendingSongs />} />
      <Route path="/trending_song/:id" element={ <TrendingSong /> } />
      <Route path="/trending_tracks" element={<TrendingTracks />} />
      <Route path="/find_songs" element={<SearchResults />} />
      <Route path="/searched_item/:id" element={<SearchedItem />} />
      <Route path="/single_new_song/:id" element={<SingleNewSong />} />
      <Route path="/create_new_song" element={ <CreateNewSong /> } />
      <Route path="*" element={<PageNotFound />} />
     
     


    </Routes>
    
    
    </BrowserRouter>
    
    </>
    
    )
}

export default App

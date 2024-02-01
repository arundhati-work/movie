import React, { useEffect } from "react";
import '../styles/Gallery.css';
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { fetchData } from "../slices/actions";
import GalleryMovie from "../components/GalleryMovie/GalleryMovie";

export default function Gallery() {

  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <div id="gallery-route">
      <Header/>
      <div className="main-container">
      {movies.length? (
          movies.map((movie) => {
            return <GalleryMovie key={movie.show.id} id={movie.show.id}/>
            
})
        ) : (
          <div>No courses available</div>
        )}
      </div>
      <Footer/>
    </div>
  )
}

import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Recommended from "./Recommended";
import Viewers from "./Viewers";
import NewMovies from "./NewMovies";
import Trending from "./Trending";
import Originals from "./Originals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import db from "../firebase";
import { setMovies } from "../Features/Movie/movieSlice";
import {
  selectNewMovies,
  selectOriginals,
  selectRecommended,
  selectTrending,
} from "../Features/Movie/movieSlice";
import { selectUserName } from "../Features/User/userSlice";
import Footer from "./Footer";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let trending = [];
  let newMovies = [];
  let originals = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log("trending", trending);
        switch (doc.data().type) {
          case "recommended":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newMovies = [...newMovies, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommended: recommends,
          newMovie: newMovies,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommended />
      <Trending />
      <NewMovies />
      <Originals />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 80px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

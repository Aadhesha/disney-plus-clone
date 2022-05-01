import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

const Details = (props) => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailsData(doc.data());
        } else {
          console.log("No such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailsData.backgroundImg} alt={detailsData.title} />
      </Background>
      <ImageTitle>
        <img src={detailsData.titleImg} alt={detailsData.title} />
      </ImageTitle>
      <Content>
        <Actions>
          <Play>
            <img src="/images/play-icon-black.png" alt="Play" />
            <span>Play</span>
          </Play>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="Play" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />

            <span />
          </AddList>
          <GroupIcon>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupIcon>
        </Actions>
        <SubTitle>{detailsData.subTitle}</SubTitle>
        <Description>{detailsData.description}</Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 25vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  top: 80px;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const Content = styled.div`
  max-width: 874px;
`;

const Actions = styled.div`
  min-height: 54px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 20px 0px;
`;

const Play = styled.button`
  border-radius: 4px;
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background-color: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Play)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const GroupIcon = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  div {
    background: rgb(0, 0, 0);
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const SubTitle = styled.div`
  font-size: 15px;
  min-height: 20px;
  color: rgb(249, 249, 249);
  letter-spacing: 0.8px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  line-height: 1.2;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Details;

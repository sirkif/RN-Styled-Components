import React from "react";
import styled from "styled-components";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

// import PressableButton from "./components/PressableButton";

const DATA = [
  {
    id: "1",
    userAvatar: require("./assets/avatar2.png"),
    userName: "User 1",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post1.png"),
  },
  {
    id: "2",
    userAvatar: require("./assets/avatar4.png"),
    userName: "User 2",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post2.png"),
  },
  {
    id: "3",
    userAvatar: require("./assets/avatar3.png"),
    userName: "User 3",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post3.png"),
  },
  {
    id: "4",
    userAvatar: require("./assets/avatar4.png"),
    userName: "User 4",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post4.png"),
  },
];
export default function App() {
  return (
    <Container>
      <Header headerTitle="social" />
      <RowContainer>
        <Avatar imageSource={require("./assets/avatar1.png")} />
        <InputContainer />
      </RowContainer>
      <Card data={DATA} />
      {/* <PressableButton
        onPress={() => true}
        title="First button"
        bgColor="#4267B2"
        primary
      /> */}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
const RowContainer = styled.View`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
`;

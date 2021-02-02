import React from "react";
import styled from "styled-components";

export default function PressableButton({ onPress, primary, bgColor, title }) {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
      <ButtonText primary={primary}>{title}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.primary ? "white" : "#010101")};
`;

import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  grid-gap: 20px;
`;

export const InputBar = styled.input`
  display: flex;
  margin-top: 20px;
  height: 50px;
  border: none;
  background-color: #eee;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 0 300px 0px 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Text = styled.p`
  font-size: 18px;
  font-family: helvetica;
  color: #333;
`;

export const IconStyle = styled.span`
  right: 0;
  top: 35px;

  position: absolute;
  font-family: "Material Icons";
  font-size: 20px;
  color: #333;
  margin-right: 3px;
  margin-left: 10px;
`;

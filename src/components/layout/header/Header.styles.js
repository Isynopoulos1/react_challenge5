import styled from "styled-components";

export const header = styled.header`
  display: flex;
`;
export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-direction: column;
  top: 0;
  padding-top: 40px;
`;
export const HeroContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  color: white;
`;
export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  background-position: center 20%;
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 4px solid #f50;
  background-color: #fff;
`;

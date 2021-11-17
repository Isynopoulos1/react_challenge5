import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  background-color: #f2f2f2;
`;

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  top: 0;
  padding-top: 40px;
`;

export const HeroImage = styled.div`
  position: relative;
  width: 1400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-image: url(https://ik.imagekit.io/ppayaz/react_challenge5/sc_landing_header_web_featured_artists_2x-00444712_wDKHkU-AZ3.jpeg?updatedAt=1636645480363);
  background-position: center 20%;
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 4px solid #f50;
  background-color: #fff;
`;

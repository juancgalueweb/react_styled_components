import styled from "styled-components";

export const Apps = styled.div`
  width: 100%;
  background-color: #ddd;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Header = styled.div`
  min-height: 150px;
  width: 100%;
  margin-bottom: 15px;
  background-color: #6aa84f;
  border: 2px solid #000;
`;

export const Navigation = styled.div`
  min-height: 300px;
  flex-grow: 1;
  vertical-align: top;
  margin-right: 15px;
  background-color: #6fa8dc;
  border: 2px solid #000;
`;

export const Main = styled.div`
  min-height: 370px;
  flex-grow: 2;
  background-color: #e06666;
  border: 2px solid #000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SubContent = styled.div`
  min-height: 200px;
  flex-basis: 31%;
  margin: 10px;
  background-color: #ffd966;
  border: 2px solid #000;
`;

export const Advertisement = styled.div`
  min-height: 120px;
  flex-basis: 100%;
  margin: 10px;
  background-color: #b4a7d6;
  border: 2px solid #000;
`;

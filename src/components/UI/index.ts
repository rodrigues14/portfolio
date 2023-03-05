import styled from "styled-components";

export const Container = styled.section`
  padding: 70px 150px;
  min-height: calc(100vh - 70px - 59px);
  background-color: ${({ theme }) => theme.container};
  @media (max-width: 950px) {
    padding: 70px 50px;
  }
  @media (max-width: 650px) {
    padding: 70px 25px;
  }
`

export const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text};
`;

export const BtnTheme = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;
import styled from '@emotion/styled';
export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainContent = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.85);
  color: #b4b2b0;
  font-size: 32px;
`;
export const MainFooterMadeIn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainFooterMeadInText = styled.span`
  margin-right: 10px;
`;

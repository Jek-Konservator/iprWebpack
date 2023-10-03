import React from 'react';
import './style.css';
import icon from '../../assets/icons/webstorm.svg';
import {
  MainContainer,
  MainContent,
  MainFooter,
  MainFooterMadeIn,
  MainFooterMeadInText,
} from './styles';

export const Main = () => {
  return (
    <MainContainer>
      <MainContent></MainContent>

      <MainFooter>
        <div>
          <span>ALEKSEEV ROMAN</span>
        </div>
        <MainFooterMadeIn>
          <MainFooterMeadInText>Сделано в :</MainFooterMeadInText>
          <img width={50} src={icon} alt="Icon" />
        </MainFooterMadeIn>
        <div>
          <span>IPR WEBPACK</span>
        </div>
      </MainFooter>
    </MainContainer>
  );
};

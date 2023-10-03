import React, { lazy, Suspense, useState } from 'react';
import { FirstButton } from './Components/FirstButton/FirstButton';
import { css, Global } from '@emotion/react';
import './style.css';
const Main = lazy(() =>
  import('./Components/Main/Main').then(({ Main }) => ({
    default: Main,
  })),
);
export const App = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      {flag && (
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
      )}
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      {!flag && <FirstButton setFlag={setFlag} />}
    </div>
  );
};

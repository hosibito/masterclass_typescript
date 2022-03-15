import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import App from './App';
import { darkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>   
     <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,   
  document.getElementById('root')
);


/**
 * 테마적용 흐름
 * 1. styled.d.ts 를 만들어서 DefaultTheme 를 정의해준다. 
 * 2. theme.ts 파일을 만들어서 실제 Theme 들을 정의해준다.
 *        이떄 DefaultTheme 이 정의되어있으므로 자동완성과 정확하게 들어가야할것 안드가야할것 다 오류로 표시해준다.
 * 3. 정의된 테마를 <ThemeProvider theme={darkTheme}> 로 보낸다.
 * 4. ThemeProvider 로 감싸진 곳에서는 어디서나 ${(props) => props.theme.bgColor} 과 같이 접근가능하다.  

*/
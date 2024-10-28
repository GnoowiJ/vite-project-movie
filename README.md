# React + Vite 연습 프로젝트

## 🖥️ 프로젝트 목적
vite의 사용과 react의 숙달 및 해당 프로젝트의 배포를 위한 프로젝트

## 🕰️ 개발 기간
24.10.23 ~

## ⚙️ 개발 환경
- `React` 
- `vite`
- **IDE** : VSCode

## 📌 문제 상황
 - 10/26 배포시 문제 상황
   
   gh-pages를 이용하여 배포 하였으나 출력이 되지 않음
   
   -> vite에선 index.js가 main.jsx로 변환이 되어 main.jsx 페이지에 React를 임포트 해주어야 출력
   title만 출력이 되고 api를 이용한 movieList가 출력되지 않음
   
   -> BrowserRouter에서 basename을 process.env.PUBLIC_URL 넣어주라는 말이 있어서 해보았지만 동일,
       github repository 이름을 넣어주니 정상적으로 출력이 되었다.
   
- 10/28 movieList 렌더링 문제
   
  휴대폰에서도 보여지는지 확인 하던 중 movieList가 출력되지 않음, 오류 확인해보니 api호출이 정상적으로 되지 않음
  
  -> 오픈 api의 키값이 문제였던것으로 확인, 새로 회원가입을 하여 키를 발급받고 개인 키로 호출 하니 정상출력 확인



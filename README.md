# React + Vite 연습 프로젝트

## 🖥️ 프로젝트 목적
vite의 사용과 react의 숙달 및 해당 프로젝트의 배포를 위한 프로젝트

## 🕰️ 개발 기간
24.10.23 ~ 24.10.31

## ⚙️ 개발 환경
- `React` 
- `vite`
- `github`
- **IDE** : VSCode

# 배포 url
- https://gnoowij.github.io/vite-project-movie/

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

- 10/29 Detail component에서 api사용하여 가져온 데이터 출력 안됨
 
  ->api 인증키 승인 받고 가져온 데이터를 state 변수 하나에 담아서 출력, 배우 정보들에 대한 부분 map() 실행 하였으나 오류 발생(속성값을 읽을수 없다는 오류)확인
  
    출력 해야 되는 부분 각각 state변수를 새로 만들어서 저장후 출력, api호출이 되기 전에 loading state를 만들어서 화면 출력에 대한 안정성 추가

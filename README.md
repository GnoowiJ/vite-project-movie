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

- 이후 정상 접속 되는지 확인했으나 상세보기 누르면 데이터 정상 출력 되지 않고 개발자 도구에서 오류 확인(Mixed Content: The page at 'https://gnoowij.github.io/vite-project-movie/movie/%EB%B2%A0%EB%86%88:%20%EB%9D%BC%EC%8A%A4%ED%8A%B8%20%EB%8C%84%EC%8A%A4' was loaded over HTTPS, but requested an insecure resource 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.js…%BC%EC%8A%A4%ED%8A%B8%20%EB%8C%84%EC%8A%A4&ServiceKey=99UC0FB521R3FT7V4CFG'. This request has been blocked; the content must be served over HTTPS.
a	@	index-CTIrYiR1.js:67 )

 -> 해당 오류는 HTTPS로 로드된 페이지에서 HTTP 프로토콜을 사용하여 리소스를 요청할 때 발생하는 보안 문제임을 확인 / 상세 내용 api호출 링크에 http에서 https로 수정 후 이후 작동 확인해보니 정상작동 확인

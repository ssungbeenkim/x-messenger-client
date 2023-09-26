# X-Messenger

## 서비스 소개

- 실시간 채팅이 가능한 웹 어플리케이션입니다.
- [배포 링크](https://beautiful-hummingbird-0ed56a.netlify.app)
- [Server Repository](https://github.com/wandakim/X_Messenger)

<br />
 
## 주요 구현 사항 
- Socket.io를 활용 CRUD 에 대하여 실시간 의사소통 구현 
- MVC 패턴 활용한 CRUD  
- 토큰을 활용한 사용자 로그인 기한 설정 및 만료시 자동 로그아웃 
- HTTP Only Cookie로 로그인 토큰 보관, XSS Attack으로부터 서버 보호 
- 최초 접속시 토큰을 메모리에 저장하여 CSRF Attack으로부터 서버 보안 
- Fixed Window방식의 Rate Limit으로 서버의 과부하를 방지 
- 429 response시 Jitter 적용 Retry로 UX 개선

<br />

## API Spec

<br />

## Built With

- Backend
  </div> 
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=netlify&logoColor=white">
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white">
    <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
     <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white">
     <img src="https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=white">
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
      <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
      <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
      <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
    <div>

<br />

## Roadmap

### Must have

- [x] Restfull APIs CURD
- [x] 소켓을 활용한 실시간 의사소통
- [x] 토큰을 활용하여 로그인 사용자 기억

### Nice to have

- [x] XSS Attack Authentication
- [x] CSRF Attack Authentication

### Good to have

- [x] auto
- [x] 토큰 기간 만료시 자동 로그아웃
- [x] valitation, sanitization

### Need to Fix

- [ ] netlify 배포 환경에서 리프레시 소켓 이슈
- [ ] heroky sleep
- [ ] 모바일 환경에서 토큰 보관 로직 추가

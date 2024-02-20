🧐 과기대에서 오늘 뭐 먹지? (React web application)
=============

## ❗️Project 개요
**"과기대에서 오늘 뭐 먹지?"** 웹 어플리케이션은 서울과학기술대학교 학생들과 교직원들을 위한 웹
어플리케이션으로 매일 먹을 음식을 고민하는 학생들 혹은 교직원들을 위해 만들어졌다 이 웹 어플리케이션의
기본적인 기능으로는 랜덤으로 추천 메뉴를 제공해주고 다양한 서울과학기술대학교 주변 음식점에 대한 정보를
제공하여 몰랐던 과기대의 숨은 맛집에 대한 정보를 제공해준다 또한 음식점에 대한 추천도 가능하며 실제
평가를 댓글로 남길 수 있어 맛집에 대한 활발한 공유의 장이 될 수 있다.

## ❗️Project 설계
- Use Case
- DB 설계
- 서비스 절차
- API 명세서

|Method|URI|Description|
|---|---|---|
|POST|/join|회원가입|
|POST|/login|로그인|
|GET|/logout|로그아웃|
|GET|/user|로그인 여부 확인|
|GET|/place|전체 음식점 조회|
|PUT|/place/recommend/{placeID}|음식점 추천수 수정|
|PUT|/place/unrecommend/{placeID}|음식점 비추천수 수정|
|PUT|/place/like/{placeID}|음식점 즐겨찾기수 수정|
|GET|/comment/{placeID}|음식점 댓글 조회|
|POST|/comment/{placeID}|음식점 댓글 생성|
|PUT|/comment/{placeID}|음식점 댓글 수정|
|DELETE|/comment/{placeID}|음식점 댓글 삭제|
|GET|/mypage/{userID}|회원 즐겨찾기 조회|
|DELETE|/mypage/like/delete/{userID}/{placeID}|회원 즐겨찾기 삭제|
|POST|/requirement|음식점 요청 생성|

## ❗️사용 기술 스택
- 프론트엔드
- 백엔드
- DB
- 클라우드 스토리지

## Project 결과물 및 기능 설명

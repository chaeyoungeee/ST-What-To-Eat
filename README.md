🧐 과기대에서 오늘 뭐 먹지? (React web application)
=============

<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/4aab337f-ac35-49b3-bc65-379d1ac8d8a2">
</p>

## ❗️Description
**"과기대에서 오늘 뭐 먹지?"** 웹 어플리케이션은 서울과학기술대학교 학생들과 교직원들을 위한 웹
어플리케이션으로 매일 먹을 음식을 고민하는 학생들 혹은 교직원들을 위해 만들어졌다. 이 웹 어플리케이션의 `랜덤으로 추천 메뉴를 제공`해주고 다양한 서울과학기술대학교 주변 `음식점에 대한 정보를
제공`하여 서울과학기술대학교 주변의 숨은 맛집을 발견할 수 있도록 도와준다. 또한 `음식점에 대한 추천`도 가능하며 실제 `평가를 댓글`로 남길 수 있어 맛집에 대한 활발한 공유의 장이 될 수 있다.

## ❗️Project Design
#### 1. Use Case
<p align="center">
  <img width="433" alt="usecase" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/9b3cb7b7-664d-4048-a654-c8153ca4cdf7">
</p>
  
#### 2. DB ERD
<p align="center">
<img width="452" alt="db" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/3b2d667e-d1a9-43c6-91ff-8c484a767401">
</p>

#### 3. Site Configuration Diagram
<p align="center">
<img width="452" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/f3baff7e-4793-4479-8867-8bc80b3a5a20">
</p>

#### 4. Service Procedure
- without login
<p align="center">
<img width="452" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/1ec1bbd3-6997-46ee-8de5-b9ccf1080eff">
</p>

- login
<p align="center">
<img width="452" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/5a08b4d5-cc13-486b-8d85-7fd393bd7ef3">
</p>

#### 5. API Specification

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

## ❗️Technology Stack
- **Frontend**
ReactJS, Bootstrap, SCSS
- **Backend**
NodeJS
- **DB**
MongoDB
- **Cloud Storage**
Amazon S3


## ❗️ Main Function & Running
#### 1. 메인페이지

> 1. Best7: DB에 있는 음식점 데이터를 가져와 추천수가 가장 높은 상위 7곳의 음식점을 슬라이드로 출력해준다.
> 2. Random: 랜덤으로 음식점을 출력해준다.
> 3. Like: 즐겨찾기수가 가장 높은 상위 3 곳의 음식점을 출력해준다.
> 4. Footer: 로그인을 한 사용자가 추천하고 싶은 음식점을 제출하면 관리자가 반영할 수 있도록 DB 에 저장한다.

<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/2393706e-b4b5-41de-bee2-9772c099284c">
</p>

#### 2. 회원가입 및 로그인 페이지

> - 회원가입
> 1. 닉네임 혹은 아이디가 이미 존재하거나, 비밀번호가 조건에 맞지 않을 시 또는 공백일 시 해당하는 알림을 화면에 출력한다.
> 2. bcrypt 해싱 알고리즘: 비밀번호를 bcrypt 해싱 라이브러리를 사용해 해싱하여 보안성을 높였다.

> - 로그인
> 1. 아이디나 비밀번호가 틀리면 해당하는 알림을 화면에 출력한다.
> 2. 세션 유효기간: 세션 유효기간을 24 시간으로 지정해 세션을 DB 에 저장해 24 시간동안 로그인이 유지된다.

<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/fa0f9bfe-1cf6-49a1-b233-fc30a861e113">
</p>

#### 3. 카테고리 페이지

> 1. 필터: 해당 카테고리를 선택하면 그 카테고리에 해당하는 음식점을 출력한다.
> 2. 정렬: 추천순/인기순/최신순으로 정렬해 음식점을 출력한다.

<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/705dbd1b-1a73-4275-99fc-5f8ebe4fcbc5">
</p>

#### 4. 디테일 페이지

> 1. 네이버 지도 API:DB에 저장된 음식점의 위도, 경도 데이터를 통해 위치 지도를 출력한다.
> 2. DB 에 저장된 음식점 사진, 메뉴를 출력한다.
> 3. 추천, 비추천, 즐겨찾기: 추천, 비추천, 즐겨찾기를 DB에서 불러와 출력하고 반영한다. 즐겨찾기한 음식점은 즐겨찾기 페이지에서 확인할 수 있다. 로그인한 사용자만 이용이 가능하고 로그인하지 않은 사용자가 해당 버튼을 클릭시 로그인 알림이 출력된다.
> 4. 댓글:DB에서 현재 음식점에 해당하는 댓글을 불러와 출력한다. 사용자는 자신이 쓴 댓글에 대해 수정 및 삭제가 가능하다. 댓글은 로그인한 사용자만 입력할 수 있으며 로그인하지 않은 사용자가 해당 버튼을 클릭시 로그인 알림이 출력된다.

<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/7da78759-7640-49ee-9751-3f337afc5333">
</p>
<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/35464522-6621-4409-a866-97221b4fa319">
</p>

#### 5. 즐겨찾기 페이지

> 1. 사용자가 즐겨찾기한 음식점을 DB 에서 불러와 출력한다. 즐겨찾기한 음식점은 삭제 버튼을 통해 삭제 가능하며 로그인한 사용자만 해당 페이지를 이용할 수 있으며 로그인하지 않은 사용자가 즐겨찾기 페이지에 접속하려 할 시 로그인 페이지로 네비게이트된다.

<p align="center" >
  <img width="550" src="https://github.com/chaeyoungeee/ST-What-To-Eat/assets/102286483/506e613b-353a-46b9-a664-34432f46b632">
</p>

## ❗️Project Development Direction
1. **위치 기반 음식점 추천 최적화**: 사용자의 현재 위치를 고려하여 주변 음식점과의 거리를 계산하고, 이를 기반으로 거리순으로 정렬하는 기능을 추가할 것이다. 이를 통해 사용자가 빠른 시간 내에 이용할 수 있는 음식점을 추천해줄 수 있다.
2. **서비스 확장을 통한 사용자 확대**: 서울과학기술대학교 뿐만 아니라 다양한 학교로의 서비스 확장을 통해 사용자 범위를 확장할 것이다.
3. **인증된 사용자**: 학생 혹은 교직원 인증을 한 회원을 표시하는 기능을 구현할 것이다. 이를 통해 사용자들에게 신뢰성 있는 플랫폼을 제공하며, 서비스 이용 경험을 향상시킬 수 있을 것이다.

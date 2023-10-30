**ex04** : css 모듈 번들링

1. 설치 패키지
$ npm i -D web webpack-dev-server  css-loader style-loader

2. 번들링 환경 설정 : webpack.config.js
  1) entry
  2) output
  3) devServer

3. 스크립팅 : 번들링을 메모리에 한다!(퍼블릭x)
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }

4. 빌드
$ npm run build  

5. 실행
$ npm start
### ex08
## JSX tutorial
#### 01. 특징
##### 1) HTML과의 차이점
##### 2) Single Root
##### 3) JSX 표현식 표기법 { javascript expression }
##### 4) 함수 컴포넌트
- rsf 함수형   
- rsc 함수형 화살표   
- rcc 클래스 컴포넌트
##### 5) Pure React(React API)로 컴포넌트 만들기
##### 6) 클래스 컴포넌트 
-----------------

#### 1. install
##### Dev Tools
     $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react

##### React Library   
     $ npm i react react-dom

#### 2. Setting
##### - webpack.config.js 
##### - babel.config.json

#### 3. Scripting
```
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }
```


#### 4. Dev Server Run(실행) & Build
    $ npm run debug src=(01|02|03|04|...)

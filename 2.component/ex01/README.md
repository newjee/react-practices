### ex01
## property

#### 0. 
1) 컴포넌트의 데이터
2) 부모에서 자식으로 전달
  - 컴포넌트 통신 (DATA Flow)
  - Top -> Down
3) 자식에서 변경 불가
4) 부모가 소유한 DATA   

|Practice|Description|
| -- |-- |
|src/01 | 함수 컴포넌트의 property|
|src/02 | DATA Flow|
|src/03 | 클래스 컴포넌트의 property|
|src/04 | property의 validation|


-----------------

#### 1. install
##### Dev Tools
     $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react

##### React Library   
     $ npm i react react-dom

#### Validation
     $ npm install prop-types

#### 2. Setting
##### - webpack.config.js 
##### - babel.config.json

#### 3. Scripting
```
  "scripts": {
    "debug": "npx webpack serve --progress --env",
    "build": "npx webpack"
  }
```

#### 4. Dev Server Run(실행) & Build
    $ npm run debug src=(01|02|03|04|...)

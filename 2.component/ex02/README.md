### ex02
## Component Styling 꾸미기

#### 0.Practice
| Practice | Description |
| ----- | ----- |
|src/01 | Inline Styling
|src/02 | Normal CSS - css-loader option:{module:false}
|src/03 | CSS Module I - css-loader option:{module:true} => css 해싱
|src/04 | CSS Module II


4) 
5) SASS & SCSS
6) CSS in JS - Styled Component
7) React Modal
8) Modal Material UI

-----------------

#### 1. install
만약 package.json copy 했다면, $ npm i
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
    "start": "npx webpack serve --progress --env",
    "build": "npx webpack"
  }
```

#### 4. Dev Server Run(실행) & Build
    $ npm run debug src=(01|02|03|04|...)

      $ npm run debug src=02 [css-module=false]
    $ npm run debug src=03 //css-module=true//


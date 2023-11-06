### ex03
## React Event

#### 0.Practice
| Practice | Description |
| ----- | ----- |
|src/01 | Inline Handler
|src/02 | Function Handler
|src/03 | Synthetic Event 객체 (DOM Event 합성)
|src/04 | Event Handler 예제
|src/05 | ref use - Function Component
|src/06 | ref use - Class Component



-----------------

#### 1. install
만약 package.json copy 했다면, $ npm i
##### Dev Tools
     $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react

##### React Library   
     $ npm i react react-dom styled-components

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

      $ npm run debug src=02 [css-module=false]
    $ npm run debug src=03 //css-module=true//


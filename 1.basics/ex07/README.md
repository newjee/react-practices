### ex07
## ex00.cra Recofiguration(내가 직접 설정)
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

     $ npm start
     $ npm run build
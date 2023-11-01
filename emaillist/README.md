## Emaillist : Frontend

#### 0.

#### 1. install
##### init
     $ npm init -y

만약 package.json copy 했다면, $ npm i
##### Dev Tools
     $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin

##### React Library   
     $ npm i react react-dom

##### 
 $ case-sensitive-paths-webpack-plugin
#### 2. Setting
##### - webpack.config.js 
##### - babel.config.json

#### 3. Scripting
```
  "scripts": {
    "debug": "npx webpack serve --progress ",

 "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npx webpack --config config/webpack.config.js --mode production"
  }
```

#### 4. Dev Server Run(실행) & Build
    $ npm run debug


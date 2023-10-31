### ex03
# babel
Transpile _변환_ 규칙을 소스에 적용해서 버전이 변환된 소스를 적용

## Plugin 

#### 1. install
     $ npm i -D @babel/core @babel/cli

#### 2. Plugin 
##### 블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping)
     $ npm i -D @babel/plugin-transform-block-scoping
     $ npx babel src/index.js -o dist/index.js --plugins @babel/plugin-transform-block-scoping
##### 객체분해-파라미터 플러그인(@babel/plugin-transform-parameters)
     $ npm i -D @babel/plugin-transform-parameters
     $ npx babel src/index.js -o dist/index2.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters

##### for ~ of 플러그인(@babel/plugin-transform-for-of)
     $ npm i -D @babel/plugin-transform-for-of
     $ npx babel src/index.js -o dist/index3.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-for-of



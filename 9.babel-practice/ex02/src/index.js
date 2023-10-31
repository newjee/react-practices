
// 블록 스코트(es6)
const user = [
  {
    no: 1,
    name: '희도',
    email: 'hido@gmail.com'
  },
  {
    no: 2,
    name: '장미',
    email: 'jangmi@gmail.com'
  }
];


// 객체분해(es6)
function print(no, name, email) {
  // 템플릿 문자열(es6)
  console.log(`${no}`);
}



// for ~ of(es6)
for (let user of users){
  print(user);

}
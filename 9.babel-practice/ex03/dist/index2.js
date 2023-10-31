// 블록 스코트(es6)
var user = [{
  no: 1,
  name: '희도',
  email: 'hido@gmail.com'
}, {
  no: 2,
  name: '장미',
  email: 'jangmi@gmail.com'
}];

// 객체분해(es6)
function print(_ref) {
  var {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(es6)
  console.log(`${no}:${name}:${email}`);
}

// for ~ of(es6)
for (var _user of users) {
  print(_user);
}

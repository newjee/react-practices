
function App() {
  const App = document.createElement('div');
  App.textContent = "Hello World";
  return App;
}

document
  .getElementById('root')
  .appendChild(App());
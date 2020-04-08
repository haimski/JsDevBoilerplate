const app = document.getElementById('app');

app.innerHTML = 'shalom zoomba fuckers';

let = requestUrl = '/items';
let request = new XMLHttpRequest();

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function() {
  const items = request.response;
  console.log(items);
}
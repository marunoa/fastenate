var httpRequest;

if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();

} else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open('GET', '/api/random.json', true);
/*httpRequest.open('GET', '/api/my_boards.json', true);
httpRequest.open('GET', '/api/get_the_app.json', true);*/

httpRequest.onreadystatechange = function () {

    if (httpRequest.readyState === 4) {

      if (httpRequest.status >= 200 && httpRequest.status < 300) {

      } else {

        throw new Error('There was a problem with the request.');

      }

    }
};

httpRequest.send(null);

function random () {

  menu.innerHTML = '';

  var json = JSON.parse(httpRequest.responseText);
  httpRequest.addEventListener('load', random);

  for (var i = 0; i < json.data.children.length; i++) {

    var menu1 = document.createElement('li');
    menu1.innerHTML = "<a href='" + json + "'>" + 'RANDOM' + "</a>";
    menu1.className = 'menu1';
    document.body.appendChild(menu1);

  }

}
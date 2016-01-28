function copy(ip) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = ip;
  input.focus();
  input.select();
  document.execCommand('Copy');
  input.remove();
}

function print(text) {
  document.getElementById('ip').innerHTML = text;
}

function getIp() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://checkip.dyndns.org', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;
      var re = new RegExp('s/[a-zA-Z/<> :]//g');
      var ip = re.exec(resp);
      print(ip);
      copy(ip);
    } else {
      print('Error from the server');
    }
  };

  request.onerror = function() {
    print('Unable to connect');
  };

  request.send();
}

getIp();

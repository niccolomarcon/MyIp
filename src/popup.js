$(document).ready(function() {
  var api = 'http://codiceloco.altervista.org/services/echo_ip.php';

  function copy(val) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = val;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
  }

  $.ajax({
    url: api
  }).done(function(data) {
    $('#ip').html(data);
    $('#ip').click(function() { copy(data); });
  });
});

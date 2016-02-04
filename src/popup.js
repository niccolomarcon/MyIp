$.ajax({
  url: "http://codiceloco.altervista.org/services/echo_ip.php",
}).done(function(data) {
  $('#ip').html(data);
  $('#ip').click(function() { copy(data); });
});

function copy(val) {
  var input = $('textarea');
  document.body.appendChild(input);
  input.value = val;
  input.focus();
  input.select();
  document.execCommand('Copy');
  input.remove();
}



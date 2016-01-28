console.log(ip)
// Coping the ip into the clipboard
var input = document.createElement('textarea');
document.body.appendChild(input);
input.value = ip;
input.focus();
input.select();
document.execCommand('Copy');
input.remove();

// Display the ip
document.getElementById('ip').innerHTML = ip;



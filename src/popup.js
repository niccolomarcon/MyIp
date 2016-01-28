var input = document.createElement('textarea');
document.body.appendChild(input);
input.value = 'ciaone';
input.focus();
input.select();
document.execCommand('Copy');
input.remove();

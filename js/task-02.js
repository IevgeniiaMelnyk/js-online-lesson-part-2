// --- append ---
{/* <a class="link" href="https://google.com">Google</a> */}

const link = document.createElement('a');
link.href = 'https://google.com';
link.textContent = 'Google';
link.classList.add('link');
link.id = 123;
link.type = 'qwerty';

link.setAttribute('wertyui', 'true');

const body = document.querySelector('body');
body.appendChild(link);

console.log(link.outerHTML);

// link.click();

// --- formData ---
const data = new FormData();
data.append('name', 'Bobby');
data.append('age', '15');
data.append('eyes', 'blue');

console.log(Object.fromEntries(data));
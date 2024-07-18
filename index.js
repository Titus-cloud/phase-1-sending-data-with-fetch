// Add your code here
function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const data = {
    name: name,
    email: email
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  };

  return fetch(url, config)
    .then(response => response.json())
    .then(data => {
      appendIdToDOM(data.id);
    })
    .catch(error => {
      appendErrorToDOM(error.message);
    });
}

function appendIdToDOM(id) {
  const element = document.createElement('p');
  element.textContent = `New ID: ${id}`;
  document.body.appendChild(element);
}

function appendErrorToDOM(message) {
  const element = document.createElement('p');
  element.textContent = `Error: ${message}`;
  document.body.appendChild(element);
}

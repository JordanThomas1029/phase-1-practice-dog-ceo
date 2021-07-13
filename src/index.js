console.log('%c HI', 'color: firebrick');

fetch(imgUrl, { method: 'GET' }).then((response) => {
  console.log(response);
  if (response.ok) {
    return response.json();
  }
});

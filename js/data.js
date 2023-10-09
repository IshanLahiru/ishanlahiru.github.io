const token = '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';

fetch('https://api.github.com/repos/IshanLahiru/ishanlahiru.github.io/contents/data.md', {
  method: 'GET',
  headers: {
    'Authorization': `token ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Handle the data from the API response
    let siteName = document.getElementsByClassName("navbar-brand");
    console.log(siteName);
    console.log(data);
    let parsedData = JSON.parse(atob(data.content));
    console.log(parsedData);
    siteName.item(0).innerHTML = `${parsedData[0].fname} ${parsedData[0].lname}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });

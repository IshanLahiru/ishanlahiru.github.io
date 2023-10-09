const token = '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';

fetch('https://api.github.com/repos/IshanLahiru/ishanlahiru.github.io/contents/data.md', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
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
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });

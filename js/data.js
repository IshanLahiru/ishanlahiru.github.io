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
    siteName.item(0).innerHTML = `${parsedData.fname} ${parsedData.lname}`;
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });

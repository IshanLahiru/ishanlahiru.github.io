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
    console.log(parsedData[0]);
    let theData = parsedData[0];
    siteName.item(0).innerHTML = `${theData.heroSection.fname} ${theData.heroSection.lname}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });

const token = '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';
let theData = {};

fetch('https://api.github.com/repos/IshanLahiru/ishanlahiru.github.io/contents/data.md', {
  method: 'GET',
  headers: {
    'Authorization': `token ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Handle the data from the API response
    let siteName = document.getElementsByClassName("introduction");
    console.log(siteName);
    console.log(data);
    let parsedData = JSON.parse(atob(data.content));
    console.log(parsedData[0]);
    theData = parsedData[0];
    siteName.item(0).innerHTML = `${theData.heroSection.fname} ${theData.heroSection.lname}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });

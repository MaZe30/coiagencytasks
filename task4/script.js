fetch("./data.json")
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return (data.json());
  })
  .then(function (Normal) {
    const html = Normal.map(
      (data) => `<div class="items"> 
	  
        <img class="icon" src="${data.icon}"> 
        <h2 class="heading"> ${data.heading}</h2>
        <p class="text"> ${data.text}</p>
		
        
    </div>`
    ).join("");
    document.getElementById("app").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });





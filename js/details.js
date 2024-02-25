// details.js

    // Get the data from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    const image = urlParams.get("image");
    const price = urlParams.get("price");
    const description2 = urlParams.get("description2");

    // Get the item details container
    const itemDetailsContainer = document.getElementById("itemDetails");

    
    const itemDetailsElement = document.createElement("div");
    itemDetailsElement.classList.add('detailwrapper')
    itemDetailsElement.innerHTML = `
        <h1>${title}</h1>
        <img src="${image}" alt="${title}" style="max-width: 100%;">
        <p>Price: ${price}</p>
        <h2> ${description2}</h2>
    `;

    itemDetailsContainer.appendChild(itemDetailsElement);


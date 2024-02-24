 
 // ეს არის აიტემბი 1- სექცია 3 ის წინ დივში შემაქ
 const items =  [
    { id: 1, img:'images/div1/nicosia.jpg', button: 'Book Now',title:'14 Days North Spain', title2:'Bilbao, San Sebastian, Pamplona', price:'from 1590 $', description: '1--Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:' 1----In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 2, img:'images/div1/barcelona.jpg', button: 'Book Now',title:'4 Days Barcelona', title2:'Barcelona, Mediterranean', price:'from 543 $', description: '2---Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs.2.', description2:'2---In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 3, img:'images/div1/sardina.jpg', button: 'Book Now',title:'8 Days Sardinia Break', title2:'Costa Brava, Girona', price:'from 1027 $', description: '3--Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs.3.',description2:'3---In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },
    { id: 4, img:'images/div1/azores.jpg', button: 'Book Now',title:'9 Days Azores Islands', title2:'San Miguel, Pico, Faial', price:'from 1580 $', description: '4--Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'4---In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },
    { id: 5, img:'images/div1/nicosia.jpg', button: 'Book Now',title:'2 Days in Nicosia', title2:'Weekend in Nicosia', price:'from 139 $', description: '5--Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..', description2:'5--In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 6, img:'images/div1/besparmk.jpg', button: 'Book Now',title:'7 Days Besparmak Trail', title2:'Walking vacation in North Cyprus', price:'from 798 $', description: '6--Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..', description2:'6-- publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 7, img:'images/div1/barcelona.jpg', button: 'Book Now',title:'3 Days Northern Cyprus', title2:'Famagusta, Nicosia, Kyrenia', price:'from 411 $', description: '7---Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'7---In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },
    { id: 8, img:'images/div1/lisabon.jpg', button: 'Book Now',title:'3 Days in Lisbon', title2:'Lisbon and Sintra', price:'from 349 $', description: '8---Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'8--In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },

];

  // Get the item list container
  const itemListContainer = document.getElementById("itemList");
  var itembutton=document.querySelector('.itembutton')
    // Display items
    items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="itemimg">
            <h2>${item.title}</h2>
            <h3>${item.title2}</h3>
        
            <p class="itemprice"> ${item.price}</p>
            <p class="description"> ${item.description}</p>
            <p class="description2" style=display:none> ${item.description2}</p> 
            `; //ზემო ხაზზე, ვქმნი desc2 და ვმალავ აქ რო არ შევქმნა ვერ იღებს დეტაილ ჰტმლ პპარმტეტრს
        //აქ ვქმნი ღილაკს გადავცემ ქლიკზე ახლ ჰტმლზე გადასვლას
        var itembutton= document.createElement("button")
        itembutton.innerHTML="BOOK NOW"
        itembutton.classList.add("itembutton")
        itemElement.appendChild(itembutton)
        
        itembutton.addEventListener("click", function () {
            // Redirect to a new page with details, passing data as query parameters
            window.location.href = `details.html?title=${item.title}&image=${item.img}&price=${item.price}&description2=${item.description2}`;
        });

        itemListContainer.appendChild(itemElement);
    });

  
  //აქ არის იტემბი 2 სექცია 4 ში ვიყენებ

  var item2=[
     { id: 1, img:'images/section4/item2image1.jpg', title:'Cypros' , price:'  $139 ', icon:'images/star2.svg'},
     { id: 2, img:'images/section4/item2image2.jpg', title:'Spayn' , price:'  $534 ', icon:'images/star2.svg'},
     { id: 3, img:'images/section4/item2image3.jpg', title:'italy' , price:'  $ 449 ', icon:'images/star2.svg'},
     { id: 4, img:'images/section4/item2image4.jpg', title:'Portugal' , price:'  $334 ', icon:'images/star2.svg'}
  ]
  const itemListContainer2 = document.getElementById("itemList2");
  item2.forEach((item2)=>{
    const itemElement2 = document.createElement("div");
        itemElement2.classList.add("item2");
        itemElement2.innerHTML = `
        <img src="${item2.img}" alt="err" class="itemimg2">
        <h2 class="item2title">${item2.title}</h2>
        <p class="itemprice2from"> from</p>
        <p class="itemprice2"> ${item2.price}</p>
        <img src="${item2.icon}" alt="${item2.title}" class="item2icon">
        
        `
        itemListContainer2.appendChild(itemElement2);
  })
var data = [
    { id: 1, img:'/images/div1/nicosia.jpg', button: 'Book Now',title:'14 Days North Spain', title2:'Bilbao, San Sebastian, Pamplona', price:'from 1590', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },
    { id: 2, img:'/images/div1/barcelona.jpg', button: 'Book Now',title:'4 Days Barcelona', title2:'Barcelona, Mediterranean', price:'from 543', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry2.', },
    { id: 3, img:'/images/div1/sardina.jpg', button: 'Book Now',title:'8 Days Sardinia Break', title2:'Costa Brava, Girona', price:'from 1027', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry3.', },
    { id: 4, img:'/images/div1/azores.jpg', button: 'Book Now',title:'9 Days Azores Islands', title2:'San Miguel, Pico, Faial', price:'from 1580', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },
    { id: 5, img:'/images/div1/nicosia.jpg', button: 'Book Now',title:'2 Days in Nicosia', title2:'Weekend in Nicosia', price:'from 139', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },
    { id: 6, img:'/images/div1/besparmk.jpg', button: 'Book Now',title:'7 Days Besparmak Trail', title2:'Walking vacation in North Cyprus', price:'from 798', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },
    { id: 7, img:'/images/div1/barcelona.jpg', button: 'Book Now',title:'3 Days Northern Cyprus', title2:'Famagusta, Nicosia, Kyrenia', price:'from 411', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },
    { id: 8, img:'/images/div1/lisabon.jpg', button: 'Book Now',title:'3 Days in Lisbon', title2:'Lisbon and Sintra', price:'from 349', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', },

];

  // Function to remove items
  function removeItem(itemId) {
    data = data.filter(item => item.id !== itemId);
    displayItems();
  }
  //ეს ქმნის სურათის პარამეტრებს, სურათის შემქნას, ამ ფუნქციას გამოვიძახებ ქვმოთ იტმებში,
  function createImage(src) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = 'Image';
    return img;
  }

  // Function to display items and create buttons
  function displayItems() {
    var itemsContainer = document.getElementById('items-container');
   

    data.forEach(item => {
      var items=document.createElement('div'); // divs ვქმნი იტემბის სურტებს ღილკებს ვტენი შიგნით
      var button = document.createElement('button'); // ეს ღილაკია იტემის
      button.innerHTML = item.button;
      button.addEventListener('click', () => showDescription(item.id));


      //აქ შემომაქ სურათი
      var imageElement = createImage(item.img)
     
    // აქ ვქმნი პარაგრაფს სათაურს
      var title = document.createElement('h2');
      title.innerHTML=item.title;
    // აქ ვქმნი პარაგრაფს სათაურს2
      var title2 = document.createElement('h3');
      title2.innerHTML=item.title2;

      var price=document.createElement('p')
      price.innerHTML=item.price
      // აქ ვქმნი პარაგრაფს  დესქრიფშენს
      var description = document.createElement('p');
      description.innerHTML = item.description;



      //იტემს გადავცემ შვილ ელემენტებს
      items.appendChild(imageElement)
      items.appendChild(title)
      items.appendChild(title2)
      items.appendChild(price)
      items.appendChild(description );
      items.appendChild(button);
    
      //მთავარ დივს ჰტმლ მხარეს რაც მაქ გადავცემ აქ შემნილ იტემბის მშობელს
      itemsContainer.appendChild(items);
    });
  }

  // Function to show description
  function showDescription(itemId) {
    var selectedItem = data.find(item => item.id === itemId);
    if (selectedItem) {
      alert(selectedItem.description);
    }
  }

  // Initial display
  displayItems();
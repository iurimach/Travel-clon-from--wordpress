var data = [
    { id: 1, img:'/images/div1/nicosia.jpg', button: 'Book Now',title:'14 Days North Spain', title2:'Bilbao, San Sebastian, Pamplona', price:'from 1590 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 2, img:'/images/div1/barcelona.jpg', button: 'Book Now',title:'4 Days Barcelona', title2:'Barcelona, Mediterranean', price:'from 543 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs.2.', description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 3, img:'/images/div1/sardina.jpg', button: 'Book Now',title:'8 Days Sardinia Break', title2:'Costa Brava, Girona', price:'from 1027 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs.3.',description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },
    { id: 4, img:'/images/div1/azores.jpg', button: 'Book Now',title:'9 Days Azores Islands', title2:'San Miguel, Pico, Faial', price:'from 1580 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },
    { id: 5, img:'/images/div1/nicosia.jpg', button: 'Book Now',title:'2 Days in Nicosia', title2:'Weekend in Nicosia', price:'from 139 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..', description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 6, img:'/images/div1/besparmk.jpg', button: 'Book Now',title:'7 Days Besparmak Trail', title2:'Walking vacation in North Cyprus', price:'from 798 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..', description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'},
    { id: 7, img:'/images/div1/barcelona.jpg', button: 'Book Now',title:'3 Days Northern Cyprus', title2:'Famagusta, Nicosia, Kyrenia', price:'from 411 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },
    { id: 8, img:'/images/div1/lisabon.jpg', button: 'Book Now',title:'3 Days in Lisbon', title2:'Lisbon and Sintra', price:'from 349 $', description: 'Descended from astronomers another world a still more glorious dawn awaits ship of the imagination citizens of distant epochs..',description2:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.,,,,In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.' },

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
     items.classList.add('oneitemwrapper')
      var button = document.createElement('button'); // ეს ღილაკია იტემის
      button.innerHTML = item.button;
      button.addEventListener("click", openDialog);//შექმნილ ღილაკზე მივაბი ფუნქცია, დილოგის გახსნა
     
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
      price.classList.add('itemprice')
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
 


 
var dialogwrapper=document.querySelector('#dialogwrapper')

var dialogdescription=document.createElement('div'); //ეს არის დივი აღწერის, რომლიც შვილია ჰტმლ დილოგის დივის, გარეთ უნდა იყოს!!

  // Function to show description-- აქ მოდის, ღილაკის უკან მდგომი დატა, თითოული ღილკისთვის ინდივდ.
  function showDescription(itemId) {
    
    var selectedItem = data.find(item => item.id === itemId);
    if (selectedItem) {
    
      // აქ შევქმნი ღილაკზე დაჭერით რა ინფორმცია გამოიტანოს დილოგში, მომიწევს ცალკე დივების შემქნა
      
      
      dialogdescription.classList.add('dialogdesc');
      
      
     dialogdescription.innerHTML =  selectedItem.price + ""+ selectedItem.title +'-----'+ selectedItem.description2  
      // შექმნილ დივებს გამოვაჩენ , დიალოგის ფანჯარაში
      
      dialogwrapper.appendChild(dialogdescription) 
      
      
    }
  }

  // Initial display

  displayItems();

  function openNewPage() {
    // Change the window location to the new HTML page
    window.location.href = "description.html";
}



  
  // dialog ----------------------------------------
  var dialog = document.querySelector("#dialogwrapper");

  function openDialog() {
    dialog.style.display = "block";
  }

  function closeDialog() {
    dialog.style.display = "none";
    dialogdescription.innerHTML=''
  }
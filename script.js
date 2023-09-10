 const handleCatagory = async() => {
     const response = await fetch(" https://openapi.programming-hero.com/api/videos/categories");

     const data = await response.json();

     const btnCatagory = document.getElementById("main-container");

     data.data.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
        <button onclick="loadNews(${element.category_id})" class=" border rounded-md pl-4 pr-4 pt-2 pb-2 bg-gray-400 text-white">${element.category}</button>
        
       
        
        `
         btnCatagory.appendChild(div);
     });
     console.log(data);





 };












 const loadNews = async(catagoryId) => {


     const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
     const output = await response.json();


     const button = document.getElementById('new-fild')

     const cardContainer = document.getElementById('card-container')










     const display = () => {
         cardContainer.innerHTML = " ";
         output.data.forEach((news) => {
             const newDiv = document.createElement('div');




             if (news.others.posted_date) {
                 const ConvertTime = news.others.posted_date;

                 const unickTime = parseFloat(ConvertTime);

                 const hour = Math.floor(unickTime / 3600);

                 const remain = unickTime % 3600;

                 const minute = Math.floor(remain / 60);

                 time = `${hour}hrs ${minute}min ago`

             } else {
                 time = '';
             }






             newDiv.innerHTML = `<div class="card card-compact w-82 bg-base-100  ">
         <figure><img class="h-[250px] " src=${news.thumbnail} alt="Shoes" /></figure>
         <div class="absolute top-[160px] right-[9px] bottom-[5px]">
         <p class= "text-white bg-[#0000007F]" >${time}</p>
         </div>
         <div class="card-body flex flex-row gap-4">
             <div>
                 <img class="w-9 h-9 rounded-full" src="${news?.authors[0]?.profile_picture
                 }" alt="">
             </div>
             <div class="">
                 <div>
                     <h2 class="card-title">${news.title} </h2>
                     <p>${news?.authors[0]?.profile_name}<span>${news?.authors[0]?.verified?'<img class="h-3 mt-1 ml-2 inline  " src="./veryfy-removebg-preview.png" alt="">' :" "}</span></p>
                     <p>${news.others.views}</p>
                 </div>

             </div>

         </div>
         
     </div>
     
        `





             cardContainer.appendChild(newDiv);
         });
     }

     display();











     const errorHandler = document.getElementById("error-handle");
     errorHandler.innerHTML = '';

     if (!(output.status)) {
         const div = document.createElement("div");
         div.innerHTML =
             `
       <img src="./Icon.png" class="mx-auto mt-[100px]">
       <h1 class="text-3xl font-bold text-center">Oops!! Sorry, There is no<br>content here</h1>
       `;
         errorHandler.appendChild(div);
     }




     document.getElementById("new-event").addEventListener("click", function() {



         output.data.sort(function(a, b) {

             var viewsA = parseFloat(a.others.views);
             var viewsB = parseFloat(b.others.views);
             return viewsB - viewsA;
         });


         display();




     });



 };













 handleCatagory();
 loadNews(1000);
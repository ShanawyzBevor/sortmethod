onst rawApi = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");

    const data = await res.json();

    const menuContainer = document.getElementById("menu-container");

    data.data.forEach((element) => {


        const div = document.createElement("div");

        div.innerHTML =
            `<button onclick = cardInfo(${element.category_id}) class="btn  hover:bg-[#FF1F3D] hover:text-[#FFF]">${element.category}</button>
        `
        menuContainer.appendChild(div);

    });
}


const cardInfo = async(categoryId = 1000) => {



        const res = await fetch(https: //openapi.programming-hero.com/api/videos/category/${categoryId});

                const data = await res.json();

                const cardContainer = document.getElementById("card-container");
                const button = document.getElementById("sort");
                const div = document.getElementById('not-found');
                const notFound = document.createElement("div"); div.innerHTML = " ";

                cardContainer.innerHTML = " ";



                button.onclick = function() {
                    cardContainer.innerHTML = " ";

                    data.data.sort(function(a, b) {

                        var viewsA = parseFloat(a.others.views);
                        var viewsB = parseFloat(b.others.views);
                        return viewsB - viewsA;
                    });

                    data.data.forEach((element) => {

                        const tViews = (element.others ? .views).slice(0, -1);


                        const card = document.createElement("div");

                        let blueTick = "";

                        if (element.authors[0].verified) {
                            blueTick = `<img src="./correct.png" class="rounded-full w-6 h-6" alt="">`;
                        } else {
                            blueTick = "";
                        }

                        let time = " ";



                        if (element.others.posted_date) {
                            const stringTime = element.others.posted_date;

                            const numTime = parseFloat(stringTime);

                            const hour = Math.floor(numTime / 3600);

                            const remain = numTime % 3600;

                            const minute = Math.floor(remain / 60);

                            time = `${hour}hrs ${minute}min ago`

                        } else {
                            time = " ";
                        }
                        card.innerHTML =
                            `<div class="card w-[360px] bg-base-100 shadow-xl">
                                    <div class="relative">
                                    <figure><img src="${element.thumbnail}" class="w-[360px] h-[200px] "alt="" /></figure>
                                    <div class="absolute top-[160px] right-[5px] bottom-[5px] ">
                                    <p class="bg-[#0000007F] text-white p-1">${time}</P>
                                    </div>
                                    
                                    </div>
                                   
                                    <div class="card-body">
                                    <div id="card-details-container" class="flex flex-row gap-2">
                                        <div>
                                            <img src="${element.authors[0]?.profile_picture}" class="rounded-full w-10 h-10" alt="">
                                        </div>
                                      <div class="">
                                        <h1 class="card-title">
                                            ${element.title}
                                        </h1>
                                        <div class="flex mt-2 gap-2 max-w-max">
                                           <p>
                                           ${element.authors[0]?.profile_name} 
                                           </p>
                                       
                                         ${blueTick}
                                            
                                        </div>
        
                                       <p id="views">
                                       ${element.others?.views} 
                                       </p>
                                      </div>
                                    </div>
                                    </div>
                                  </div>`;
                        cardContainer.appendChild(card);
                    });

                }

                data.data.forEach((element) => {

                        const tViews = (element.others ? .views).slice(0, -1);


                        const card = document.createElement("div");

                        let blueTick = "";

                        if (element.authors[0].verified) {




                            cardInfo();
                            rawApi();



                            const loadNewsFlow = async() => {
                                const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
                                const output = await response.json();
                                console.log(output);

                                let sortable = [];
                                for (var vehicle in output.data) {
                                    sortable.push([vehicle, output.data[vehicle]]);

                                    console.log(sortable);

                                    function helFull() {

                                        sortable.data.sort((a, b) => {
                                            var viewsA = parseFloat(a.others.views);
                                            var viewsB = parseFloat(b.others.views);
                                            return viewsB - viewsA;
                                        });

                                    }

                                    const button = document.getElementById('new-fild');
                                    button.addEventListener('click', helFull);
                                }



                                // Attach the event listener to the button

                            }
const fetche_data = (len) => {


      fetch("https://openapi.programming-hero.com/api/ai/tools")
            .then(res => res.json())
            .then(data => {
                  //console.log(data)

            if(len === 0) {
                  GetData(data.data.tools, );

            }else{
                  GetData(data.data.tools, len);
            }
                 
                  // data.data.tools[0].slice(0,7).forEach(element => {
                  //       console.log(element)
                  // });
                  // console.log(data.data.tools[0]);
            })
}



const GetData = (data, len) => {
      console.log(data)
      const card = document.getElementById("card1");
     // console.log(data[0].id)
      card.innerHTML = '';

      data.slice(0, len).forEach(element => {
            let j = 1;
           // console.log(typeof element.id)
            const ol = document.createElement("ol");

            element.features.forEach(value => {
                  const li = document.createElement('li');
                  li.innerHTML = `${j}:  ${value}
                  `
                  ol.appendChild(li);
                  //  console.log(value)
                  j++;
            });

            //console.log(ol);
            //console.log(element.image[0]);

            let div = document.createElement('div');
            div.className += "card card-compact w-96 bg-base-100 shadow-xl m-3 p-4";


            div.innerHTML = `
    
    <div class="w-[70%]" >
    <figure><img class="w-full" src="${element.image}" alt="Shoes" />
    
    </figure>
    <h2 class="card-title">Features</h2>
    </div>`
          




                  ;
            const cardbody = document.getElementById('card-body');
            div.appendChild(ol)
            div.innerHTML += `<hr>
            <div class=" flex justify-between mt-4">
                            <div>
                                    
            <h2 class="mt-3 font-bold">${element.name }</h2>

            <h2>${element.published_in}</h2>
                          </div>
                            <div>
                                  <button class="btn bg-black " onclick="details('${element.id}')">-></button>
                             </div>
          
            `
            card.appendChild(div);


           // console.log(div);


            // console.log(element[i])


      });



      

}
const details=(id)=>{

      console.log(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
}


const showMore_fetche_data= () =>{
      

}

function showMore(){
    // console.log('yes');
     fetche_data(0);

}

fetche_data(6);
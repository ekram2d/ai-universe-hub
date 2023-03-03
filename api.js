const fetche_data = (len) => {


      fetch("https://openapi.programming-hero.com/api/ai/tools")
            .then(res => res.json())
            .then(data => {
                  //console.log(data)


                  GetData(data.data.tools, len);
                  // data.data.tools[0].slice(0,7).forEach(element => {
                  //       console.log(element)
                  // });
                  // console.log(data.data.tools[0]);
            })
}



const GetData = (data, len) => {
      console.log(data)
      const card = document.getElementById("card1");
      console.log(data[0].features)
      card.innerHTML = '';

      data.slice(0, len).forEach(element => {
            let j = 1;
            const ol = document.createElement("ol");

            element.features.forEach(value => {
                  const li = document.createElement('li');
                  li.innerHTML = `${j}:  ${value}
                  `
                  ol.appendChild(li);
                  //  console.log(value)
                  j++;
            });

            console.log(ol);
            console.log(element.image[0]);

            let div = document.createElement('div');
            div.className += "card card-compact w-96 bg-base-100 shadow-xl m-3 p-2";


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
            
            <h2 class="m-2">${element.name }</h2>
            `
            card.appendChild(div);


            console.log(div);


            // console.log(element[i])


      });



      

}

fetche_data(12);
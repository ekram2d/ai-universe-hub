const fetche_data = (len) => {


      const spin = document.getElementById("spin");
      spin.classList.remove("hidden");
      fetch("https://openapi.programming-hero.com/api/ai/tools")
            .then(res => res.json())
            .then(data => {
                  //console.log(data)
                  spin.classList.add("hidden");

                  if (len === 0) {
                        GetData(data.data.tools,);

                  } else {
                        GetData(data.data.tools, len);
                  }

                  
            })
}



const GetData = (data, len) => {
      //console.log(data)
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
                                    
            <h2 class="mt-3 font-bold">${element.name}</h2>
      <div class="flex gap-1">
            <img class="w-[5%]" src=${"image/month.png"}>
            <h2>${element.published_in}</h2>
            </div>
                          </div>
                            <div>
                            <label for="my-modal" class="btn" onclick="details('${element.id}')"</>open modal</label>

                          
                             </div>
          
            `
            card.appendChild(div);



      });





}
const details = (id) => {

      const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

      fetch(URL)
            .then(res => res.json())
            .then(data => {
                  showMoreDetails(data.data);
            })
}


const showMoreDetails = (data) => {
      console.log(data)

      let { accuracy, description, features, image_link, input_output_examples, integrations
            , logo, pricing, tool_name, use_cases, } = data;
      const modalHead = document.getElementById("modal-head");
      console.log();
      modalHead.innerHTML = `${description}`;

      const modalimg = document.getElementById("modal-img");
      modalimg.src = image_link[0];

      const FeaturesUl = document.getElementById("FeaturesUl");
      const IntegrationsUL = document.getElementById("IntegrationsUL");
      const modelImgDiv = document.getElementById("model-img-div");
      modelImgDiv.innerHTML = '';

      if (input_output_examples === null) {
            modelImgDiv.innerHTML += `<p class="text-center font-bold">Can You give any example</p>`;
            modelImgDiv.innerHTML += `<p class="text-center">Not Not Yet! Take a break!!!</p>`;
      }
      else {

            modelImgDiv.innerHTML += `<p class="text-center font-bold">${input_output_examples[0].input}</p>`;
            modelImgDiv.innerHTML += `<p class="text-center">${input_output_examples[0].output}</p>`;
      }
      // console.log(input_output_examples[0])

      const modaldiv = document.getElementById("modal-div");
      modaldiv.innerHTML = '';
      // console.log(modaldiv);
      if (pricing === null) {


            modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">Free of <br>Cost/<br>Basic</div>`;

            modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">Free of <br>Cost/<br>Pro</div>`;

            modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">Free of <br>Cost/<br>Enterprice</div>`;

            // <div class="border-2  m-1 shadow-lg">sga</div>




      }
      else {
            for (let i in pricing) {
                  if (pricing[i].price) {
                        modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">${pricing[i].price}</div>`

                        // <div class="border-2  m-1 shadow-lg">sga</div>

                        // console.log(pricing[i].price);
                  }
                  else {
                        if (i === 0) {
                              modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">Free of <br>Cost/<br>Basic</div>`;
                        }

                        else if (i === 1) {
                              modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">Free of <br>Cost/<br>Pro</div>`;

                        }
                        else {
                              modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">Free of <br>Cost/<br>Enterprice</div>`;
                        }
                  }
            }


      }
      IntegrationsUL.innerHTML = "";
      FeaturesUl.innerHTML = "";
      if (integrations === null) {
            // IntegrationsUL.innerHTML.remove.classList("list-disc");
            IntegrationsUL.innerHTML = `<p>No Data Found</p>`

      }
      else {


            integrations.forEach((value) => {

                  const li = document.createElement("li");
                  li.innerHTML = `<p>${value}</p>`
                  IntegrationsUL.appendChild(li);
                  //console.log(value);

            }
            )
      }
      //console.log(features)
      if (features === null) {
            FeaturesUl.innerHTML = `<p>No Data Found</p>`
      }
      else {
            for (let i in features) {

                  const li = document.createElement("li");
                  li.innerHTML = `<p>${features[i].feature_name}</p>`
                  FeaturesUl.appendChild(li);

            }
      }



}



function showMore() {
      // console.log('yes');


      fetche_data(0);

}

fetche_data(6);
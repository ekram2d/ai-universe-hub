// fetch the data ..................................>






const fetche_data = (len) => {
      let track = -1;


      const spin = document.getElementById("spin");
      spin.classList.remove("hidden");
      fetch("https://openapi.programming-hero.com/api/ai/tools")
            .then(res => res.json())
            .then(data => {

                  spin.classList.add("hidden");


                  // short data eventLisitener added .............................>





                  document.getElementById("shortData").addEventListener("click", function () {
                        let hide = document.getElementById('hide').innerText;

                        document.getElementById('hide').innerText = "1";

                        if (len === 0) {
                              const newArray = data.data.tools.slice(0,);

                              newArray.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
                              GetData(newArray,);


                        } else {
                              const newArray = data.data.tools.slice(0, len);

                              newArray.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
                              GetData(newArray,);


                        }
                  })


                  if (len === 0) {
                        const hide = document.getElementById('hide').innerText;

                        //console.log(data.data);
                        const newArray = data.data.tools.slice(0,);

                        GetData(newArray,);

                  } else {
                        const hide = document.getElementById('hide').innerText;
                        const newArray = data.data.tools.slice(0, len);

                        GetData(newArray,);

                  }



            })

}


//  get dat from api  ...............................................>






const GetData = (data, len) => {
      //  console.log(data)
      const card = document.getElementById("card1");
      // console.log(data[0].id)
      card.innerHTML = '';

      data.forEach(element => {
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



            let div = document.createElement('div');
            div.className += "card card-compact w-full bg-base-100 shadow-xl m-3 p-4";


            div.innerHTML = `
    
    <div class="lg:w-[70%]" >
    <figure><img class="w-full rounded-lg" src="${element.image}" alt="Shoes" />
    
    </figure>
    <h2 class="card-title">Features</h2>
    </div>` ;
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
                            <div class="flex">
                            <label  for="my-modal" class="btn p-3 bg-red-400 text-white" onclick="details('${element.id}')"</>-></label>

                          
                             </div>
          
            `
            card.appendChild(div);



      });





}

// get api by id number ......................>



const details = (id) => {

      const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

      fetch(URL)
            .then(res => res.json())
            .then(data => {
                  showMoreDetails(data.data);
            })
}



// modal data added>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const showMoreDetails = (data) => {
      console.log(data)

      let { accuracy, description, features, image_link, input_output_examples, integrations
            , logo, pricing, tool_name, use_cases, } = data;
      const modalabsolute = document.getElementById("modal-absolute");
      modalabsolute.innerHTML = "";
      if (accuracy.score === null) {

            modalabsolute.classList.add("hidden");

            console.log(modalabsolute);

      } else {
            modalabsolute.classList.remove("hidden");
            modalabsolute.innerHTML = `${accuracy.score * 100} accuracy`;
      }
      const modalHead = document.getElementById("modal-head");

      modalHead.innerHTML = `${description}`;

      const modalimg = document.getElementById("modal-img");
      modalimg.src = image_link[0];
      modalimg.classList.add("rounded-lg");

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


            modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg p-1">Free of <br>Cost/<br>Basic</div>`;

            modaldiv.innerHTML += `<div class="border-2  m-1 p-1 shadow-lg">Free of <br>Cost/<br>Pro</div>`;

            modaldiv.innerHTML += `<div class="border-2  m-1 p-1  shadow-lg">Free of <br>Cost/<br>Enterprice</div>`;






      }
      else {
            for (let i in pricing) {
                  if (pricing[i].price) {
                        modaldiv.innerHTML += `<div class="border-2  m-1 shadow-lg">${pricing[i].price}</div>`


                  }
                  else {
                        if (i === 0) {
                              modaldiv.innerHTML += `<div class="border-2  m-1 p-1 shadow-lg">Free of <br>Cost/<br>Basic</div>`;
                        }

                        else if (i === 1) {
                              modaldiv.innerHTML += `<div class="border-2  m-1 p-1 shadow-lg">Free of <br>Cost/<br>Pro</div>`;

                        }
                        else {
                              modaldiv.innerHTML += `<div class="border-2 p-1  m-1 shadow-lg">Free of <br>Cost/<br>Enterprice</div>`;
                        }
                  }
            }


      }
      IntegrationsUL.innerHTML = "";
      FeaturesUl.innerHTML = "";
      if (integrations === null) {

            IntegrationsUL.innerHTML = `<p class="text-center">No Data Found</p>`

      }
      else {


            integrations.forEach((value) => {

                  const li = document.createElement("li");
                  li.innerHTML = `<p>${value}</p>`
                  IntegrationsUL.appendChild(li);


            }
            )
      }

      if (features === null) {
            FeaturesUl.innerHTML = `<p class="text-center" >No Data Found</p>`
      }
      else {
            for (let i in features) {

                  const li = document.createElement("li");
                  li.innerHTML = `<p>${features[i].feature_name}</p>`
                  FeaturesUl.appendChild(li);

            }
      }



}


// showMore button working ............................................>

function showMore() {
      // console.log('yes');
      const showmore = document.getElementById("showmore");

      showmore.classList.add("hidden");

      fetche_data(0);

}

fetche_data(6);
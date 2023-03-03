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
      

}

fetche_data(12);
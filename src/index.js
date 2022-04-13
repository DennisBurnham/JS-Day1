import c3 from "c3"


function loadChart ( data ) {
  // const options =   {
    console.log(data);

  const columns = JSON.parse(data);
  console.log(columns);

  //   bindto: '#chart',
  //   data: {
  //   type: "bar",
  //   colors: { Apples : "purple" , Peaches : "orange" } ,
  //   columns: [
  //     ["Apples", 330, 100, 400, 150, 250, 400],
  //     ["Peaches", 550, 10, 40, 15, 25, 333]
  //   ],
  //   bar: {
  //     width: 30
  //   }
  // },
  // };
  
  const options2 = {
    bindto: '#piechart',
    data: {
      onclick: function (d,element) {
        console.log("onclick",d ) ;
        console.log("onclick", element );
        FileMaker.PerformScript("Get data from charts", JSON.stringify(d));
      },
       type: "pie",
       columns: columns ,
       },
       pie: {
        padAngle: .05
      }
    };
  
  // const chart = c3.generate(options)
  const piechart = c3.generate(options2 ) 

}


window.loadChart = loadChart



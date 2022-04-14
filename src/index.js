import c3 from "c3"


function loadChart ( json ) {
  // const options =   {
    console.log(json);

  // const columns = JSON.parse(data);
  // console.log(columns);

const obj = JSON.parse(json);
console.log(obj);

const chartType = obj.type;
const columns = obj.data;
console.log(columns,chartType);

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
       type: chartType,
       columns: columns ,
       },
       pie: {
        padAngle: .05
      }
    };
  
  // const chart = c3.generate(options)
  const piechart = c3.generate(options2 ) 
  window.updateChart = function (data) {
  const banana = JSON.parse(data);
  console.log(banana)
  piechart.load({columns:banana,  unload:["Merlot","Champagne"] })
}
}
window.loadChart = loadChart





import c3 from "c3"


function loadChart ( ) {
  const options =   {
    bindto: '#chart',
    data: {
    type: "bar",
    colors: { Apples : "purple" , Peaches : "orange" } ,
    columns: [
      ["Apples", 330, 100, 400, 150, 250, 400],
      ["Peaches", 550, 10, 40, 15, 25, 333]
    ],
    bar: {
      width: 30
    }
  },
  };
  
  const options2 = {
    bindto: '#piechart',
    data: {
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



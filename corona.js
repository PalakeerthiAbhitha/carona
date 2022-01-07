var h=document.createElement('h1')
h.innerText='Corona Virus'
h.setAttribute("class","text-center")
document.body.appendChild(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)



fetch('https://coronavirus.m.pipedream.net/')
.then((d)=>d.json())
.then((data)=>{
    console.log(data)
    // console.log(data.rawData[i].Deaths);


    for(let i=0;i<100;i++){
        row.innerHTML+=  `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2 b">
             <div class="card text-center" >${data.rawData[i].Country_Region}
                 <div class="card-header text-center">
                <div class=" card-body ">
                    
                     <div class = " card-text a">  Lat: ${data.rawData[i].Lat}</div>
                     <div class =" card-text "> Country: ${data.rawData[i].Country_Region}</div>
                    <div class = " card-text a">  Deaths: ${data.rawData[i].Deaths}</div>
                    <div class="card text-center" >${data.rawData[i].Combined_Key}</div>
                
                    
                   </div>
                   </div>
                   </div>
                   
    `
 
    }

    
})

    





   


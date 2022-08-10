// let tiru= async ()=>{

//     let response = await fetch('')
// }

let foo= async ()=>{
    let ran1= Math.round(Math.random(10)*1000)
    let ranNum=Math.round(Math.random()*ran1);
 
    let response= await fetch(`https://api-thirukkural.vercel.app/api?num=${ranNum}`)

    let outPut= await response.json();

    console.log(outPut)
    document.getElementById('p1').innerHTML=`<h5>Kural Number: ${outPut.number}</h5>`
    document.getElementById('title').innerText=`Section: ${outPut.sect_tam}`
    document.getElementById('p4').innerText=`Chapter: ${outPut.chap_tam}`
    document.getElementById('p2').innerHTML=`<h6 style="display:inline">Kural:</h6> ${outPut.line1}</br>${outPut.line2}`
    document.getElementById('p3').innerText=`Explanation: ${outPut.tam_exp}`

}
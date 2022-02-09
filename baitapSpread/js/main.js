

let str = document.querySelector(".heading").innerHTML;
let chars = [...str]
const jumpText = () => {
    let content = ''
    
    chars.map(item =>{
     
         content += `
         <span>${item}</span>
         `
    
        })
        document.querySelector(".heading").innerHTML = content
        
}
jumpText()
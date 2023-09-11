const container = document.getElementById('container');
const title = document.getElementById('title');
const about = document.getElementById('about');
// error
const errTitle = document.querySelector('#errTitle');
const errAbout = document.querySelector('#errAbout');
// let printDiv = '';
// let divFlag = 0;
let arrTitle = [];

function createDiv (titleValue,aboutValue) {
    // Creat Div
    const printDiv = document.createElement('div');
    // printDiv.id += `printContent ${divFlag++}`;
    printDiv.id += 'printContent';
    printDiv.className = 'print'
    // printDiv.innerHTML=printDiv.id
    section.append(printDiv);
    
    const printContent = document.createElement('div');
    printContent.id = 'printcontent';
    printContent.className = 'printcontent';
    printDiv.append(printContent);

    // Create Title
    const printTitle = document.createElement('p');
    printTitle.id = 'printTitle';
    printTitle.className = 'printTitle';
    console.log(arrTitle)
    printTitle.innerText = titleValue ;
    printContent.append(printTitle);

    // Create About
    const printAbout = document.createElement('p');
    printAbout.id = 'printAbout';
    printAbout.className = 'printAbout';
    printAbout.innerHTML = aboutValue;
    printContent.append(printAbout);

    //img Div
    const printImg = document.createElement('div');
    printImg.id = 'printImg';
    printDiv.append(printImg);

    // Create Delete Button
    const img = document.createElement('img');
    const btn__img = document.createElement('button');
    btn__img.id = 'btn__img';
    btn__img.className = 'btn';
    printImg.append(btn__img);
    btn__img. addEventListener ('click', () => {
        for(i=0;i<=arrTitle.length;i++){            
            printDiv.style.display = 'none';
            arrTitle.splice(i-1,i);
        }
        console.log(arrTitle);
        // document.getElementById('printContent').innerHTML = arrTitle;
    })
    img.id = '';
    img.className = 'delete__img';
    img.src = './asset/delete.svg'
    btn__img.append(img);
}


const section = document.createElement('section')
container.append(section)
btn.addEventListener('click', () => {    
    // error()
    
    const title = document.getElementById('title')
    const about = document.getElementById('about')  
    
    if(title.value == '' || title.value == null && about.value == '' || about.value == null ){
        errTitle.style.display = 'block'
        errAbout.style.display = 'block' 

    }else{
        errTitle.style.display = 'none'
        errAbout.style.display = 'none'
        arrTitle.push({title:title.value,about:about.value})
    } 
    // createDiv();
    
    title.value = ''
    about.value = ''

    


//    const lists = arrTitle.map(el=>`<p class='name'>${el}</p>`)
//     section.innerHTML = lists
    

section.innerHTML = '';
arrTitle.forEach(e=>createDiv(e.title,e.about))

    
    // for (let i=0;i<arrTitle.length;i++)
    // {
    //    createDiv(arrTitle[i])
    // }
})


// const arr = ['data', 'data', 'dyaa']

// container.createTextNode(arr.map(el=>{
//     return `<p>${el}</p>`    
// }))
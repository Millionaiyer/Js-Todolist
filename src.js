const container = document.getElementById('container');

let divFlag = 0;
let arrTitle = [];
function createDiv (titleValue,aboutValue) {
    // Creat Div
    const printDiv = document.createElement('div');
    printDiv.id += `printContent${divFlag++}`;
    printDiv.className = 'print'
    // printDiv.innerHTML=printDiv.id
    section.append(printDiv);

    // Create Delete Button

    const img = document.createElement('img');
    img.id = '';
    img.className = 'delete__img';
    img.src = './asset/delete.svg'
    printDiv.append(img);

    // Create Title
    const printTitle = document.createElement('p');
    printTitle.id = 'printTitle';
    printTitle.className = 'printTitle';
    console.log(arrTitle)
    printTitle.innerText = titleValue ;
    printDiv.append(printTitle);

    // Create About
    const printAbout = document.createElement('p');
    printAbout.id = 'printAbout';
    printAbout.className = 'printAbout';
    printAbout.innerHTML = aboutValue;
    printDiv.append(printAbout);

    
}


const section = document.createElement('section')
container.append(section)
btn.addEventListener('click', () => {
    // createDiv();
    const title = document.getElementById('title')
    const about = document.getElementById('about')
    arrTitle.push({title:title.value,about:about.value})
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
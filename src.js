const container = document.getElementById('container');
const section = document.createElement('section')
section.id = 'section';
container.append(section)
let count = 0;
let title = document.getElementById('title');
let about = document.getElementById('about');
// error
const errTitle = document.getElementById('errTitle');
const errAbout = document.getElementById('errAbout');
// created array 
let arr = [];
function createDiv () {
    // Creat Div
// console.log(arr)
    arr.map((res) =>{
        console.log(res)
    const printDiv = document.createElement('div');
    // printDiv.id += `printContent ${divFlag++}`;
    printDiv.id += `printContent`;
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
    printTitle.innerText = res.title ;
    printContent.append(printTitle);

    // Create About
    const printAbout = document.createElement('p');
    printAbout.id = 'printAbout';
    printAbout.className = 'printAbout';
    printAbout.innerHTML = res.about;
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
    // btn__img.value = ind
    printImg.append(btn__img);
    // let check = false;
    btn__img.addEventListener ('click', (e) => {
        // console.log(ind,'hello')
        // for(let i=0;i<arr.length;i++){    
            // let index = arr.indexOf(arr[i])
            // console.log(index)
            // document.getElementById(`printContent${ind}`).remove();
            const index = arr.indexOf(res);
            if (index > -1) { // only splice array when item is found
                section.removeChild(section.children[index])
                arr.splice(index, 1); // 2nd parameter means remove one item only
              }
            // arr.splice(ind, 1);
        // section.removeChild(section.children[ind])
            // // arr = bn;
            // // count--;  
            // console.log(res.id,"id")
            // printDiv.style.display = 'none';
        // }
        console.log(arr,"arr")
    })
    // createDiv(arr);
    img.id = '';
    img.className = 'delete__img';
    img.src = './asset/delete.svg'
    btn__img.append(img);
})
}


btn.addEventListener('click', () => {    
    let flag = false;
     title = document.getElementById('title')
     about = document.getElementById('about')  
     console.log(title.value)
    
    // if(title.value == '' || title.value == null){
    //     errTitle.style.display = 'block' 
    //     flag = true;
    // }  
    // if(about.value == '' || about.value == null) {
    //     errAbout.style.display = 'block' 
    //     flag = true;
    // }
    //  if(title.value !== '' && about.value !== '' )
    // {
    //     errTitle.style.display = 'none'
    //     errAbout.style.display = 'none'        
    //     flag = false;
        arr.push({title:title.value,about:about.value,id:count})
        
        count ++;
    //     console.log(count,'add')
    // }   
    
    title.value = ''
    about.value = ''
section.innerHTML = '';
console.log('before',arr)
createDiv(arr)
// arr.forEach(e=>createDiv(e.title,e.about,e.id))
console.log(arr)
// return false;

})

//created Container
const container = document.getElementById("container");

//created section
const section = document.createElement("section");

// given attributes to section
section.id = "section";
container.append(section);

// created a check for edit button when pressed
let editCheck = 0;

// selecting title and about (input tags)
let title = document.getElementById("title");
let about = document.getElementById("about");

// selected error / validation handling tags
const errTitle = document.getElementById("errTitle");
const errAbout = document.getElementById("errAbout");

// created edit button when add button is replaced
// let exclamation = document.querySelector(".btn-edit");

// add button
let add__btn = document.getElementById("btn");
// edit button initialized
let edit = "";

// create an id for array
let count = 0;
// created array to store values of input tag
let arr = [];
let arrEdit = [];

function createDiv() {
  // Creat Div
  // loops through all the values in an array using Map
  arr.map((res, id) => {
    // Wrapper Div and it's attributes to wrap delete button and input texts that are displayed
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    section.append(wrapper);
    wrapper.addEventListener("click", () => {
      // EDIT BUTTON creation
      if (editCheck == 0) {
        // check logic to create edit button

        //created div for edit button and it's attributes
        const editDiv = document.createElement("div");
        editDiv.className = "edit";
        wrapper.append(editDiv);

        //edit button and its atrributes
        edit = document.createElement("button");
        edit.className = "btn btn__edit";
        editDiv.append(edit);
        edit.addEventListener("click", () => {
          
    //EDIT POP UP
  const editPopup = document.createElement('div');
  editPopup.id = 'editPopup';
  container.append(editPopup);

  const editPopupWrapper = document.createElement('div');
  editPopupWrapper.id = 'editPopupWrapper';
  editPopup.append(editPopupWrapper);

  const editTitle = document.createElement('input');
  editTitle.id = 'editTitle';
  editPopupWrapper.append(editTitle);

  const editAbout = document.createElement('textarea');
  editAbout.id = 'editAbout';
  editPopupWrapper.append(editAbout);

  const editBtnDiv = document.createElement('div');
  editBtnDiv.id = 'editBtnDiv';
  editPopupWrapper.append(editBtnDiv);

  const editCancelBtn = document.createElement('button');
  editCancelBtn.id = 'editCancelBtn';
  editCancelBtn.className = 'btn editCancelBtn'
  editCancelBtn.innerHTML = 'Cancel';
  editBtnDiv.append(editCancelBtn);
  editBtnDiv.addEventListener('click',() => {
    editPopup.style.display = 'none';
  })


  const editSaveBtn = document.createElement('button');
  editSaveBtn.id = 'editSaveBtn';
  editSaveBtn.className = 'btn editSaveBtn'
  editSaveBtn.innerHTML = 'Save'  
  editBtnDiv.append(editSaveBtn);
  editSaveBtn.addEventListener('click',() =>{
    printTitle.innerHTML = editTitle.value;
    printAbout.innerHTML = editAbout.value;
    console.log('hello world')
    console.log(arr);
  })

        });

        
        // edit image and it's attributes
        const edit__img = document.createElement("img");
        edit__img.src = "./asset/edit.svg";
        edit__img.className = "edit__img";
        edit.append(edit__img);
        editCheck++;
        console.log(editCheck);
      } else {
        // else delete edit button if check != 0
        edit.remove();
        editCheck--;
        console.log(editCheck);
      }
    });
    // wrapper div for input and button
    const printDiv = document.createElement("div");
    printDiv.id += `printDiv${id}`;
    printDiv.className = "print";
    wrapper.append(printDiv);

    // div and it's attributes for input tags
    const printContent = document.createElement("div");
    printContent.id = "printcontent";
    printContent.className = "printcontent";
    printDiv.append(printContent);

    // Create Title input tag and it's attributes
    const printTitle = document.createElement("p");
    printTitle.id = "printTitle";
    printTitle.className = "printTitle";
    printTitle.innerText = res.title;
    printContent.append(printTitle);

    // Create About input tag and it's attributes
    const printAbout = document.createElement("p");
    printAbout.id = "printAbout";
    printAbout.className = "printAbout";
    printAbout.innerHTML = res.about;
    printContent.append(printAbout);

    //Delete img Div and it's attributes
    const deleteImg = document.createElement("div");
    deleteImg.id = "deleteImg";
    printDiv.append(deleteImg);

    // Create Delete Button
    const img = document.createElement("img");
    const btn__img = document.createElement("button");
    btn__img.id = "btn__img";
    btn__img.className = "btn";
    deleteImg.append(btn__img);
    // delete button event listner
    btn__img.addEventListener("click", () => {
      popup.style.display = "flex"; // display flex on click button which brings the popup box
    });

    img.id = "";
    img.className = "delete__img";
    img.src = "./asset/delete.svg";
    btn__img.append(img);
  
  

    // DELETE POP UP
    // MAIN POPUP
    let popup = document.createElement("div");
    popup.id = "popup";
    container.append(popup);

    // WRAPPER DIV
    const popupDiv = document.createElement("div");
    popupDiv.id = "popupDiv";
    popup.append(popupDiv);

    // WRAPS Paragraph tag
    const paraDiv = document.createElement("div");
    paraDiv.id = "paraDiv";
    popupDiv.append(paraDiv);

    // paragraph tag
    const deletePara = document.createElement("p");
    deletePara.innerHTML = "Delete This Task?";
    deletePara.id = "deletePara";
    paraDiv.append(deletePara);

    // wrapper for button tags
    const deleteDiv = document.createElement("div");
    deleteDiv.id = "deleteDiv";
    popupDiv.append(deleteDiv);
    

    // delete button
    const okDelete = document.createElement("button");
    okDelete.id = "okDelete";
    okDelete.innerHTML = "Yes";
    deleteDiv.append(okDelete);
    // delete functionality on Yes button
    okDelete.addEventListener("click", () => {
      const index = arr.indexOf(res); // checks for the index value on the
      if (index > -1) {
        // only splice array when item is found
        section.removeChild(section.children[index]); // removes the child element of the parent section
        arr.splice(index, 1); // updates the current array and deletes the value at index for 1 unit.
        console.log(count,'count')
        console.log(arr,'arr check value')
      }
      console.log(count,'how much is the count')
      
      popup.style.display = "none";
      count --;
    });

    // No button click
    const dontDelete = document.createElement("button");
    dontDelete.id = "dontDelete";
    dontDelete.innerHTML = "No";
    deleteDiv.append(dontDelete);
    dontDelete.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // exclamation.addEventListener('click', () => {
    //   let index = arr.indexOf(res)
    //   if(index > -1)
    //   {     
    //     printTitle.innerHTML = title.value;
    //     // printAbout.innerHTML = res.about;
    //     console.log(index,'index')
    //     add__btn.style.display = "block";
    //     exclamation.style.display = 'none';
    //     title.innerHTML = '';
    //   }
    // })
  });

}


// Validation
btn.addEventListener("click", () => {
  let flag = false; // create a flag at false

  // Validation logic
  if (title.value == "" || title.value == null) {
    errTitle.style.display = "block";
    flag = true;
  }
  if (about.value == "" || about.value == null) {
    errAbout.style.display = "block";
    flag = true;
  }
  if (title.value !== "" && about.value !== "") {
    errTitle.style.display = "none";
    errAbout.style.display = "none";
    flag = false;
    arr.push({ title: title.value, about: about.value, id:count });
  }
  count++;

  // reset input tag values
  title.value = "";
  about.value = "";
  section.innerHTML = ""; // reset section from the dom
  createDiv(arr);
  console.log(arr,'check id')
  // arr.forEach(e=>createDiv(e.title,e.about,e.id))
});

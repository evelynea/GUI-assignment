const clickHereBtn = document.getElementById('click-here');
const outputBox = document.querySelector('output');
const confirmResult = document.querySelector('#confirmBtn');
const selectedItem = document.querySelector('select');


const avatarBtn = document.getElementById('add_new_avatar');


avatarBtn.addEventListener('click', function onOpen() {
    const dialogElement = document.querySelector('#add_avatar_dialog')
    dialogElement.showModal();
    // console.log("clicked")

});



const avatarFormElement = document.querySelector("#get_avatar_image_form");

function formSubmitted(event){
    const fileInput = avatarFormElement.querySelector("input[name=userimage]");
    const files = fileInput.files;
    if(files.length == 0 ) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
   const imageUrl = URL.createObjectURL(image);
   addImageToTheDOM(imageUrl);
   

}
function addImageToTheDOM(imageURL){
    const button = document.createElement("button");
    button.classList.add("avatar-img-btn");
    const closeIcon = document.createElement("ion-icon");
    closeIcon.classList.add("close-avatar-icon");
    closeIcon.name = "close-outline";

    button.appendChild(closeIcon);
    
    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("avatar-img");

    button.appendChild(imageElt);
    const addAvatarButton = document.querySelector("#add_new_avatar");
    document.body.insertBefore(button, addAvatarButton);

}
 function closeOnClick(){
    closeIcon.on('clicked', closeIcon())
        document.body.remove();
    
 }

avatarFormElement.addEventListener("submit", formSubmitted);
import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

let  modal;

const cardsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemsMarkup(galleryItems) {
return galleryItems
.map(({preview, original, description}) =>{
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
})
.join('');
}

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();

    const isImage = e.target.classList.contains("gallery__image");
    if (!isImage) {
        return;
}

createModalImg(e.target.dataset.source);
modal.show();
}

function createModalImg(gallery){
    modal=basicLightbox.create(`<div class="modal">
    <img src= "${event.target.dataset.source}">
        </div>`,{

            onShow: () =>{
                window.addEventListener('keydown', onKeyboardClick);
            },
            onClose: () => {
                window.removeEventListener('keydown', onKeyboardClick);
             },  
         });
         }
      
      function onKeyboardClick(event){
        if(event.code === 'Escape'){
           modal.close();
           };
          }

          console.log(galleryItems);
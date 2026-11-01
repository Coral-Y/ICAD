// Native modal supplies keyboard dismissal and traps focus while a photo is open.
const photoViewer=document.querySelector('#photo-viewer');
let photoTrigger=null;
document.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-photo]');
 if(trigger){
  photoTrigger=trigger;
  document.querySelector('#photo-full').src=trigger.dataset.photo;
  document.querySelector('#photo-full').alt=trigger.dataset.caption;
  document.querySelector('#photo-caption').textContent=trigger.dataset.caption;
  photoViewer.showModal();
 }
 if(event.target.closest('.photo-close')||event.target===photoViewer)photoViewer.close();
});
photoViewer.addEventListener('close',()=>{if(photoTrigger?.isConnected)photoTrigger.focus();});
window.addEventListener('hashchange',()=>{if(photoViewer.open)photoViewer.close();});

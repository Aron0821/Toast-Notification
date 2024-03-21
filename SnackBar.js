let toastBox = document.querySelector("#toastBox");
let successMsg =
  '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';

function showTost(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add('error')
  }

  if(msg.includes('Invalid')){
    toast.classList.add('invalid')
  }

  setTimeout(() => {
    toast.remove()
  }, 6000);
}



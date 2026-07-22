const images = document.querySelectorAll("img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".close");


images.forEach(img=>{

    img.addEventListener("click",()=>{

        if(img.closest(".lightbox")) return;

        lightbox.classList.add("active");

        lightboxImage.src = img.src;

    });

});


closeBtn.onclick=()=>{

    lightbox.classList.remove("active");

};


lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

};


document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});


const mainBlock = document.createElement('main');

mainBlock.classList.add('mainBody')

mainBlock.style.width = '100%';


document.body.append(mainBlock);

const img = document.createElement('img');
img.classList.add('imgDog')
mainBlock.insertBefore(img, mainBlock.children[0]);    


function setImg() 
{fetch('https://dog.ceo/api/breeds/image/random').then((respons)=>{
    return respons.json();
}).then((image)=>{
    img.src = image.message

   
})
}

const btn = document.createElement('button');
setImg();
btn.addEventListener("click",()=>{
    setImg();
});
btn.textContent = 'Click';
btn.width = '200px';
mainBlock.insertBefore(btn, mainBlock.children[1]);
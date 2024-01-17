const mainBlock = document.createElement('main');
mainBlock.classList.add('mainBody')
mainBlock.style.width = '100%';
mainBlock.style.flexDirection = 'flex-column';
document.body.append(mainBlock);



function setImg(img) 
{fetch('https://dog.ceo/api/breeds/image/random').then((respons)=>{
    return respons.json();
}).then((image)=>{
    img.src = image.message   
})
}

const img = document.createElement('img');
img.classList.add('imgDog')
setImg(img);
mainBlock.append(img);


const btn = document.createElement('button');
btn.addEventListener("click",()=>{
    setImg(img);
});
btn.textContent = 'Click';
btn.style.width = '200px';
btn.style.margin = '15px';
btn.style.height = '100px';
mainBlock.append(btn);
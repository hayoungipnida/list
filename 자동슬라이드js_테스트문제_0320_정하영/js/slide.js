document.addEventListener("DOMContentLoaded", initSlider);
function initSlider() {
    const mainImage = document.querySelector("#slide");
    const ul = mainImage.querySelector("ul");
    const imgs = ul.querySelectorAll("li");
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector(".next");
    const bookRollImgs = document.querySelectorAll("#roll a");
    
    let currentIndex =0;
    const totalSlides = imgs.length;
    let autoSlideInterval;

    function slideTo(index){
        if(index <0) index = 0;
        if(index>=totalSlides) index = totalSlides-1;

        const slideWidth =mainImage.clientWidth; 
        ul.style.transition='left 0.5s';
        ul.style.position='relative';
        ul.style.left = -(slideWidth*index)+"px";
        currentIndex = index;
        updateIndicators(); 

    }
    function updateIndicators(){
        for(let i =0; i<bookRollImgs.length; i++){
            if(i === currentIndex) {
                bookRollImgs[i].classList.add("active");
            } else {
                bookRollImgs[i].classList.remove("active");
            }
        }
    }
    function startAutoSlide() {
    autoSlideInterval=setInterval(function(){

        let nextIndex =currentIndex +1;
        if (nextIndex>= totalSlides){
            nextIndex=0;
        }
        slideTo(nextIndex);
    }, 3000);
}
function stopAutoSlide() {
    clearInterval(autoSlideInterval);

}
function setEventListener(){
prevBtn.addEventListener("click", onPrevClick);
nextBtn.addEventListener("click", onNextClick);
const bookRollImgs=document.querySelectorAll('#roll a');
for(let i=0; i<bookRollImgs.length; i++){
    bookRollImgs[i].addEventListener("click", creatBookRollClickHandler(i));
}
window.addEventListener("resize", onResize);
}

//이전 버튼 클릭
function onPrevClick(e) {
    e.preventDefault();
    stopAutoSlide();
    slideTo(currentIndex -1);
    startAutoSlide();

}

//다음 버튼 클릭
function onNextClick(e){
    e.preventDefault();
    stopAutoSlide();
    slideTo(currentIndex +1);
    startAutoSlide();
}


function creatBookRollClickHandler(index){
    return function(e) {
        e.preventDefault();
        stopAutoSlide();
        slideTo(index);
        startAutoSlide();
    };
}

//창 리사이즈 시 위치 재설정
function onResize() {
    slideTo(currentIndex);
}
//초기화 실행
slideTo(0);
startAutoSlide();
setEventListener()
}



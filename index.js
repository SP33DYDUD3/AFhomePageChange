document.addEventListener('DOMContentLoaded', function () {
    const sympathyBtn = document.getElementById('sympathy');
    const loveBtn = document.getElementById('love');
    const graduationBtn = document.getElementById('graduation');

    const sympathyImgs = document.querySelector('.sympathy-imgs');
    const loveImgs = document.querySelector('.love-imgs');
    const graduationImgs = document.querySelector('.graduation-imgs');

    loveImgs.classList.add('show');
    loveBtn.classList.add('active');

    function resetActiveButton() {
        sympathyBtn.classList.remove('active');
        loveBtn.classList.remove('active');
        graduationBtn.classList.remove('active');
    }

    sympathyBtn.addEventListener('click', function () {
        sympathyImgs.classList.add('show');
        loveImgs.classList.remove('show');
        graduationImgs.classList.remove('show');
        resetActiveButton();
        sympathyBtn.classList.add('active');
    });

    loveBtn.addEventListener('click', function () {
        loveImgs.classList.add('show');
        sympathyImgs.classList.remove('show');
        graduationImgs.classList.remove('show');
        resetActiveButton();
        loveBtn.classList.add('active');
    });

    graduationBtn.addEventListener('click', function () {
        graduationImgs.classList.add('show');
        sympathyImgs.classList.remove('show');
        loveImgs.classList.remove('show');
        resetActiveButton();
        graduationBtn.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sympathyBtn = document.getElementById('ramoBuchon');
    const loveBtn = document.getElementById('arrangements');
    const graduationBtn = document.getElementById('bouquets');

    const sympathyImgs = document.querySelector('.ramoBuchon-imgs');
    const loveImgs = document.querySelector('.arrangements-imgs');
    const graduationImgs = document.querySelector('.bouquets-imgs');

    loveImgs.classList.add('show');
    loveBtn.classList.add('active');

    function resetActiveButton() {
        sympathyBtn.classList.remove('active');
        loveBtn.classList.remove('active');
        graduationBtn.classList.remove('active');
    }

    sympathyBtn.addEventListener('click', function () {
        sympathyImgs.classList.add('show');
        loveImgs.classList.remove('show');
        graduationImgs.classList.remove('show');
        resetActiveButton();
        sympathyBtn.classList.add('active');
    });

    loveBtn.addEventListener('click', function () {
        loveImgs.classList.add('show');
        sympathyImgs.classList.remove('show');
        graduationImgs.classList.remove('show');
        resetActiveButton();
        loveBtn.classList.add('active');
    });

    graduationBtn.addEventListener('click', function () {
        graduationImgs.classList.add('show');
        sympathyImgs.classList.remove('show');
        loveImgs.classList.remove('show');
        resetActiveButton();
        graduationBtn.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const lovePrevBtn = document.getElementById('prev-btn');
    const loveNextBtn = document.getElementById('next-btn');
    const sympPrevBtn = document.getElementById('prev-btn');
    const sympNextBtn = document.getElementById('next-btn');
    const loveImage1 = document.getElementById('loveImage1');
    const VMLove = document.getElementById('VMLove');
    const gradBtn = document.getElementById('graduation');
    const sympathyBtn = document.getElementById('sympathy');
    const loveBtn = document.getElementById('love');
    const VMSymp = document.getElementById('VMSymp');

    function gradDisplay(){
        lovePrevBtn.style.display = 'none';
        loveNextBtn.style.display = 'none';
        sympPrevBtn.style.display = 'none';
        sympNextBtn.style.display = 'none';
    }
    function loveDisplay(){
        loveNextBtnDisplay();
        lovePrevBtnDisplay();
    }
    function lovePrevBtnDisplay(){
        lovePrevBtn.style.display = 'none';
        loveNextBtn.style.display = 'block';
        loveImage1.style.display = 'block';
        VMLove.style.display = 'none';
    }
    function loveNextBtnDisplay(){
        lovePrevBtn.style.display = 'block';
        loveNextBtn.style.display = 'none';
        loveImage1.style.display = 'none';
        VMLove.style.display = 'block';
    }
    function sympDisplay(){
        sympNextBtnDisplay();
        sympPrevBtnDisplay();
    }
    function sympPrevBtnDisplay(){
        sympPrevBtn.style.display = 'none';
        sympNextBtn.style.display = 'block';
        sympImage1.style.display = 'block';
        VMSymp.style.display = 'none';
    }
    function sympNextBtnDisplay(){
        sympPrevBtn.style.display = 'block';
        sympNextBtn.style.display = 'none';
        sympImage1.style.display = 'none';
        VMSymp.style.display = 'block';
    }
    lovePrevBtn.addEventListener('click', lovePrevBtnDisplay);
    loveNextBtn.addEventListener('click', loveNextBtnDisplay);
    sympPrevBtn.addEventListener('click', sympPrevBtnDisplay);
    sympNextBtn.addEventListener('click', sympNextBtnDisplay);

    gradBtn.addEventListener('click', gradDisplay);
    sympathyBtn.addEventListener('click', sympDisplay);
    loveBtn.addEventListener('click', loveDisplay);
});
document.addEventListener('DOMContentLoaded', function () {
    const buchonPrevBtn = document.getElementById('prev-btn2');
    const buchonNextBtn = document.getElementById('next-btn2');
    const arranPrevBtn = document.getElementById('prev-btn2');
    const arranNextBtn = document.getElementById('next-btn2');
    const arranImage1 = document.getElementById('arranImage1');
    const buchonImage1 = document.getElementById('buchonImage1');
    const ramoBuchonBtn = document.getElementById('ramoBuchon');
    const arrangementsBtn = document.getElementById('arrangements');
    const bouquetsBtn = document.getElementById('bouquets');
    const VMBuchon = document.getElementById('VMBuchon');
    const shopBuchon = document.getElementById('ShopBuchon');
    const VMArrang = document.getElementById('VMArrang');

    function bouquetsDisplay(){
        buchonPrevBtn.style.display = 'none';
        buchonNextBtn.style.display = 'none';
        arranPrevBtn.style.display = 'none';
        arranNextBtn.style.display = 'none';
    }
    function ArrangementsDisplay(){
        ArrangementsNextBtnDisplay();
        ArrangementsPrevBtnDisplay();
    }
    function ArrangementsPrevBtnDisplay(){
        arranPrevBtn.style.display = 'none';
        arranNextBtn.style.display = 'block';
        arranImage1.style.display = 'block';
        VMArrang.style.display = 'none';
    }
    function ArrangementsNextBtnDisplay(){
        arranPrevBtn.style.display = 'block';
        arranNextBtn.style.display = 'none';
        arranImage1.style.display = 'none';
        VMArrang.style.display = 'block';
    }
    function buchonDisplay(){
        buchonNextBtnDisplay();
        buchonPrevBtnDisplay();
    }
    function buchonPrevBtnDisplay(){
        buchonPrevBtn.style.display = 'none';
        buchonNextBtn.style.display = 'block';
        buchonImage1.style.display = 'block';
        VMBuchon.style.display = 'none';
        shopBuchon.style.display = 'none';
    }
    function buchonNextBtnDisplay(){
        buchonPrevBtn.style.display = 'block';
        buchonNextBtn.style.display = 'none';
        buchonImage1.style.display = 'none';
        VMBuchon.style.display = 'block';
        shopBuchon.style.display = 'block';
    }

    arranPrevBtn.addEventListener('click', ArrangementsPrevBtnDisplay);
    arranNextBtn.addEventListener('click', ArrangementsNextBtnDisplay);
    buchonPrevBtn.addEventListener('click', buchonPrevBtnDisplay);
    buchonNextBtn.addEventListener('click', buchonNextBtnDisplay);

    bouquetsBtn.addEventListener('click', bouquetsDisplay);
    arrangementsBtn.addEventListener('click', ArrangementsDisplay);
    ramoBuchonBtn.addEventListener('click', buchonDisplay);
});

document.getElementById('VMSymp').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/sympathy";
});
document.getElementById('VMLove').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/love";
});
document.getElementById('VMGrad').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/graduation";
});
document.getElementById('VMBuchon').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/ramo-buchon";
});
document.getElementById('ShopBuchon').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/category/buch%C3%B3n";
});
document.getElementById('VMArrang').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/floral-arrangments";
});
document.getElementById('VMBouq').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/our-bouquets";
});

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
document.getElementById('VMShopBuchon').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/category/buch%C3%B3n";
});
document.getElementById('VMArrang').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/floral-arrangments";
});
document.getElementById('VMBouq').addEventListener('click', function() {
    window.parent.location.href = "https://www.arelysflowersplantsandgifts.com/our-bouquets";
});
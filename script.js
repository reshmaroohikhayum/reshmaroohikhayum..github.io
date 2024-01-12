fetch('stock_project.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('stockproject').innerText = data;
})
.catch((error) => {
    console.error('Error:', error);
});

var carousel1 = document.querySelector('.carousel1');
var images1 = Array.from(carousel1.querySelectorAll('img'));
var currentIndex1 = 0;

function showImage1(index) {
    images1.forEach(function(img, i) {
        img.classList.toggle('active', i === index);
    });
}

carousel1.addEventListener('click', function(event) {
    var rect = carousel1.getBoundingClientRect();
    var x = event.clientX - rect.left;
    if (x < rect.width / 2) {
        currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : images1.length - 1;
    } else {
        currentIndex1 = (currentIndex1 < images1.length - 1) ? currentIndex1 + 1 : 0;
    }
    showImage1(currentIndex1);
});


fetch('tweet_project.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('tweetproject').innerText = data;
})
.catch((error) => {
    console.error('Error:', error);
});

var carousel2 = document.querySelector('.carousel2');
var images2 = Array.from(carousel2.querySelectorAll('img'));
var currentIndex2 = 0;

function showImage(index) {
    images2.forEach(function(img, i) {
        img.classList.toggle('active', i === index);
    });
}

carousel2.addEventListener('click', function(event) {
    var rect = carousel2.getBoundingClientRect();
    var x = event.clientX - rect.left; //x position within the carousel2
    if (x < rect.width / 2) {
        currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : images2.length - 1;
    } else {
        currentIndex2 = (currentIndex2 < images2.length - 1) ? currentIndex2 + 1 : 0;
    }
    showImage(currentIndex2);
});

const reviewContainer = document.querySelector('.reviewContainer');
const reviewItems = document.querySelectorAll('.reviewContent1');
const pageDots = document.querySelectorAll('.page-dot');

let reviewDrag = false;
let reviewStartX;
let reviewScrollLeft;

reviewContainer.addEventListener('mousedown', (e) => {
    reviewDrag = true;
    reviewStartX = e.pageX - reviewContainer.offsetLeft;
    reviewScrollLeft = reviewContainer.scrollLeft;
});

reviewContainer.addEventListener('mouseleave', () => { reviewDrag = false; });
reviewContainer.addEventListener('mouseup', () => { reviewDrag = false; });

reviewContainer.addEventListener('mousemove', (e) => {
    if (!reviewDrag) return;
    e.preventDefault();
    const x = e.pageX - reviewContainer.offsetLeft;
    const walk = (x - reviewStartX) * 3;
    reviewContainer.scrollLeft = reviewScrollLeft - walk;
});

pageDots.forEach((dot, index) => {
    dot.addEventListener('click', () => { 
        pageDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        reviewContainer.scrollLeft = reviewItems[index].offsetLeft;
    });
});

const productRangeContent = document.querySelector('.productRangeContent');

let productDrag = false;
let productStartX;
let productScrollLeft;

productRangeContent.addEventListener('mousedown', (e) => {
    productDrag = true;
    productStartX = e.pageX - productRangeContent.offsetLeft;
    productScrollLeft = productRangeContent.scrollLeft;
});

productRangeContent.addEventListener('mouseleave', () => { productDrag = false; });
productRangeContent.addEventListener('mouseup', () => { productDrag = false; });

productRangeContent.addEventListener('mousemove', (e) => {
    if (!productDrag) return;
    e.preventDefault();
    const x = e.pageX - productRangeContent.offsetLeft;
    const walk = (x - productStartX) * 2;
    productRangeContent.scrollLeft = productScrollLeft - walk;
});
// const productContent = document.querySelector('.product-content');
// const productItems = document.querySelectorAll('.product-item-1');
// const pageDots = document.querySelectorAll('.page-dot');

// console.log('productContent:', productContent); 
// console.log('productItems:', productItems); 
// console.log('pageDots:', pageDots);

// function updateActiveDot() {
//     const containerCenter = productContent.scrollLeft + productContent.offsetWidth / 2;
//     let closestIndex = 0; 
//     let minDistance = Number.MAX_VALUE;

//     productItems.forEach((item, index) => { 
//         const itemCenter = item.offsetLeft + item.offsetWidth / 2;
//         const distance = Math.abs(containerCenter - itemCenter); 
//         if (distance < minDistance) { 
//             closestIndex = index; minDistance = distance; 
//         }
//     });
    
//     pageDots.forEach(dot => dot.classList.remove('active'));
//     pageDots[closestIndex].classList.add('active'); 
// } 

// pageDots.forEach((dot, index) => { 
//     dot.addEventListener('click', () => { 
//         productContent.scrollLeft = productItems[index].offsetLeft; 
//         updateActiveDot();
//     });
// }); 

// productContent.addEventListener('scroll', updateActiveDot);

const productContent = document.querySelector('.product-content');
const dots = document.querySelectorAll('.page-dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        productContent.scrollTo({
            left: productContent.clientWidth * index,
            behavior: 'smooth',
        });

        // Update active dot
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

productContent.addEventListener('scroll', () => {
    const activeIndex = Math.round(productContent.scrollLeft / productContent.clientWidth);
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[activeIndex]) dots[activeIndex].classList.add('active');
});
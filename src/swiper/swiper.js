import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

if (window.innerWidth < 768){
    
    // Бренды
    const swiperBrands = new Swiper('.swiperBrands', {
      // Optional parameters
      direction: 'horizontal',
      loop: "true",
      slidesPerView: "auto",
      spaceBetween: 16,
      watchOverflow: true,
      pagination: {
        el: '.swiper-paginationBrands',
        clickable: true,
      },

      breakpoints: {
          768: {
            enabled: false,
            pagination: {
              enabled: false,
            },
          },
        }
    });

    // Техника
    const swiperTech = new Swiper('.swiperTech', {
      // Optional parameters
      direction: 'horizontal',
      loop: "true",
      slidesPerView: "auto",
      spaceBetween: 16,

      pagination: {
          el: '.swiper-paginationTech',
          clickable: true,
      
      },
      
      breakpoints: {
          768: {
            enabled: false,
          },
        }
      });

      // Цены

      const swiperPrice = new Swiper('.swiperPrice', {
        // Optional parameters
        direction: 'horizontal',
        loop: "true",
        slidesPerView: "auto",
        spaceBetween: 16,
  
        pagination: {
            el: '.swiper-paginationPrice',
            clickable: true,
        
        },
        
        breakpoints: {
            768: {
              enabled: false,
            },
          }
        });
}



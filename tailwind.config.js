/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    'fontFamily':{'primary-font':'Jost'

    },
    extend: {
      backgroundImage:{
        'mainbackground':"url('https://www.yudaah.com/demo/single-page-hospitapl/assets/images/slider/slider_1.jpg')",
      },
      backgroundColor:{
        'grey-back':'rgba(247, 247, 255, 1)'
      }
    },
  },
  plugins: [],
}


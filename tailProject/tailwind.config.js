/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'panda' : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGPdFREjERHSpZx_Q3eDpTspUI22daJGUTQ&usqp=CAU)"
      },
      width: {
        '100': "100px",
        '200' : "200px",
        '50' :  "50px"

      }
    },
  },
  plugins: [],
}


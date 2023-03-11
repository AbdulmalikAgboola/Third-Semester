module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {

    extend: {
      screens: {
        md: '768px', 
      },
         backgroundImage: {
        'onboarding-image': "url('asset/img/Image.svg')"     
      },
      colors: {
        'primary-color' : '#C8EE44',
        'primary-hover' : '#a2c11c',
        'secondary-color': '#29A073',
        'text-color-main': '#1B212D',
        'text-color-2': '#929EAE',
        'text-color-3': '#78778B',
        'text-color-white': '#FFFFFF',
        'dark-color-1': '#201E34',
        'dark-color-2': '#282541',
        'status-color-sucess': '#19D076',
        'status-color-failure': '#E5363D',
        'gray-color-1': '#FAFAFA',
        'gray-color-2': '#F8F8F8',
        'gray-color-3': '#F5F5F5', 

      },
      fontfamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xl': '1300px',
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(180deg, #7F56D9 0%, rgba(42, 108, 236, 0.886562) 51.56%, rgba(0, 41, 255, 0.78) 100%)',
        'gradient-border-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(180deg, #7F56D9 0%, rgba(42, 108, 236, 0.886562) 51.56%, rgba(0, 41, 255, 0.78) 100%) border-box',
      },
      colors: {
        headerBg: '#1F2128',
        signUpBtn: '#8758FF',
        mainBg: '#151416',
        secondaryBg: '#313442',
        tertiaryBg: '#476CEC',
        fourthBg: '#8B8B93',
        defaultBo: '#475467',
        secondBo: "rgba(71, 84, 103, 1)",
        txMo: '#F1F1F1',
        fifthBg: '#8A8A98',
        sixthBg: 'rgba(31, 33, 40, 1)',
        tblMo: 'rgba(100, 100, 111, 1)',
        tblDe: 'rgba(49, 52, 66, 1)',
        tblTr: 'rgba(241, 241, 241, 1)',
        tblbtn: 'rgba(237, 76, 77, 1)',
        txDe: 'rgba(138, 138, 152, 1)',
        txBo: 'rgba(208, 213, 221, 1)',
      },
    },
  },
  plugins: [],
}
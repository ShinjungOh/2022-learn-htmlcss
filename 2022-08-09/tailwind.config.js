const customBorder = {
    3: '3px',
    5: '5px',
    'custom': '10rem'
}

const customFont = {
    10: '10px',
    11: '11px',
    12: '12px',
    13: '13px',
    14: '14px',
    15: '15px',
    16: '16px',
    17: '17px',
    18: '18px',
    19: '19px',
    20: '20px',
    'custom': '100px'
}

const px100 = {...Array.from(Array(101)).map((_, i) => i + 'px')}

module.exports = {
    theme: {
        extend: {
            borderWidth: customBorder,
            fontSize: customFont
        },
    },
    plugins: [],
}
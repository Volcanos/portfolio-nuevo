const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const colors = {
    black: '#252525',
    grey: '#6f6f6f',
    silver: '#e8e8e8'
}
export const menuStructure = [
    {title: "Home", url: "/"},
    {title: "Portfolio", url: "/portfolio"},
    {title: "Experiencia", url: "/experience"},
    {title: "Contacto", url: "handleClick"},
]
export const layoutSettings = {
    maxWidth: '960px'
}
export const mail = ['borja','.','gracia','+cv','#','gmail','.com'];

export const theme = {
    colors: {
        background_header: '#ebfbff',
        background_body: '#fff',
        background_footer: '#003333',
        background_sidebar: '#ebfbff',
        background_primary: '#ebfbff'
      },
      
    breakpoints: {
          mobile: '768px',
      },
      
    height: {
          header: '70px',
          editor: '400px',
          section_options: '75px',
      },

    width: {
        sidebar: '70px',
    }

}

interface Colors {
    background_header: string,
    background_body: string,
    background_footer: string,
    background_sidebar: string,
    background_primary: string,
}

interface BreakPoints {
    mobile: string,
}

interface Heights {
    header: string,
    editor: string,
    section_options: string
}

interface Widths {
    sidebar: string
}

interface Prop {
    colors: Colors,
    breakpoints: BreakPoints,
    height: Heights
    width: Widths
}

export interface Theme {
    theme: Prop
}

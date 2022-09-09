export const theme = {
    backgroundcolors: {
        background_top_header: '#3E6E61',
        background_bottom_header: 'linear_gradient',
        background_body: '#fff',
        background_footer: '#003333',
        background_sidebar: '#ebfbff',
        background_primary: '#ebfbff'
    },

    breakpoints: {
        mobile: '768px',
    },
    textColors: {
        text_color_header: "#fff",
    },
    height: {
        header: '120px',
        top_header: '35px',
        bottom_header: '85px',
        editor: '400px',
        section_options: '75px',
        input_height: '64px'
    },

    width: {
        sidebar: '70px',
    }

}

interface BackgroundColors {
    background_header: string,
    background_top_header: string,
    background_bottom_header: string,
    background_body: string,
    background_footer: string,
    background_sidebar: string,
    background_primary: string,
}

interface TextColors {
    text_color_header: string,
}


interface BreakPoints {
    mobile: string,
}

interface Heights {
    header: string,
    top_header: string,
    bottom_header: string,
    editor: string,
    input_height: string,
    section_options: string
}

interface Widths {
    sidebar: string
}

interface Prop {
    backgroundcolors: BackgroundColors,
    breakpoints: BreakPoints,
    height: Heights,
    width: Widths,
    textColors: TextColors,

}

export interface Theme {
    theme: Prop
}

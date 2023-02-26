import { AssetsImages } from '@/utils/index';

export const theme: Theme = {
    gridSpace: "4%",

    backgroundcolors: {
        background_top_header: '#A7A7A7',
        background_middle_header: '#ffffff',
        background_body: '#fff',
        background_footer: '#003333',
        background_sidebar: '#ebfbff',
    },

    breakpoints: {
        mobile: '768px',
    },

    textColors: {
        text_color_middle_header: "#9B9B9B",
        text_color_top_header: "#ffffff",
        text_color_bottom_header: "#ffffff",
        text_color_label: "#9B9B9B"
    },

    height: {
        header: '163px',
        top_header: '43px',
        bottom_header: '120px',
        footer: "490px",
        editor: '400px',
        section_options: '75px',
        input_height: '64px',
        button_height: "40px"
    },

    width: {
        sidebar: '70px',
        button_min_width: "206px",
    },

    globalColors: {
        primary_color: "#2262BC",
        secondary_color: "#D23A3A",
    },

    fonts: {
        extra_bold: "Nunito-ExtraBold",
        bold: "Nunito-Bold",
        semi_bold: "Nunito-SemiBold",
        black: "Montserrat-Black",
        medium: "Nunito-Medium",
        regular: "Nunito-Regular",
        light: "Nunito-Light",
        light_italic: "Montserrat-LightItalic",
        italic: "Montserrat-Italic",
        poppins_bold: 'Poppins-Bold',
        sfPro_regular: 'SFProText-Regular',
    },
}

interface BackgroundColors {
    background_header?: string,
    background_top_header?: string,
    background_middle_header?: string,
    background_body: string,
    background_footer: string,
    background_sidebar: string,
}

interface TextColors {
    text_color_middle_header: string,
    text_color_label: string,
    text_color_top_header: string,
    text_color_bottom_header: string,
}

interface Fonts {
    extra_bold: string,
    bold: string,
    semi_bold: string,
    medium: string,
    italic: string,
    light: string,
    regular: string,
    poppins_bold: string,
    light_italic: string,
    black: string,
    sfPro_regular: string
}
interface BreakPoints {
    mobile: string,
}

interface Heights {
    header: string,
    footer: string,
    top_header: string,
    bottom_header: string,
    editor: string,
    input_height: string,
    section_options: string,
    button_height: string,
}

interface Widths {
    sidebar: string;
    button_min_width: string;
}
interface GlobalColors {
    primary_color: string,
    secondary_color: string,
}


export interface Theme {
    backgroundcolors: BackgroundColors,
    breakpoints: BreakPoints,
    height: Heights,
    width: Widths,
    textColors: TextColors,
    globalColors: GlobalColors,
    fonts: Fonts,
    gridSpace: string,
}



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
        header: '269px',
        top_header: '39px',
        middle_header: '170px',
        bottom_header: '60px',
        header_scroll: "121px",
        top_header_scroll: "0",
        middle_header_scroll: "82px",
        bottom_header_scroll: "39px",
        editor: '400px',
        section_options: '75px',
        input_height: '64px',
        button_height: "49px"
    },

    width: {
        sidebar: '70px',
        button_min_width: "206px",
    },

    globalColors: {
        primary_color: "#003177",
        secondary_color: "#D23A3A",
    },

    fonts: {
        extra_bold: "Montserrat-ExtraBold",
        bold: "Montserrat-Bold",
        black: "Montserrat-Black",
        semi_bold: "Montserrat-SemiBold",
        medium: "Montserrat-Medium",
        light_italic: "Montserrat-LightItalic",
        italic: "Montserrat-Italic",
        regular: "Montserrat-Regular",
        poppins_bold: 'Poppins-Bold',
        sfPro_regular: 'SFProText-Regular',
    }

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
    top_header: string,
    middle_header: string,
    bottom_header: string,
    header_scroll: string,
    top_header_scroll: string,
    middle_header_scroll: string,
    bottom_header_scroll: string,
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



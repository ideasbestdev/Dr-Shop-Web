export interface BreadcrumbModel {
    title: string,
    link: string
}

export interface GlobalStateModel {
    breadcrumb: BreadcrumbModel[],
}

export interface ImageModel {
    id: number,
    origin: string,
    thumbnail: string,
    webp_image: string,
    webp_thumbnail: string,
}
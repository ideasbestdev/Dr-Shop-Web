export interface BreadcrumbModel {
    title: string,
    link: string
}

export interface GlobalStateModel {
    breadcrumb: BreadcrumbModel[],
}
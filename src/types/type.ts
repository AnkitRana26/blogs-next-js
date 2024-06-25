export interface Blog {
    id: number;
    title: string;
    content: string;
    tags: string[];
    image: string;
}

export interface SearchAndFilterType {
    search: string;
    filter: string;
}
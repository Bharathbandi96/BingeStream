import { IMovieCardProps } from "./components/types"

export interface INoResulpProps {
    searchTerm: string,
    selectedCategories: string[]
}

export interface IGridProps {
    title: string,
    items: IMovieCardProps[],
    type: string
}
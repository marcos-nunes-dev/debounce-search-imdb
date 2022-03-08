export interface IKnownFor {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[] | number;
    id?: number;
    media_type?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    name?: string;
    origin_country?: string | string[];
    original_name?: string;
    first_air_date?: string;
}

export interface IActor {
    adult: boolean;
    gender: number;
    id: number;
    known_for: IKnownFor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface ISelectOption {
    key: string;
    label: string;
    value: number;
}

export interface IStateValue extends ISelectOption {
    raw: IActor;
}

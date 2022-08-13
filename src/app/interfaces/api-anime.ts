export interface APIAnime {
    pagination: Pagination;
    data:       Anime[];
}

export interface MyAnime{
    id: number;
    title: string;
    image: string;
    total_episodes: number | null;
    watched_episodes: number;
}

export interface Anime {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    trailer:         Trailer;
    title:           string;
    title_english:   null | string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            string;
    source:          string;
    episodes:        number | null;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          string;
    score:           number | null;
    scored_by:       number | null;
    rank:            number | null;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      null | string;
    season:          null | string;
    year:            number | null;
    broadcast:       Broadcast;
    producers:       Demographic[];
    licensors:       Demographic[];
    studios:         Demographic[];
    genres:          Demographic[];
    explicit_genres: any[];
    themes:          Demographic[];
    demographics:    Demographic[];
}

export interface Aired {
    from:   Date | null;
    to:     Date | null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Broadcast {
    day:      null | string;
    time:     null | string;
    timezone: null | string;
    string:   null | string;
}

export interface Demographic {
    mal_id: number;
    type:   Type;
    name:   string;
    url:    string;
}

export enum Type {
    Anime = "anime",
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Trailer {
    youtube_id: null | string;
    url:        null | string;
    embed_url:  null | string;
    images:     Images;
}

export interface Images {
    image_url:         null | string;
    small_image_url:   null | string;
    medium_image_url:  null | string;
    large_image_url:   null | string;
    maximum_image_url: null | string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
    current_page:      number;
    items:             Items;
}

export interface Items {
    count:    number;
    total:    number;
    per_page: number;
}

export interface CharacterAnime {
    character:    Character;
    role:         Role;
    voice_actors: VoiceActor[];
}

export interface Character {
    mal_id: number;
    url:    string;
    images: CharacterImages;
    name:   string;
}

export interface CharacterImages {
    jpg:  Jpg;
    webp: Webp;
}

export interface Jpg {
    image_url: string;
}

export interface Webp {
    image_url:       string;
    small_image_url: string;
}

export enum Role {
    Main = "Main",
    Supporting = "Supporting",
}

export interface VoiceActor {
    person:   Person;
    language: Language;
}

export enum Language {
    English = "English",
    French = "French",
    German = "German",
    Japanese = "Japanese",
    PortugueseBR = "Portuguese (BR)",
    Spanish = "Spanish",
}

export interface Person {
    mal_id: number;
    url:    string;
    images: PersonImages;
    name:   string;
}

export interface PersonImages {
    jpg: Jpg;
}
export interface APIProducers {
    data: Producers[]
    pagination: Pagination
  }
  
  export interface Producers {
    mal_id: number
    url: string
    titles: Title[]
    images: Images
    favorites: number
    count: number
    established: string
    about: string
  }
  
  export interface Title {
    type: string
    title: string
  }
  
  export interface Images {
    jpg: Jpg
  }
  
  export interface Jpg {
    image_url: string
  }
  
  export interface Pagination {
    last_visible_page: number
    has_next_page: boolean
  }
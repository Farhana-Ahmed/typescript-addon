//using unsplash-js to get a photo

import { createApi } from "unsplash-js";

const api = createApi({
    accessKey: 'wjOvn2OYCht7qBr9ZL5fjrnHwG0E-u2s7K26CZ-4s4s'
})

export const getImage = (query: any) => {
    
  const res = (api.search.getPhotos({query}).then(result => (result.response?.results[0]?.urls.small)))
   return  res;
}

// export interface Photo {

// }
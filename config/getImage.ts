//using unsplash-js to get a photo

import { createApi } from "unsplash-js";

const api = createApi({
    accessKey: "process.env.ACCESS_KEY"
})

export const getImage = (query: any) => {
    
  const res = (api.search.getPhotos({query}).then(result => (result.response?.results[0]?.urls.small)))
   return  res;
}

// export interface Photo {

// }
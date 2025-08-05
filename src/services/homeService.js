import api from "./api";

const homeService = {
   marquee:async(org) =>{
      return(api.get(`public/marquee/list?org=${org}`,{ type: 'cms' }))
   }   
}

export default homeService
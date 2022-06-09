import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTZWN1cml0eSBKV1QiLCJzdWIiOiJ7XHJcbiAgXCJpZFwiIDogMyxcclxuICBcIm5vbWVcIiA6IFwiQWRtaW5pc3RyYWRvciAyIERFVmluSG9ydGlmcnV0aVwiLFxyXG4gIFwibG9naW5cIiA6IG51bGwsXHJcbiAgXCJlbWFpbFwiIDogXCJsdWNhc19jZXNhcmlvQGVzdHVkYW50ZS5zZXNpc2VuYWkub3JnLmJyXCIsXHJcbiAgXCJkdE5hc2NpbWVudG9cIiA6IG51bGwsXHJcbiAgXCJpc0FkbWluXCIgOiB0cnVlXHJcbn0iLCJpYXQiOjE2NTQ3OTY3NTUsImV4cCI6MTY1NDg4MzE1NX0.TVr0vxfnSsRT4WNy1Ijtm-Kg2CmicM8GO3TBs4Z1Tc4";

const headers = {};
headers["Authorization"] = `Bearer ${token}`; 

const api = axios.create({
  baseURL: 'http://localhost:8081',
  headers
});

// const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTZWN1cml0eSBKV1QiLCJzdWIiOiJ7XHJcbiAgXCJpZFwiIDogMyxcclxuICBcIm5vbWVcIiA6IFwiQWRtaW5pc3RyYWRvciAyIERFVmluSG9ydGlmcnV0aVwiLFxyXG4gIFwibG9naW5cIiA6IG51bGwsXHJcbiAgXCJlbWFpbFwiIDogXCJsdWNhc19jZXNhcmlvQGVzdHVkYW50ZS5zZXNpc2VuYWkub3JnLmJyXCIsXHJcbiAgXCJkdE5hc2NpbWVudG9cIiA6IG51bGwsXHJcbiAgXCJpc0FkbWluXCIgOiB0cnVlXHJcbn0iLCJpYXQiOjE2NTQ3OTY3NTUsImV4cCI6MTY1NDg4MzE1NX0.TVr0vxfnSsRT4WNy1Ijtm-Kg2CmicM8GO3TBs4Z1Tc4";

// api.defaults.headers.common['Authorization'] = token;

// api.interceptors.request.use(async config => {
  
//   const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTZWN1cml0eSBKV1QiLCJzdWIiOiJ7XHJcbiAgXCJpZFwiIDogMyxcclxuICBcIm5vbWVcIiA6IFwiQWRtaW5pc3RyYWRvciAyIERFVmluSG9ydGlmcnV0aVwiLFxyXG4gIFwibG9naW5cIiA6IG51bGwsXHJcbiAgXCJlbWFpbFwiIDogXCJsdWNhc19jZXNhcmlvQGVzdHVkYW50ZS5zZXNpc2VuYWkub3JnLmJyXCIsXHJcbiAgXCJkdE5hc2NpbWVudG9cIiA6IG51bGwsXHJcbiAgXCJpc0FkbWluXCIgOiB0cnVlXHJcbn0iLCJpYXQiOjE2NTQ3OTY3NTUsImV4cCI6MTY1NDg4MzE1NX0.TVr0vxfnSsRT4WNy1Ijtm-Kg2CmicM8GO3TBs4Z1Tc4";

//   if (token) {
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;    
//   }

//   return config;
// });

export default api;
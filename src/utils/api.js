import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTZWN1cml0eSBKV1QiLCJzdWIiOiJ7XHJcbiAgXCJpZFwiIDogMyxcclxuICBcIm5vbWVcIiA6IFwiQWRtaW5pc3RyYWRvciAyIERFVmluSG9ydGlmcnV0aVwiLFxyXG4gIFwibG9naW5cIiA6IG51bGwsXHJcbiAgXCJlbWFpbFwiIDogXCJsdWNhc19jZXNhcmlvQGVzdHVkYW50ZS5zZXNpc2VuYWkub3JnLmJyXCIsXHJcbiAgXCJkdE5hc2NpbWVudG9cIiA6IG51bGwsXHJcbiAgXCJpc0FkbWluXCIgOiB0cnVlXHJcbn0iLCJpYXQiOjE2NTQ4ODUxODIsImV4cCI6MTY1NDk3MTU4Mn0.jFozi44x_EVqfx0_Rmh0blRN_HteOpSybHPtbznzF9g";

const headers = {};
headers["Authorization"] = `Bearer ${token}`; 

const api = axios.create({
  baseURL: 'http://localhost:8081',
  headers
});

api.defaults.headers.common['Authorization'] = token;

api.interceptors.request.use(async config => {
  
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTZWN1cml0eSBKV1QiLCJzdWIiOiJ7XHJcbiAgXCJpZFwiIDogMyxcclxuICBcIm5vbWVcIiA6IFwiQWRtaW5pc3RyYWRvciAyIERFVmluSG9ydGlmcnV0aVwiLFxyXG4gIFwibG9naW5cIiA6IG51bGwsXHJcbiAgXCJlbWFpbFwiIDogXCJsdWNhc19jZXNhcmlvQGVzdHVkYW50ZS5zZXNpc2VuYWkub3JnLmJyXCIsXHJcbiAgXCJkdE5hc2NpbWVudG9cIiA6IG51bGwsXHJcbiAgXCJpc0FkbWluXCIgOiB0cnVlXHJcbn0iLCJpYXQiOjE2NTQ4ODUxODIsImV4cCI6MTY1NDk3MTU4Mn0.jFozi44x_EVqfx0_Rmh0blRN_HteOpSybHPtbznzF9g";

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;    
  }

  return config;
});

export default api;
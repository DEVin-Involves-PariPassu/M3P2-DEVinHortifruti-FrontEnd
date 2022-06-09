import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8081`,
}

);

api.interceptors.request.use(async config => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTZWN1cml0eSBKV1QiLCJzdWIiOiJ7XHJcbiAgXCJpZFwiIDogMyxcclxuICBcIm5vbWVcIiA6IFwiQWRtaW5pc3RyYWRvciAyIERFVmluSG9ydGlmcnV0aVwiLFxyXG4gIFwibG9naW5cIiA6IG51bGwsXHJcbiAgXCJlbWFpbFwiIDogXCJsdWNhc19jZXNhcmlvQGVzdHVkYW50ZS5zZXNpc2VuYWkub3JnLmJyXCIsXHJcbiAgXCJkdE5hc2NpbWVudG9cIiA6IG51bGwsXHJcbiAgXCJpc0FkbWluXCIgOiB0cnVlXHJcbn0iLCJpYXQiOjE2NTQ3MTY2NzgsImV4cCI6MTY1NDgwMzA3OH0.YTKt3x1VxCDPRQbyZK8hjed-IjRAkMnZWDCmzlk4qeo";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
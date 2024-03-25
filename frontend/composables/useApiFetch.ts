import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
  let headers :any = {}
  const token = useCookie('XSRF_TOKEN')

  if(token.value){
    headers['X-XSRF_TOKEN'] = token.value as string
  }

  return useFetch('http://localhost'+path, {
    credentials: 'include',
    watch:false,
    ...options,
    headers:{
      ...headers,
      ...options.headers
    }
  });
}

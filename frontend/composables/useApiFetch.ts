import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();

  const xsrfToken = useCookie("XSRF-TOKEN");
  let headers = {
    accept: "application/json",
    ...options?.headers,
  };
  if (xsrfToken && xsrfToken.value !== null) {
    headers["X-XSRF-TOKEN"] = xsrfToken;
  }
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      referer: config.public.baseURL,
    };
  }
  return useFetch("http://localhost:8000" + path, {
    baseURL: config.public.apiBaseUrl,
    headers,
    credentials: "include",
    watch:false,
    ...options,
  });
}

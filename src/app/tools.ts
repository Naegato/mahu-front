export const ssrValue = (publicValue: any, ssrValue: any) => typeof window === 'undefined' ? ssrValue : publicValue;

export const strapiUrl = ssrValue(process.env.NEXT_PUBLIC_STRAPI_URL, process.env.NEXT_PUBLIC_STRAPI_SSR_URL);

export const apiUrl = ssrValue(process.env.NEXT_PUBLIC_API_URL, process.env.NEXT_PUBLIC_API_SSR_URL);
import { createClient, cacheExchange, fetchExchange } from "urql";

const url = process.env.NEXT_PUBLIC_SCHEMA_URL;
if (!url) {
  throw new Error("No schema URL provided");
}


export const client = createClient({
  url,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    return {
      headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! },
    };
  }
});

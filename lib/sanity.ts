import { createClient } from 'next-sanity';

export const SanityClient = createClient({
  projectId: 'p6yd2y5a',
  dataset: 'production',
  apiVersion: 'v2021-10-21',
  useCdn: true,
});

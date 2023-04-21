import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { MerkleAPIClient } from '@standard-crypto/farcaster-js';

export const cmsClient: SupabaseClient = createClient(
  process.env.CMS_DB_URL!,
  process.env.CMS_DB_API_KEY!
);

export const indexerClient: SupabaseClient = createClient(
  process.env.INDEXER_DB_URL!,
  process.env.INDEXER_DB_API_KEY!
);

export const warpClient: MerkleAPIClient = new MerkleAPIClient({
  secret: process.env.WARP_SECRET_KEY!,
});

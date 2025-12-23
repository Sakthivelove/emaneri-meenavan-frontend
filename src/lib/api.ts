import { initQueryClient } from '@ts-rest/client';
// @/contracts என்பது நேரடியாக /src/contracts-ஐக் குறிக்கும்
import { fishStoreContract } from '@/contracts'; 

const BASE_URL = 'http://localhost:3001';

export const client = initQueryClient({
  baseUrl: BASE_URL,
  baseHeaders: {}, 
  contract: fishStoreContract, 
});
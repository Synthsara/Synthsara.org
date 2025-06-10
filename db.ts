// Create the lib directory for database and API helpers
import { createClient } from '@supabase/supabase-js';

// In-memory store for development/testing
const intentions = new Map();
let WORTHCounter = 0;

// Helper function to save an intention
export async function saveIntention(text, userId = 'anonymous') {
  const id = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  
  const intention = {
    id,
    user_id: userId,
    text,
    created_at: timestamp
  };
  
  intentions.set(id, intention);
  
  // Increment WORTH for the user
  WORTHCounter += 1;
  
  return { intention, WORTHCounter };
}

// Helper function to list intentions
export async function listIntentions(userId = 'anonymous') {
  const userIntentions = Array.from(intentions.values())
    .filter(intention => intention.user_id === userId)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
  return userIntentions;
}

// Helper function to mint WORTH
export async function mintPower(userId = 'anonymous', amount = 1) {
  WORTHCounter += amount;
  return { WORTHCounter };
}

// Function to get current WORTH balance
export async function getWORTHBalance(userId = 'anonymous') {
  return { WORTHCounter };
}

// This will be replaced with actual Supabase implementation in production
export const createSupabaseClient = () => {
  // This is a placeholder - in production, we would use environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  if (supabaseUrl && supabaseKey) {
    return createClient(supabaseUrl, supabaseKey);
  }
  
  // Return null if credentials aren't available
  return null;
};

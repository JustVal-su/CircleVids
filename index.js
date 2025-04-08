import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jhzbazomjbshxqvdgfvg.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase client created', supabase);

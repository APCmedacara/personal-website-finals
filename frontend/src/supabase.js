import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://avpmtrchehnjivlykeff.supabase.co'
const supabaseAnonKey = 'sb_publishable_CdcBVST5KjqaUeccXrwvaQ_mHfzL5V2'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

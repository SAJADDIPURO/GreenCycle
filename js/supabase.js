import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://gohdcludarkgimrmgxxf.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvaGRjbHVkYXJrZ2ltcm1neHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjg0NzcsImV4cCI6MjA5NzkwNDQ3N30.yYgjQr5IWihZpkOpxQvzlZyyV54ZYTEBI6tPSgQ3SzY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
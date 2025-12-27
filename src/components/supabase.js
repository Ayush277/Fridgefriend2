import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dcilswabfqvrgsdbxndw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjaWxzd2FiZnF2cmdzZGJ4bmR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MjA0MjMsImV4cCI6MjA4MjM5NjQyM30.djmVeo-j1MFfAhZkoFQacAery76vCMlSE0nHbUhaNds";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
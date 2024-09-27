import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://epwyudnixlmhixssddzx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwd3l1ZG5peGxtaGl4c3NkZHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNzUxMDMsImV4cCI6MjA0Mjc1MTEwM30.Izkkmt8LcUKtdTvvSnrxPX8WGc-kgdCnn1B6sB49TE0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

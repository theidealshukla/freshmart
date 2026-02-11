// Supabase Configuration
const SUPABASE_URL = 'https://nvvfmgdyztlpjepcflvg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dmZtZ2R5enRscGplcGNmbHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3Njg0MzgsImV4cCI6MjA4NjM0NDQzOH0.v1hR1PcJCsyU6z8Ewu3P-cFyAFrTc4MVn5hzlibGH9Y';

// Initialize Supabase client (using different name to avoid conflict with CDN's global 'supabase')
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
window.supabaseClient = supabaseClient;

// Fetch all products from Supabase
async function dbFetchProducts() {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*');
    
    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    
    return data || [];
}

// Export functions globally
window.dbFetchProducts = dbFetchProducts;

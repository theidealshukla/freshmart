export const supabase = window.supabaseClient;

// 1. SIGN UP
export async function registerUser(email, password, fullName, phone) {
    if (!supabase) {
        return { error: { message: "Supabase client not initialized" } };
    }

    try {
        // A. Create User in Supabase Auth
        // Providing extra metadata during signup is often cleaner than a separate insert if feasible,
        // but explicit profile insertion works well too for custom tables.
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: fullName,
                    phone: phone
                    // You can add more metadata here like avatar_url
                }
            }
        });

        if (error) {
            console.error("Signup Check Error:", error);
            return { error };
        }

        // B. Create Profile Entry
        // Ensure data.user exists before trying to insert profile
        if (data && data.user) {
            // Check if profile already exists to prevent duplicates (though RLS/triggers might handle this)
            const { data: existingProfile } = await supabase
                .from('profiles')
                .select('id')
                .eq('id', data.user.id)
                .single();

            if (!existingProfile) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert([{
                        id: data.user.id, // Links to the Auth User
                        email: email,
                        full_name: fullName,
                        phone: phone,
                        role: 'customer',
                        updated_at: new Date()
                    }]);

                if (profileError) {
                    console.error("Profile creation failed manually:", profileError);
                    // We don't fail the whole signup, but we log it.
                    // This might happen if a Postgres Trigger is already creating the profile.
                    // If so, we might want to update it instead.
                }
            }
        }

        return { data };

    } catch (err) {
        console.error("Unexpected error in registerUser:", err);
        return { error: err };
    }
}

// 2. LOGIN
export async function loginUser(email, password) {
    if (!supabase) return { error: { message: "Supabase client not initialized" } };

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) console.error("Login Check Error:", error);

        return { data, error };
    } catch (err) {
        return { error: err };
    }
}

// 3. LOGOUT
export async function logoutUser() {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (!error) {
        // Clear local storage items related to user session if any
        localStorage.removeItem('sb-access-token');
        localStorage.removeItem('sb-refresh-token');
        window.location.href = 'index.html'; // Redirect to home
    } else {
        console.error("Logout Error:", error);
    }
}

// 4. GET CURRENT USER
export async function getCurrentUser() {
    if (!supabase) return null;

    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return null;

        // Fetch profile details from 'profiles' table
        const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (error) {
            console.warn("Could not fetch full profile:", error);
            // Return basic user info if profile fetch fails
            return { ...user, profile: { full_name: user.user_metadata.full_name || 'User' } };
        }

        return { ...user, profile }; // Combine Auth data + Profile data
    } catch (err) {
        console.error("Error getting current user:", err);
        return null;
    }
}

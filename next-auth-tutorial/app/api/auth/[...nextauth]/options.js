import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GithubProvider({
            profile(profile) {
                console.log("Profile Github: ", profile);
                let userRole = "Github User";
                if (profile?.email == "glauciamarx@gmail.com") {
                    userRole = "admin";                    
                }

                return {
                    ...profile,
                    role: userRole,

                };
            },
            clientId: process.env.GitHub_ID,
            clientSecret: process.env.GitHub_Secret,        
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Profile Google: ", profile);

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_Secret,          
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) token.role = user.role
            return token;
        },
        async session({ session, token}) {
            if(session?.user) session.user.role = token.role;
            return session;
        },
    },
};

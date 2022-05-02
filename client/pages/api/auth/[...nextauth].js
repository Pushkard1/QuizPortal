import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
          
          credentials: {
            username: { label: "username", type: "text" },
            password: {  label: "password", type: "password" }
          },
            async authorize(credentials,req) {
                // Here call your API with data passed in the login form
                //const token = await loginEndpoint(credentials);
                const tokenGeneration = await fetch('http://localhost:8081/generate-token',{
                body: JSON.stringify(credentials),

                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: 'POST'
                })

        const token = await tokenGeneration.json()
        console.log(token)
      
            if (token) {
              return token
            } else {
              return null
            }
          }
        })
      ],
      callbacks: {
        async jwt({ token, user, account }) {
          if (account && user) {
            return {
              ...token,
              accessToken: user.token,
              
            };
          }
    
          return token;
        },
    
        async session({ session, token }) {
          session.user.token = token.token;
            
          return session;
        },
      },
      pages: {
        signIn: '/login',
      },
      
      session: {
        strategy : "jwt"
      }
      
})
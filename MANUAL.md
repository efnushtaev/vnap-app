1. nvm use 20.12.2
2. npx create-next-app --example https://github.com/prisma/blogr-nextjs-prisma/tree/main app
3. cd app
4. nvm use 16.13.0
5. yarn install
6. yarn run dev

7. yarn add -g vercel@latest
8. vercel env pull .env

9. yarn add prisma --save-dev
10. mkdir prisma && touch prisma/schema.prisma
12. npx prisma db push
13. npx prisma studio
14. yarn add @prisma/client
15. npx prisma generate
16. mkdir lib && touch lib/prisma.ts

17. yarn add next-auth@4 @next-auth/prisma-adapter
18. npx prisma db push
19. mkdir -p pages/api/auth && touch pages/api/auth/[...nextauth].ts

20. touch pages/create.tsx
21. mkdir -p pages/api/post && touch pages/api/post/index.ts
22. touch pages/drafts.tsx

23. mkdir -p pages/api/publish && touch pages/api/publish/[id].ts
24. touch pages/api/post/[id].ts

25. git remote add origin git@github.com:efnushatev/ef-nushtaev-app.git
26. git branch -M main
27. git push -u origin main

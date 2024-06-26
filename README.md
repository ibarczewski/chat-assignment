This is my submission to Sleeper for their Chat assignment!

Features:

✅ Send a message and have the message rendered with a dummy avatar, username, sent
timestamp.

✅ Grouped messages with timestamp and avatar heading 

✅ Ability to send a gif from the top 50 trending gifs on Giphy

✅ Mocked out messages sent every 10 seconds from a random dummy user

✅ Light/dark support based on your system wide settings

✅ Responsive design that supports multiple screen sizes

✅ Accessibility tested (with some caveats, see the email)

✅ Handrolled CSS to demonstrate knowledge

✅ Clean, readable state management through Zustand

✅ Deployed automatically through Vercel

✅ .env support so that your API key isn't stolen :)

## Getting Started
Create a `.env` file in the root directory and add the following, replace `{ApiKeyHere}` with the Giphy API key:

```
NEXT_PUBLIC_GIPHY_API_KEY={ApiKeyHere}
```

Then, install the packages included with the project and run the development server:

```bash
npm run i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the chat application.

## Visit the GitHub repo

You can visit the repo [here](https://github.com/ibarczewski/chat-assignment)!

## Visit on Vercel

You can also use the application in the real world without having to spin this up! The Sleeper Chat Application is deployed [here](https://chat-assignment-lilac.vercel.app/).
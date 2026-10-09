# NF Foundation ARG

A retro-styled static frontend with a small Express backend. Passcodes are stored in `.env` and checked on the server, rather than being embedded in browser JavaScript.

## Run locally

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env`.
3. Edit `.env` and set your passcodes:
   - `DOOR_PASSCODE=RPHMEGSHQWXGMEFEGA`
   - `WEST_PASSCODE=UNHEARD`
   - `EAST_PASSCODE=STAY`
4. In this folder, run:
   ```bash
   npm install
   npm start
   ```
5. Open `http://localhost:3000`.

## Included pages

- Main door with animated lock and four archive categories
- West terminal
- East terminal
- Both terminals link to the NDS Google Doc supplied by the project owner

## Security notes

- `.env` is ignored by Git.
- Only the server reads the passcodes.
- This is a basic password gate, not a complete identity/security system. For public deployment, use HTTPS, rate limiting, and a hosting platform that supports Node.js server code.
- The linked Google Doc has its own sharing permissions; website locks do not secure that document if it is otherwise publicly accessible.
- Don't deploy `.env.example` with real secrets. It should contain placeholders only.

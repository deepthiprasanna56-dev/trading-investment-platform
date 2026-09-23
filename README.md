# Northstar — Investing, reimagined

A responsive trading and investment dashboard built with React, Vite, and Tailwind CSS. Northstar brings market indices, portfolio performance, trending stocks, a watchlist, simulated trading, market news, and a global markets map into one calm, clear interface.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Run `npm run lint` to check the source.

## Product interactions

- Dashboard navigation opens distinct `/markets`, `/stocks`, `/portfolio`, `/watchlist`, and `/about` pages. `/sign-in` and `/create-account` provide separate responsive account flows; browser history navigation is supported.
- Search and filter the stock list; add and remove symbols in the watchlist.
- Select a stock, choose Buy or Sell, enter a share quantity, and place a simulated market order. The portfolio, holdings, and available cash update locally during the session.
- Change the portfolio chart period, select a global index, explore connected financial hubs, and expand market-news stories.
- Open the sign-in, account-creation, and contact dialogs from the navigation.

The dashboard uses illustrative sample prices and static market information. Sign-in and sign-up are demo flows stored only in the current page session. The app does not connect to an exchange, submit real trades, or provide live account services.

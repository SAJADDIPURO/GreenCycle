# GreenCycle ♻️

**"Your waste has value."** GreenCycle is a recycling web platform where residents log the recyclable waste they deposit, earn points, and compete on a community leaderboard. The goal is to make waste management transparent and to encourage people to sort and recycle.

## Features

- **Landing page** with live community impact stats: active users, kg of waste collected, deposits, and points awarded
- **Register / Login** with Supabase Auth
- **Deposit waste (Setor):** submit a deposit by waste type and weight to earn points
- **User dashboard:** track your deposits and point balance
- **Leaderboard:** top contributors in the community
- **Admin panel:** review and verify deposits and manage users

## Tech Stack

HTML · CSS · JavaScript (ES Modules) · Supabase (PostgreSQL, Auth)

## Project Structure

```
index.html          # Landing page
pages/              # login, register, dashboard, setor, leaderboard, admin
js/                 # supabase client, auth, points, deposit, leaderboard, admin logic
css/                # styles
```

## Getting Started

1. Create a Supabase project and set your URL and anon key in `js/supabase.js`.
2. Serve the folder with any static server (`npx serve .`) and open `index.html`.

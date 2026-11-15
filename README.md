# Family Dinners

This week's dinners, recipes and shopping list, for phones. No account needed.

The plan is made in the Family Dinner Planner on claude.ai and published here once a week by Claude.
Ticks on the shopping list are saved on each phone.

Recipe photos: Wikimedia Commons, credited on each recipe page.
Prices: Willys and ICA Maxi Helsingborg online, checked 15 Nov 2026 (see `prices.js`).

## Updating the week
1. Export `app/plan`, `app/settings` and any Claude-made `recipes/<id>` from the planner's database into a `week.json`.
2. `python3 tools/write_week.py week.json`
3. Commit and push `week.js`. GitHub Pages updates within a minute or two.

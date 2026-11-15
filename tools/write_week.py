"""Write week.js for the public site.

Usage: python3 tools/write_week.py week.json
week.json = {"plan": {...app/plan from the planner...}, "settings": {...app/settings...},
             "recipes": {id: recipe, ...}  # only recipes Claude made (ids not in recipes.js)
             }
"""
import json, sys, datetime
data = json.load(open(sys.argv[1]))
data["publishedAt"] = datetime.date.today().strftime("%-d %b %Y")
with open("week.js", "w") as f:
    f.write("// This week's plan, exported from the Family Dinner Planner on claude.ai.\n")
    f.write("window.STATIC_WEEK = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
print("week.js written for week starting", data["plan"].get("start"))

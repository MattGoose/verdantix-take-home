# verdantix-take-home

## How to run

1. Clone the repo
2. Open repo in code editor of your choosing (I recommend VS Code)
3. Run `npm install` from the CLI
4. Run `npm run dev` from the CLI
5. Navigate to the indicated localhost

## Key decisions & priorites

- Translated spec into easiy digestible format for my own understanding (akin to creating projects/tickets within Jira/Linear).
- Approached the task in the order of the spec (Blog -> Corporate -> Investor).
- Spread work out between Tuesday & Wednesday:
    - On Tuesday I did the project setup; installed relevant libraries (TanStack Router, Zustand, Chart.js); read relevant documentation to fill in knowledge gaps; read the data files to understand what they represented; bootsrapped general page layout and navigation using Bootstrap 5 & TanStack Router
    - On Wednesday I focused on content; built out the blog list; built the blog post page utilising Zustand; built the trend chart using Chart.js and Zustand to track selected company
- I used TanStack Router and it's popular, well supported, and easy to pick up and use.
- I used Zustand for simple state management - loading the files into state so I wouldn't have to fetch every time I wanted to use them. I could also easily build getter functions using state data.
- I used Chart.js as I have (brief) experience using it before.
- Focused on finishing one section at a time:
    - Blog is complete
    - Corporate view is half complete
    - Investor view in incomplete

## Trade-offs

- UI presentation. It's quite simple in layout & presentation. I would have preferred to make the content more visually appealing but I focused on laying content down.
- Completing the entirety of the task. I priortised finishing individual sections of the task, rather than having all of them partially done.

## With more time I would...

- Completing the entire task. I estimate to complete the entire task would take 3 - 5 days.
- Read more documentation to fully understand the libraries I used. My implementation of them might be shallow due to my limited understanding.
- Map out path directories aliases for cleaner imports.
- Utilised a test suite to test my code.
- Not have the selectedCompany variable live in persisted state (so that the page started from state 0 with each refresh).
- Make the blog layout page more appealing. As there was only one blog post I didn't want to over-do this and leave myself short on time elsewhere.

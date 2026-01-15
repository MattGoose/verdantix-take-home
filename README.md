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
- Spread work out between Tuesday, Wednesday, & Thursday:
    - On Tuesday I did the project setup; installed relevant libraries (TanStack Router, Zustand, Chart.js); read relevant documentation to fill in knowledge gaps; read the data files to understand what they represented; bootsrapped general page layout and navigation using Bootstrap 5 & TanStack Router
    - On Wednesday I focused on content; built out the blog list; built the blog post page utilising Zustand; built the trend chart using Chart.js and Zustand to track selected company
    - On Thursday I was informed that I coudl spend longer on the task, so I took the opportunity to finish up the corporate view and build out the investor view
- I used TanStack Router and it's popular, well supported, and easy to pick up and use.
- I used Zustand for simple state management - loading the files into state so I wouldn't have to fetch every time I wanted to use them. I could also easily build getter functions using state data.
- I used Chart.js as I have (brief) experience using it before.
- I focused on finishing one section at a time

## Trade-offs

- UI presentation. It's quite simple in layout & presentation. I would have preferred to make the content more visually appealing but I focused on laying content down.
- I didn't build the contextual target indicators for the corporate view. This was because I didn't fully understand what this meant. I could have spent longer to do so, but decided to prioritse completing other parts of the corporate view instead.
- I didn't build the small summary section for the investor view. This would have been the last task I did, but as I had already spent extra time on the task I decided I was satisfied with what I had done and left it there.
- I didn't modularise all the investor code due to time constraints.

## With more time I would...

- Completing the entire task. I estimate to complete the entire task would take 3 - 5 days.
- Read more documentation to fully understand the libraries I used. My implementation of them might be shallow due to my limited understanding.
- Utilised a test suite to test my code.
- Make the blog layout page more appealing. As there was only one blog post I didn't want to over-do this and leave myself short on time elsewhere.
- Spent more time understanding the data. I udnerstood it to a baseline, and with some research online I could make sense of the data, but I still felt like I didn't fully grasp it.
- Looked into hosting, most likely via Netlify.
- Taken extra care with accessibility. Whilst I used semantic HTML tags well, I still think there's other areas I could have done better with, such as adding alt-text to images, and aria-labels to my tables.

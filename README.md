
# Taekwondo Academy Website

A small React + Vite site showcasing a Taekwondo academy with pages, instructor profiles, schedule, admissions, and an AI assistant.

## Quick start

1. Install dependencies:
```sh
npm install
```
2. Run dev server:
```sh
npm run dev
```
3. Build for production:
```sh
npm run build
```

See scripts in package.json.

## Project files

Root:
- .env.local  
- .gitignore  
- App.tsx  
- index.html  
- index.tsx  
- metadata.json  
- package.json  
- README.md  
- tsconfig.json  
- types.ts — shared types (Page, Instructor)  
- vite.config.ts

Components:
- components/HomePage.tsx — hero, benefits, testimonials, embeds AIAssistant  
- components/AboutPage.tsx  
- components/AdmissionPage.tsx  
- components/SchedulePage.tsx  
- components/InstructorsPage.tsx — uses InstructorCard and Instructor type  
- components/InstructorCard.tsx  
- components/AIAssistant.tsx — UI for AI assistant; talks to services/geminiService.ts  
- components/Button.tsx  
- components/Header.tsx  
- components/Footer.tsx

Services:
- services/geminiService.ts — AI integration used by AIAssistant

Important symbols
- Page (types.ts) — page enum/type used for navigation  
- Instructor (types.ts) — instructor model used by instructor pages and cards  
- geminiService (services/geminiService.ts) — AI service integration

How it fits together
- App.tsx manages routing and top-level state.  
- Pages are under components/ and use shared types from types.ts.  
- AIAssistant.tsx is the assistant UI and communicates with services/geminiService.ts.  
- InstructorsPage and InstructorCard render instructor data typed by Instructor.

Contributing
- Add new UI/features as components under components/.  
- Keep shared types in types.ts.  
- Update or add services under services/.

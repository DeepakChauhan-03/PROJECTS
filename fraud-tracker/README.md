# Fraud Tracker (MERN)

Ek tracking-link system jo fraud investigation ke liye banaya gaya hai:
suspect ko link bhejo, wo click karte hi uska **IP, approximate location
(city-level), ISP, aur device info** capture ho jaata hai. Agar wo browser
ka GPS permission popup allow kare, to **precise lat/long** bhi mil jaata hai.

## Kaise kaam karta hai

1. Investigator `/` page pe ek naya tracking link generate karta hai (case label ke saath).
2. Wo link (`/t/<linkId>`) suspect ko bheja jaata hai.
3. Link open hote hi:
   - **IP-based location** silently capture ho jaati hai (koi permission popup nahi — sirf city-level accuracy).
   - Browser **GPS permission popup** bhi trigger hota hai (ye hide nahi ki ja sakti, browser security ka part hai). Agar suspect allow kare, precise location mil jaati hai.
4. Investigator `/admin` dashboard pe saare captured hits real-time dekh sakta hai.

## Setup

### Backend
```bash
cd server
cp .env.example .env   # MONGO_URI apna daalo
npm install
npm run dev
```

### Frontend
```bash
cd client
cp .env.example .env
npm install
npm start
```

MongoDB local chahiye (`mongodb://localhost:27017`) ya MongoDB Atlas ka connection string `.env` me daal do.

## Important — legal/ethical boundaries (padhna zaroori hai)

- **IP-based location sirf city/area level accurate hoti hai**, exact ghar ka address nahi. Real address sirf telecom/ISP ke paas hota hai, jo sirf **court order/warrant** ke through police ko milta hai.
- Kisi **real victim ya random person** ko bina unki knowledge ke track karna — chahe "fraud pakadne" ke naam pe ho — kayi jagah **privacy/IT Act violations** ban sakta hai agar tumhare paas legal authority nahi hai.
- Iska sahi use: **ek documented case me** (jaha fraud ho chuka hai, evidence maujood hai), aur ideally **cyber cell/police ke saath coordinate karke**, ya ek **academic/demo project** ke tor par apne khud ke test devices pe.
- Production me deploy karne se pehle: apne case ko **cybercrime.gov.in** ya local cyber cell me report karna primary step hona chahiye — ye tool sirf supporting evidence ke liye hai, replacement nahi.

## Tech stack
React + React Router (frontend) · Node/Express + Mongoose (backend) · MongoDB · ip-api.com (free IP geolocation) · HTML5 Geolocation API (precise GPS, consent-based)

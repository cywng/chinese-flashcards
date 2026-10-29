# 点菜通 · Chinese Menu & Vocab Flashcards (Heritage Learner Edition)

A zero-build, mobile-first Progressive Web App (PWA) hosted on GitHub Pages designed for heritage Chinese learners who want to master **reading Chinese restaurant menus, bubble tea customization, cooking methods, meat cuts**, and **recalling precise vocabulary**.

## ✨ Features

* **📖 Hanzi-First Reading Mode (Default)**:
  * Shows only the Chinese characters on the front of the card so your spoken comprehension doesn't give away the answer before you practice reading.
  * Includes a **`🔊 Audio Hint`** button on the front—tap it if you're stuck on the characters to hear the spoken word and connect your existing spoken fluency to the written Hanzi.
  * Includes a **`🧩 Char Clue`** button on the front to peek at individual character building blocks.
  * Flipping the card reveals tone-marked **Pinyin**, **English meaning**, **Character-by-Character Breakdown**, and plays **native Mandarin audio**.
* **🎯 Recall Word Mode**:
  * Flip the study direction to see the English/culinary concept first and practice active recall of the exact Chinese phrase.
* **書 Restaurant Menu Font Toggle**:
  * Switch between clean UI Sans-Serif (`字 Sans`) and traditional restaurant menu Serif/Songti (`書 Menu Serif`) with one tap in the header.
* **📋 Smart Vocab Paste & Auto-Pinyin**:
  * Paste raw Chinese characters (e.g. copied from Meituan, Dianping, WeChat, Xiaohongshu, or notes), or `Hanzi - English` lines.
  * Automatically generates tone-marked Pinyin and literal character breakdowns completely offline!
* **🍜 5 Built-in China Menu Starter Decks (110+ Items)**:
  1. **🔥 烹饪与口味 (Cooking Methods & Flavors)** — `红烧`, `清蒸`, `爆炒`, `干煸`, `凉拌`, `卤水`, `炭烤`, `水煮`, `白灼`, `干锅`, `砂锅`, `铁板`, `油焖`, `麻辣`, `酸辣`, `蒜蓉`, `椒盐`, `糖醋`, `葱油`, `鱼香`...
  2. **🥩 肉类与海鲜 (Meats, Cuts & Seafood)** — `五花肉`, `里脊肉`, `排骨`, `牛腩`, `肥牛`, `牛腱子`, `猪蹄`, `毛肚`, `鸭血`, `鸡胗`, `虾仁`, `小龙虾`, `鱿鱼`, `花甲`, `生蚝`, `扇贝`, `鲈鱼`...
  3. **🍜 面食、米饭与小吃 (Noodles, Rice & Snacks)** — `红烧牛肉面`, `炸酱面`, `担担面`, `重庆小面`, `刀削面`, `兰州拉面`, `干炒牛河`, `酸辣粉`, `过桥米线`, `螺蛳粉`, `盖浇饭`, `腊味煲仔饭`, `卤肉饭`, `小笼包`, `生煎包`, `红油抄手`, `肉夹馍`...
  4. **🧋 奶茶与饮品点单 (Bubble Tea & Drinks)** — `珍珠奶茶`, `芋泥波波`, `杨枝甘露`, `芝士奶盖`, `鸭屎香柠檬茶`, `四季春`, `铁观音`, `大红袍`, `烧仙草`, `脆波波`, `燕麦奶`, `厚乳拿铁`, `去冰`, `少冰`, `五分糖`, `不另外加糖`...
  5. **🥘 中国餐厅必点名菜 (Classic Dishes)** — `宫保鸡丁`, `鱼香肉丝`, `麻婆豆腐`, `回锅肉`, `水煮牛肉`, `酸菜鱼`, `重庆辣子鸡`, `小炒黄牛肉`, `地三鲜`, `干煸四季豆`, `梅菜扣肉`, `蒜蓉粉丝蒸扇贝`...

---

## 🚀 How to Host on GitHub Pages (1 Minute)

1. Create a new repository on GitHub (for example: `chinese-vocab-flashcards`).
2. In this folder, link your remote repository and push the `main` branch:
   ```bash
   git remote add origin https://github.com/<your-username>/chinese-vocab-flashcards.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** → **Pages**:
   * Under **Build and deployment** → **Source**, select **GitHub Actions** (or **Deploy from a branch** → `main` / `/ (root)`).
4. Your web app will be live at:
   `https://<your-username>.github.io/chinese-vocab-flashcards/`

---

## 📱 Install on Your Phone (iOS & Android)

* **iPhone (Safari)**: Open your GitHub Pages URL → Tap the **Share** button (`⬆`) → Tap **Add to Home Screen**.
* **Android (Chrome)**: Open your GitHub Pages URL → Tap the three-dot menu → Tap **Add to Home screen / Install app**.
* *Audio Tip for iPhone*: Make sure the physical Silent/Mute switch on the side of your iPhone is turned off (or use headphones) so Safari plays Web Speech API audio.

/**
 * Curated Starter Decks for a Heritage Learner Reading Menus in China
 * Focuses on cooking methods, sauces/spices, meat cuts, noodle & rice dishes,
 * bubble tea customization, and signature Chinese restaurant dishes.
 */

export const STARTER_DECKS = [
  {
    id: 'deck-cooking-flavors',
    name: '🔥 烹饪与口味 (Cooking & Flavors)',
    category: 'menu',
    description: 'Essential cooking methods (roast, braise, steam, fry) and flavor profiles (soy, pepper, garlic, spicy) found on every Chinese menu.',
    icon: '🔥',
    cards: [
      {
        id: 'cf-1',
        hanzi: '红烧',
        pinyin: 'hóng shāo',
        meaning: 'Braised in dark soy sauce ("red-cooked")',
        notes: '红 (red) + 烧 (braise/roast). Rich, savory-sweet dark soy glaze (e.g. 红烧肉, 红烧牛肉面).',
        status: 'new'
      },
      {
        id: 'cf-2',
        hanzi: '清蒸',
        pinyin: 'qīng zhēng',
        meaning: 'Steamed in light broth/ginger-scallion',
        notes: '清 (clear/light) + 蒸 (steam). Classic method for fresh fish (清蒸鲈鱼) to highlight natural sweetness.',
        status: 'new'
      },
      {
        id: 'cf-3',
        hanzi: '爆炒',
        pinyin: 'bào chǎo',
        meaning: 'Flash stir-fried over high wok heat',
        notes: '爆 (explode/flash-heat) + 炒 (stir-fry). Quick cooking for tender crunch and "wok hei".',
        status: 'new'
      },
      {
        id: 'cf-4',
        hanzi: '干煸',
        pinyin: 'gān biān',
        meaning: 'Dry-fried until blistered and crispy',
        notes: '干 (dry) + 煸 (stir-fry out moisture). Used for string beans (干煸四季豆) or crispy beef.',
        status: 'new'
      },
      {
        id: 'cf-5',
        hanzi: '凉拌',
        pinyin: 'liáng bàn',
        meaning: 'Cold-tossed in dressing/sauce',
        notes: '凉 (cold) + 拌 (mix/toss). Cold appetizers tossed with garlic, vinegar, chili oil, and sesame.',
        status: 'new'
      },
      {
        id: 'cf-6',
        hanzi: '卤水',
        pinyin: 'lǔ shuǐ',
        meaning: 'Simmered in spiced master soy broth',
        notes: '卤 (spiced brine/stew) + 水 (liquid). Also seen as 卤味 (lǔ wèi) for braised meats, eggs, and tofu.',
        status: 'new'
      },
      {
        id: 'cf-7',
        hanzi: '炭烤',
        pinyin: 'tàn kǎo',
        meaning: 'Charcoal grilled / roasted',
        notes: '炭 (charcoal) + 烤 (roast/grill). Seen on BBQ skewer (烧烤 shāo kǎo) and grilled fish menus.',
        status: 'new'
      },
      {
        id: 'cf-8',
        hanzi: '香煎',
        pinyin: 'xiāng jiān',
        meaning: 'Pan-seared / pan-fried until fragrant',
        notes: '香 (fragrant) + 煎 (shallow pan-fry). Crispy outside, tender inside.',
        status: 'new'
      },
      {
        id: 'cf-9',
        hanzi: '水煮',
        pinyin: 'shuǐ zhǔ',
        meaning: 'Poached in sizzling chili & peppercorn oil',
        notes: 'Literally "water boiled", but on Sichuan menus it means a fiery, numbing chili-oil bath!',
        status: 'new'
      },
      {
        id: 'cf-10',
        hanzi: '白灼',
        pinyin: 'bái zhuó',
        meaning: 'Poached/blanched plain with soy dip',
        notes: '白 (plain/clear) + 灼 (scald). Common on Cantonese menus for shrimp (白灼虾) and greens (白灼菜心).',
        status: 'new'
      },
      {
        id: 'cf-11',
        hanzi: '干锅',
        pinyin: 'gān guō',
        meaning: 'Sizzling dry-pot (mini wok over flame)',
        notes: '干 (dry/no broth) + 锅 (pot). Served in a small metal wok kept sizzling at the table.',
        status: 'new'
      },
      {
        id: 'cf-12',
        hanzi: '砂锅',
        pinyin: 'shā guō',
        meaning: 'Claypot casserole / stew',
        notes: '砂 (sand/earthenware) + 锅 (pot). Retains heat for bubbling soups, tofu, and glass noodles.',
        status: 'new'
      },
      {
        id: 'cf-13',
        hanzi: '铁板',
        pinyin: 'tiě bǎn',
        meaning: 'Sizzling iron plate',
        notes: '铁 (iron) + 板 (plate). Served piping hot on cast iron (e.g. 铁板牛肉, 铁板豆腐).',
        status: 'new'
      },
      {
        id: 'cf-14',
        hanzi: '油焖',
        pinyin: 'yóu mèn',
        meaning: 'Oil-braised in rich savory glaze',
        notes: '油 (oil) + 焖 (simmer tightly covered). Classic for prawns (油焖大虾) and bamboo shoots (油焖春笋).',
        status: 'new'
      },
      {
        id: 'cf-15',
        hanzi: '高汤',
        pinyin: 'gāo tāng',
        meaning: 'Supreme stock / rich slow-simmered broth',
        notes: '高 (high/supreme) + 汤 (soup). Also 浓汤 (nóng tāng = thick creamy bone broth) vs 清汤 (qīng tāng = clear broth).',
        status: 'new'
      },
      {
        id: 'cf-16',
        hanzi: '麻辣',
        pinyin: 'má là',
        meaning: 'Numbing and spicy (Sichuan peppercorn + chili)',
        notes: '麻 (numbing tingle from 花椒) + 辣 (hot chili).',
        status: 'new'
      },
      {
        id: 'cf-17',
        hanzi: '酸辣',
        pinyin: 'suān là',
        meaning: 'Hot and sour (vinegar & chili)',
        notes: '酸 (sour) + 辣 (spicy). E.g. 酸辣汤 (hot & sour soup), 酸辣土豆丝.',
        status: 'new'
      },
      {
        id: 'cf-18',
        hanzi: '蒜蓉',
        pinyin: 'suàn róng',
        meaning: 'Minced garlic sauce/topping',
        notes: '蒜 (garlic) + 蓉 (finely mashed/minced). Essential for veggies and seafood (蒜蓉西兰花, 蒜蓉生蚝).',
        status: 'new'
      },
      {
        id: 'cf-19',
        hanzi: '椒盐',
        pinyin: 'jiāo yán',
        meaning: 'Roasted Sichuan pepper-salt seasoning',
        notes: '椒 (peppercorn) + 盐 (salt). Crispy dry-rubbed fried dishes (椒盐排条, 椒盐皮皮虾).',
        status: 'new'
      },
      {
        id: 'cf-20',
        hanzi: '糖醋',
        pinyin: 'táng cù',
        meaning: 'Sweet and sour (sugar & vinegar glaze)',
        notes: '糖 (sugar) + 醋 (vinegar). E.g. 糖醋排骨 (sweet & sour pork ribs).',
        status: 'new'
      },
      {
        id: 'cf-21',
        hanzi: '葱油',
        pinyin: 'cōng yóu',
        meaning: 'Infused scallion oil',
        notes: '葱 (scallion) + 油 (oil). Fragrant browned green onion oil (葱油拌面, 葱油饼).',
        status: 'new'
      },
      {
        id: 'cf-22',
        hanzi: '酱香',
        pinyin: 'jiàng xiāng',
        meaning: 'Savory fermented soy-paste flavor',
        notes: '酱 (bean paste/soy sauce) + 香 (aroma). Rich, non-spicy umami flavor profile.',
        status: 'new'
      },
      {
        id: 'cf-23',
        hanzi: '鱼香',
        pinyin: 'yú xiāng',
        meaning: '"Fish-fragrant" garlic-ginger-sweet-vinegar chili sauce',
        notes: 'Contains NO fish! Named because it uses traditional Sichuan fish-seasoning aromatics (scallion, ginger, garlic, pickled chili, sugar, vinegar).',
        status: 'new'
      },
      {
        id: 'cf-24',
        hanzi: '黑椒',
        pinyin: 'hēi jiāo',
        meaning: 'Black pepper sauce',
        notes: '黑 (black) + 椒 (pepper). Common with beef (黑椒牛柳 = black pepper beef tenderloin strips).',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-meats-seafood',
    name: '🥩 肉类与海鲜 (Meats, Cuts & Seafood)',
    category: 'menu',
    description: 'Specific cuts of pork, beef, poultry, offal, and seafood so you always know what part of the animal you are ordering.',
    icon: '🥩',
    cards: [
      {
        id: 'ms-1',
        hanzi: '五花肉',
        pinyin: 'wǔ huā ròu',
        meaning: 'Pork belly (layered fat and lean meat)',
        notes: 'Literally "five-flower meat" referring to the marbling layers of skin, fat, and muscle.',
        status: 'new'
      },
      {
        id: 'ms-2',
        hanzi: '里脊肉',
        pinyin: 'lǐ jǐ ròu',
        meaning: 'Tenderloin (extra-lean pork or beef strip)',
        notes: '里脊 = inner spine tenderloin. Super soft, boneless, fat-free cut (e.g. 糖醋里脊).',
        status: 'new'
      },
      {
        id: 'ms-3',
        hanzi: '排骨',
        pinyin: 'pái gǔ',
        meaning: 'Pork spare ribs / short ribs',
        notes: '排 (row) + 骨 (bone). Bite-sized rib pieces on Chinese menus.',
        status: 'new'
      },
      {
        id: 'ms-4',
        hanzi: '牛腩',
        pinyin: 'niú nǎn',
        meaning: 'Beef brisket / flank',
        notes: '牛 (beef) + 腩 (belly/brisket). Slow-braised until melt-in-your-mouth tender in soups and curries.',
        status: 'new'
      },
      {
        id: 'ms-5',
        hanzi: '肥牛',
        pinyin: 'féi niú',
        meaning: 'Thinly shaved marbled beef rolls',
        notes: '肥 (fatty/marbled) + 牛 (beef). Standard cut for hotpot, sour soup (金汤肥牛), and rice bowls.',
        status: 'new'
      },
      {
        id: 'ms-6',
        hanzi: '牛腱子',
        pinyin: 'niú jiàn zi',
        meaning: 'Beef shank (lean muscle laced with tendon)',
        notes: '腱 (tendon/shank). Usually spiced, braised in master broth, and sliced cold (卤牛腱).',
        status: 'new'
      },
      {
        id: 'ms-7',
        hanzi: '猪蹄',
        pinyin: 'zhū tí',
        meaning: 'Pork trotters / pig feet (also called 猪手)',
        notes: '猪 (pig) + 蹄 (hoof). Rich in collagen, roasted (烤猪蹄) or soy-braised.',
        status: 'new'
      },
      {
        id: 'ms-8',
        hanzi: '肉末',
        pinyin: 'ròu mò',
        meaning: 'Minced pork / ground meat (also 肉碎)',
        notes: '肉 (pork) + 末 (fine bits/powder). Used to flavor veggies & noodles (肉末茄子, 担担面).',
        status: 'new'
      },
      {
        id: 'ms-9',
        hanzi: '肉丝',
        pinyin: 'ròu sī',
        meaning: 'Julienne shredded pork strips',
        notes: '丝 (silk thread/shreds). Compare shapes: 肉丝 (shreds), 肉片 (slices), 肉丁 (diced cubes), 肉丸 (meatballs).',
        status: 'new'
      },
      {
        id: 'ms-10',
        hanzi: '羊肉串',
        pinyin: 'yáng ròu chuàn',
        meaning: 'Grilled lamb skewers (usually cumin-spiced)',
        notes: '羊 (lamb) + 肉 (meat) + 串 (skewer). Look for 孜然 (zī rán = cumin) with lamb.',
        status: 'new'
      },
      {
        id: 'ms-11',
        hanzi: '鸡翅',
        pinyin: 'jī chì',
        meaning: 'Chicken wings (鸡腿 = drumstick/thigh, 鸡胸 = breast)',
        notes: '鸡 (chicken) + 翅 (wing). 翅中 = middle wing section.',
        status: 'new'
      },
      {
        id: 'ms-12',
        hanzi: '毛肚',
        pinyin: 'máo dǔ',
        meaning: 'Beef omasum tripe (hotpot favorite)',
        notes: '毛 (fuzzy) + 肚 (stomach/tripe). Swished in boiling hotpot for 10 seconds for a crunchy snap; also called 百叶 (bǎi yè).',
        status: 'new'
      },
      {
        id: 'ms-13',
        hanzi: '鸭血',
        pinyin: 'yā xuè',
        meaning: 'Silky duck blood curd',
        notes: '鸭 (duck) + 血 (blood). Tofu-like jelly texture, staple in spicy Sichuan soups and 毛血旺.',
        status: 'new'
      },
      {
        id: 'ms-14',
        hanzi: '鸡胗',
        pinyin: 'jī zhēn',
        meaning: 'Chicken gizzards',
        notes: '胗 (gizzard). Firm, snappy texture; popular on BBQ skewers and spicy stir-fries (酸辣鸡胗).',
        status: 'new'
      },
      {
        id: 'ms-15',
        hanzi: '虾仁',
        pinyin: 'xiā rén',
        meaning: 'Shelled/peeled shrimp meat',
        notes: '虾 (shrimp) + 仁 (shelled kernel). If it just says 虾 (like 油焖大虾), the shell is still on!',
        status: 'new'
      },
      {
        id: 'ms-16',
        hanzi: '小龙虾',
        pinyin: 'xiǎo lóng xiā',
        meaning: 'Crawfish / crayfish (late-night street food icon)',
        notes: 'Literally "little dragon shrimp" (whereas 龙虾 lóng xiā is lobster). Famous in 麻辣 (spicy) or 十三香 (13-spice).',
        status: 'new'
      },
      {
        id: 'ms-17',
        hanzi: '鱿鱼',
        pinyin: 'yóu yú',
        meaning: 'Squid / calamari',
        notes: '鱿鱼须 (yóu yú xū) = squid tentacles, a street grill staple.',
        status: 'new'
      },
      {
        id: 'ms-18',
        hanzi: '花甲',
        pinyin: 'huā jiǎ',
        meaning: 'Clams (also called 蛤蜊 gé lí)',
        notes: 'Southern/night-market name for Manila clams, often cooked in foil with garlic & vermicelli (锡纸花甲粉).',
        status: 'new'
      },
      {
        id: 'ms-19',
        hanzi: '生蚝',
        pinyin: 'shēng háo',
        meaning: 'Oysters',
        notes: 'Usually charcoal-grilled with heaps of garlic and chili (炭烤蒜蓉生蚝).',
        status: 'new'
      },
      {
        id: 'ms-20',
        hanzi: '扇贝',
        pinyin: 'shàn bèi',
        meaning: 'Scallops',
        notes: '扇 (fan-shaped) + 贝 (shellfish). Served on the half-shell with glass noodles and garlic.',
        status: 'new'
      },
      {
        id: 'ms-21',
        hanzi: '鲈鱼',
        pinyin: 'lú yú',
        meaning: 'Sea bass / perch (mild, flaky, few tiny bones)',
        notes: 'The go-to fish to order steamed (清蒸鲈鱼) or grilled (烤鱼) when you want minimal small bones.',
        status: 'new'
      },
      {
        id: 'ms-22',
        hanzi: '午餐肉',
        pinyin: 'wǔ cān ròu',
        meaning: 'Luncheon meat / Spam slices',
        notes: '午餐 (lunch) + 肉 (meat). Classic topping in hotpot, malatang, and Chongqing noodles.',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-noodles-rice',
    name: '🍜 面食、米饭与小吃 (Noodles, Rice & Snacks)',
    category: 'menu',
    description: 'Regional noodle bowls, rice toppers, claypot rice, dumplings, and street buns across China.',
    icon: '🍜',
    cards: [
      {
        id: 'nr-1',
        hanzi: '红烧牛肉面',
        pinyin: 'hóng shāo niú ròu miàn',
        meaning: 'Soy-braised beef noodle soup',
        notes: '红烧 (soy-braised) + 牛肉 (beef) + 面 (wheat noodles). The classic comfort noodle bowl.',
        status: 'new'
      },
      {
        id: 'nr-2',
        hanzi: '炸酱面',
        pinyin: 'zhá jiàng miàn',
        meaning: 'Noodles topped with rich fried bean sauce & minced pork',
        notes: 'Note pronunciation: 炸 is zhá (2nd tone) here! Served with julienned cucumber and radish.',
        status: 'new'
      },
      {
        id: 'nr-3',
        hanzi: '担担面',
        pinyin: 'dàn dàn miàn',
        meaning: 'Sichuan Dan Dan noodles (chili oil, sesame, minced pork, preserved veggies)',
        notes: '担 (carrying pole). Originally sold by street hawkers carrying poles in Chengdu.',
        status: 'new'
      },
      {
        id: 'nr-4',
        hanzi: '重庆小面',
        pinyin: 'chóng qìng xiǎo miàn',
        meaning: 'Chongqing spicy numbing wheat noodles',
        notes: 'Don\'t be fooled by 小 (humble/simple)—it packs a fragrant punch of chili oil and roasted Sichuan pepper!',
        status: 'new'
      },
      {
        id: 'nr-5',
        hanzi: '刀削面',
        pinyin: 'dāo xiāo miàn',
        meaning: 'Knife-shaved ribbon noodles (thick, chewy center)',
        notes: '刀 (knife) + 削 (shave/pare) + 面 (noodles). Shanxi specialty with super bouncy texture.',
        status: 'new'
      },
      {
        id: 'nr-6',
        hanzi: '兰州拉面',
        pinyin: 'lán zhōu lā miàn',
        meaning: 'Lanzhou hand-pulled beef noodles in clear radish broth',
        notes: '拉 (pull/stretch). You can choose noodle thickness: 毛细 (angel hair), 二细 (medium round), 宽面 (wide belt).',
        status: 'new'
      },
      {
        id: 'nr-7',
        hanzi: '葱油拌面',
        pinyin: 'cōng yóu bàn miàn',
        meaning: 'Shanghai dry-tossed noodles with caramelized scallion oil',
        notes: '拌面 (bàn miàn) = dry sauce-tossed noodles (as opposed to 汤面 tāng miàn = soup noodles).',
        status: 'new'
      },
      {
        id: 'nr-8',
        hanzi: '干炒牛河',
        pinyin: 'gān chǎo niú hé',
        meaning: 'Wok-seared flat rice noodles with beef, bean sprouts & chives',
        notes: '河 = 河粉 (hé fěn, wide flat rice noodles). Cantonese test of a chef\'s wok skill.',
        status: 'new'
      },
      {
        id: 'nr-9',
        hanzi: '酸辣粉',
        pinyin: 'suān là fěn',
        meaning: 'Hot and sour sweet-potato glass noodles',
        notes: '粉 (fěn) = rice/starch noodles. Chewy translucent sweet-potato noodles with vinegar, chili, peanuts & cilantro.',
        status: 'new'
      },
      {
        id: 'nr-10',
        hanzi: '过桥米线',
        pinyin: 'guò qiáo mǐ xiàn',
        meaning: 'Yunnan "Crossing-the-Bridge" rice vermicelli soup',
        notes: '米线 (mǐ xiàn) = round rice noodles. Served with a piping-hot chicken soup bowl where you add raw meats & herbs.',
        status: 'new'
      },
      {
        id: 'nr-11',
        hanzi: '螺蛳粉',
        pinyin: 'luó sī fěn',
        meaning: 'Liuzhou river-snail broth rice noodles with pickled bamboo shoots',
        notes: 'Famous for its funky, pungent pickled bamboo shoot aroma (酸笋) and fiery red chili oil.',
        status: 'new'
      },
      {
        id: 'nr-12',
        hanzi: '盖浇饭',
        pinyin: 'gài jiāo fàn',
        meaning: 'One-plate rice topped with a freshly stir-fried dish & sauce',
        notes: '盖 (cover/top) + 浇 (ladle sauce over) + 饭 (rice). Often shortened to 盖饭 (gài fàn) for quick lunches.',
        status: 'new'
      },
      {
        id: 'nr-13',
        hanzi: '腊味煲仔饭',
        pinyin: 'là wèi bāo zǎi fàn',
        meaning: 'Cantonese claypot rice with cured sausages & crispy scorched rice crust',
        notes: '腊味 (cured meats/sausage) + 煲仔 (little claypot) + 饭 (rice). Best part is the 锅巴 (guō bā = crispy bottom crust)!',
        status: 'new'
      },
      {
        id: 'nr-14',
        hanzi: '卤肉饭',
        pinyin: 'lǔ ròu fàn',
        meaning: 'Taiwanese-style braised minced pork belly over rice',
        notes: '卤肉 (spiced soy-braised pork) + 饭 (rice). Rich, savory, usually served with a braised egg (卤蛋).',
        status: 'new'
      },
      {
        id: 'nr-15',
        hanzi: '扬州炒饭',
        pinyin: 'yáng zhōu chǎo fàn',
        meaning: 'Yangzhou fried rice (egg, shrimp, diced char siu pork, peas)',
        notes: '炒饭 (chǎo fàn) = fried rice; 白米饭 (bái mǐ fàn) = plain steamed white rice.',
        status: 'new'
      },
      {
        id: 'nr-16',
        hanzi: '小笼包',
        pinyin: 'xiǎo lóng bāo',
        meaning: 'Steamed soup dumplings in bamboo basket',
        notes: '小 (small) + 笼 (steamer basket) + 包 (bun). Filled with hot savory pork broth (汤汁).',
        status: 'new'
      },
      {
        id: 'nr-17',
        hanzi: '生煎包',
        pinyin: 'shēng jiān bāo',
        meaning: 'Pan-fried crispy-bottom juicy pork buns',
        notes: '生煎 (pan-fried from raw) + 包 (bun). Topped with black sesame and scallions; watch out for hot soup inside!',
        status: 'new'
      },
      {
        id: 'nr-18',
        hanzi: '红油抄手',
        pinyin: 'hóng yǒu chāo shǒu',
        meaning: 'Sichuan folded wontons in aromatic sweet-spicy chili oil',
        notes: '抄手 (chāo shǒu) is the Sichuan word for 馄饨 (hún tun = wonton), named after how the wrapper folds like crossed arms.',
        status: 'new'
      },
      {
        id: 'nr-19',
        hanzi: '鲜肉馄饨',
        pinyin: 'xiān ròu hún tun',
        meaning: 'Fresh pork wonton soup',
        notes: '鲜肉 (fresh pork) + 馄饨 (wontons). Note: 水饺 (shuǐ jiǎo) = boiled dumplings, 蒸饺 (zhēng jiǎo) = steamed dumplings.',
        status: 'new'
      },
      {
        id: 'nr-20',
        hanzi: '锅贴',
        pinyin: 'guō tiē',
        meaning: 'Potstickers (crispy-skirt pan-fried dumplings)',
        notes: '锅 (wok/pan) + 贴 (stick to). Long open-ended dumplings seared to a golden lace crust.',
        status: 'new'
      },
      {
        id: 'nr-21',
        hanzi: '肉夹馍',
        pinyin: 'ròu jiā mó',
        meaning: 'Xi\'an crispy flatbread stuffed with spiced chopped braised pork',
        notes: 'Literally "meat挟(sandwiched in) flatbread"—the Chinese burger!',
        status: 'new'
      },
      {
        id: 'nr-22',
        hanzi: '韭菜盒子',
        pinyin: 'jiǔ cài hé zi',
        meaning: 'Pan-fried crispy pockets stuffed with garlic chives, egg & vermicelli',
        notes: '韭菜 (garlic chives) + 盒子 (little box/turnover). Classic northern street breakfast/snack.',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-bubble-tea',
    name: '🧋 奶茶与饮品点单 (Bubble Tea & Drinks)',
    category: 'menu',
    description: 'Tea bases, milk styles, boba toppings, fruit teas, and ice/sweetness customization levels at Heytea, Chagee, Nayuki, and Mixue.',
    icon: '🧋',
    cards: [
      {
        id: 'bt-1',
        hanzi: '珍珠奶茶',
        pinyin: 'zhēn zhū nǎi chá',
        meaning: 'Classic pearl (tapioca boba) milk tea',
        notes: '珍珠 (pearls) + 奶茶 (milk tea). Sometimes called 波霸奶茶 (bō bà = large boba).',
        status: 'new'
      },
      {
        id: 'bt-2',
        hanzi: '芋泥波波',
        pinyin: 'yù ní bō bō',
        meaning: 'Mashed taro paste with boba milk tea',
        notes: '芋 (taro) + 泥 (mashed paste) + 波波 (boba balls). Rich, creamy purple taro lining the cup.',
        status: 'new'
      },
      {
        id: 'bt-3',
        hanzi: '杨枝甘露',
        pinyin: 'yáng zhī gān lù',
        meaning: 'Mango pomelo sago with coconut milk',
        notes: 'Classic Hong Kong dessert turned #1 fruit drink in China (mango puree, grapefruit/pomelo pulp, sago pearls, coconut).',
        status: 'new'
      },
      {
        id: 'bt-4',
        hanzi: '芝士奶盖',
        pinyin: 'zhī shì nǎi gài',
        meaning: 'Salted cream-cheese foam cap',
        notes: '芝士 (cheese) + 奶盖 (milk lid/foam). Whipped savory-sweet cream layered over fresh fruit or oolong tea.',
        status: 'new'
      },
      {
        id: 'bt-5',
        hanzi: '鸭屎香柠檬茶',
        pinyin: 'yā shǐ xiāng níng méng chá',
        meaning: 'Dancong floral oolong hand-smashed lemon tea',
        notes: 'Literally "Duck Shit Aroma"—a prized Phoenix Mountain oolong tea with honeysuckle floral notes, zero actual duck!',
        status: 'new'
      },
      {
        id: 'bt-6',
        hanzi: '茉莉绿茶',
        pinyin: 'mò lì lǜ chá',
        meaning: 'Jasmine green tea (often used as light milk-tea base like 伯牙绝弦)',
        notes: '茉莉 (jasmine flower) + 绿茶 (green tea).',
        status: 'new'
      },
      {
        id: 'bt-7',
        hanzi: '四季春',
        pinyin: 'sì jì chūn',
        meaning: 'Four Seasons Spring oolong tea (light, floral, refreshing)',
        notes: '四季 (four seasons) + 春 (spring). One of the most popular pure tea bases.',
        status: 'new'
      },
      {
        id: 'bt-8',
        hanzi: '铁观音',
        pinyin: 'tiě guān yīn',
        meaning: 'Tieguanyin ("Iron Goddess") roasted oolong tea',
        notes: 'Medium-roasted, nutty and orchid-like oolong base.',
        status: 'new'
      },
      {
        id: 'bt-9',
        hanzi: '大红袍',
        pinyin: 'dà hóng páo',
        meaning: '"Big Red Robe" Wuyi rock oolong tea (deep, roasted, mineral)',
        notes: 'Strong, smoky, dark-roasted tea base that pairs great with rich milk.',
        status: 'new'
      },
      {
        id: 'bt-10',
        hanzi: '烧仙草',
        pinyin: 'shāo xiān cǎo',
        meaning: 'Herbal grass jelly (or milk tea loaded with grass jelly, peanuts, red bean & taro balls)',
        notes: '仙草 (xiān cǎo) = grass jelly topping.',
        status: 'new'
      },
      {
        id: 'bt-11',
        hanzi: '脆波波',
        pinyin: 'cuì bō bō',
        meaning: 'Crispy crystal boba / agar boba (also called 寒天晶球)',
        notes: '脆 (crunchy/snappy) + 波波 (boba). Translucent, low-calorie konjac/agar pearls used in fruit teas.',
        status: 'new'
      },
      {
        id: 'bt-12',
        hanzi: '椰果',
        pinyin: 'yē guǒ',
        meaning: 'Coconut jelly cubes (nata de coco)',
        notes: '椰 (coconut) + 果 (fruit/jelly). Chewy rectangular coconut gel pieces.',
        status: 'new'
      },
      {
        id: 'bt-13',
        hanzi: '芋圆',
        pinyin: 'yù yuán',
        meaning: 'Chewy taro balls',
        notes: '芋 (taro) + 圆 (round dumplings/balls). Often mini-sized as 小芋圆.',
        status: 'new'
      },
      {
        id: 'bt-14',
        hanzi: '红豆',
        pinyin: 'hóng dòu',
        meaning: 'Sweetened azuki red beans',
        notes: '红 (red) + 豆 (bean). Compare 绿豆 (lǜ dòu = mung bean).',
        status: 'new'
      },
      {
        id: 'bt-15',
        hanzi: '燕麦奶',
        pinyin: 'yàn mài nǎi',
        meaning: 'Oat milk (dairy-free milk alternative)',
        notes: '燕麦 (oats) + 奶 (milk). Also 椰奶 / 生椰 (yē nǎi / shēng yē = fresh coconut milk).',
        status: 'new'
      },
      {
        id: 'bt-16',
        hanzi: '厚乳拿铁',
        pinyin: 'hòu rǔ ná tiě',
        meaning: 'Rich condensed/cold-filtered milk caffe latte',
        notes: '厚乳 (thick rich milk) + 拿铁 (latte). Also 生椰拿铁 (shēng yē ná tiě = coconut latte, Luckin Coffee\'s #1 hit).',
        status: 'new'
      },
      {
        id: 'bt-17',
        hanzi: '冰美式',
        pinyin: 'bīng měi shì',
        meaning: 'Iced Americano coffee',
        notes: '冰 (iced) + 美式 (American-style).',
        status: 'new'
      },
      {
        id: 'bt-18',
        hanzi: '正常冰',
        pinyin: 'zhèng cháng bīng',
        meaning: 'Regular ice',
        notes: '正常 (normal/standard) + 冰 (ice). Also called 标准冰 (biāo zhǔn bīng).',
        status: 'new'
      },
      {
        id: 'bt-19',
        hanzi: '少冰',
        pinyin: 'shǎo bīng',
        meaning: 'Less ice',
        notes: '少 (less) + 冰 (ice).',
        status: 'new'
      },
      {
        id: 'bt-20',
        hanzi: '去冰',
        pinyin: 'qù bīng',
        meaning: 'No ice (chilled without ice cubes)',
        notes: '去 (remove) + 冰 (ice). Compare 常温 (cháng wēn = room temperature) and 热饮 (rè yǐn = hot drink).',
        status: 'new'
      },
      {
        id: 'bt-21',
        hanzi: '五分糖',
        pinyin: 'wǔ fēn táng',
        meaning: '50% sweetness (half sugar)',
        notes: 'Scale: 全糖 (100%), 七分糖 (70%), 五分糖/半糖 (50%), 三分糖/微糖 (30%).',
        status: 'new'
      },
      {
        id: 'bt-22',
        hanzi: '不另外加糖',
        pinyin: 'bù lìng wài jiā táng',
        meaning: 'No added sugar (0% extra syrup)',
        notes: '不 (not) + 另外 (additionally) + 加 (add) + 糖 (sugar). Used on mini-program ordering screens.',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-classic-dishes',
    name: '🥘 中国餐厅必点名菜 (Classic Dishes)',
    category: 'menu',
    description: '20 iconic restaurant dishes found across China so you can immediately read the signature section of any menu.',
    icon: '🥘',
    cards: [
      {
        id: 'cd-1',
        hanzi: '宫保鸡丁',
        pinyin: 'gōng bǎo jī dīng',
        meaning: 'Kung Pao Chicken (diced chicken, roasted peanuts, dried chilies, sweet-sour-savory glaze)',
        notes: '鸡丁 = diced chicken cubes.',
        status: 'new'
      },
      {
        id: 'cd-2',
        hanzi: '鱼香肉丝',
        pinyin: 'yú xiāng ròu sī',
        meaning: 'Shredded pork in sweet-sour-garlic-chili sauce (with wood-ear mushrooms & bamboo shoots)',
        notes: '魚香 (garlic-pickled chili-vinegar flavor, no fish) + 肉丝 (shredded pork).',
        status: 'new'
      },
      {
        id: 'cd-3',
        hanzi: '麻婆豆腐',
        pinyin: 'má pó dòu fu',
        meaning: 'Mapo Tofu (silken tofu braised in spicy chili bean paste, minced meat & Sichuan pepper)',
        notes: '豆腐 (dòu fu) = tofu.',
        status: 'new'
      },
      {
        id: 'cd-4',
        hanzi: '回锅肉',
        pinyin: 'huí guō ròu',
        meaning: 'Twice-cooked pork belly (simmered then wok-seared with chili bean paste & garlic苗)',
        notes: '回锅 = "return to the wok". Sichuan\'s #1 homestyle pork dish.',
        status: 'new'
      },
      {
        id: 'cd-5',
        hanzi: '水煮牛肉',
        pinyin: 'shuǐ zhǔ niú ròu',
        meaning: 'Tender beef slices poached in fiery chili and Sichuan peppercorn broth over veggies',
        notes: 'Also 水煮鱼 (shuǐ zhǔ yú = poached fish fillets in chili oil).',
        status: 'new'
      },
      {
        id: 'cd-6',
        hanzi: '酸菜鱼',
        pinyin: 'suān cài yú',
        meaning: 'Sliced fish fillets in tangy pickled mustard greens broth',
        notes: '酸菜 (pickled mustard greens) + 鱼 (fish). Huge specialty chain dish across China (e.g. 太二酸菜鱼).',
        status: 'new'
      },
      {
        id: 'cd-7',
        hanzi: '重庆辣子鸡',
        pinyin: 'chóng qìng là zi jī',
        meaning: 'Crispy diced chicken wok-tossed in a mountain of dried red chilies & peppercorns',
        notes: 'Fun menu dish where you hunt for crispy chicken pieces hidden among fragrant chilies.',
        status: 'new'
      },
      {
        id: 'cd-8',
        hanzi: '小炒黄牛肉',
        pinyin: 'xiǎo chǎo huáng niú ròu',
        meaning: 'Hunan flash stir-fried beef with fresh red/green chilies, garlic & cilantro',
        notes: 'Signature dish of Hunan (湘菜) restaurants—intense wok aroma and fresh chili heat.',
        status: 'new'
      },
      {
        id: 'cd-9',
        hanzi: '地三鲜',
        pinyin: 'dì sān xiān',
        meaning: 'Braised eggplant, potato, and green bell pepper in savory garlic soy glaze',
        notes: 'Literally "Three Earth Treasures" (茄子 eggplant + 土豆 potato + 青椒 green pepper). Northeastern classic.',
        status: 'new'
      },
      {
        id: 'cd-10',
        hanzi: '干煸四季豆',
        pinyin: 'gān biān sì jì dòu',
        meaning: 'Dry-fried blistered green beans with minced pork, preserved veggies & chilies',
        notes: '四季豆 (sì jì dòu) = string beans ("four-season beans").',
        status: 'new'
      },
      {
        id: 'cd-11',
        hanzi: '番茄炒蛋',
        pinyin: 'fān qié chǎo dàn',
        meaning: 'Stir-fried tomato and fluffy scrambled eggs (also written 西红柿炒鸡蛋)',
        notes: '番茄 (fān qié) and 西红柿 (xī hóng shì) both mean tomato!',
        status: 'new'
      },
      {
        id: 'cd-12',
        hanzi: '梅菜扣肉',
        pinyin: 'méi cài kòu ròu',
        meaning: 'Melt-in-mouth steamed pork belly over aromatic preserved mustard greens',
        notes: '梅菜 (sweet preserved greens) + 扣肉 (steamed inverted pork belly).',
        status: 'new'
      },
      {
        id: 'cd-13',
        hanzi: '糖醋里脊',
        pinyin: 'táng cù lǐ jǐ',
        meaning: 'Crispy battered pork tenderloin strips in sweet and sour glaze',
        notes: '糖醋 (sweet & sour) + 里脊 (tenderloin).',
        status: 'new'
      },
      {
        id: 'cd-14',
        hanzi: '白切鸡',
        pinyin: 'bái qiē jī',
        meaning: 'Cantonese poached free-range chicken served with ginger-scallion oil dip',
        notes: '白切 (plain poached & chopped) + 鸡 (chicken).',
        status: 'new'
      },
      {
        id: 'cd-15',
        hanzi: '北京烤鸭',
        pinyin: 'běi jīng kǎo yā',
        meaning: 'Peking Roast Duck (crispy skin wrapped in thin pancakes with scallion & sweet bean sauce)',
        notes: '烤鸭 (kǎo yā) = roast duck.',
        status: 'new'
      },
      {
        id: 'cd-16',
        hanzi: '东坡肉',
        pinyin: 'dōng pō ròu',
        meaning: 'Hangzhou slow-braised glazed pork belly square',
        notes: 'Named after Song dynasty poet & gastronome Su Dongpo (苏东坡).',
        status: 'new'
      },
      {
        id: 'cd-17',
        hanzi: '蒜蓉粉丝蒸扇贝',
        pinyin: 'suàn róng fěn sī zhēng shàn bèi',
        meaning: 'Steamed scallops on the half-shell with glass vermicelli and golden minced garlic',
        notes: 'Decode the 7 characters: 蒜蓉 (garlic) + 粉丝 (vermicelli) + 蒸 (steamed) + 扇贝 (scallops)!',
        status: 'new'
      },
      {
        id: 'cd-18',
        hanzi: '手撕包菜',
        pinyin: 'shǒu sī bāo cài',
        meaning: 'Wok-charred hand-torn cabbage with pork belly slices, garlic & dried chilies',
        notes: '手撕 (hand-torn) + 包菜 (cabbage, also called 卷心菜).',
        status: 'new'
      },
      {
        id: 'cd-19',
        hanzi: '酸辣土豆丝',
        pinyin: 'suān là tǔ dòu sī',
        meaning: 'Crisp stir-fried julienned potato strips with vinegar and dried chilies',
        notes: '土豆 (potato) + 丝 (shredded strips).',
        status: 'new'
      },
      {
        id: 'cd-20',
        hanzi: '皮蛋瘦肉粥',
        pinyin: 'pí dàn shòu ròu zhōu',
        meaning: 'Savory rice congee with century egg and tender lean pork strips',
        notes: '皮蛋 (century egg) + 瘦肉 (lean pork) + 粥 (rice porridge/congee).',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-level9-lesson1',
    name: '📖 Level 9 Lesson 1 (Lesson Notes)',
    category: 'lesson',
    description: 'Precision vocabulary from today\'s lesson: social interaction, visiting relatives, idioms, nuanced verbs, and daily communication.',
    icon: '📖',
    cards: [
      {
        id: 'l9-1',
        hanzi: '幼儿园',
        pinyin: 'yòu ér yuán',
        meaning: 'Kindergarten / preschool',
        notes: '幼 (young/infant) + 儿 (child) + 园 (garden/park).',
        status: 'new'
      },
      {
        id: 'l9-2',
        hanzi: '探亲访友',
        pinyin: 'tàn qīn fǎng yǒu',
        meaning: 'Visit relatives and friends',
        notes: '探亲 (visit family) + 访友 (visit friends). Example: "上次，我和爸爸去沈阳探亲访友。"',
        status: 'new'
      },
      {
        id: 'l9-3',
        hanzi: '拜访',
        pinyin: 'bài fǎng',
        meaning: 'Visit / call on someone formally',
        notes: '拜访朋友 (pay a formal or respectful visit to friends). More formal than 看朋友.',
        status: 'new'
      },
      {
        id: 'l9-4',
        hanzi: '探望',
        pinyin: 'tàn wàng',
        meaning: 'Visit / look in on someone (especially someone sick or elderly)',
        notes: '探望/探视生病的人 (visit patients or relatives in need of care).',
        status: 'new'
      },
      {
        id: 'l9-5',
        hanzi: '词不达意',
        pinyin: 'cí bù dá yì',
        meaning: 'Words fail to convey the intended meaning; poorly expressed',
        notes: 'Idiom: 词 (words) + 不 (not) + 达 (convey/reach) + 意 (meaning/intent). Essential idiom for language learners!',
        status: 'new'
      },
      {
        id: 'l9-6',
        hanzi: '利用',
        pinyin: 'lì yòng',
        meaning: 'Utilize / make good use of / take advantage of',
        notes: '好好地利用 sth (make good use of something/resources).',
        status: 'new'
      },
      {
        id: 'l9-7',
        hanzi: '使用',
        pinyin: 'shǐ yòng',
        meaning: 'To use / operate / employ (tools, tech, apps)',
        notes: '你使用哪一个AI？怎么使用？(Which AI do you use? How do you use it?)',
        status: 'new'
      },
      {
        id: 'l9-8',
        hanzi: '实用',
        pinyin: 'shí yòng',
        meaning: 'Useful / practical / functional',
        notes: '你觉得Claude实用吗？这个很好用/实用。Compare: 好用 (easy to use) vs 实用 (practical value).',
        status: 'new'
      },
      {
        id: 'l9-9',
        hanzi: '普通话',
        pinyin: 'pǔ tōng huà',
        meaning: 'Standard Mandarin Chinese',
        notes: '普 (universal) + 通 (common/fluent) + 话 (speech). Compare: 普通话水平等级 (Mandarin proficiency level).',
        status: 'new'
      },
      {
        id: 'l9-10',
        hanzi: '方言',
        pinyin: 'fāng yán',
        meaning: 'Regional dialect',
        notes: '方 (regional/place) + 言 (speech/language). Distinct dialects across provinces like Fujian & Zhejiang.',
        status: 'new'
      },
      {
        id: 'l9-11',
        hanzi: '行人',
        pinyin: 'xíng rén',
        meaning: 'Pedestrian / person on foot 🚶',
        notes: '行 (to walk/go) + 人 (person). 行人过马路 (pedestrians crossing the street).',
        status: 'new'
      },
      {
        id: 'l9-12',
        hanzi: '步行',
        pinyin: 'bù xíng',
        meaning: 'Walk on foot (as a form of travel/transit)',
        notes: '步 (step) + 行 (walk). 步行十分钟 (10 minutes on foot).',
        status: 'new'
      },
      {
        id: 'l9-13',
        hanzi: '计划',
        pinyin: 'jì huà',
        meaning: 'Plan (n.) / to plan (v.)',
        notes: '你有什么计划？我计划去中国玩。(What are your plans? I plan to travel to China.)',
        status: 'new'
      },
      {
        id: 'l9-14',
        hanzi: '影响',
        pinyin: 'yǐng xiǎng',
        meaning: 'Influence / affect / impact',
        notes: '影 (shadow) + 响 (echo/sound). 产生深远的影响 (have a profound impact).',
        status: 'new'
      },
      {
        id: 'l9-15',
        hanzi: '流行',
        pinyin: 'liú xíng',
        meaning: 'Popular / trending / in fashion',
        notes: '现在流行什么？很流行 (What is trending right now? Very popular).',
        status: 'new'
      },
      {
        id: 'l9-16',
        hanzi: '泾渭分明',
        pinyin: 'jīng wèi fēn míng',
        meaning: 'Clear-cut difference / sharply demarcated',
        notes: 'Classic idiom: The Jing and Wei rivers meet but remain visibly clear and muddy respectively. Means boundaries/differences are crystal clear.',
        status: 'new'
      },
      {
        id: 'l9-17',
        hanzi: '语文',
        pinyin: 'yǔ wén',
        meaning: 'Chinese language arts and literature',
        notes: '语 (spoken language) + 文 (written literature). Core subject in Chinese schools.',
        status: 'new'
      },
      {
        id: 'l9-18',
        hanzi: '词汇',
        pinyin: 'cí huì',
        meaning: 'Vocabulary / lexicon',
        notes: '词 (words) + 汇 (collection). 积累高级词汇 (accumulate advanced vocabulary).',
        status: 'new'
      },
      {
        id: 'l9-19',
        hanzi: '科学',
        pinyin: 'kē xué',
        meaning: 'Science / scientific',
        notes: '科 (branch of study) + 学 (learning).',
        status: 'new'
      },
      {
        id: 'l9-20',
        hanzi: '数学',
        pinyin: 'shù xué',
        meaning: 'Mathematics / maths',
        notes: '数 (numbers/counting) + 学 (learning).',
        status: 'new'
      },
      {
        id: 'l9-21',
        hanzi: '双学位',
        pinyin: 'shuāng xué wèi',
        meaning: 'Double degree / dual degree',
        notes: '双 (double) + 学位 (academic degree).',
        status: 'new'
      },
      {
        id: 'l9-22',
        hanzi: '通知',
        pinyin: 'tōng zhī',
        meaning: 'Notice / announcement (n.) / to notify (v.)',
        notes: '通 (throughout) + 知 (know). 接到通知 (receive a notice); 通知大家 (inform everyone).',
        status: 'new'
      },
      {
        id: 'l9-23',
        hanzi: '马马虎虎',
        pinyin: 'mǎ mǎ hū hū',
        meaning: 'So-so / mediocre / casual',
        notes: 'Idiom: 我的中文水平一般般/马马虎虎。(My Chinese is just so-so.)',
        status: 'new'
      },
      {
        id: 'l9-24',
        hanzi: '模糊',
        pinyin: 'mó hu',
        meaning: 'Vague / blurred / indistinct',
        notes: '模模糊糊 (vaguely / hazily). Compare: 精确 (precise) vs 模糊 (vague).',
        status: 'new'
      },
      {
        id: 'l9-25',
        hanzi: '精确',
        pinyin: 'jīng què',
        meaning: 'Precise / exact / accurate',
        notes: '用词很精确 (word choice is very precise and accurate).',
        status: 'new'
      },
      {
        id: 'l9-26',
        hanzi: '准确',
        pinyin: 'zhǔn què',
        meaning: 'Correct / accurate / on target',
        notes: '准 (standard/accurate) + 确 (true/solid).',
        status: 'new'
      },
      {
        id: 'l9-27',
        hanzi: '恰当',
        pinyin: 'qià dàng',
        meaning: 'Appropriate / fitting / proper',
        notes: '恰 (just/fitting) + 当 (suitable). 恰当的表达 (appropriate expression).',
        status: 'new'
      },
      {
        id: 'l9-28',
        hanzi: '同事',
        pinyin: 'tóng shì',
        meaning: 'Colleague / coworker',
        notes: '同 (same) + 事 (work). Contrast with: 同学 (classmate).',
        status: 'new'
      },
      {
        id: 'l9-29',
        hanzi: '同学',
        pinyin: 'tóng xué',
        meaning: 'Classmate / schoolmate',
        notes: '同 (same) + 学 (study). Frequently used as a friendly address in China.',
        status: 'new'
      },
      {
        id: 'l9-30',
        hanzi: '寒暄',
        pinyin: 'hán xuān',
        meaning: 'Exchange pleasantries / social small talk',
        notes: 'Literally "cold and warm" (asking about weather/health). Polite, formal small talk upon meeting.',
        status: 'new'
      },
      {
        id: 'l9-31',
        hanzi: '闲聊',
        pinyin: 'xián liáo',
        meaning: 'Casual chitchat / shooting the breeze',
        notes: '闲 (leisure/free) + 聊 (chat). Informal casual conversation.',
        status: 'new'
      },
      {
        id: 'l9-32',
        hanzi: '热火朝天',
        pinyin: 'rè huǒ cháo tiān',
        meaning: 'In full swing / bustling with excitement',
        notes: 'Idiom from lesson: "boss一离开 office，我和同事聊得热火朝天" (As soon as the boss left the office, my colleagues and I chatted up a storm!).',
        status: 'new'
      },
      {
        id: 'l9-33',
        hanzi: '开玩笑',
        pinyin: 'kāi wán xiào',
        meaning: 'Joke / tease / kid around',
        notes: '别开玩笑了 (Stop joking around / You must be kidding!).',
        status: 'new'
      },
      {
        id: 'l9-34',
        hanzi: '联想',
        pinyin: 'lián xiǎng',
        meaning: 'Associate / mental connection',
        notes: '联 (connect) + 想 (think). Mental association between ideas or memories.',
        status: 'new'
      },
      {
        id: 'l9-35',
        hanzi: '推断',
        pinyin: 'tuī duàn',
        meaning: 'Infer / deduce / extrapolation',
        notes: '推 (push/reason) + 断 (judge). Deduce from clues and context.',
        status: 'new'
      },
      {
        id: 'l9-36',
        hanzi: '大概',
        pinyin: 'dà gài',
        meaning: 'Approximately / probably / roughly (adverb)',
        notes: '大概需要两天 (It will probably take roughly two days).',
        status: 'new'
      },
      {
        id: 'l9-37',
        hanzi: '大纲',
        pinyin: 'dà gāng',
        meaning: 'Outline / framework / syllabus',
        notes: '大 (major) + 纲 (key link/framework). 复习大纲 (revision outline), 旅行大纲.',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-level9-week2',
    name: '📅 Level 9 Week 2 (Travel, Seasons & Intro Radicals)',
    category: 'lesson',
    description: 'Travel planning, seasons & holidays, everyday verbs/idioms, basic character roots, and first radicals with examples (口, 门, 扌, 王).',
    icon: '📅',
    cards: [
      // Travel, Places & Planning
      {
        id: 'w2-1',
        hanzi: '城市',
        pinyin: 'chéng shì',
        meaning: 'City / urban area',
        notes: '城 (city wall) + 市 (market). Prompt: 城市 — 做什么 / 吃什么?',
        status: 'new'
      },
      {
        id: 'w2-2',
        hanzi: '目的地',
        pinyin: 'mù dì dì',
        meaning: 'Destination',
        notes: '目的 (goal/purpose) + 地 (place). Example: 墨尔本 → 上海/北京.',
        status: 'new'
      },
      {
        id: 'w2-3',
        hanzi: '唯一',
        pinyin: 'wéi yī',
        meaning: 'Only / sole / unique',
        notes: 'Used as 唯一 + noun (e.g. 唯一的选择 = the only choice). Notice 口 radical in 唯.',
        status: 'new'
      },
      {
        id: 'w2-4',
        hanzi: '选择',
        pinyin: 'xuǎn zé',
        meaning: 'Option / choice / to choose',
        notes: '选 uses 辶 (walk/movement radical) + 择 uses 扌 (hand radical).',
        status: 'new'
      },
      {
        id: 'w2-5',
        hanzi: '古建筑',
        pinyin: 'gǔ jiàn zhù',
        meaning: 'Ancient architecture / historic buildings',
        notes: '古 (ancient) + 建 (build) + 筑 (construct, ⺮ bamboo radical).',
        status: 'new'
      },
      {
        id: 'w2-6',
        hanzi: '悠久',
        pinyin: 'yōu jiǔ',
        meaning: 'Long-standing / age-old (history, tradition)',
        notes: 'Lesson sentence: 北京有很悠久、古老的历史。(Beijing has a very long, ancient history.)',
        status: 'new'
      },
      {
        id: 'w2-7',
        hanzi: '古老',
        pinyin: 'gǔ lǎo',
        meaning: 'Ancient / age-old / traditional',
        notes: '古 (ancient) + 老 (old). Often paired with 悠久 or 建筑.',
        status: 'new'
      },
      {
        id: 'w2-8',
        hanzi: '纪念品',
        pinyin: 'jì niàn pǐn',
        meaning: 'Souvenir / keepsake',
        notes: '纪念 (commemorate/remember) + 品 (item). 买纪念品 (buy souvenirs).',
        status: 'new'
      },
      {
        id: 'w2-9',
        hanzi: '购物',
        pinyin: 'gòu wù',
        meaning: 'Shopping / to shop',
        notes: '购 (buy, 贝 shell/money radical!) + 物 (thing). E.g. 双十一购物节.',
        status: 'new'
      },
      {
        id: 'w2-10',
        hanzi: '名山大川',
        pinyin: 'míng shān dà chuān',
        meaning: 'Famous mountains and great rivers',
        notes: 'Idiom for scenic landscapes across China (e.g. 长江, 黄河). 川 = river/stream.',
        status: 'new'
      },
      {
        id: 'w2-11',
        hanzi: '长江',
        pinyin: 'Cháng Jiāng',
        meaning: 'Yangtze River',
        notes: '长 (long) + 江 (large river, 氵 water radical).',
        status: 'new'
      },
      {
        id: 'w2-12',
        hanzi: '黄河',
        pinyin: 'Huáng Hé',
        meaning: 'Yellow River',
        notes: '黄 (yellow) + 河 (river, 氵 water radical).',
        status: 'new'
      },
      {
        id: 'w2-13',
        hanzi: '外滩',
        pinyin: 'Wài tān',
        meaning: 'The Bund (waterfront in Shanghai)',
        notes: '外 (outer) + 滩 (beach/shoal, 氵 water radical). Compare 上海 landmarks: 淮海路, 新天地.',
        status: 'new'
      },
      {
        id: 'w2-14',
        hanzi: '亲戚',
        pinyin: 'qīn qi',
        meaning: 'Relatives / family relations',
        notes: 'Note neutral tone on 戚 (qi).',
        status: 'new'
      },
      // Seasons, Holidays & Activities
      {
        id: 'w2-15',
        hanzi: '假期',
        pinyin: 'jià qī',
        meaning: 'Vacation / holiday period',
        notes: '假 (亻 + 叚, holiday/leave) + 期 (period). Related: 假日 (holiday), 雪假 (snow holiday).',
        status: 'new'
      },
      {
        id: 'w2-16',
        hanzi: '一致',
        pinyin: 'yī zhì',
        meaning: 'Consistent / identical / unanimous',
        notes: '一样 → 一致 (more formal/written way to say the same/consistent).',
        status: 'new'
      },
      {
        id: 'w2-17',
        hanzi: '年初',
        pinyin: 'nián chū',
        meaning: 'Beginning of the year',
        notes: 'Contrast: 年初 (start of year) — 年中 (mid-year) — 年底 (end of year).',
        status: 'new'
      },
      {
        id: 'w2-18',
        hanzi: '潮湿',
        pinyin: 'cháo shī',
        meaning: 'Humid / damp',
        notes: 'Both characters have 氵 (water radical)! 湿 = wet.',
        status: 'new'
      },
      {
        id: 'w2-19',
        hanzi: '淡季',
        pinyin: 'dàn jì',
        meaning: 'Off-season / low travel season',
        notes: '淡 (氵 water radical: mild/quiet) + 季 (season). E.g. 四月份/九月份 不冷不热；淡季.',
        status: 'new'
      },
      {
        id: 'w2-20',
        hanzi: '旺季',
        pinyin: 'wàng jì',
        meaning: 'Peak season / busy season',
        notes: '旺 (日 sun + 王: prosperous/booming) + 季 (season). Contrast with 淡季.',
        status: 'new'
      },
      {
        id: 'w2-21',
        hanzi: '季节',
        pinyin: 'jì jié',
        meaning: 'Season (of the year)',
        notes: '春季 (spring) / 夏季 (summer) / 秋季 (autumn) / 冬季 (winter). Also 春天/夏天/秋天/冬天.',
        status: 'new'
      },
      {
        id: 'w2-22',
        hanzi: '春节',
        pinyin: 'Chūn jié',
        meaning: 'Spring Festival / Chinese New Year',
        notes: '春 (spring) + 节 (festival).',
        status: 'new'
      },
      {
        id: 'w2-23',
        hanzi: '中秋节',
        pinyin: 'Zhōng qiū jié',
        meaning: 'Mid-Autumn Festival',
        notes: '秋 (autumn) = 禾 (grain) + 火 (fire).',
        status: 'new'
      },
      {
        id: 'w2-24',
        hanzi: '节日',
        pinyin: 'jié rì',
        meaning: 'Festival / holiday',
        notes: 'E.g. 母亲节 (Mother\'s Day), 父亲节 (Father\'s Day), 双十一购物节.',
        status: 'new'
      },
      {
        id: 'w2-25',
        hanzi: '妇女节',
        pinyin: 'Fù nǚ jié',
        meaning: 'International Women\'s Day',
        notes: '妇 (女 woman radical) + 女 (woman) + 节 (festival).',
        status: 'new'
      },
      {
        id: 'w2-26',
        hanzi: '滑雪',
        pinyin: 'huá xuě',
        meaning: 'Skiing / to ski',
        notes: '滑 (氵 water radical: slide/slippery) + 雪 (snow). E.g. 新疆 / 吉林滑雪 (雪季).',
        status: 'new'
      },
      {
        id: 'w2-27',
        hanzi: '攀岩',
        pinyin: 'pān yán',
        meaning: 'Rock climbing',
        notes: '攀 (climb with hands/clasp) + 岩 (rock/cliff, 山 mountain radical). E.g. 维州攀岩季.',
        status: 'new'
      },
      {
        id: 'w2-28',
        hanzi: '爬山',
        pinyin: 'pá shān',
        meaning: 'Mountain climbing / hiking',
        notes: '爬 (claw/climb) + 山 (mountain).',
        status: 'new'
      },
      {
        id: 'w2-29',
        hanzi: '爱好',
        pinyin: 'ài hào',
        meaning: 'Hobby / interest',
        notes: 'Note 4th tone hào here! 好 has 女 (woman) + 子 (child).',
        status: 'new'
      },
      // Spoken Verbs, Phrases & Idioms
      {
        id: 'w2-30',
        hanzi: '融化',
        pinyin: 'róng huà',
        meaning: 'To melt / thaw (ice, snow)',
        notes: 'Compare with 融入 (blend in / integrate into a group).',
        status: 'new'
      },
      {
        id: 'w2-31',
        hanzi: '融入',
        pinyin: 'róng rù',
        meaning: 'Blend in / integrate into',
        notes: '融 (blend/melt) + 入 (enter). E.g. 融入了 (blended right in).',
        status: 'new'
      },
      {
        id: 'w2-32',
        hanzi: '主动',
        pinyin: 'zhǔ dòng',
        meaning: 'Proactive / on one\'s own initiative',
        notes: 'Example: 主动学习中文 (proactively study Chinese).',
        status: 'new'
      },
      {
        id: 'w2-33',
        hanzi: '改进',
        pinyin: 'gǎi jìn',
        meaning: 'Improve / make better',
        notes: '改 (change/correct) + 进 (advance, 辶 walk radical).',
        status: 'new'
      },
      {
        id: 'w2-34',
        hanzi: '进攻',
        pinyin: 'jìn gōng',
        meaning: 'Attack / advance / open fire',
        notes: '进 (advance) + 攻 (attack). Lesson note: 进攻 / 开火.',
        status: 'new'
      },
      {
        id: 'w2-35',
        hanzi: '一知半解',
        pinyin: 'yì zhī bàn jiě',
        meaning: 'Half-baked knowledge / superficial understanding',
        notes: 'Idiom: know one part (一知), half-understand (半解).',
        status: 'new'
      },
      {
        id: 'w2-36',
        hanzi: '你们俩',
        pinyin: 'nǐ men liǎ',
        meaning: 'You two',
        notes: '俩 = 两个 (亻 person radical + 两 two). Also 我们俩 (the two of us).',
        status: 'new'
      },
      {
        id: 'w2-37',
        hanzi: '出去玩',
        pinyin: 'chū qù wán',
        meaning: 'Go out and hang out / have fun',
        notes: '玩 uses 王字旁 (jade radical). Compare: 去哪里玩?',
        status: 'new'
      },
      {
        id: 'w2-38',
        hanzi: '打车',
        pinyin: 'dǎ chē',
        meaning: 'Take a taxi / hail a ride',
        notes: '打 (扌 hand radical). Also 打的 (take a cab) / 打滴滴 (take a Didi).',
        status: 'new'
      },
      {
        id: 'w2-39',
        hanzi: '明白',
        pinyin: 'míng bai',
        meaning: 'Understand / clear',
        notes: '明 (日 sun + 月 moon = bright) + 白 (white/clear). Lesson line: 我现在懂了/明白了.',
        status: 'new'
      },
      // Ultra-Basic Characters & Components in Week 2
      {
        id: 'w2-40',
        hanzi: '季',
        pinyin: 'jì',
        meaning: 'Season',
        notes: 'Component formula: 禾 (grain) + 子 (child) = 季.',
        status: 'new'
      },
      {
        id: 'w2-41',
        hanzi: '禾',
        pinyin: 'hé',
        meaning: 'Standing grain / cereal crop',
        notes: 'Building block in 季 (禾 + 子) and 秋 (禾 + 火).',
        status: 'new'
      },
      {
        id: 'w2-42',
        hanzi: '子',
        pinyin: 'zǐ',
        meaning: 'Child / son / seed',
        notes: 'Examples: 孩子 (child), 儿子 (son), 老大/老二 (oldest/second child). Also bottom of 季.',
        status: 'new'
      },
      {
        id: 'w2-43',
        hanzi: '进',
        pinyin: 'jìn',
        meaning: 'Enter / come in / advance',
        notes: 'Uses 辶 (走之底 walk radical). Examples: 进来, 请进, 改进, 进攻.',
        status: 'new'
      },
      {
        id: 'w2-44',
        hanzi: '石',
        pinyin: 'shí',
        meaning: 'Stone / rock',
        notes: 'Basic character root (cliff 厂 + stone 口 shape).',
        status: 'new'
      },
      {
        id: 'w2-45',
        hanzi: '山',
        pinyin: 'shān',
        meaning: 'Mountain / hill',
        notes: 'Pictograph of three mountain peaks. Used in 爬山, 攀岩, 山东.',
        status: 'new'
      },
      {
        id: 'w2-46',
        hanzi: '白',
        pinyin: 'bái',
        meaning: 'White / clear / plain',
        notes: 'Basic character used in 明白 (understand) and 白菜 (napa cabbage).',
        status: 'new'
      },
      {
        id: 'w2-47',
        hanzi: '万',
        pinyin: 'wàn',
        meaning: 'Ten thousand (10,000)',
        notes: 'Basic number character (looks like 方 without top dot).',
        status: 'new'
      },
      {
        id: 'w2-48',
        hanzi: '左',
        pinyin: 'zuǒ',
        meaning: 'Left (side)',
        notes: 'Top hand + 工 (work) below. Pair with 右 (right, has 口).',
        status: 'new'
      },
      {
        id: 'w2-49',
        hanzi: '右',
        pinyin: 'yòu',
        meaning: 'Right (side)',
        notes: 'Top hand + 口 (mouth) below. Pair with 左 (left, has 工).',
        status: 'new'
      },
      {
        id: 'w2-50',
        hanzi: '工',
        pinyin: 'gōng',
        meaning: 'Work / labor / craft',
        notes: 'Basic character inside 左 (left) and 工作 (work).',
        status: 'new'
      },
      {
        id: 'w2-51',
        hanzi: '有',
        pinyin: 'yǒu',
        meaning: 'Have / possess / there is',
        notes: 'Basic character (hand + 月). Opposite: 没有.',
        status: 'new'
      },
      // Radicals with Examples in Week 2
      {
        id: 'w2-52',
        hanzi: '口',
        pinyin: 'kǒu',
        meaning: 'Mouth / Mouth radical (口字旁)',
        notes: 'Radical clue: characters with 口 relate to mouth, eating, drinking, or speaking (吃, 喝, 问).',
        status: 'new'
      },
      {
        id: 'w2-53',
        hanzi: '吃',
        pinyin: 'chī',
        meaning: 'Eat',
        notes: '口字旁 (mouth radical) + 乞.',
        status: 'new'
      },
      {
        id: 'w2-54',
        hanzi: '喝',
        pinyin: 'hē',
        meaning: 'Drink',
        notes: '口字旁 (mouth radical) + 曷.',
        status: 'new'
      },
      {
        id: 'w2-55',
        hanzi: '门',
        pinyin: 'mén',
        meaning: 'Door / Gate radical (门字框)',
        notes: 'Frame radical enclosing actions/states at a door: 闯 (rush), 问 (ask), 闪 (flash).',
        status: 'new'
      },
      {
        id: 'w2-56',
        hanzi: '闯',
        pinyin: 'chuǎng',
        meaning: 'Rush / dash / charge in',
        notes: '门 (door) + 马 (horse) = horse charging through a gate!',
        status: 'new'
      },
      {
        id: 'w2-57',
        hanzi: '问',
        pinyin: 'wèn',
        meaning: 'Ask / inquire',
        notes: '门 (door) + 口 (mouth) = speaking at the door to ask.',
        status: 'new'
      },
      {
        id: 'w2-58',
        hanzi: '闪',
        pinyin: 'shǎn',
        meaning: 'Flash / dodge / duck aside',
        notes: '门 (door) + 人 (person) = person darting through a doorway.',
        status: 'new'
      },
      {
        id: 'w2-59',
        hanzi: '打',
        pinyin: 'dǎ',
        meaning: 'Hit / play / hail (a ride) / make (a call)',
        notes: '提手旁 (扌 hand radical — see Week 5 for the full 扌 family!) + 丁. Used in 打车, 打麻将, 打电话.',
        status: 'new'
      },
      {
        id: 'w2-60',
        hanzi: '接',
        pinyin: 'jiē',
        meaning: 'Receive / catch / pick up / accept',
        notes: '提手旁 (扌 hand radical) + 妾. Used in 接受 (accept) and 接人 (pick someone up).',
        status: 'new'
      },
      {
        id: 'w2-62',
        hanzi: '王',
        pinyin: 'wáng',
        meaning: 'King / Jade radical (王字旁)',
        notes: 'As a left-side radical (王字旁), it actually comes from 玉 (jade) — e.g. 玩, 珍珠, 球, 班.',
        status: 'new'
      },
      {
        id: 'w2-63',
        hanzi: '玩',
        pinyin: 'wán',
        meaning: 'Play / hang out / have fun',
        notes: '王字旁 (jade) + 元. Examples: 玩麻将, 玩手机, 玩TikTok, 出去玩.',
        status: 'new'
      },
      {
        id: 'w2-64',
        hanzi: '它',
        pinyin: 'tā',
        meaning: 'It (things, animals)',
        notes: '宝盖头 (宀 roof radical) + 匕. Plural: 它们 (they/them for objects/animals).',
        status: 'new'
      },
      {
        id: 'w2-65',
        hanzi: '他',
        pinyin: 'tā',
        meaning: 'He / him',
        notes: '单人旁 (亻 person radical) + 也. Plural: 他们 (they/them).',
        status: 'new'
      },
      {
        id: 'w2-66',
        hanzi: '她',
        pinyin: 'tā',
        meaning: 'She / her',
        notes: '女字旁 (woman radical) + 也. Compare 他 (亻) vs 她 (女) vs 它 (宀).',
        status: 'new'
      },
      {
        id: 'w2-67',
        hanzi: '好',
        pinyin: 'hǎo',
        meaning: 'Good / well',
        notes: '女 (woman) + 子 (child) = good!',
        status: 'new'
      },
      {
        id: 'w2-68',
        hanzi: '妇',
        pinyin: 'fù',
        meaning: 'Woman / married woman',
        notes: '女字旁 (woman radical) + 彐. Seen in 妇女节 (Women\'s Day).',
        status: 'new'
      },
      {
        id: 'w2-69',
        hanzi: '妈',
        pinyin: 'mā',
        meaning: 'Mom / mother',
        notes: '女字旁 (meaning: female) + 马 (sound: mā).',
        status: 'new'
      },
      {
        id: 'w2-70',
        hanzi: '姨',
        pinyin: 'yí',
        meaning: 'Aunt (maternal aunt)',
        notes: '女字旁 (meaning: female) + 夷 (sound: yí).',
        status: 'new'
      },
      {
        id: 'w2-71',
        hanzi: '姑娘',
        pinyin: 'gū niang',
        meaning: 'Young woman / girl',
        notes: 'Both characters use 女字旁 (女)! Compare 女孩子.',
        status: 'new'
      },
      {
        id: 'w2-72',
        hanzi: '底',
        pinyin: 'dǐ',
        meaning: 'Bottom / base / end',
        notes: 'Note: 走之底 is the name of radical 辶 (meaning "bottom-walking"), whereas 底 itself uses 广 (shelter) + 氐.',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-level9-week3',
    name: '🌿 Level 9 Week 3 (Work, Life, Radicals & Pictographs)',
    category: 'lesson',
    description: 'Work & WFH, socializing & mahjong, Australian life & diet, radical families (艹, 木, 氵, ⺮, 玉, 金), and oracle-bone pictographs.',
    icon: '🌿',
    cards: [
      // Work, WFH & Socializing
      {
        id: 'w3-1',
        hanzi: '加班',
        pinyin: 'jiā bān',
        meaning: 'Work overtime',
        notes: '加班费 (overtime pay). Example: 加班很少 / 偶尔会.',
        status: 'new'
      },
      {
        id: 'w3-2',
        hanzi: '弹性上下班',
        pinyin: 'tán xìng shàng xià bān',
        meaning: 'Flexible working hours',
        notes: 'Synonym: 灵活地上下班. 弹性 = elastic/flexible.',
        status: 'new'
      },
      {
        id: 'w3-3',
        hanzi: '在家办公',
        pinyin: 'zài jiā bàn gōng',
        meaning: 'Work from home (WFH)',
        notes: 'Contrast: 在家办公 (remote office work) vs 在家工作. Also 八小时工作制 (8-hour workday).',
        status: 'new'
      },
      {
        id: 'w3-4',
        hanzi: '上网课',
        pinyin: 'shàng wǎng kè',
        meaning: 'Take online classes',
        notes: '上 (attend) + 网 (internet) + 课 (class). Compare 线上办公 (working online).',
        status: 'new'
      },
      {
        id: 'w3-5',
        hanzi: '上班',
        pinyin: 'shàng bān',
        meaning: 'Go to work / start a shift',
        notes: 'Opposite: 下班 (get off work). 班 uses two 王 (jade) + 刂.',
        status: 'new'
      },
      {
        id: 'w3-6',
        hanzi: '社交',
        pinyin: 'shè jiāo',
        meaning: 'Socializing / social interaction',
        notes: 'Short for 社会交往. Lesson line: 我感觉缺少社交，我需要更多的社交.',
        status: 'new'
      },
      {
        id: 'w3-7',
        hanzi: '社媒',
        pinyin: 'shè méi',
        meaning: 'Social media',
        notes: 'Short for 社交媒体. 媒 has 女字旁 (matchmaker/medium).',
        status: 'new'
      },
      {
        id: 'w3-8',
        hanzi: '交通',
        pinyin: 'jiāo tōng',
        meaning: 'Transport / traffic',
        notes: '交 (intersect/connect) + 通 (pass through, 辶 walk radical).',
        status: 'new'
      },
      {
        id: 'w3-9',
        hanzi: '意外',
        pinyin: 'yì wài',
        meaning: 'Unexpected / surprise / accident',
        notes: '意 (thought/expectation) + 外 (outside) = outside expectation.',
        status: 'new'
      },
      {
        id: 'w3-10',
        hanzi: '参与感',
        pinyin: 'cān yǔ gǎn',
        meaning: 'Sense of participation / involvement',
        notes: '参与 (participate) + 感 (feeling, 心 heart radical).',
        status: 'new'
      },
      {
        id: 'w3-11',
        hanzi: '真实',
        pinyin: 'zhēn shí',
        meaning: 'Real / authentic / true',
        notes: 'Example: 在真实生活中 (in real life). Contrast 在工作中 / 在生活中.',
        status: 'new'
      },
      {
        id: 'w3-12',
        hanzi: '社群',
        pinyin: 'shè qún',
        meaning: 'Community / social group',
        notes: 'Example: 亚洲年轻人社群 (young Asian community). Compare 在群里 (in the group chat).',
        status: 'new'
      },
      {
        id: 'w3-13',
        hanzi: '移民',
        pinyin: 'yí mín',
        meaning: 'Immigrant / immigrate',
        notes: '移 (禾 grain + 多) + 民 (people). Lesson phrase: 在新一代移民人群里.',
        status: 'new'
      },
      {
        id: 'w3-14',
        hanzi: '麻将',
        pinyin: 'má jiàng',
        meaning: 'Mahjong',
        notes: '打麻将挺/蛮流行的 (playing mahjong is quite popular). 麻将馆 (mahjong parlor).',
        status: 'new'
      },
      {
        id: 'w3-15',
        hanzi: '手感',
        pinyin: 'shǒu gǎn',
        meaning: 'Feel / touch in the hand (form/rhythm)',
        notes: 'Lesson line: "我今天打麻将手感不好/很好". Compare 感觉 (feeling).',
        status: 'new'
      },
      {
        id: 'w3-16',
        hanzi: '印象深刻',
        pinyin: 'yìn xiàng shēn kè',
        meaning: 'Deeply impressed / leave a lasting impression',
        notes: '让我特别有感觉 (made a strong impression on me). 深 uses 氵 water radical.',
        status: 'new'
      },
      {
        id: 'w3-17',
        hanzi: '老少皆宜',
        pinyin: 'lǎo shào jiē yí',
        meaning: 'Suitable for both young and old',
        notes: 'Note 4th tone shào (young). 皆 = all; 宜 = suitable (宀 roof radical).',
        status: 'new'
      },
      {
        id: 'w3-18',
        hanzi: '计算',
        pinyin: 'jì suàn',
        meaning: 'Calculate / count',
        notes: '算 uses ⺮ (bamboo radical, from counting rods!). E.g. 算你的牌/别人的牌. Contrast: 算计.',
        status: 'new'
      },
      {
        id: 'w3-19',
        hanzi: '算计',
        pinyin: 'suàn ji',
        meaning: 'Scheme / plot / calculate selfishly',
        notes: 'Same two characters as 计算 reversed, with neutral tone ji and a negative nuance!',
        status: 'new'
      },
      // Daily Life, Nature, Diet & Language Meta
      {
        id: 'w3-20',
        hanzi: '引火',
        pinyin: 'yǐn huǒ',
        meaning: 'Kindle / start a fire',
        notes: '引 (lead/draw) + 火 (fire). Compare 点火 (light a fire).',
        status: 'new'
      },
      {
        id: 'w3-21',
        hanzi: '柴火',
        pinyin: 'chái huo',
        meaning: 'Firewood / kindling',
        notes: '柴 has 木 (wood radical) at bottom! Synonym: 木柴.',
        status: 'new'
      },
      {
        id: 'w3-22',
        hanzi: '允许',
        pinyin: 'yǔn xǔ',
        meaning: 'Allow / permit',
        notes: 'Lesson sentence: "你得到 council 的允许了吗？"',
        status: 'new'
      },
      {
        id: 'w3-23',
        hanzi: '小区',
        pinyin: 'xiǎo qū',
        meaning: 'Residential compound / neighborhood',
        notes: 'Urban gated residential area; contrast with 村 (village).',
        status: 'new'
      },
      {
        id: 'w3-24',
        hanzi: '村',
        pinyin: 'cūn',
        meaning: 'Village / countryside',
        notes: '木 (wood/tree radical) + 寸. Examples: 我住在村里; 大农村 (joking term for quiet suburbs/Australia).',
        status: 'new'
      },
      {
        id: 'w3-25',
        hanzi: '类似',
        pinyin: 'lèi sì',
        meaning: 'Similar to / analogous',
        notes: '似 uses 亻 (person radical).',
        status: 'new'
      },
      {
        id: 'w3-26',
        hanzi: '上火',
        pinyin: 'shàng huǒ',
        meaning: 'Internal "heat" / inflammation (TCM concept)',
        notes: 'Cantonese/southern equivalent: 热气.',
        status: 'new'
      },
      {
        id: 'w3-27',
        hanzi: '忌口',
        pinyin: 'jì kǒu',
        meaning: 'Dietary restrictions / foods to avoid',
        notes: '忌 (己 + 心 heart: avoid/taboo, as in 禁忌) + 口 (mouth). "你有什么忌口？" "我都吃，我没什么忌口."',
        status: 'new'
      },
      {
        id: 'w3-28',
        hanzi: '花粉过敏',
        pinyin: 'huā fěn guò mǐn',
        meaning: 'Hay fever / pollen allergy',
        notes: '花 (艹 grass) + 粉 (powder) + 过 (辶) + 敏 (sensitive).',
        status: 'new'
      },
      {
        id: 'w3-29',
        hanzi: '碰到',
        pinyin: 'pèng dào',
        meaning: 'Run into / bump into / encounter',
        notes: '碰 (石 stone radical) + 到. Lesson line: "我没碰到过/遇见过."',
        status: 'new'
      },
      {
        id: 'w3-30',
        hanzi: '规律',
        pinyin: 'guī lǜ',
        meaning: 'Rules / pattern / regularity',
        notes: 'Useful for character radical patterns (汉字规律)!',
        status: 'new'
      },
      {
        id: 'w3-31',
        hanzi: '属于',
        pinyin: 'shǔ yú',
        meaning: 'Belong to / be part of',
        notes: '属 + 于. Used to classify which radical group a character belongs to.',
        status: 'new'
      },
      {
        id: 'w3-32',
        hanzi: '繁体字',
        pinyin: 'fán tǐ zì',
        meaning: 'Traditional Chinese characters',
        notes: '繁 (complex) + 体 (body/form, 亻 person radical) + 字 (character, 宀 roof).',
        status: 'new'
      },
      {
        id: 'w3-33',
        hanzi: '简体字',
        pinyin: 'jiǎn tǐ zì',
        meaning: 'Simplified Chinese characters',
        notes: '简 = 竹字头 (⺮ bamboo) + 间 (space/door).',
        status: 'new'
      },
      {
        id: 'w3-34',
        hanzi: '房间',
        pinyin: 'fáng jiān',
        meaning: 'Room',
        notes: '房 (户 door + 方) + 间 (门 door + 日 sun). Compare 间 inside 简!',
        status: 'new'
      },
      // Radicals & Associated Words with Examples in Week 3
      {
        id: 'w3-35',
        hanzi: '艹',
        speak: '草字头',
        pinyin: 'cǎo zì tóu',
        meaning: 'Grass / Plant radical (草字头)',
        notes: 'Top radical for flowers, grass, tea, vegetables, and berries/fruits (花, 草, 茶, 菜, 莓).',
        status: 'new'
      },
      {
        id: 'w3-36',
        hanzi: '花',
        pinyin: 'huā',
        meaning: 'Flower / blossom',
        notes: '艹 (grass radical) + 化.',
        status: 'new'
      },
      {
        id: 'w3-37',
        hanzi: '草',
        pinyin: 'cǎo',
        meaning: 'Grass / straw / herb',
        notes: '艹 (grass radical) + 早.',
        status: 'new'
      },
      {
        id: 'w3-38',
        hanzi: '草莓',
        pinyin: 'cǎo méi',
        meaning: 'Strawberry',
        notes: 'Both have 艹! 莓 = 艹 + 每 (every).',
        status: 'new'
      },
      {
        id: 'w3-39',
        hanzi: '黑莓',
        pinyin: 'hēi méi',
        meaning: 'Blackberry',
        notes: '黑 (black) + 莓 (berry, 艹 + 每).',
        status: 'new'
      },
      {
        id: 'w3-40',
        hanzi: '蓝莓',
        pinyin: 'lán méi',
        meaning: 'Blueberry',
        notes: 'Both have 艹! 蓝 (blue, originally indigo plant) + 莓 (berry).',
        status: 'new'
      },
      {
        id: 'w3-41',
        hanzi: '每',
        pinyin: 'měi',
        meaning: 'Every / each',
        notes: 'Phonetic/root inside 莓 (艹 + 每 = berry) and 海 (氵 + 每 = sea).',
        status: 'new'
      },
      {
        id: 'w3-42',
        hanzi: '茶',
        pinyin: 'chá',
        meaning: 'Tea',
        notes: '艹 (grass) + 人 + 木 (tree). Examples: 红茶 (black tea), 绿茶 (green tea).',
        status: 'new'
      },
      {
        id: 'w3-43',
        hanzi: '茉莉',
        pinyin: 'mò lì',
        meaning: 'Jasmine',
        notes: 'Both have 艹! 莉 = 艹 + 利 (lì, sharp).',
        status: 'new'
      },
      {
        id: 'w3-44',
        hanzi: '蔬菜',
        pinyin: 'shū cài',
        meaning: 'Vegetables',
        notes: 'Both have 艹 (grass/plant radical)!',
        status: 'new'
      },
      {
        id: 'w3-45',
        hanzi: '白菜',
        pinyin: 'bái cài',
        meaning: 'Napa cabbage / Chinese white cabbage',
        notes: '白 (white) + 菜 (vegetable, 艹 radical).',
        status: 'new'
      },
      {
        id: 'w3-46',
        hanzi: '菠菜',
        pinyin: 'bō cài',
        meaning: 'Spinach',
        notes: '菠 = 艹 (grass) + 波 (bō wave)!',
        status: 'new'
      },
      {
        id: 'w3-47',
        hanzi: '空心菜',
        pinyin: 'kōng xīn cài',
        meaning: 'Water spinach (morning glory)',
        notes: 'Literally "hollow-heart vegetable".',
        status: 'new'
      },
      {
        id: 'w3-48',
        hanzi: '卷心菜',
        pinyin: 'juǎn xīn cài',
        meaning: 'Cabbage (round green cabbage)',
        notes: 'Also called 包菜 (as in 手撕包菜). Literally "rolled-heart vegetable".',
        status: 'new'
      },
      {
        id: 'w3-49',
        hanzi: '韭菜',
        pinyin: 'jiǔ cài',
        meaning: 'Garlic chives',
        notes: '韭 is a pictograph of chives growing from the ground!',
        status: 'new'
      },
      {
        id: 'w3-50',
        hanzi: '葱',
        pinyin: 'cōng',
        meaning: 'Scallion / green onion / leek',
        notes: '艹 (grass radical) + 匆.',
        status: 'new'
      },
      {
        id: 'w3-51',
        hanzi: '洋葱',
        pinyin: 'yáng cōng',
        meaning: 'Onion (bulb onion)',
        notes: '洋 (氵 water + 羊: foreign/overseas) + 葱 (scallion, 艹).',
        status: 'new'
      },
      {
        id: 'w3-52',
        hanzi: '蒜',
        pinyin: 'suàn',
        meaning: 'Garlic',
        notes: '艹 (grass radical) + 示示.',
        status: 'new'
      },
      {
        id: 'w3-53',
        hanzi: '姜',
        pinyin: 'jiāng',
        meaning: 'Ginger',
        notes: '羊 + 女 (contains 女 at bottom).',
        status: 'new'
      },
      {
        id: 'w3-54',
        hanzi: '苦瓜',
        pinyin: 'kǔ guā',
        meaning: 'Bitter melon / bitter gourd',
        notes: '苦 (艹 grass + 古 ancient = bitter) + 瓜 (melon).',
        status: 'new'
      },
      {
        id: 'w3-55',
        hanzi: '葡萄',
        pinyin: 'pú tao',
        meaning: 'Grapes 🍇',
        notes: 'Both characters have 艹 (grass/plant radical)!',
        status: 'new'
      },
      {
        id: 'w3-56',
        hanzi: '苹果',
        pinyin: 'píng guǒ',
        meaning: 'Apple',
        notes: '苹 = 艹 (grass) + 平 (píng, flat)! Compare 半 (half).',
        status: 'new'
      },
      {
        id: 'w3-57',
        hanzi: '奇异果',
        pinyin: 'qí yì guǒ',
        meaning: 'Kiwi fruit 🥝',
        notes: 'Also called 猕猴桃 (mí hóu táo). Note 桃子 (peach 🍑) has 木 tree radical.',
        status: 'new'
      },
      {
        id: 'w3-58',
        hanzi: '桃子',
        pinyin: 'táo zi',
        meaning: 'Peach 🍑',
        notes: '桃 = 木 (tree radical) + 兆.',
        status: 'new'
      },
      {
        id: 'w3-59',
        hanzi: '木',
        pinyin: 'mù',
        meaning: 'Wood / Tree radical (木字旁)',
        notes: 'Pictograph of a tree. Appears on trees and wooden objects: 桉树, 枇杷, 桃, 柴, 村.',
        status: 'new'
      },
      {
        id: 'w3-60',
        hanzi: '桉树',
        pinyin: 'ān shù',
        meaning: 'Eucalyptus tree',
        notes: 'Both characters have 木 (wood/tree radical)! 桉 = 木 + 安.',
        status: 'new'
      },
      {
        id: 'w3-61',
        hanzi: '枇杷',
        pinyin: 'pí pa',
        meaning: 'Loquat (fruit/tree)',
        notes: 'Both have 木 (tree radical) + phonetic halves 比 (bǐ) and 巴 (bā): 枇杷树.',
        status: 'new'
      },
      {
        id: 'w3-62',
        hanzi: '氵',
        speak: '三点水',
        pinyin: 'sān diǎn shuǐ',
        meaning: 'Three-drops water radical (三点水)',
        notes: 'Derived from 水 (water). Appears on liquid, river, and wet words: 波, 潮湿, 长江, 河.',
        status: 'new'
      },
      {
        id: 'w3-63',
        hanzi: '波',
        pinyin: 'bō',
        meaning: 'Wave / ripple',
        notes: 'Radical formula: 三点水 (氵 water) + 皮 (pí) = 波! Used in 菠菜.',
        status: 'new'
      },
      {
        id: 'w3-64',
        hanzi: '⺮',
        speak: '竹字头',
        pinyin: 'zhú zì tóu',
        meaning: 'Bamboo radical (竹字头)',
        notes: 'Derived from 竹 (bamboo). Appears in 简 (简体字), 算 (计算), 筷子, 篮.',
        status: 'new'
      },
      {
        id: 'w3-65',
        hanzi: '玉',
        pinyin: 'yù',
        meaning: 'Jade',
        notes: '王 + dot = 玉! Explains why 王字旁 (玩, 珍珠, 球, 班) relates to jade & fine objects.',
        status: 'new'
      },
      {
        id: 'w3-66',
        hanzi: '珍珠',
        pinyin: 'zhēn zhū',
        meaning: 'Pearl',
        notes: 'Both have 王字旁 (jade radical)!',
        status: 'new'
      },
      {
        id: 'w3-67',
        hanzi: '球',
        pinyin: 'qiú',
        meaning: 'Ball / sphere / globe',
        notes: '王字旁 (jade) + 求 (qiú).',
        status: 'new'
      },
      {
        id: 'w3-68',
        hanzi: '班',
        pinyin: 'bān',
        meaning: 'Class / shift / team',
        notes: 'Two 王 (jade) characters separated by a 刂 knife! Seen in 上班/下班, 加班.',
        status: 'new'
      },
      {
        id: 'w3-69',
        hanzi: '金',
        pinyin: 'jīn',
        meaning: 'Gold / metal (root of 金字旁 钅)',
        notes: 'As a left radical 金 becomes 钅 (金字旁) for metals, tools, and money (钱, 铁, 银).',
        status: 'new'
      },
      {
        id: 'w3-70',
        hanzi: '半',
        pinyin: 'bàn',
        meaning: 'Half',
        notes: 'Basic character (compare 平 flat in 苹果, and 一知半解).',
        status: 'new'
      },
      {
        id: 'w3-71',
        hanzi: '土豆',
        pinyin: 'tǔ dòu',
        meaning: 'Potato',
        notes: '土 (earth/soil) + 豆 (bean). Literally "earth bean".',
        status: 'new'
      },
      {
        id: 'w3-72',
        hanzi: '雨',
        pinyin: 'yǔ',
        meaning: 'Rain',
        notes: 'Pictograph of raindrops falling under sky/cloud! Root of 雪 (snow).',
        status: 'new'
      },
      // 32-Pictograph Chart Roots (non-duplicate basic characters from Lesson3_image1.png)
      {
        id: 'w3-73',
        hanzi: '人',
        pinyin: 'rén',
        meaning: 'Person / human',
        notes: 'Pictograph: person walking in side profile. Becomes 亻 (单人旁) on the left of characters.',
        status: 'new'
      },
      {
        id: 'w3-74',
        hanzi: '男',
        pinyin: 'nán',
        meaning: 'Man / male',
        notes: '田 (field) + 力 (strength) = working with strength in the fields.',
        status: 'new'
      },
      {
        id: 'w3-75',
        hanzi: '夫',
        pinyin: 'fū',
        meaning: 'Husband / man',
        notes: '大 (big person) + top horizontal stroke (hairpin of an adult man).',
        status: 'new'
      },
      {
        id: 'w3-76',
        hanzi: '妻',
        pinyin: 'qī',
        meaning: 'Wife',
        notes: 'Contains 女 (woman) at the bottom.',
        status: 'new'
      },
      {
        id: 'w3-77',
        hanzi: '目',
        pinyin: 'mù',
        meaning: 'Eye (root of 目字旁)',
        notes: 'Pictograph of an eye turned upright. Appears in 睡 (sleep), 眼 (eye), 看 (hand over eye).',
        status: 'new'
      },
      {
        id: 'w3-78',
        hanzi: '耳',
        pinyin: 'ěr',
        meaning: 'Ear (root of 耳字旁)',
        notes: 'Pictograph of an ear. Appears in 闻 (hear/smell), 职 (job), 聊 (chat).',
        status: 'new'
      },
      {
        id: 'w3-79',
        hanzi: '心',
        pinyin: 'xīn',
        meaning: 'Heart / mind (becomes 忄 on left)',
        notes: 'Pictograph of a heart. Appears at bottom (感, 想, 忌) or on left as 忄 (快, 慢, 懂).',
        status: 'new'
      },
      {
        id: 'w3-80',
        hanzi: '日',
        pinyin: 'rì',
        meaning: 'Sun / day (root of 日字旁)',
        notes: 'Pictograph of the sun. Appears in 明 (sun + moon), 时 (time), 早 (morning), 旺.',
        status: 'new'
      },
      {
        id: 'w3-81',
        hanzi: '月',
        pinyin: 'yuè',
        meaning: 'Moon / month (also 肉月旁 flesh)',
        notes: 'Pictograph of a crescent moon. Note: on left of body/meat words (肚, 肥, 腿, 脑) 月 represents 肉 (meat/flesh)!',
        status: 'new'
      },
      {
        id: 'w3-82',
        hanzi: '田',
        pinyin: 'tián',
        meaning: 'Field / farmland',
        notes: 'Pictograph of divided farm plots. Appears in 男 (man), 留 (stay), 界 (boundary).',
        status: 'new'
      },
      {
        id: 'w3-83',
        hanzi: '土',
        pinyin: 'tǔ',
        meaning: 'Earth / soil / ground (root of 提土旁)',
        notes: 'Pictograph of a mound of soil on the ground. Appears in 地, 城, 块, 场.',
        status: 'new'
      },
      {
        id: 'w3-84',
        hanzi: '水',
        pinyin: 'shuǐ',
        meaning: 'Water (becomes 氵 on left)',
        notes: 'Pictograph of flowing water. Shrinks to 氵 (三点水) on the left of characters.',
        status: 'new'
      },
      {
        id: 'w3-85',
        hanzi: '火',
        pinyin: 'huǒ',
        meaning: 'Fire (also 灬 at bottom)',
        notes: 'Pictograph of rising flames. Appears on left (炒, 烤, 烧) or at bottom as 灬 (热, 煮, 煎).',
        status: 'new'
      },
      {
        id: 'w3-86',
        hanzi: '贝',
        pinyin: 'bèi',
        meaning: 'Cowrie shell / money radical (贝字旁)',
        notes: 'Shells were ancient currency! Appears in wealth/buying words: 购 (shop), 费 (fee), 贵 (expensive), 货 (goods).',
        status: 'new'
      },
      {
        id: 'w3-87',
        hanzi: '大',
        pinyin: 'dà',
        meaning: 'Big / large',
        notes: 'Pictograph of a person stretching arms out wide.',
        status: 'new'
      },
      {
        id: 'w3-88',
        hanzi: '小',
        pinyin: 'xiǎo',
        meaning: 'Small / little',
        notes: 'Pictograph of three tiny dots/grains.',
        status: 'new'
      },
      {
        id: 'w3-89',
        hanzi: '上',
        pinyin: 'shàng',
        meaning: 'Up / above / go to / attend',
        notes: 'Indicator character showing something above a baseline. Seen in 上班, 上火, 上网课.',
        status: 'new'
      },
      {
        id: 'w3-90',
        hanzi: '下',
        pinyin: 'xià',
        meaning: 'Down / below / finish',
        notes: 'Indicator character showing something below a baseline. Seen in 下班, 上下班.',
        status: 'new'
      },
      {
        id: 'w3-91',
        hanzi: '力',
        pinyin: 'lì',
        meaning: 'Strength / power / force',
        notes: 'Pictograph of a plow/arm muscle. Appears in 男, 动 (move), 加 (add), 办 (handle).',
        status: 'new'
      },
      {
        id: 'w3-92',
        hanzi: '中',
        pinyin: 'zhōng',
        meaning: 'Middle / center / China',
        notes: 'Pictograph of a target/flagpole in the center.',
        status: 'new'
      },
      {
        id: 'w3-93',
        hanzi: '先',
        pinyin: 'xiān',
        meaning: 'First / ahead / earlier',
        notes: 'Foot/step above 人 (person stepping ahead first). Seen in 先生.',
        status: 'new'
      },
      {
        id: 'w3-94',
        hanzi: '光',
        pinyin: 'guāng',
        meaning: 'Light / bright / bare',
        notes: 'Originally 火 (fire) above 人 (person holding light).',
        status: 'new'
      },
      {
        id: 'w3-95',
        hanzi: '肉',
        pinyin: 'ròu',
        meaning: 'Meat / flesh',
        notes: 'Pictograph of a cut of meat. Also becomes 月 (肉月旁) inside body/meat characters.',
        status: 'new'
      },
      {
        id: 'w3-96',
        hanzi: '出',
        pinyin: 'chū',
        meaning: 'Go out / exit / come out',
        notes: 'Pictograph of a foot stepping out of a dwelling/pit. Seen in 出去玩.',
        status: 'new'
      },
      {
        id: 'w3-97',
        hanzi: '刀',
        pinyin: 'dāo',
        meaning: 'Knife / blade (becomes 刂 on right)',
        notes: 'Pictograph of a knife. Becomes 刂 (立刀旁) on the right of cut/divide characters like 利, 班, 到, 刻.',
        status: 'new'
      },
      {
        id: 'w3-98',
        hanzi: '南',
        pinyin: 'nán',
        meaning: 'South',
        notes: 'Pictograph of a hanging bell/percussion instrument from southern traditions. Seen in 济南, 南瓜.',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-level9-week4',
    name: '🧱 Level 9 Week 4 (Illustrated Radicals & 宇 Family)',
    category: 'lesson',
    description: 'Visual radical etymology from Lesson 4: 宝盖头 (宀) & the 宇 word family, 单人旁 (亻), and 女字旁 (女).',
    icon: '🧱',
    cards: [
      {
        id: 'w4-1',
        hanzi: '宀',
        speak: '宝盖头',
        pinyin: 'bǎo gài tóu',
        meaning: 'Roof / House radical (宝盖头)',
        notes: 'Ancient picture of a pitched roof over walls. Signals buildings, home, shelter, or space (宇, 家, 安, 室, 它, 宜).',
        status: 'new'
      },
      {
        id: 'w4-2',
        hanzi: '宇',
        pinyin: 'yǔ',
        meaning: 'Roof eaves / space / bearing',
        notes: 'Phono-semantic: 宀 (roof/house) + 于 (sound yú + overhanging eaves). Evolved from eaves → all directions of space → personal bearing.',
        status: 'new'
      },
      {
        id: 'w4-3',
        hanzi: '宇宙',
        pinyin: 'yǔ zhòu',
        meaning: 'Universe / cosmos',
        notes: '宇 (all directions of space, 宀) + 宙 (all past & future time, 宀) = space-time / universe!',
        status: 'new'
      },
      {
        id: 'w4-4',
        hanzi: '屋宇',
        pinyin: 'wū yǔ',
        meaning: 'House / building / dwelling (literary)',
        notes: '屋 (house/room) + 宇 (eaves/building, 宀). Preserves the original architectural meaning of 宇.',
        status: 'new'
      },
      {
        id: 'w4-5',
        hanzi: '庙宇',
        pinyin: 'miào yǔ',
        meaning: 'Temple / shrine building',
        notes: '庙 (temple, 广 shelter radical) + 宇 (eaves/hall, 宀).',
        status: 'new'
      },
      {
        id: 'w4-6',
        hanzi: '气宇轩昂',
        pinyin: 'qì yǔ xuān áng',
        meaning: 'Dignified, commanding, and impressive bearing',
        notes: 'Idiom using the extended sense of 宇 ("bearing/demeanor").',
        status: 'new'
      },
      {
        id: 'w4-7',
        hanzi: '亻',
        speak: '单人旁',
        pinyin: 'dān rén páng',
        meaning: 'Single-person radical (单人旁)',
        notes: 'Evolved from oracle-bone 人 → standing 人 → compressed left radical 亻. Signals people, roles, or human actions (他, 们, 假, 似, 体).',
        status: 'new'
      },
      {
        id: 'w4-8',
        hanzi: '女',
        pinyin: 'nǚ',
        meaning: 'Woman / Woman radical (女字旁)',
        notes: 'Oracle-bone & bronze script show a kneeling woman with arms crossed. Radical for female relatives, names, and relationships (她, 妈, 姨, 好, 妇, 姑娘, 媒).',
        status: 'new'
      }
    ]
  },
  {
    id: 'deck-level9-week5',
    name: '✋ Level 9 Week 5 (手/扌 Hand Radical & Everyday Verbs)',
    category: 'lesson',
    description: 'Deep dive into 手 → 提手旁 (扌), "把"字句 action verbs, 品 product words, leave types, and relationship terms.',
    icon: '✋',
    cards: [
      {
        id: 'w5-1',
        hanzi: '手',
        pinyin: 'shǒu',
        meaning: 'Hand (root of 提手旁 扌)',
        notes: 'Evolution: ancient 5-finger hand pictograph → 手 → compressed left-side radical 扌 (提手旁).',
        status: 'new'
      },
      {
        id: 'w5-2',
        hanzi: '扌',
        speak: '提手旁',
        pinyin: 'tí shǒu páng',
        meaning: 'Hand radical (提手旁)',
        notes: 'Derived from 手 (hand). Signals hand or physical actions: 提, 打, 把, 拿, 找, 换, 推, 拉, 拍, 搞, 拾.',
        status: 'new'
      },
      {
        id: 'w5-3',
        hanzi: '提',
        pinyin: 'tí',
        meaning: 'Lift / raise / carry / mention',
        notes: '扌 (hand radical) + 是 (shì). Also the first character of 提手旁!',
        status: 'new'
      },
      {
        id: 'w5-4',
        hanzi: '打扰',
        pinyin: 'dǎ rǎo',
        meaning: 'Disturb / bother / interrupt',
        notes: 'Both characters use 扌 (hand radical)! Polite phrase: "不好意思，打扰了" (Sorry to bother you).',
        status: 'new'
      },
      {
        id: 'w5-5',
        hanzi: '打扫',
        pinyin: 'dǎ sǎo',
        meaning: 'Sweep / clean up',
        notes: 'Both characters use 扌 (hand radical)! Other 打 verbs: 打人, 打牌, 打电话, 打游戏, 打球, 打枪.',
        status: 'new'
      },
      {
        id: 'w5-6',
        hanzi: '打工',
        pinyin: 'dǎ gōng',
        meaning: 'Work a job / do paid labor',
        notes: '打工人 (working stiff / office worker slang).',
        status: 'new'
      },
      {
        id: 'w5-7',
        hanzi: '打卡',
        pinyin: 'dǎ kǎ',
        meaning: 'Clock in / check in at a popular spot',
        notes: '打卡上班 (clock in for work); "我来这个咖啡店打卡了"; "我来长城打卡".',
        status: 'new'
      },
      {
        id: 'w5-8',
        hanzi: '打印',
        pinyin: 'dǎ yìn',
        meaning: 'Print (a document/photo)',
        notes: '印 (stamp/print/seal) also appears in 印象 (impression), 印度 (India), 无印良品 (MUJI).',
        status: 'new'
      },
      {
        id: 'w5-9',
        hanzi: '打架',
        pinyin: 'dǎ jià',
        meaning: 'Fight / brawl (physically)',
        notes: '打 (扌) + 架 (frame/quarrel).',
        status: 'new'
      },
      {
        id: 'w5-10',
        hanzi: '把',
        pinyin: 'bǎ',
        meaning: 'Grasp / handle / "把" disposal marker',
        notes: '扌 (hand) + 巴 (bā). Pattern ("把"字句): Subject + 把 + Object + Verb + result (e.g. 我把门关上了).',
        status: 'new'
      },
      {
        id: 'w5-11',
        hanzi: '放',
        pinyin: 'fàng',
        meaning: 'Put / place / let go / release',
        notes: 'Example: 把手机放在桌子上. Also 开放日 (open day) and 放假 (go on holiday).',
        status: 'new'
      },
      {
        id: 'w5-12',
        hanzi: '放假',
        pinyin: 'fàng jià',
        meaning: 'Have a holiday / go on break',
        notes: 'Lesson sentence: "我要放假了。"',
        status: 'new'
      },
      {
        id: 'w5-13',
        hanzi: '收拾',
        pinyin: 'shōu shi',
        meaning: 'Tidy up / pack up / put away',
        notes: '拾 uses 扌 (hand radical) + 合! Examples: 我把房间收拾了; 你去把衣服收起来.',
        status: 'new'
      },
      {
        id: 'w5-14',
        hanzi: '喂',
        pinyin: 'wèi',
        meaning: 'Feed (a pet/child) / hello (on phone)',
        notes: '口字旁 (mouth radical) + 畏. Example: 你去把猫喂了 vs 你去喂猫.',
        status: 'new'
      },
      {
        id: 'w5-15',
        hanzi: '完成',
        pinyin: 'wán chéng',
        meaning: 'Complete / finish',
        notes: '完 uses 宀 (roof radical). Example: 你把工作都完成了？',
        status: 'new'
      },
      {
        id: 'w5-16',
        hanzi: '搞懂',
        pinyin: 'gǎo dǒng',
        meaning: 'Figure out / understand thoroughly',
        notes: '搞 uses 扌 (hand radical)! Example: "你把‘把字句’搞懂了吗？"',
        status: 'new'
      },
      {
        id: 'w5-17',
        hanzi: '记住',
        pinyin: 'jì zhu',
        meaning: 'Remember / keep in mind / memorize',
        notes: '住 uses 亻 (person radical). Example: "我把这个记住了。"',
        status: 'new'
      },
      {
        id: 'w5-18',
        hanzi: '闭嘴',
        pinyin: 'bì zuǐ',
        meaning: 'Shut up / keep one\'s mouth shut',
        notes: '闭 = 门 (door) + 才 (close/shut); 嘴 uses 口 (mouth radical). Compare: "请把嘴巴闭上".',
        status: 'new'
      },
      {
        id: 'w5-19',
        hanzi: '拿',
        pinyin: 'ná',
        meaning: 'Take / hold / pick up (with hand)',
        notes: 'Component formula: 合 (united/together) + 手 (hand) = 拿! Examples: 拿外卖, 拿快递.',
        status: 'new'
      },
      {
        id: 'w5-20',
        hanzi: '和',
        pinyin: 'hé',
        meaning: 'And / with',
        notes: '禾 (grain) + 口 (mouth). Example: 你和他.',
        status: 'new'
      },
      {
        id: 'w5-21',
        hanzi: '外卖',
        pinyin: 'wài mài',
        meaning: 'Food delivery / takeout',
        notes: '外 (outside) + 卖 (sell). Common phrase: 拿外卖 (pick up delivery food).',
        status: 'new'
      },
      {
        id: 'w5-22',
        hanzi: '快递',
        pinyin: 'kuài dì',
        meaning: 'Express delivery / courier parcel 📦',
        notes: '快 (忄 heart radical: fast) + 递 (辶 walk radical: pass/deliver). "你把快递拿了吗？"',
        status: 'new'
      },
      {
        id: 'w5-23',
        hanzi: '找',
        pinyin: 'zhǎo',
        meaning: 'Look for / seek / find',
        notes: '扌 (hand radical) + 戈. Examples: 找人, 找工作, 找女朋友; 找到 / 找不到 / 没找到.',
        status: 'new'
      },
      {
        id: 'w5-24',
        hanzi: '换',
        pinyin: 'huàn',
        meaning: 'Change / swap / replace',
        notes: '扌 (hand radical) + 奂. Examples: 换工作, 换衣服, 换手机, 换钱.',
        status: 'new'
      },
      {
        id: 'w5-25',
        hanzi: '交换',
        pinyin: 'jiāo huàn',
        meaning: 'Exchange / swap (studies, gifts)',
        notes: 'Lesson sentence: "我上大学的时候，交换去了瑞典。"',
        status: 'new'
      },
      {
        id: 'w5-26',
        hanzi: '推',
        pinyin: 'tuī',
        meaning: 'Push',
        notes: '扌 (hand radical) + 隹. Pair with 拉 (pull).',
        status: 'new'
      },
      {
        id: 'w5-27',
        hanzi: '拉',
        pinyin: 'lā',
        meaning: 'Pull / drag / stretch',
        notes: '扌 (hand radical) + 立. Pair with 推 (push).',
        status: 'new'
      },
      {
        id: 'w5-28',
        hanzi: '拍照',
        pinyin: 'pāi zhào',
        meaning: 'Take a photo / take pictures',
        notes: '拍 uses 扌 (hand radical) + 白.',
        status: 'new'
      },
      {
        id: 'w5-29',
        hanzi: '爪',
        pinyin: 'zhuǎ',
        meaning: 'Claw / paw / talon',
        notes: 'Component inside 爬 (爬山)! Examples: 猫爪 (cat paw), 鸡爪 (chicken feet).',
        status: 'new'
      },
      {
        id: 'w5-30',
        hanzi: '印度',
        pinyin: 'Yìn dù',
        meaning: 'India',
        notes: 'Uses 印 (same character as 打印 print / 印象 impression).',
        status: 'new'
      },
      {
        id: 'w5-31',
        hanzi: '无印良品',
        pinyin: 'Wú yìn liáng pǐn',
        meaning: 'MUJI (brand name)',
        notes: 'Literally "no-stamp/brand quality goods" — 无 (no) + 印 (mark/brand) + 良品 (good products).',
        status: 'new'
      },
      {
        id: 'w5-32',
        hanzi: '良品',
        pinyin: 'liáng pǐn',
        meaning: 'Quality goods / fine products',
        notes: '良 (good/fine) + 品 (item/goods) = 好东西.',
        status: 'new'
      },
      {
        id: 'w5-33',
        hanzi: '食品',
        pinyin: 'shí pǐn',
        meaning: 'Food products / foodstuffs',
        notes: '食 (food) + 品 (three 口 mouths = goods/stuff).',
        status: 'new'
      },
      {
        id: 'w5-34',
        hanzi: '饮品',
        pinyin: 'yǐn pǐn',
        meaning: 'Beverages / drinks',
        notes: '饮 (饣 food/drink radical) + 品 (goods).',
        status: 'new'
      },
      {
        id: 'w5-35',
        hanzi: '药品',
        pinyin: 'yào pǐn',
        meaning: 'Medicine / pharmaceuticals',
        notes: '药 (艹 plant/herb radical!) + 品 (goods).',
        status: 'new'
      },
      {
        id: 'w5-36',
        hanzi: '无限时',
        pinyin: 'wú xiàn shí',
        meaning: 'Unlimited time / no time limit',
        notes: 'Parking sign phrase: 无限时，随便停 / 免费停.',
        status: 'new'
      },
      {
        id: 'w5-37',
        hanzi: '免费',
        pinyin: 'miǎn fèi',
        meaning: 'Free of charge',
        notes: '免 (exempt/avoid) + 费 (fee, 贝 money radical). E.g. 免费停 (free parking).',
        status: 'new'
      },
      {
        id: 'w5-38',
        hanzi: '其实',
        pinyin: 'qí shí',
        meaning: 'Actually / in fact',
        notes: 'Its (其) + truth/reality (实). Used to clarify or contrast expectations.',
        status: 'new'
      },
      {
        id: 'w5-39',
        hanzi: '市政厅',
        pinyin: 'shì zhèng tīng',
        meaning: 'Town hall / city hall',
        notes: '市 (city) + 政 (government) + 厅 (hall, 厂 + 丁).',
        status: 'new'
      },
      {
        id: 'w5-40',
        hanzi: '除非',
        pinyin: 'chú fēi',
        meaning: 'Unless',
        notes: 'Examples: "我不上班，除非我没钱了。" / "我喜欢喝酒，除非我要开车，我不喝。"',
        status: 'new'
      },
      {
        id: 'w5-41',
        hanzi: '除了',
        pinyin: 'chú le',
        meaning: 'Except / besides / apart from',
        notes: 'Examples: "我和她都要上班，除了他不用上班。" / "除了盲盒，我都行。"',
        status: 'new'
      },
      {
        id: 'w5-42',
        hanzi: '盲盒',
        pinyin: 'máng hé',
        meaning: 'Blind box (mystery collectible box)',
        notes: '盲 (亡 + 目 eye = blind) + 盒 (box).',
        status: 'new'
      },
      {
        id: 'w5-43',
        hanzi: '请假',
        pinyin: 'qǐng jià',
        meaning: 'Ask for leave / take time off',
        notes: 'Note 4th tone jià! Types: 请事假, 请病假, 请年假, 陪产假.',
        status: 'new'
      },
      {
        id: 'w5-44',
        hanzi: '事假',
        pinyin: 'shì jià',
        meaning: 'Personal leave',
        notes: '事 (personal matter) + 假 (leave).',
        status: 'new'
      },
      {
        id: 'w5-45',
        hanzi: '病假',
        pinyin: 'bìng jià',
        meaning: 'Sick leave',
        notes: '病 (疒 sickness radical) + 假 (leave).',
        status: 'new'
      },
      {
        id: 'w5-46',
        hanzi: '年假',
        pinyin: 'nián jià',
        meaning: 'Annual leave / paid vacation',
        notes: '年 (year) + 假 (leave).',
        status: 'new'
      },
      {
        id: 'w5-47',
        hanzi: '陪产假',
        pinyin: 'péi chǎn jià',
        meaning: 'Paternity leave',
        notes: '陪 (accompany) + 产 (childbirth) + 假 (leave).',
        status: 'new'
      },
      {
        id: 'w5-48',
        hanzi: '结婚率',
        pinyin: 'jié hūn lǜ',
        meaning: 'Marriage rate',
        notes: '结 (纟 silk radical: tie/unite) + 婚 (女 woman radical: marry) + 率 (rate). Lesson note: 结婚率 / 生育率 都很低.',
        status: 'new'
      },
      {
        id: 'w5-49',
        hanzi: '生育率',
        pinyin: 'shēng yù lǜ',
        meaning: 'Birth rate / fertility rate',
        notes: '生育 (childbearing) + 率 (rate). Paired with 结婚率都很低.',
        status: 'new'
      },
      {
        id: 'w5-50',
        hanzi: '离婚率',
        pinyin: 'lí hūn lǜ',
        meaning: 'Divorce rate',
        notes: '离婚 (divorce; 婚 uses 女 woman radical) + 率 (rate).',
        status: 'new'
      },
      {
        id: 'w5-51',
        hanzi: '晚婚晚育',
        pinyin: 'wǎn hūn wǎn yù',
        meaning: 'Late marriage and late childbearing',
        notes: '晚 (late) + 婚 (marry, 女) + 育 (raise/bear children).',
        status: 'new'
      },
      {
        id: 'w5-52',
        hanzi: '相亲',
        pinyin: 'xiāng qīn',
        meaning: 'Blind date / arranged matchmaking meeting',
        notes: '相 (mutual, 目 eye) + 亲 (family/marriage). Contrast with 自由恋爱.',
        status: 'new'
      },
      {
        id: 'w5-53',
        hanzi: '自由恋爱',
        pinyin: 'zì yóu liàn ài',
        meaning: 'Free-choice love / dating freely',
        notes: 'Lesson sentence: "我们在大学的时候，朋友介绍认识的，我们是自由恋爱的。"',
        status: 'new'
      },
      {
        id: 'w5-54',
        hanzi: '生产',
        pinyin: 'shēng chǎn',
        meaning: 'Produce / manufacture / give birth',
        notes: '生 (give birth/grow) + 产 (produce). Also 生小孩 (have a baby).',
        status: 'new'
      },
      {
        id: 'w5-55',
        hanzi: '生育',
        pinyin: 'shēng yù',
        meaning: 'Childbearing / fertility / give birth & raise',
        notes: '生 (birth) + 育 (nurture/maternity).',
        status: 'new'
      },
      {
        id: 'w5-56',
        hanzi: '生日',
        pinyin: 'shēng rì',
        meaning: 'Birthday',
        notes: '生 (birth) + 日 (day).',
        status: 'new'
      }
    ]
  }
];

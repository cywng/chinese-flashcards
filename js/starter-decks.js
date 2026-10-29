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
  }
];

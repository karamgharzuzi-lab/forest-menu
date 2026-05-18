export type Dish = {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
};

export type Category = {
  id: string;
  title: string;
  dishes: Dish[];
};

export const menuData: Category[] = [
  {
    id: "starters",
    title: "ראשונות",
    dishes: [
      {
        id: "salads-per-diner",
        name: "סלטים לפי סועד",
        description: "לצד לחם פרנה",
        price: "33",
      },
      {
        id: "cigars-duo",
        name: "צמד סיגרים",
        description: "במילוי כבד עוף ולבבות קצוצים",
        price: "43",
      },
      {
        id: "burnt-eggplant",
        name: "חציל בלאדי שרוף",
        description: "על פחמים בזילוף טחינה וסילאן",
        price: "38",
      },
      {
        id: "mushwasha",
        name: "משוואשה",
        description: "חומוס ביתי לצד פרנה אחת",
        price: "36",
      },
      {
        id: "israeli-salad",
        name: "סלט ירקות ישראלי קצוץ",
        description: "עגבנייה מלפפון בצל",
        price: "26",
      },
      {
        id: "arayes-skewer",
        name: "שיפוד עראייס",
        description: "לצד טחינה, עמבה וסלט ירוק",
        price: "56",
      },
      {
        id: "crispy-eggplant-steak",
        name: "סטייק חציל קריספי",
        description: "עם צ'ימיצ'ורי",
        price: "32",
      },
      {
        id: "fries",
        name: "צלחת צ'יפס",
        price: "18/24",
      },
      {
        id: "campfire-potato",
        name: "תפו\"א מדורה",
        price: "18",
      },
      {
        id: "shlaws-rice",
        name: "האורז של שלו",
        price: "18",
      },
      {
        id: "green-beans",
        name: "שעועית ירוקה מוקפצת",
        price: "22",
      },
      {
        id: "portobello",
        name: "פטריות פורטובלו",
        price: "39",
      },
    ],
  },
  {
    id: "grilled-meats",
    title: "בשרים על האש",
    dishes: [
      {
        id: "kabab-skewer",
        name: "שיפוד קבב",
        price: "42",
      },
      {
        id: "chicken-thigh-skewer",
        name: "שיפוד פרגית",
        price: "42",
      },
      {
        id: "chicken-liver-skewer",
        name: "שיפוד כבד עוף",
        price: "38",
      },
      {
        id: "entrecote-skewer",
        name: "שיפוד אנטריקוט",
        price: "79",
      },
      {
        id: "goose-breast-skewer",
        name: "שיפוד חזה אווז",
        price: "84",
      },
      {
        id: "chicken-breast",
        name: "חזה עוף",
        price: "40",
      },
      {
        id: "hearts-skewer",
        name: "שיפוד לבבות",
        price: "38",
      },
      {
        id: "merguez",
        name: "נקניקיות מרגז",
        price: "42",
      },
      {
        id: "schnitzel",
        name: "שניצל",
        price: "40",
      },
      {
        id: "asado",
        name: "אסאדו",
        price: "72",
      },
      {
        id: "burger",
        name: "המבורגר 220 גרם",
        description: "חסה, עגבנייה ובצל לצד צ'יפס מתובל",
        price: "75",
      },
    ],
  },
  {
    id: "fish",
    title: "דגים על הפלנצ'ה",
    dishes: [
      {
        id: "sea-bream-fillet",
        name: "פילה דניס",
        price: "109",
      },
      {
        id: "sea-bass-fillet",
        name: "פילה לברק",
        price: "109",
      },
      {
        id: "salmon-fillet",
        name: "פילה סלמון",
        price: "109",
      },
    ],
  },
  {
    id: "kids",
    title: "מנת ילדים",
    dishes: [
      {
        id: "kids-hotdog",
        name: "נקניקיות וצ'יפס",
        price: "45",
      },
      {
        id: "kids-schnitzel",
        name: "שניצל וצ'יפס",
        price: "45",
      },
      {
        id: "kids-burger",
        name: "המבורגר וצ'יפס",
        price: "55",
      },
    ],
  },
  {
    id: "drinks",
    title: "שתייה",
    dishes: [
      {
        id: "soft-drink",
        name: "שתייה",
        price: "10",
      },
      {
        id: "beer",
        name: "בירה",
        price: "25",
      },
      {
        id: "lemonade-pitcher",
        name: "קנקן לימונדה",
        price: "24",
      },
      {
        id: "orange-pitcher",
        name: "קנקן תפוזים",
        price: "24",
      },
    ],
  },
];

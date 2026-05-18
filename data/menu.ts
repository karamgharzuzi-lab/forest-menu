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
        image: "/menu/salads-per-diner.jpg",
      },
      {
        id: "cigars-duo",
        name: "צמד סיגרים",
        description: "במילוי כבד עוף ולבבות קצוצים",
        price: "43",
        image: "/menu/cigars-duo.jpg",
      },
      {
        id: "burnt-eggplant",
        name: "חציל בלאדי שרוף",
        description: "על פחמים בזילוף טחינה וסילאן",
        price: "38",
        image: "/menu/burnt-eggplant.jpg",
      },
      {
        id: "mushwasha",
        name: "משוואשה",
        description: "חומוס ביתי לצד פרנה אחת",
        price: "36",
        image: "/menu/mushwasha.jpg",
      },
      {
        id: "israeli-salad",
        name: "סלט ירקות ישראלי קצוץ",
        description: "עגבנייה מלפפון בצל",
        price: "26",
        image: "/menu/israeli-salad.jpg",
      },
      {
        id: "arayes-skewer",
        name: "שיפוד עראייס",
        description: "לצד טחינה, עמבה וסלט ירוק",
        price: "56",
        image: "/menu/arayes-skewer.jpg",
      },
      {
        id: "crispy-eggplant-steak",
        name: "סטייק חציל קריספי",
        description: "עם צ'ימיצ'ורי",
        price: "32",
        image: "/menu/crispy-eggplant-steak.jpg",
      },
      {
        id: "fries",
        name: "צלחת צ'יפס",
        price: "18/24",
        image: "/menu/fries.jpg",
      },
      {
        id: "campfire-potato",
        name: "תפו\"א מדורה",
        price: "18",
        image: "/menu/campfire-potato.jpg",
      },
      {
        id: "shlaws-rice",
        name: "האורז של שלו",
        price: "18",
        image: "/menu/shlaws-rice.jpg",
      },
      {
        id: "green-beans",
        name: "שעועית ירוקה מוקפצת",
        price: "22",
        image: "/menu/green-beans.jpg",
      },
      {
        id: "portobello",
        name: "פטריות פורטובלו",
        price: "39",
        image: "/menu/portobello.jpg",
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
        image: "/menu/kabab-skewer.jpg",
      },
      {
        id: "chicken-thigh-skewer",
        name: "שיפוד פרגית",
        price: "42",
        image: "/menu/chicken-thigh-skewer.jpg",
      },
      {
        id: "chicken-liver-skewer",
        name: "שיפוד כבד עוף",
        price: "38",
        image: "/menu/chicken-liver-skewer.jpg",
      },
      {
        id: "entrecote-skewer",
        name: "שיפוד אנטריקוט",
        price: "79",
        image: "/menu/entrecote-skewer.jpg",
      },
      {
        id: "goose-breast-skewer",
        name: "שיפוד חזה אווז",
        price: "84",
        image: "/menu/goose-breast-skewer.jpg",
      },
      {
        id: "chicken-breast",
        name: "חזה עוף",
        price: "40",
        image: "/menu/chicken-breast.jpg",
      },
      {
        id: "hearts-skewer",
        name: "שיפוד לבבות",
        price: "38",
        image: "/menu/hearts-skewer.jpg",
      },
      {
        id: "merguez",
        name: "נקניקיות מרגז",
        price: "42",
        image: "/menu/merguez.jpg",
      },
      {
        id: "schnitzel",
        name: "שניצל",
        price: "40",
        image: "/menu/schnitzel.jpg",
      },
      {
        id: "asado",
        name: "אסאדו",
        price: "72",
        image: "/menu/asado.jpg",
      },
      {
        id: "burger",
        name: "המבורגר 220 גרם",
        description: "חסה, עגבנייה ובצל לצד צ'יפס מתובל",
        price: "75",
        image: "/menu/burger.jpg",
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
        image: "/menu/sea-bream-fillet.jpg",
      },
      {
        id: "sea-bass-fillet",
        name: "פילה לברק",
        price: "109",
        image: "/menu/sea-bass-fillet.jpg",
      },
      {
        id: "salmon-fillet",
        name: "פילה סלמון",
        price: "109",
        image: "/menu/salmon-fillet.jpg",
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
        image: "/menu/kids-hotdog.jpg",
      },
      {
        id: "kids-schnitzel",
        name: "שניצל וצ'יפס",
        price: "45",
        image: "/menu/kids-schnitzel.jpg",
      },
      {
        id: "kids-burger",
        name: "המבורגר וצ'יפס",
        price: "55",
        image: "/menu/kids-burger.jpg",
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
        image: "/menu/soft-drink.jpg",
      },
      {
        id: "beer",
        name: "בירה",
        price: "25",
        image: "/menu/beer.jpg",
      },
      {
        id: "lemonade-pitcher",
        name: "קנקן לימונדה",
        price: "24",
        image: "/menu/lemonade-pitcher.jpg",
      },
      {
        id: "orange-pitcher",
        name: "קנקן תפוזים",
        price: "24",
        image: "/menu/orange-pitcher.jpg",
      },
    ],
  },
];

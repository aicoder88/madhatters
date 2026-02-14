import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

interface MenuProps {
  foodCategories?: MenuCategory[];
  drinkCategories?: MenuCategory[];
}

const MenuComponent = ({
  foodCategories = defaultFoodCategories,
  drinkCategories = defaultDrinkCategories,
}: MenuProps) => {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-2">Our Menu</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Indulge in our mouthwatering food menu available until midnight, sip
          on our expertly crafted cocktails, or choose from our extensive
          selection of beers.
        </p>
      </div>

      <Tabs defaultValue="food" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="food">Food Menu</TabsTrigger>
            <TabsTrigger value="drinks">Drinks Menu</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="food" className="space-y-8">
          <div className="text-center mb-4">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Available until midnight
            </Badge>
          </div>

          {foodCategories.map((category) => (
            <Accordion
              type="multiple"
              defaultValue={[category.id]}
              key={category.id}
            >
              <AccordionItem value={category.id}>
                <AccordionTrigger className="text-xl font-semibold">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {category.items.map((item) => (
                      <FoodMenuItem key={item.id} item={item} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>

        <TabsContent value="drinks" className="space-y-8">
          {drinkCategories.map((category) => (
            <Accordion type="single" collapsible key={category.id}>
              <AccordionItem value={category.id}>
                <AccordionTrigger className="text-xl font-semibold">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    {category.items.map((item) => (
                      <DrinkMenuItem key={item.id} item={item} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

const FoodMenuItem = ({ item }: { item: MenuItem }) => {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {item.image && (
          <div className="w-full md:w-1/3">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover"
            />
          </div>
        )}
        <CardContent className={`flex-1 p-4 ${!item.image ? "w-full" : ""}`}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="font-semibold text-primary">{item.price}</span>
          </div>
          <p className="text-muted-foreground text-sm">{item.description}</p>
          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

const DrinkMenuItem = ({ item }: { item: MenuItem }) => {
  return (
    <Card className="overflow-hidden h-full">
      {item.image && (
        <div className="w-full h-48">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="font-semibold text-primary">{item.price}</span>
        </div>
        <p className="text-muted-foreground text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
};

// Default data for the menu
const defaultFoodCategories: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        id: "nachos",
        name: "Loaded Nachos",
        description:
          "Crispy tortilla chips topped with melted cheese, jalapeños, guacamole, sour cream, and pico de gallo.",
        price: "$14.99",
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80",
        tags: ["Shareable", "Vegetarian"],
      },
      {
        id: "wings",
        name: "Mad Hatter Wings",
        description:
          "Crispy chicken wings tossed in your choice of sauce: Buffalo, BBQ, Honey Garlic, or Lemon Pepper.",
        price: "$16.99",
        image:
          "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80",
      },
      {
        id: "calamari",
        name: "Crispy Calamari",
        description:
          "Lightly battered calamari served with garlic aioli and marinara sauce.",
        price: "$15.99",
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
      },
      {
        id: "poutine",
        name: "Classic Poutine",
        description: "Golden fries topped with cheese curds and rich gravy.",
        price: "$12.99",
        image:
          "https://images.unsplash.com/photo-1586805608485-add336722759?w=800&q=80",
        tags: ["Montreal Classic"],
      },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      {
        id: "burger",
        name: "Mad Hatter Burger",
        description:
          "8oz Angus beef patty with cheddar, bacon, lettuce, tomato, pickles, and our special sauce on a brioche bun. Served with fries.",
        price: "$18.99",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      },
      {
        id: "fish",
        name: "Fish & Chips",
        description:
          "Beer-battered cod with tartar sauce, coleslaw, and crispy fries.",
        price: "$19.99",
        image:
          "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=800&q=80",
      },
      {
        id: "mac",
        name: "Truffle Mac & Cheese",
        description:
          "Creamy macaroni with a blend of cheeses, topped with truffle oil and crispy breadcrumbs.",
        price: "$16.99",
        image:
          "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=800&q=80",
        tags: ["Vegetarian"],
      },
      {
        id: "steak",
        name: "Steak Frites",
        description:
          "10oz striploin steak cooked to your preference, served with garlic butter and crispy fries.",
        price: "$26.99",
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "cheesecake",
        name: "New York Cheesecake",
        description:
          "Creamy cheesecake with a graham cracker crust, topped with berry compote.",
        price: "$9.99",
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
      },
      {
        id: "brownie",
        name: "Chocolate Brownie Sundae",
        description:
          "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
        price: "$10.99",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
      },
    ],
  },
];

const defaultDrinkCategories: MenuCategory[] = [
  {
    id: "cocktails",
    name: "Signature Cocktails",
    items: [
      {
        id: "wonderland",
        name: "Wonderland Martini",
        description: "Vodka, blue curaçao, lemon juice, and a splash of magic.",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1527761939622-933c40039f5a?w=800&q=80",
      },
      {
        id: "cheshire",
        name: "Cheshire Cat",
        description:
          "Gin, elderflower liqueur, cucumber, mint, and lime juice.",
        price: "$15",
        image:
          "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
      },
      {
        id: "queen",
        name: "Queen of Hearts",
        description:
          "Bourbon, amaretto, fresh strawberry puree, and lemon juice.",
        price: "$16",
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      },
      {
        id: "rabbit",
        name: "White Rabbit",
        description: "White rum, coconut cream, pineapple juice, and vanilla.",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
      },
      {
        id: "teaparty",
        name: "Mad Tea Party",
        description:
          "Tequila, triple sec, earl grey tea syrup, and lime juice.",
        price: "$15",
        image:
          "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80",
      },
    ],
  },
  {
    id: "beers",
    name: "Beer Selection",
    items: [
      {
        id: "local1",
        name: "Dieu du Ciel Péché Mortel",
        description: "Imperial coffee stout from Montreal, 9.5% ABV.",
        price: "$8",
        image:
          "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&q=80",
      },
      {
        id: "local2",
        name: "Unibroue La Fin du Monde",
        description: "Belgian-style tripel from Quebec, 9% ABV.",
        price: "$8",
        image:
          "https://images.unsplash.com/photo-1567696911980-2c295b5df157?w=800&q=80",
      },
      {
        id: "ipa1",
        name: "Mad Hatter IPA",
        description: "Our house IPA with citrus and pine notes, 6.5% ABV.",
        price: "$7",
        image:
          "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=800&q=80",
      },
      {
        id: "lager1",
        name: "Pilsner Urquell",
        description: "Classic Czech pilsner, 4.4% ABV.",
        price: "$7",
        image:
          "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=800&q=80",
      },
      {
        id: "stout1",
        name: "Guinness Draught",
        description: "Classic Irish dry stout, 4.2% ABV.",
        price: "$7",
        image:
          "https://images.unsplash.com/photo-1659617031204-0b56e9046b69?w=800&q=80",
      },
      {
        id: "wheat1",
        name: "Hoegaarden",
        description:
          "Belgian witbier with notes of coriander and orange peel, 4.9% ABV.",
        price: "$7",
        image:
          "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
      },
    ],
  },
  {
    id: "wines",
    name: "Wine List",
    items: [
      {
        id: "red1",
        name: "Cabernet Sauvignon",
        description:
          "Full-bodied red wine with notes of black currant and cedar.",
        price: "$10/glass | $45/bottle",
      },
      {
        id: "white1",
        name: "Sauvignon Blanc",
        description: "Crisp white wine with citrus and herbal notes.",
        price: "$9/glass | $40/bottle",
      },
      {
        id: "sparkling1",
        name: "Prosecco",
        description: "Light and bubbly Italian sparkling wine.",
        price: "$10/glass | $45/bottle",
      },
    ],
  },
  {
    id: "nonalcoholic",
    name: "Non-Alcoholic Options",
    items: [
      {
        id: "mocktail1",
        name: "Curious Mocktail",
        description: "Pineapple juice, lime, mint, and soda water.",
        price: "$7",
        image:
          "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80",
      },
      {
        id: "soda1",
        name: "Craft Sodas",
        description: "Selection of premium craft sodas.",
        price: "$5",
      },
      {
        id: "coffee1",
        name: "Specialty Coffee",
        description: "Locally roasted coffee prepared to your liking.",
        price: "$4",
      },
    ],
  },
];

export default MenuComponent;

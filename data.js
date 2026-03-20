/* ═══════════════════════════════════════
   SMART CANTEEN — js/data.js
   Menu data for A-Block and C-Block
════════════════════════════════════════ */

const MENU = {

  /* ╔══════════════╗
     ║  A-BLOCK     ║
     ╚══════════════╝ */
  A: [
    /* SNACKS */
    { id:'A1', name:'Samosa (2 pcs)',     category:'snacks',   emoji:'🥟', img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=480&h=340&fit=crop&auto=format',  price:20,  veg:true,  bestseller:true,  desc:'Crispy golden samosas stuffed with spiced potato & peas' },
    { id:'A2', name:'Vada Pav',           category:'snacks',   emoji:'🍞', img:'https://vanitascorner.com/wp-content/uploads/2020/10/Vada-Pav-1024x779.jpg',  price:25,  veg:true,  bestseller:true,  desc:'Mumbai-style spicy potato vada in soft pav with chutneys' },
    { id:'A3', name:'Bread Pakora',       category:'snacks',   emoji:'🥪', img:'https://tse2.mm.bing.net/th/id/OIP.NN1DwiWrduWPDfBxzrZevAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',  price:30,  veg:true,  bestseller:false, desc:'Thick bread dipped in spiced gram flour batter & fried' },
    { id:'A4', name:'Veg Puff',           category:'snacks',   emoji:'🥐', img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=480&h=340&fit=crop&auto=format',    price:25,  veg:true,  bestseller:false, desc:'Flaky puff pastry filled with spiced mixed vegetables' },
    { id:'A5', name:'Masala Maggi',       category:'snacks',   emoji:'🍜', img:'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=480&h=340&fit=crop&auto=format',  price:40,  veg:true,  bestseller:false, desc:'Instant noodles with veggies and spicy masala' },
    /* MEALS */
    { id:'A6', name:'Veg Thali',          category:'meals',    emoji:'🍱', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=480&h=340&fit=crop&auto=format',    price:80,  veg:true,  bestseller:true,  desc:'Dal, 2 sabzis, rice, 3 rotis, salad, papad & pickle' },
    { id:'A7', name:'Chicken Thali',      category:'meals',    emoji:'🍗', img:'https://thumbs.dreamstime.com/z/chicken-thali-indian-cuisine-food-platter-consists-fry-boiled-egg-curry-lentils-jeera-rice-onions-selective-225928939.jpg',  price:110, veg:false, bestseller:true,  desc:'Chicken curry, dal, rice, 2 rotis, raita & salad' },
    { id:'A8', name:'Paneer Fried Rice',  category:'meals',    emoji:'🍛', img:'https://www.flavouroffood.com/wp-content/uploads/2021/02/Paneer-Fried-Rice-4.jpg',  price:70,  veg:true,  bestseller:false, desc:'Wok-tossed rice with paneer, vegetables & soy sauce' },
    { id:'A9', name:'Egg Rice',           category:'meals',    emoji:'🍳', img:'https://stretchrecipes.com/wp-content/uploads/2025/01/16.-Indian-Egg-Fried-Rice.jpg',  price:60,  veg:false, bestseller:false, desc:'Scrambled eggs with fried rice, spring onions & seasoning' },
    { id:'A10',name:'Dal Khichdi',        category:'meals',    emoji:'🥘', img:'https://tse4.mm.bing.net/th/id/OIP.BjeaYDDKBxitanLCM5KwFgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',    price:50,  veg:true,  bestseller:false, desc:'Comforting one-pot rice & lentil dish with ghee & spices' },
    /* BURGERS */
    { id:'A11',name:'Classic Veg Burger', category:'burger',   emoji:'🍔', img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=480&h=340&fit=crop&auto=format',   price:60,  veg:true,  bestseller:false, desc:'Aloo tikki patty, lettuce, tomato, onion & mint chutney' },
    { id:'A12',name:'Chicken Burger',     category:'burger',   emoji:'🍔', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=480&h=340&fit=crop&auto=format',  price:90,  veg:false, bestseller:true,  desc:'Grilled chicken patty, coleslaw, pickles & special sauce' },
    /* BEVERAGES */
    { id:'A13',name:'Cutting Chai',       category:'beverage', emoji:'🍵', img:'https://carameltintedlife.com/wp-content/uploads/2021/01/Masala-Chai-.jpg',    price:15,  veg:true,  bestseller:true,  desc:'Strong spiced Indian tea served in a small glass' },
    { id:'A14',name:'Mango Lassi',        category:'beverage', emoji:'🥭', img:'https://tse3.mm.bing.net/th/id/OIP.yUPZHvJ08y0eF7HRtJJxPwHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3',    price:50,  veg:true,  bestseller:true,  desc:'Thick mango smoothie with chilled yogurt & cardamom' },
    { id:'A15',name:'Cold Coffee',        category:'beverage', emoji:'☕', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=480&h=340&fit=crop&auto=format',  price:55,  veg:true,  bestseller:false, desc:'Blended cold coffee with milk, sugar & whipped cream' },
    { id:'A16',name:'Fresh Lime Soda',    category:'beverage', emoji:'🍋', img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=480&h=340&fit=crop&auto=format',  price:30,  veg:true,  bestseller:false, desc:'Freshly squeezed lime with sparkling water, salt & sugar' },
    /* DESSERTS */
    { id:'A17',name:'Gulab Jamun (2 pcs)',category:'dessert',  emoji:'🍮', img:'https://tse3.mm.bing.net/th/id/OIP.B32bansRI7RS3yfbUSEBNwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',  price:30,  veg:true,  bestseller:true,  desc:'Soft milk-solid dumplings soaked in rose sugar syrup' },
    { id:'A18',name:'Kheer',              category:'dessert',  emoji:'🍚', img:'https://aartimadan.com/wp-content/uploads/2019/07/rice-kheer-recipe-images-6.jpg',  price:35,  veg:true,  bestseller:false, desc:'Creamy rice pudding with milk, sugar & cardamom' },
    { id:'A19',name:'Jalebi (100g)',      category:'dessert',  emoji:'🌀', img:'https://tse1.mm.bing.net/th/id/OIP.AMMEfXjq_2ACV154Q3_amAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', price:25,  veg:true,  bestseller:false, desc:'Crispy fried spirals soaked in warm saffron sugar syrup' },
    { id:'A20',name:'Ice Cream ',      category:'dessert',  emoji:'🍦', img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=480&h=340&fit=crop&auto=format',   price:40,  veg:true,  bestseller:false, desc:'Two scoops of vanilla & butterscotch ice cream' },
  ],

  /* ╔══════════════╗
     ║  C-BLOCK     ║
     ╚══════════════╝ */
  C: [
    /* SNACKS */
    { id:'C1', name:'Masala Dosa',        category:'snacks',   emoji:'🫓', img:'https://1.bp.blogspot.com/-yk2hGbhFwKs/YBBdovMrkFI/AAAAAAAAZbk/-ze_IB3b4Bk4UPqZXk6Fp7QW7JF6v5dXACLcBGAsYHQ/s2048/masala%2Bdosa%2B1.JPG',  price:55,  veg:true,  bestseller:true,  desc:'Crispy rice crepe with spiced potato, sambar & chutney' },
    { id:'C2', name:'Idli Sambar (4 pcs)',category:'snacks',   emoji:'🫔', img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=480&h=340&fit=crop&auto=format',  price:40,  veg:true,  bestseller:true,  desc:'Steamed rice cakes with lentil sambar & coconut chutney' },
    { id:'C3', name:'Pav Bhaji',          category:'snacks',   emoji:'🍞', img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=480&h=340&fit=crop&auto=format',  price:60,  veg:true,  bestseller:false, desc:'Spicy mixed vegetable mash served with buttered pav bread' },
    { id:'C4', name:'Aloo Tikki Chaat',   category:'snacks',   emoji:'🥔', img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=480&h=340&fit=crop&auto=format',  price:45,  veg:true,  bestseller:false, desc:'Crispy potato patties topped with chutneys, yogurt & sev' },
    { id:'C5', name:'Spring Roll (3 pcs)',category:'snacks',   emoji:'🌯', img:'https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg',  price:50,  veg:true,  bestseller:false, desc:'Crispy rolls filled with seasoned cabbage, carrot & noodles' },
    /* MEALS */
    { id:'C6', name:'Veg Biryani',        category:'meals',    emoji:'🍛', img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=480&h=340&fit=crop&auto=format',  price:80,  veg:true,  bestseller:true,  desc:'Fragrant basmati rice with mixed veggies & whole spices' },
    { id:'C7', name:'Chicken Biryani',    category:'meals',    emoji:'🍗', img:'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',  price:120, veg:false, bestseller:true,  desc:'Dum-cooked chicken & basmati rice with saffron & onions' },
    { id:'C8', name:'Veg Fried Rice',     category:'meals',    emoji:'🥢', img:'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=480&h=340&fit=crop&auto=format',  price:65,  veg:true,  bestseller:false, desc:'Wok-fried rice with mixed vegetables & soy sauce' },
    { id:'C9', name:'Hakka Noodles',      category:'meals',    emoji:'🍝', img:'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=480&h=340&fit=crop&auto=format',  price:70,  veg:true,  bestseller:false, desc:'Stir-fried noodles Indo-Chinese style with veggies & sauces' },
    { id:'C10',name:'South Indian Thali', category:'meals',    emoji:'🍱', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=480&h=340&fit=crop&auto=format',    price:90,  veg:true,  bestseller:false, desc:'Rice, sambar, rasam, 2 curries, papad, pickle & dessert' },
    /* BURGERS */
    { id:'C11',name:'Paneer Tikka Wrap',  category:'burger',   emoji:'🌯', img:'https://thatspicychick.com/wp-content/uploads/2021/05/Paneer-Tikka-Kathi-Rolls-three-rolls-stacked.jpg',  price:80,  veg:true,  bestseller:true,  desc:'Grilled paneer with onion, peppers & green chutney in paratha' },
    { id:'C12',name:'Chicken Frankie',    category:'burger',   emoji:'🌮', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=480&h=340&fit=crop&auto=format',    price:90,  veg:false, bestseller:false, desc:'Spiced chicken filling rolled in egg-coated paratha' },
    /* BEVERAGES */
    { id:'C13',name:'Filter Coffee',      category:'beverage', emoji:'☕', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=480&h=340&fit=crop&auto=format',  price:20,  veg:true,  bestseller:true,  desc:'Traditional South Indian decoction coffee with frothy hot milk' },
    { id:'C14',name:'Buttermilk (Chaas)', category:'beverage', emoji:'🥛', img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=480&h=340&fit=crop&auto=format',  price:20,  veg:true,  bestseller:false, desc:'Chilled salted buttermilk with roasted cumin & coriander' },
    { id:'C15',name:'Sugarcane Juice',    category:'beverage', emoji:'🌿', img:'https://tse1.explicit.bing.net/th/id/OIP.LlLZoHxMuICAVFhhMFmImAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',  price:30,  veg:true,  bestseller:true,  desc:'Freshly pressed sugarcane juice with ginger & lemon' },
    { id:'C16',name:'Rose Sharbat',       category:'beverage', emoji:'🌹', img:'https://www.mapro.com/cdn/shop/files/Rose-Sharbat-Recipes-2.png?v=1700807103',   price:25,  veg:true,  bestseller:false, desc:'Chilled rose syrup drink with basil seeds & ice' },
    /* DESSERTS */
    { id:'C17',name:'Rasgulla (2 pcs)',   category:'dessert',  emoji:'⚪', img:'https://tse2.mm.bing.net/th/id/OIP.QqZONoLpH6x3w0N99CndyQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',  price:25,  veg:true,  bestseller:false, desc:'Soft cottage cheese balls soaked in light sugar syrup' },
    { id:'C18',name:'Sevai Kheer',        category:'dessert',  emoji:'🍮', img:'https://tse3.mm.bing.net/th/id/OIP.utpKZU8SiA74nXf7nMfLOwHaGY?rs=1&pid=ImgDetMain&o=7&rm=3',  price:30,  veg:true,  bestseller:true,  desc:'Creamy vermicelli pudding with condensed milk & dry fruits' },
    { id:'C19',name:'Halwa',              category:'dessert',  emoji:'🟡', img:'https://www.chilitochoc.com/wp-content/uploads/2022/11/gajar-halwa-with-almonds-pistachios.jpg', price:30,  veg:true,  bestseller:false, desc:'Rich semolina halwa cooked with ghee, sugar & cardamom' },
    { id:'C20',name:'Kulfi Stick',        category:'dessert',  emoji:'🍦', img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=480&h=340&fit=crop&auto=format',   price:35,  veg:true,  bestseller:false, desc:'Dense frozen Indian ice cream with pistachio & saffron' },
  ]
};
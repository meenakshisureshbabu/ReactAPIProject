function createFruitImageData(id,name,path){
    return ({
        id:id,
        name:name,
        path:path})
}


const fruitimage = [
    createFruitImageData(23,"Raspberry",
"https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(52,"Persimmon",
"https://images.unsplash.com/photo-1604872831875-26cba17467a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc2ltbW9ufGVufDB8fDB8fHww"),

createFruitImageData(3,"Strawberry",
"https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(1,"Banana","https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww"),

createFruitImageData(5,"Tomato","https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww"),

createFruitImageData(4,"Pear","https://images.unsplash.com/photo-1601876819102-99560f772713?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhcnxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(60,"Durian","https://images.unsplash.com/photo-1588482415422-a061902e00a4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVyaWFufGVufDB8fDB8fHww"),

createFruitImageData(64,"Blackberry","https://images.unsplash.com/photo-1615218370629-da07db3571a4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2tiZXJyeXxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(65,"Lingonberry","https://images.unsplash.com/photo-1598768358105-de97305749d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGluZ29uYmVycnl8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(66,"Kiwi","https://images.unsplash.com/photo-1585059895524-72359e06133a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(67,"Lychee","https://plus.unsplash.com/premium_photo-1681826695219-51ad7e8eb72f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHljaGVlfGVufDB8fDB8fHww"),

createFruitImageData(10,"Pineapple","https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww"),

createFruitImageData(68,"Fig","https://images.unsplash.com/photo-1601379760591-1d89ae6ee1b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlnfGVufDB8fDB8fHww"),

createFruitImageData(69,"Gooseberry","https://images.unsplash.com/photo-1506176874237-f0abdd2041a0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvb3NlYmVycnl8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(70,"Passionfruit","https://images.unsplash.com/photo-1604495772376-9657f0035eb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc2lvbmZydWl0fGVufDB8fDB8fHww"),

createFruitImageData(71,"Plum","https://images.unsplash.com/photo-1603408209093-cd3c9af497d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1bXxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(2,"Orange","https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww"),

createFruitImageData(72,"Green apple","https://images.unsplash.com/photo-1471943038886-87c772c31367?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(25,"Watermelon","https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(26,"Lemon","https://images.unsplash.com/photo-1590502593747-42a996133562?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb258ZW58MHx8MHx8fDA%3D"),

createFruitImageData(27,"Mango","https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D"),

createFruitImageData(33,"Blueberry","https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5fGVufDB8fDB8fHww"),

createFruitImageData(6,"Apple","https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGV8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(37,"Guava","https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3VhdmF8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(35,"Apricot","https://images.unsplash.com/photo-1567779833503-606dc39a14fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXByaWNvdHxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(42,"Papaya","https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFwYXlhfGVufDB8fDB8fHww"),

createFruitImageData(41,"Melon","https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVsb258ZW58MHx8MHx8fDA%3D"),

createFruitImageData(77,"Tangerine","https://images.unsplash.com/photo-1603455907355-097260ccc037?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZ2VyaW5lfGVufDB8fDB8fHww"),

createFruitImageData(78,"Pitahaya","https://plus.unsplash.com/premium_photo-1667051230160-5906f5683a59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl0YWhheWF8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(44,"Lime","https://images.unsplash.com/photo-1620101680155-b251043b700b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGltZXxlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(79,"Pomegranate","https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(80,"Dragon fruit","https://images.unsplash.com/photo-1552320188-8b13c30d055d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYWdvbmZydWl0fGVufDB8fDB8fHww"),

createFruitImageData(81,"Grape","https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGV8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(82,"Morus","https://www.researchgate.net/profile/Vitthalrao-Khyade-2/publication/332615098/figure/fig2/AS:824779875561472@1573654254134/Mulberry-Morus-alba-L-for-liver-protection_Q320.jpg"),

createFruitImageData(76,"Feijoa","https://www.melissas.com/cdn/shop/files/10-count-image-of-feijoas-fruit-33858417754156_600x600.jpg?v=1682627150"),

createFruitImageData(84,"Avacado","https://images.unsplash.com/photo-1551460188-2f48af84543c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhY2Fkb3xlbnwwfHwwfHx8MA%3D%3D"),

createFruitImageData(87,"Cranberry","https://images.unsplash.com/photo-1592422735535-4e3164a22866?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JhbmJlcnJ5fGVufDB8fDB8fHww"),

createFruitImageData(9,"Cherry","https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5fGVufDB8fDB8fHww"),

createFruitImageData(86,"Peach","https://images.unsplash.com/photo-1595124245030-41448b199d6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2h8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(94,"Jackfruit","https://images.unsplash.com/photo-1624711078028-19ed36a91f02?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2ZydWl0fGVufDB8fDB8fHww"),

createFruitImageData(95,"Horned Melon","https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/kiwano-melon-1296x728-feature.jpg?w=1155&h=1528"),

createFruitImageData(96,"Hazelnut","https://images.unsplash.com/photo-1635843130314-c0b5cc832b79?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZWxudXR8ZW58MHx8MHx8fDA%3D"),

createFruitImageData(99,"Mangosteen","https://images.unsplash.com/photo-1627998398537-0cbff2cee742?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ29zdGVlbnxlbnwwfHwwfHx8MA%3D%3D"),
];


module.exports = fruitimage;






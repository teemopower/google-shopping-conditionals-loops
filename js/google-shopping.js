var data = require('../products.json');

// Write your solutions below


//console.log(data.items);

var shoppingCount = 0;

for(var i = 0; i < data.items.length; i++){
	var item = data.items[i];


	console.log(item.kind);

	if(item.kind === 'shopping#product'){
		shoppingCount++;
	}
}

console.log(shoppingCount);


// # 2

for(var i = 0; i < data.items.length; i++){
	var item = data.items[i];

	var inventory = item['product']['inventories'][0]['availability'];
	
	if(inventory === "backorder"){
		console.log(item['product']['title']);
	}
}


// # 3

for(var i = 0; i < data.items.length; i++){
	var item = data.items[i];

	var imageCount = item['product']['images'].length;

	if(imageCount > 1){
		console.log(item['product']['title']);
	}
	
	
}


// # 4

for(var i = 0; i < data.items.length; i++){
	var item = data.items[i];

	var brand = item['product']['brand'];

	if(brand.toLowerCase() === "canon"){
		console.log(item['product']['title']);
	}
	
}


// # 5

for(var i = 0; i < data.items.length; i++){
	var item = data.items[i];

	var brand = item['product']['brand'];
	var author = item['product']['author']['name'];

	console.log(author);

	if(brand.toLowerCase() === "canon" && author === "eBay"){
		console.log(item['product']['title']);
	}
	
}


// # 6

for(var i = 0; i < data.items.length; i++){
	var item = data.items[i];

	var brand = item['product']['brand'];
	var link = item['product']['link'];
	var price = item['product']['inventories'][0]['price'];
	

	console.log(brand);
	console.log(link);
	console.log(price);
}







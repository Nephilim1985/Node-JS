function Product(ID, name, description, price, brand, activeSize, quantity, date,) {
    this.ID = ID;
    this.name = name;
    this.description = description
    this.price = price;
    this.brand = brand;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    this.reviews = [];
    this.images = [];

    function Review(ID, author, date, comment, raitingKey, raitingValue) {
        this.ID = ID;
        this.author = author;
        this.date = date;
        this.comment = comment;
        this.raiting = new Map([
            [raitingKey, raitingValue]
        ]);
    }

    this.setID = function (ID) {
        this.ID = ID;
    }

    this.getID = function () {
        return this.ID;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.getName = function () {
        return this.name;
    }

    this.setDiscription = function (description) {
        this.description = description;
    }

    this.getDiscription = function () {
        return this.description;
    }

    this.setPrice = function (price) {
        this.price = price;
    }

    this.getPrice = function () {
        return this.price;
    }

    this.setBrand = function (brand) {
        this.brand = brand;
    }

    this.getBrand = function () {
        return this.brand;
    }

    this.getSizes = function () {
        return this.sizes;;
    }

    this.setActiveSize = function (activeSize) {
        this.activeSize = activeSize;
    }

    this.getActiveSize = function () {
        return this.activeSize;
    }

    this.setQuanity = function (quantity) {
        this.quantity = quantity;
    }

    this.getQuabity = function () {
        return this.quantity;
    }

    this.getReviewByID = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews.find(element => element.ID == ID)) {
                return this.reviews[i];
            } else {
                return ("There is no review with this ID");
            }
        }
    }

    this.addReview = function (ID, author, date, comment, raitingKey, raitingValue) {
        this.reviews.push(new Review(ID, author, date, comment, raitingKey, raitingValue))

    }
    this.getImage = function (index) {
        if (index == undefined) {
            return this.images[0];
        } else {
            return this.images[index];
        }
    }

    this.addSize = function (newSize) {
        this.sizes.push(newSize);
    }

    this.deleteSize = function (targetSize) {
        this.sizes.splice(this.sizes.indexOf(this.sizes.find(element => element == targetSize)), 1)
    }

    this.deleteReview = function (ID) {
        this.reviews.splice(this.reviews.indexOf(this.reviews.find(element => element.ID == ID)), 1)
    }

    this.getAverageRaiting = function () {
        let sum = 0;
        let averageRaiting = 0;
        for (let review of this.reviews) {
            for (let value of review.raiting.values()) {
                sum += value;
            }
        }
        return averageRaiting = sum / this.reviews.length
    }

}

function searchProducts(products = [], search = "") {
    let targetProducts = [];
    for (let product of products) {
        if (product.name.includes(search) || product.description.includes(search)) {
            targetProducts.push(product)

        }
    }
    return targetProducts
}

let apple = new Product();
apple.setName("apple");
apple.setDiscription("sdfdf")
apple.setID(1);
let potato = new Product();
potato.setName("potato");
potato.setID(3)
let meat = new Product();
potato.setDiscription("sdfggfh")
meat.setName("meahhkjt");
meat.setDiscription("dkfjdkhfgmeatdfdfkgf")
meat.setID(2)
let products = [];
products.push(apple);
products.push(potato);
products.push(meat);
//products.push(meat);

function sortProducts(products, sortRule) {
    switch (sortRule.toLowerCase()) {
        case 'price': {
            products.sort((a, b) => a.getPrice() - b.getPrice());

        }
        case 'name': {
            products.sort((a, b) => a.getName().localeCompare(b.getName()));

        }
        case 'id': {
            products.sort((a, b) => a.getID() - b.getID()

            );

        }

    }
}



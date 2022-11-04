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
        this.ID = ID
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
        this.price = price
    }

    this.getPrice = function (price) {
        return this.price;
    }

    this.setBrand = function (brand) {
        this.brand = brand
    }

    this.getBrand = function () {
        return this.brand;
    }

    this.getSizes = function () {
        return this.sizes;
    }

    this.setActiveSize = function (activeSize) {
        this.activeSize = activeSize
    }

    this.getActiveSize = function () {
        return this.activeSize;
    }

    this.setQuanity = function (quantity) {
        this.quantity = quantity
    }

    this.getQuabity = function () {
        return this.quantity;
    }

    this.getReviewByID = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews.find(element => element.ID == ID)) {
                return this.reviews[i];
            } else {
                return ("There is no review with this ID")
            }
        }
    }

    this.addReview = function (ID, author, date, comment, raitingKey, raitingValue) {
        this.reviews.push(new Review(ID, author, date, comment, raitingKey, raitingValue))

    }
    this.getImage = function (index) {
        if (index == undefined) {
            return this.images[0]
        } else {
            return this.images[index];
        }
    }

    this.addSize = function (newSize) {
        this.sizes.push(newSize);
    }

    this.deleteSize = function (targetSize) {
        if (this.sizes.find(element => element == targetSize)) {
            delete this.sizes.find(element => element == targetSize)
        }
    }

}
let apple = new Product();
apple.addReview(5, "me", 0, "adsds", "price", "0");
apple.deleteSize('XS')
console.log(apple)
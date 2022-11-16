class AbstractProduct {
    ID = ID;
    name = name;
    description = description
    price = price;
    activeSize = activeSize;
    quantity = quantity;
    reviews = [];
    images = [];
    constructor(ID, name, description, price, activeSize, quantity) {
        this.ID = ID;
        this.name = name;
        this.description = description
        this.price = price;
        this.activeSize = activeSize;
        this.quantity = quantity;

    }

    Review(ID, author, date, comment, raitingKey, raitingValue) {
        this.ID = ID;
        this.author = author;
        this.date = date;
        this.comment = comment;
        this.raiting = new Map([
            [raitingKey, raitingValue]
        ]);
    }

    set ID(ID) {
        this.ID = ID;
    }

    get ID() {
        return this.ID;
    }

    set name(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set discription(description) {
        this.description = description;
    }

    get discription() {
        return this.description;
    }

    set price(price) {
        this.price = price;
    }

    get price() {
        return this.price;
    }

    set quanity(quantity) {
        this.quantity = quantity;
    }

    get quanity() {
        return this.quantity;
    }

    get reviewByID() {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews.find(element => element.ID == ID)) {
                return this.reviews[i];
            } else {
                return ("There is no review with this ID");
            }
        }
    }

    addReview(ID, author, date, comment, raitingKey, raitingValue) {
        this.reviews.push(new Review(ID, author, date, comment, raitingKey, raitingValue))

    }
    getImageByIndex(index) {
        if (index == undefined) {
            return this.images[0];
        } else {
            return this.images[index];
        }
    }



    deleteReview(ID) {
        this.reviews.splice(this.reviews.indexOf(this.reviews.find(element => element.ID == ID)), 1)
    }

}
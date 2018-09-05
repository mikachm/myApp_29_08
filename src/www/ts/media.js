var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MediaEntities;
(function (MediaEntities) {
    var Publisher = /** @class */ (function () {
        function Publisher() {
        }
        return Publisher;
    }());
    MediaEntities.Publisher = Publisher;
    var Media = /** @class */ (function () {
        function Media(id, title, price) {
            if (price === void 0) { price = -1; }
            this._authors = new Array();
            this._id = id;
            this._title = title;
            this._price = price;
        }
        Object.defineProperty(Media.prototype, "id", {
            get: function () { return this._id; },
            set: function (id) { this._id = id; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Media.prototype, "title", {
            get: function () { return this._title; },
            set: function (title) { this._title = title; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Media.prototype, "price", {
            get: function () { return this._price; },
            set: function (price) { this._price = price; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Media.prototype, "publisher", {
            get: function () { return this._publisher; },
            set: function (publisher) { this._publisher = publisher; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Media.prototype, "authors", {
            get: function () { return this._authors; },
            set: function (authors) { this._authors = authors; },
            enumerable: true,
            configurable: true
        });
        return Media;
    }());
    MediaEntities.Media = Media;
    var Book = /** @class */ (function (_super) {
        __extends(Book, _super);
        function Book() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Book.prototype, "nbPage", {
            get: function () { return this._nbPage; },
            set: function (nbPage) { this._nbPage = nbPage; },
            enumerable: true,
            configurable: true
        });
        Book.prototype.getNetPrice = function () {
            return this.price * 1.05;
        };
        return Book;
    }(Media));
    MediaEntities.Book = Book;
    var Cd = /** @class */ (function (_super) {
        __extends(Cd, _super);
        function Cd() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cd.prototype.getNetPrice = function () {
            return this.price * 1.2;
        };
        return Cd;
    }(Media));
    MediaEntities.Cd = Cd;
    var Cart = /** @class */ (function () {
        function Cart() {
            this.medias = new Array();
        }
        Cart.prototype.add = function (m) {
            this.medias.push(m);
        };
        Cart.prototype.getTotalNetPrice = function () {
            var total = 0;
            for (var _i = 0, _a = this.medias; _i < _a.length; _i++) {
                var m = _a[_i];
                total += m.getNetPrice();
            }
            return total;
        };
        return Cart;
    }());
    MediaEntities.Cart = Cart;
})(MediaEntities || (MediaEntities = {}));
var me = MediaEntities;
var publisher = new me.Publisher();
publisher.id = 1;
publisher.name = "ENI";
var author = { id: 1, firstName: "Harry", lastName: "Potter" };
var book1 = new me.Book(1, "Narnia", 50);
var book2 = new me.Book(2, "Les fourmis", 50);
var book3 = new me.Book(3, "Harry potter", 50);
var cd1 = new me.Cd(4, "Aretha Franklin", 50);
var cart = new me.Cart();
cart.add(book1);
cart.add(book1);
cart.add(book1);
cart.add(cd1);
console.log(book1.title + " " + book1.price);
console.log(book2.title + " " + book2.price);
console.log(book3.title + " " + book3.price);
console.log(cd1.title + " " + cd1.price);
console.log("Total: " + cart.getTotalNetPrice());

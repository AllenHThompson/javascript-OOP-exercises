//Write a Card type. You use the type as follows.

function Card(point, card){
     this.point = point;
     this.suit = suit;

}
Card.prototype.getPointName = function() {
     if(this.point === 1) {
          return 'ace';
     } else if (this.point === 11) {
          return 'jack';
     } else if (this.point === 12) {
          return 'queen';
     } else if (this.point === 13) {
          return 'king';
     } else {
          return String(this.point);
     }
};

Card.prototype.getImageUrl = function() {
     return("images/" + this.point + "-of-" + this.suit +".png");
};
var card = new Card(1, 'spades');
console.log('Point: ' + card.point);
console.log('Point name: ' + card.getPointName());
console.log('Suit: ' + card.suit);
console.log('Image URL: ' + card.getImageUrl());

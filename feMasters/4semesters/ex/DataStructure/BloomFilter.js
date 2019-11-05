function BloomFilter (len = 500) {
  this.table = new Array(len);
}

BloomFilter.prototype.Hash = function (str, int) {
  switch(int) {
    case 0: 
      return Math.floor(str.CharCodeAt() % len); 
    case 1:
      return Math.floor(str[0].CharCodeAt() % len);
    case 2:
      return Math.floor((str[0].CharCodeAt() * 5) % len);
  }
} 

BloomFilter.prototype.add = function (str) {

}
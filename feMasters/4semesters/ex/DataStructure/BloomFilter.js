// Currently doesn't handle collisions
// Also only sets true or false, does not save any other data

function BloomFilter (len = 500) {
  this.len = len;
  this.table = new Array(len);
}

BloomFilter.prototype.Hash = function (str, int) {
  switch(int) {
    case 0: 
      return Math.floor(str.charCodeAt() % this.len); 
    case 1:
      return Math.floor(str[0].charCodeAt() % this.len);
    case 2:
      return Math.floor((str[0].charCodeAt() * 5) % this.len);
    default:
      return false;
  }
} 

// Add true to each hashed position
BloomFilter.prototype.add = function (str) {
   let counter = 0;
   let hashed = this.Hash(str, counter);
 
   while(hashed) {
     if(!this.table[hashed]) {
       this.table[hashed] = true;
     }
     counter++;
     hashed = this.Hash(str, counter);
   }

   return true;
}

// Check all hashed positions returns false if at least 1 position is empty.
BloomFilter.prototype.check = function (str) {
  let counter = 0;
  let hashed = this.Hash(str, counter);

  while(hashed) {
    if(!this.table[hashed]) {
      return false;
    }
    counter++;
    hashed = this.Hash(str, counter);
  }
  return true;
}

BloomFilter.prototype.read = function () {
  let res = [];
  for(let i = 0; i < this.table.length; i ++) {
    if(this.table[i]) res.push(i);
  }
  return JSON.stringify(res);
}
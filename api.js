/*
  param (int) delay: length of time before function returns
*/
function api(delay = 2000) {
  const obj = {
    jokes: [
      `My dad was a WWII veteran.\n\nDuring the Battle of Britain, in just one day, he destroyed 8 German aircrafts killing 32 Nazis. 
    
    Literally the worst mechanic the Luftwaffe ever had.`,
      `Went to a game with my dad today and as we were standing up to sing, the veteran in him kicked in and he began tearing up. I said to him, "You know, technically, national anthems are just…"
    "…country music."`,
      `Two Marines are walking down the street when one of them spots a dog licking himself. One Marine says to the other, "man, I wish I could do that."

    To which the other Marine replies, "no, you better not. That dog might bite you!"`,
      `The reason the Air Force, Army, Navy, and Marines bicker among themselves is because they don't speak the same language. For instance, here's what happens after they secure a building.

    The Army will post guards around the building. The Navy will turn out the lights and lock all the doors. The Marines will kill everybody inside and then set up headquarters.
    
    The Air Force will take out a five-year lease with an option to buy at the end.`,
      `My Dad has a box of crayons on him at all times
    I'm so proud that he's in the Marines`,
      `I've never understood the Navy's colour being Navy blue.
    I though they were the aqua-marines.`,
      `An air force officer goes to heaven and at the gate St Peter asks him if he has ever done anything in his life that he believes makes him worthy of admittance to heaven. The officer flyboy replies; yes, I once went into a bar with four of my pilot friends and saw two Seabees harassing a young girl at the bar, so being a gentleman I went up to the biggest one and told him to leave this young lady alone. When he refused I told him again more forcefully. This time I slapped him across the face and told this Seabee to stand down. St Peter said this was a very good thing to do and asked when the pilot did this great act. The pilot replied; about 5 minutes ago! My friends should be here shortly!`
    ],
    sources: [
      "https://www.ranker.com/list/military-jokes/jack-napier",
      "https://www.vetfriends.com/ugc/military_jokes/military_jokes.cfm",
      "https://upjoke.com/veteran-jokes",
      "https://www.crayola.com/"
    ]
  };

  let randNum = Math.floor(Math.random() * obj.jokes.length);
  const randJoke = obj.jokes[randNum];

  randNum = Math.floor(Math.random() * obj.sources.length);
  const randSrc = obj.sources[randNum];

  return new Promise(function(resolve, reject) {
    if (!Number(delay)) {
      setTimeout(function() {
        reject(
          "Argument recieved not an integer. Make it an integer you joker"
        );
      }, 10000);
    } else {
      setTimeout(function() {
        resolve({
          joke: randJoke,
          source: randSrc
        });
      }, delay);
    }
  });
}

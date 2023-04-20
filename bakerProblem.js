//Pete likes to bake some cakes. He has some recipes and ingredients.
//Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

function cakes(recipe, available) {
    let availableUses = [];
    let recipeKeys = Object.keys(recipe);
    for (i =0;i < recipeKeys.length; i++){
      if (available[recipeKeys[i]]!== undefined){
      var result = Math.floor(available[recipeKeys[i]]/recipe[recipeKeys[i]])
      availableUses.push(result);
      }else {
        return 0;
      }
    }
    let maxCakes = Math.min(...availableUses);
    return maxCakes;
  }

  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
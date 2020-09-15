/* 1.

List and describe each individual piece of syntax that we use to construct an object. 
Don't leave anything out! The list is finite.

{} = define object 

Javascript Object = collection of unordered properties

'Name of Object' {} = name of the object is placed before the curly brackets and is declared in a variable (owner of the function)

Variable = containers for storing data values

Properties = key/values that hold the information of the object

Key = defining factor of object

Value = expression of defining factor

Method = funcion inside a property */


/* 2. Me

1. Create an empty object called `me`.<br> */

/* const me = {
    name: 'Britt',
    age: 30,
    email: 'bservent@gmail.com',
}

me['age'] = 1000;
me['placeOfResidence'] = 'Seattle';

console.log(me.name);
console.log(me.age);
console.log(me.placeOfResidence); */


/* 2. Assign it properties for **name**, **age**, and **email** with corresponding values.  Afterwards, logging the object should give the following output:
```js
{name: "Kristyn", age: 98, email: "kristyn@foo.bar"}
```
    or
```js
{
    name: "Kristyn", 
    age: 98,
    email: "kristyn@foo.bar"
}
``` */

/* 3. Using dot notation, log the **name** property in your object.<br>
4. Using bracket notation, update the value of **age** to be 1000 years old.<br>
5. Using dot notation, `console.log()` **age** to verify that it has been updated.<br>
6. Add a property to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.<br>
7. Print the value of "place of residence"

 */

/* 3. Slimer */

/* const monster = {
       name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something",
    sayHello: function() {
        console.log(`Hello my name is ${monster.name} and I am the color ${monster.color}.`);
    }
 }

 monster.sayHello() */ 

 /* console.log(monster.name);

 monster['type'] = 'creature';
 console.log(monster.type);

 monster['age'] = 6;
 console.log(monster.age);
 */
/* Given the **`slimer`** object, do the following:

1. `console.log()` the `name`.
2. change the `type` to 'creature'.
3. Add a property to the object called `age`, and set its value to 6.
4. `console.log()` the object to make sure `type` and `age` are what you want them to be.
5. give the slimer a method to introduce himself, interpolating some of his properties.  call the method.

 */

/* ## Apply

### 4. Ogres

Let's say you want to make an adventure where an adventurer and an ogre fight each other.

**Spend a few minutes reading this question a couple times and thinking and pseudocoding before you actually write the code.**

—> Write a very small program that will simulate a battle between your adventurer and an ogre. 
* The battle should play out automatically.  
* The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.  
* The ogre's attacks should have random damage value, but the adventurer should always attack with the same value. 
* Whenever someone's hitpoints go below zero, the other person wins the battle.  

Create **objects** and have them interact. Remember, you are modeling things from real life. So just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

* how would you define your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?
* how would you define an `ogre`? Your ogre will want **hitpoints**, right? (Right.)
* How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
* Use `console.log()` to show each attack, how many hitpoints the person being attacked loses, the updated stats for the ogre and the adventurer.  At the end log the winner.
* You can use a loop to make the game play out. (What kind of loop? How and when will it stop?)
* Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Like a `game` object maybe?

Doing this efficiently requires planning.  If you just started coding immediately without thinking through what you're trying to do and planning, then you're doing it wrong.  Timewise, programming is 75-90% planning, and 10-25% actually typing code. */


const adventurer = {
    name: 'Peter',
    hitpoints: 100,
    damage: 20,
    showHP: function() {
        if (adventurer.hitpoints < 0) {
            adventurer.hitpoints = 0;
        }
    return adventurer.hitpoints;
},
   attack: function(enemy) {
    enemy.hitpoints -= adventurer.damage;
    }
};

console.log(adventurer.attack(ogre));

const ogre = {
    name: 'George',
    hitpoints: 30,
    damageMin: 10,
    damageMax: 15,
    damage: function () {
        return Math.floor(Math.random()*(ogre.damageMax - ogre.damageMin +1)) + ogre.damageMin;
};

## Quickstart:
1. clone this repo
2. cd into /client
3. run yarn install
4. run yarn start to start the app
5. happy hacking! 👌

### This is a pizza configurator, a single page app that contains the following:

> First you pick your base. You have four options:
> 25cm NY Style € 8,99
> 30cm NY Style € 11,49
> 35cm NY Style € 13,49
> 20cm NY Style € 6,45

> After that you pick your sauce options:
> White sauce
> Red sauce
> Double red sauce € 1,00
> Mix it up € 1,50

> After that you pick one or more toppings:
> Pineapple
> Corn
> Olives (green)
> Red unioun
> Spinach
> Cherry tomatoes
> Chicken
> Rules: max. 3 toppings, toppings cost € 0,50 a piece

It is possible to change previous steps even if stuff was already selected. 
So I could pick a base, a sauce and a topping and switch the base after that.

Additionally:

If any base is picked there should always be a price shown for the total pizza.
The redux store should contain the state of the pizza
There is no backend connection needed
This app uses controlled form components as they are the best practise

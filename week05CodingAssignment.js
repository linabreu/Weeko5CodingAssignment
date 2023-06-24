class MenuItem 
{
    constructor(name, price, description, allergen)
    {
        this.name = name,
        this.price = price;
        this.description = description;
        this.allergen = allergen;
    }
    describe()
    {
        return `${this.name} is ${this.description} available for $${this.price}. Allergens: ${this.allergen}`
    }
}

class Order
{
    constructor(orderItems)
    {
        this.orderItems = [];
    }
    add(menuItem)
    {

        if (menuItem instanceof MenuItem) 
        {
            this.orderItems.push(menuItem)
        }
        else
        {
            throw new Error ("Please add a menu item to your order!")
        } 
        return this.orderItems;  
    }
    remove(menuItem)
    {
            
        let arrayRemove = (list, itemToRemove) => 
        { 
            return list.filter(function(listItems)
            { 
                return listItems != itemToRemove; 
            });
        }

        if(this.orderItems.length === 0)
        {
            console.log("Cannot remove items from empty order!")
        }
        else
        {
            this.orderItems = arrayRemove(this.orderItems, menuItem)
            console.log(this.orderItems);
        }
        //return this.orderItems;
    }
    display()
    {
        let menuString = `Your Order`+ '\n';
        let i = 1;
        let total = 0;
        for(let orderItem of this.orderItems)
        {
            menuString+= `  ${i}. ${orderItem.name}: $${menuItem.price}` + '\n';
            total =+ menuItem.price
            i++;
        }
        menuString+= '\n' + total;
        alert(menuString);
    }
}


class Display
{
    constructor(dailyMenu)
    {
        this.dailyMenu = dailyMenu;
    }

    displayMenu()
    {
        let menuString = `Welcome to Breakfast Cafe!`+ '\n';
        let i = 1;
        for(let menuItem of this.dailyMenu)
        {
            menuString+= `  ${i}. ${menuItem.name}: $${menuItem.price}` + '\n' + `--------------------------------------` + '\n';
            i++;
        }
        console.log(menuString);
    }

    start()
    {
        let selection = this.showOptions();
        while(selection != 0)
        {
            switch(selection)
            {
                case "1":
                        this.addToOrder();
                        break
                case "2":
                    this.removeFromOrder()
                    break;
                case "3":
                    this.viewOrder()
                default:
                    selection = 0;
            }
            selection = this.showOptions;
        }
        alert("Thank you for visiting!")
    }

    showOptions()
    {
         return prompt
        ( `
            0) Quit
            1) Add to Order
            2) Remove Items from Order
            3) View Order
        `)
    }

    addToOrder()
    { 
        let itemtoAdd = prompt("Please enter the menu number of the item you would like to add to your order:");
        switch(itemtoAdd)
            {
                case "1":
                    customerOrder.add(icedCofee);
                    alert(`${icedCofee.name} added to order!`)
                    break
                case "2":
                    customerOrder.add(hotTea);
                    alert(`${hotTea.name} added to order!`)
                    break;
                case "3":
                    customerOrder.add(icedTea);
                    alert(`${icedTea.name} added to order!`)
                    break;
                case "4":
                    customerOrder.add(orangeJuice);
                    alert(`${orangeJuice.name} added to order!`)
                    break;
                case "5":
                    customerOrder.add(breakfastBurrito);
                    alert(`${breakfastBurrito.name} added to order!`)
                    break;
                case "6":
                    customerOrder.add(bagel);
                    alert(`${bagel.name} added to order!`)
                    break;
                case "7":
                    customerOrder.add(classicBreakfast);
                    alert(`${classicBreakfast.name} added to order!`)
                    break;
                case "8":
                    customerOrder.add(donut);
                    alert(`${donut.name} added to order!`)
                    break;
                case "9":
                    customerOrder.add(oatmeal);
                    alert(`${oatmeal.name} added to order!`)
                    break;
            }
            return customerOrder;
    }

    removeFromOrder()
    {
        let itemtoRemove = prompt("Please enter name of the item you would like to remove from your order:");
        customerOrder.remove(itemtoRemove);
    }

    viewOrder()
    {
        alert(customerOrder.display())
    }
}

//declare menu items
let icedCofee = new MenuItem("Iced Coffee", 4.75, "classic cold brew", "NO ALLERGENS");
let hotCoffee = new MenuItem("Hot Coffee", 2.75, "freshly brewed coffee", "NO ALLERGENS");
let hotTea = new MenuItem("Hot Tea", 2.25, "freshly steeped tea of your choosing", "NO ALLERGENS");
let icedTea = new MenuItem("Iced Tea", 2.25, "freshly steeped tea of your choosing over ice", "NO ALLERGENS");
let orangeJuice = new MenuItem("Orange Juice", 2.25, "freshly squeezed OJ", "NO ALLERGENS");
let breakfastBurrito = new MenuItem("Breakfast Burrito", 6.75, "breakfast burrito on a flour tortilla with  with bacon, egg and cheese", "GLUTEN");
let bagel = new MenuItem("Bagel", 4.99, "toasted bagel with cream cheese", "GLUTEN");
let classicBreakfast = new MenuItem("Classic Breakfast", 7.99, "eggs any style, hashbrowns, bacon or sausage", "EGGS");
let donut = new MenuItem("Donut", 2.99, "glazed or chocolate frosted donut", "GLUTEN");
let oatmeal = new MenuItem("Oatmeal", 2.99, "steel cut oatmeal served with cinnamon and fruit", "NO ALLERGENS");


//put menuItems into an array
let dailyMenu = [icedCofee, hotCoffee, hotTea,icedTea, orangeJuice, breakfastBurrito, bagel, donut, oatmeal]

//create object w global scope to hold cust order
let customerOrder = new Order();

//display
let display = new Display(dailyMenu);
display.displayMenu();
//display.addToOrder();
display.viewOrder()







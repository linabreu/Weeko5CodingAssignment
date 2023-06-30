class ToDoItem //first class per the assignment instructions
{
    constructor(name)
    {
        this.name = name;
    }
}

class Display // second class per the assignment instructions
{
    constructor()
    {
        this.toDoList = [];
    }

    start()
    {
        
        let selection = this.showOptions();
        while(selection != 0)
        {
            switch(selection)
            {
                case "1":
                    this.addItemToList();
                        break
                case "2":
                    this.removeItem()
                    break;
                case "3":
                    this.viewList()
                    break;
                default:
                    selection = 0;
            }
            selection = this.showOptions();
        }
        alert("Hope you have a productive day!")
    }
    showOptions()
    {
        return prompt
        ( `****  TO DO LIST CREATOR  ****

            0) Quit
            1) Add an item to your to do list
            2) Remove item from your to do list
            3) View your to do list
        `)
    }
    addItemToList()  //method to add per assignment instructions
    {
        let name = prompt("Enter the task to add to your to do list:");
        this.toDoList.push(new ToDoItem(name));
        alert(`${name} was added to your to do list!`);
    }
    viewList() //method to view per assignment instructions
    {
      alert(this.returnList());
    }
    returnList() //make this it's own thing that just returns a value so I can use it in view method and remove method
    {
        let toDoString = '****  YOUR CURRENT TO DO LIST  ****'
        for(let i = 0; i < this.toDoList.length; i++)
        {
          toDoString+= `${'\n'} ${i + 1}.  ${this.toDoList[i].name}`;
        }
        return toDoString;
    }
    removeItem() //method to remove per assignment instructions
    {
        //need to see the numbers so you know what to delete
        let removeNum = prompt(`Please enter the number of the task you wish to remove: ${'\n'}  ${this.returnList()}`) 
        let removeIndex = parseInt(removeNum) - 1; //convert to int since prompt input is string, remove 1 to match array index
        try
        {
           if (removeIndex >= this.toDoList.length)
           {
                throw "You entered a task number that is not in your to do list! Please try again:";
           }
           if (removeIndex < 0)
           {
                throw "You cannot have a negative task number!";
           }
           if (isNaN(removeIndex))
           {
                throw "You must enter a number!";
           }
           this.toDoList.splice(removeIndex,1);
           alert("Task removed!")
        }
        catch (err) 
        {
            alert(err);

        }
    }

}

let menu = new Display();
menu.start();
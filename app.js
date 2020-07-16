    //Budget Controller
    var budgetController = (function() {
        
        //some code

    })();


    //UI Controller
    var UIController = (function() {

        return {
            getInput: function() {
                var type = document.querySelector('.add__type').value;
            }
        }

    })();

    //Global App Controller
    var appController = (function (budgetCtrl, UICtrl) {

        var ctrlAddItem = function () {
            // 1. Get the filed input data

            // 2. Add the item to the budget controller

            // 3. add the new item to the user interface

            // 4. Calculate the budget

            // 5. Display the budget on the UI
            console.log('It works!');
        }


        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })

    })(budgetController, UIController);
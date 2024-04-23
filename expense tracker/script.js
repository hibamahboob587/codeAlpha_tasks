let BUTTON = document.getElementById('button');
let AMOUNT = document.getElementById('amount');
let DESCRIPTION = document.getElementById('description');
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const expensebody = document.getElementById('expense-body');
const totalAmount = document.getElementById('total-amount');

BUTTON.addEventListener('click', function() {
    
    const description = DESCRIPTION.value;
    const amount = Number(AMOUNT.value);  
  
    if ( description ===" " || isNaN(amount) || amount <= 0 ) {
        alert('Please enter valid expense details.');
        return;
    }
    
    add_expense(description, amount);

    // Clear input fields
    DESCRIPTION.value = "";
    AMOUNT.value = "";
    
});




function add_expense(description,amount){
    expenses.push({description,amount});
    
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}




function delete_expense(index){
    expenses.splice(index,1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}




function editData(index) { 

    let row = expenses[index];
    

    let new_description = prompt("Enter new description:",row.description);
    let new_amount = prompt("Enter new amount:",row.amount);
    if (new_description !== null && new_amount !== null) {
        row.description = new_description;
        row.amount = parseFloat(new_amount);
        
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    }else{
        alert("Please enter a valid value");  
    }   
} 



function renderExpenses(){
    
    expensebody.innerHTML = " "; 
  
    // Initialize total amount 
    let total = 0;


    for (let index = 0; index < expenses.length; index++) {
        

        const expense = expenses[index];
        const expenseRow = document.createElement("tr"); 
        expenseRow.innerHTML =
                        `<tr>
                            <td>${expense.description}</td>
                            <td>${expense.amount}</td>
                            <td>    <button onclick="editData(${index})" class= "edit-btn">Edit</button>  <button onclick="delete_expense(${index})" class="delete-btn">Delete</button></td>
                         </tr>`;


        expensebody.appendChild(expenseRow); 
  
        // Update total amount 
        total += expense.amount;
        
    }
    totalAmount.textContent = total;

    
    localStorage.setItem("expenses",JSON.stringify(expenses)); 
    
    
}


        

    









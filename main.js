/**
 * Client Tracker web app
 * Brandon Hammond
 */

// Main screen with options to view/add/search contacts
// Define array to hold contact objects
const contacts = [];
displayMenu();

// Display a Menu
function displayMenu() {
    let selection = Number(prompt(`Welcome to Client Tracker:\r\n1) Add a Contact\r\n2) View Contacts\r\n3) Search Contacts\r\n4) Home Page`));
    while (isNaN(selection) || selection != 1 && selection != 2 && selection != 3 && selection != 4) {
        selection = Number(prompt(`-Invalid Selection-\r\nPlease chose an option below:\r\n1) Add a Contact\r\n2) View Contacts\r\n3) Search Contacts`));
    }
// Handle choices
    switch (selection) {
        case 1:
            addContact();
            break;
        case 2:
            viewContacts();
            break;
        case 3:
            searchContacts();
            break;
        case 4:
            // Go to home page
            break;
    }
}
// Add a contact option
function addContact() {
    let name = prompt(`What is your client's name?`);
    let number = prompt(`What is ${name}'s phone number?`);
    let email = prompt(`What is ${name}'s email?`);
    let status = prompt(`Buyer or Seller?`);
    // Add them to the array as an object and go back to the menu.
    contacts.push({name, number, email, status});
    displayMenu();
}
// View Contacts option
function viewContacts() {
    // if no contacts, return to menu
    if (contacts.length <= 0) {
        alert(`No contacts have been added.`);
        displayMenu();
    }
    // Else, list out contacts in console
    else {
        for (let i = 0; i < contacts.length; i++) {
            console.log(contacts[i].name, contacts[i].number, contacts[i].email);
        }
    }
}
// Search Contacts option
function searchContacts() {
    // if no contacts, return to menu
    if (contacts.length <= 0) {
        alert(`No contacts have been added.`);
        displayMenu();
    }
    // else prompt for contact name
    else {
        let nameSearch = prompt(`What name would you like to search for?`);
        // Iterate through contacts
        for (let i = 0; i < contacts.length; i++) {
            // Validate that contact exists
            while (contacts[i].name.toLowerCase() != nameSearch.toLowerCase()) {
                nameSearch = prompt(`Contact does not exist.\r\nWhat name would you like to search for?`);
            }
            // Output contact info to console
            console.log(contacts[i].name, contacts[i].number, contacts[i].email);
        }
    }
}
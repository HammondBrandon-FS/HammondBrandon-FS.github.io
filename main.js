/**
 * Client Tracker web app
 * Brandon Hammond
 */

// Main screen with options to view/add/search contacts
// Define array to hold contact objects
let contacts = [];
displayMenu();

// Display a Menu
function displayMenu() {
    let selection = Number(prompt(`Welcome to Client Tracker:\r\n1) Add a Contact\r\n2) View Contacts\r\n3) Search Contacts`));
    while (isNaN(selection)) {
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
    }
}
// Add a contact option
function addContact() {
    let name = prompt(`What is your client's name?`);
    let number = prompt(`What is ${name}'s phone number?`);
    let email = prompt(`What is ${name}'s email?`);
    let status = prompt(`Buyer or Seller?`);
    contacts.push({name, number, email, status});
    displayMenu();
}
// View Contacts option
function viewContacts() {
    if (contacts.count <= 0) {
        return;
    }
    for (let i = 0; i < contacts.count; i++) {
        console.log(contacts[i].name);
    }
}
// Search Contacts option
function searchContacts() {

}
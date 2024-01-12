// const contactsPath = ;

// async function listContacts() {
//  // ...твій код. Повертає масив контактів.
// }

// async function getContactById(contactId) {
//  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }

// async function removeContact(contactId) {
//  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// async function addContact(name, email, phone) {
//  // ...твій код. Повертає об'єкт доданого контакту (з id).
// }

const fs = require("fs").promises;
const path = require("path");

(async () => {
  try {
    const contactsPath = path.join("db", "contacts.json");

    const readJsonRes = await fs.readFile(contactsPath);

    const dataArr = JSON.parse(readJsonRes);

    await fs.writeFile(contactsPath, JSON.stringify(dataArr));
  } catch (err) {
    console.log(err);
  }
})();

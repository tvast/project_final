var nextId = 0;
var persons = {};

// Save a person into the storage.
function savePerson(person) {
    if (!person.id) {
        person.id = nextId++;
    }

    persons[person.id] = person;
    return person;
}

// Gets one person from the storage.
function getPerson(id) {
    return persons[id];
}

// Gets all persons from the storage.
function getPersons() {
    var result = [];
    for (var id in persons) {
        result.push(persons[id]);
    }

    return {
        count: result.length,
        result: result
    }
}

// Delete a person from the storage
function deletePerson(id) {
    if (!persons[id]) {
        return false;
    }

    delete persons[id];
    return true;
}

// Export methods
exports = {
    getPerson: getPerson,
    savePerson: savePerson,
    getPersons: getPersons,
    deletePerson: deletePerson
};

// Initialize the store with some persons.
savePerson({
    name: 'Bill Gates',
    age: 60,
    manger :95,
    alcool : 'hello'
});

savePerson({
    name: 'Larry Ellison',
    age: 72,
    manger :97,
    alcool : 'hello2'
});

savePerson({
    name: 'lorem',
    age: 72,
    manger :97,
    alcool : 'hello2'
});

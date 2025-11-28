// dataStore.js
// Shared datastore helper for Budget Planner

(function () {
  const KEY = "budgetEntriesByUser";

  function getAllData() {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  }

  function saveAllData(allData) {
    localStorage.setItem(KEY, JSON.stringify(allData));
  }

  function getEntriesForUser(user) {
    const allData = getAllData();
    return allData[user] || [];
  }

  function saveEntriesForUser(user, entries) {
    const allData = getAllData();
    allData[user] = entries;
    saveAllData(allData);
  }

  function addEntryForUser(user, entry) {
    const entries = getEntriesForUser(user);
    entries.push(entry);
    saveEntriesForUser(user, entries);
  }

  function deleteEntryForUser(user, index) {
    const entries = getEntriesForUser(user);
    if (index >= 0 && index < entries.length) {
      entries.splice(index, 1);
      saveEntriesForUser(user, entries);
    }
  }

  function updateEntryForUser(user, index, updatedEntry) {
    const entries = getEntriesForUser(user);
    if (index >= 0 && index < entries.length) {
      entries[index] = updatedEntry;
      saveEntriesForUser(user, entries);
    }
  }

  function clearEntriesForUser(user) {
    const allData = getAllData();
    delete allData[user];
    saveAllData(allData);
  }

  window.getEntriesForUser = getEntriesForUser;
  window.saveEntriesForUser = saveEntriesForUser;
  window.addEntryForUser = addEntryForUser;
  window.deleteEntryForUser = deleteEntryForUser;
  window.updateEntryForUser = updateEntryForUser;
  window.clearEntriesForUser = clearEntriesForUser;
})();

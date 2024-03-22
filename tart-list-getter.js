async function listTarts() {
  const response = await fetch("./tart-list.json");
  if (!response.ok) {
    console.log("Couldnt fetch tarts");
    return [];
  }
  try {
    return await response.json();
  } catch (error) {
    console.error("Tart list JSON invalid: " + error);
    return [];
  }
}


let tartList = await listTarts();

tartList.forEach(
  (tart) => {
    displayTart(
      tart.image,
      tart.name,
      tart.description,
      tart.price
    );
  }
)
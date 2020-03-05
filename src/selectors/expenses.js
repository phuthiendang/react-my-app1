export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startDateMatch =
        typeof startDate !== "number" || startDate <= expense.createdAt;
      const endDateMatch =
        typeof endDate !== "number" || endDate >= expense.createdAt;
      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
};

export const vehicles = Array.from(
  { length: 400 },
  (_, index) => ({
    id: index + 1,
    plate: `ICT-${1000 + index}`,
    status: index % 2 === 0 ? "Active" : "Inactive",
    position: `Location ${index + 1}`,
  })
);
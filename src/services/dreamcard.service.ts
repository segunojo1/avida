export const fetchCards = async () => {
  try {
    const res = await fetch("/api/dreamcards", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error("Failed to fetch cards");
    }
  } catch (err) {
    console.error("Error fetching cards:", err);
  }
};

export const fetchAllCards = async () => {
  try {
    const res = await fetch("/api/dreamcards/all", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error("Failed to fetch all cards");
    }
  } catch (err) {
    console.error("Error fetching all cards:", err);
  }
};


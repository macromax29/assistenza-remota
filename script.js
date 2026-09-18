const CONFIG = {
  whatsappNumber: "393331234567", // sostituisci con il tuo numero, senza + e senza spazi
  businessName: "Tech360",
  defaultMessage: "Ciao, avrei bisogno di assistenza o consulenza informatica."
};

function whatsappUrl(message = CONFIG.defaultMessage) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.getElementById("whatsappBottom").href = whatsappUrl();
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".brand, footer strong").forEach(el => el.textContent = CONFIG.businessName);

const categorySelect = document.getElementById("category");
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    categoryCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    categorySelect.value = card.dataset.category;
    document.getElementById("richiesta").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("device").focus(), 450);
  });
});

document.getElementById("requestForm").addEventListener("submit", event => {
  event.preventDefault();
  const category = categorySelect.value.trim();
  const device = document.getElementById("device").value.trim();
  const problem = document.getElementById("problem").value.trim();
  const preference = document.getElementById("preference").value.trim();

  const message = [
    "Ciao, avrei bisogno di assistenza informatica.",
    "",
    `Categoria: ${category}`,
    `Dispositivo / sistema: ${device}`,
    `Problema: ${problem}`,
    `Preferenza: ${preference}`
  ].join("\n");

  window.open(whatsappUrl(message), "_blank", "noopener");
});

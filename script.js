// PERSONALIZZA QUI
const CONFIG = {
  whatsappNumber: "393331234567", // formato internazionale senza +
  businessName: "Tech360",
  defaultMessage: "Ciao, avrei bisogno di assistenza o consulenza informatica. Il problema/richiesta è: "
};

function whatsappUrl() {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.defaultMessage)}`;
}

document.getElementById("whatsappHero").href = whatsappUrl();
document.getElementById("whatsappBottom").href = whatsappUrl();
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".brand, footer strong").forEach(el => {
  el.textContent = CONFIG.businessName;
});

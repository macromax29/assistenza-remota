// PERSONALIZZA QUI
const CONFIG = {
  whatsappNumber: "393337597737", // formato internazionale senza +
  businessName: "PC Help Remote",
  defaultMessage: "Ciao, avrei bisogno di assistenza informatica da remoto. Il problema è: "
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

// ============================================================
// ⚠️ À MODIFIER AVANT DE PUBLIER LE SITE ⚠️
// Mets ici le nom et le numéro de Ben pour qu'il tombe sur la
// page "en maintenance" au lieu de l'annonce.
// ============================================================
const BEN_NAME = "ben";              // en minuscules
const BEN_PHONE = "0769283227";
// ============================================================

function normalizePhone(value) {
  return value.replace(/\D/g, ""); // garde uniquement les chiffres
}

function normalizeName(value) {
  return value.trim().toLowerCase();
}

function goBack() {
  document.getElementById("maintenance").classList.add("hidden");
  document.getElementById("info").classList.add("hidden");
  document.getElementById("gate").classList.remove("hidden");
  document.getElementById("gate-form").reset();
}

document.getElementById("gate-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomInput = document.getElementById("nom").value;
  const telInput = document.getElementById("tel").value;

  const nom = normalizeName(nomInput);
  const tel = normalizePhone(telInput);

  const isBen = nom === BEN_NAME || (BEN_PHONE !== "REMPLACER_ICI" && tel === normalizePhone(BEN_PHONE));

  document.getElementById("gate").classList.add("hidden");

  if (isBen) {
    document.getElementById("maintenance").classList.remove("hidden");
  } else {
    // Personnalise le message avec le prénom saisi
    const prenomAffiche = nomInput.trim() || "cher(e) membre";
    document.getElementById("nom-affiche").textContent = prenomAffiche.charAt(0).toUpperCase() + prenomAffiche.slice(1);
    document.getElementById("nom-merci").textContent = prenomAffiche + " !!!";
    document.getElementById("info").classList.remove("hidden");
  }
});

let isExplorer = true;

function changeCard(){
  const card = event.currentTarget
  const bg = isExplorer ? "explorer" : "ignite" 
  isExplorer = !isExplorer
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}
// Mobil menü
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
toggle?.addEventListener('click', () => {
  if(nav.style.display === 'flex'){ nav.style.display = 'none'; }
  else{ nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap = '10px'; }
});

// Év automatikus frissítése
document.getElementById('year').textContent = new Date().getFullYear();

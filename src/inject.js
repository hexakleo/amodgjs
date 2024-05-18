const mainMenu = modGUI.createMenu('cheats', 'main-menu', 'absolute', '10px', '10px');

modGUI.addText(mainMenu, '› github.com/atlanta-k/cheats');
modGUI.addButton(mainMenu, 'button1',   () => mark(`button 1 clicked`));
modGUI.addButton(mainMenu, 'button2',   () => mark(`button 2 clicked`));
modGUI.addSlider(
    mainMenu,
    'slider 1',
    1, 100, 1,
    value => mark(`slide 1: ${value}`)
  );
  
let overlay = modGUI.createLiveOverlay('atlanta')
  
/* 
window.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftRight') {
        if (
          modGUI.getMenu(mainMenu).style.display === 'none' &&
          overlay.style.display === 'none'
        ) {
          modGUI.getMenu(mainMenu).style.display = 'block';
          overlay.style.display = 'block';
          document.exitPointerLock();
        } else {
          modGUI.getMenu(mainMenu).style.display = 'none';
          overlay.style.display = 'none';
        }
    }
  });
*/

modGUI.render();
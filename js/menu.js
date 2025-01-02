const openMenu = (nav, active) => {
  nav.classList.add(active);
};

const closeMenu = (nav, active) => {
  nav.classList.remove(active);
};

const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);

  burgerBtn.addEventListener("click", () => {
    openMenu(navigation, classActiveMenu);
  });
};

export default slideMenu;

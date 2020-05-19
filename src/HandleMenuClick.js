export function HandleMenuClick(num) {
  window.scroll({
    top: num === 0 ? 0 : window.innerHeight * num,
    left: 1000,
    behavior: "smooth",
  });
}

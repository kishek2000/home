export function HandleMenuClick(elem) {
  const element = document.getElementById(elem);
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  // window.scroll({
  //   top: num === 0 ? 0 : window.innerHeight * num,
  //   left: 1000,
  //   behavior: "smooth",
  // });
}

const startTime = new Date().getTime();

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const loadTime = document.getElementById('load_info')
    window.addEventListener('load', () => {
      loadTime.innerHTML += `This page loaded in ${(new Date().getTime() - startTime) / 1000} s`;
    });

    const navbar = document.getElementById('main_navbar');
    const urls = ['main_page', 'gallery_page', 'comments_page'];
    const files = ['index', 'gallery', 'comments'];
    const conditionForActive = files.findIndex(u => document.location.pathname.includes(u))
    if (conditionForActive != -1)
      [...navbar.children].find(i =>
        i.dataset.key === urls[conditionForActive]).children.item(0).classList.add('main_header_navbar_links_item_link_active');
  })
})()
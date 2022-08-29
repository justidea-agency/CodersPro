const coursesSidebarNav = document.querySelector('#menu-java-course-sidebar');
const workWithUsSidebarNav = document.querySelector('#menu-work-with-us-sidebar-menu');



const setFirstElementActive =  (sidebar) => {
  if(sidebar){
    const firstEl = sidebar.querySelector('li:first-of-type');
    firstEl && firstEl.classList.add('active');
  }
};

setFirstElementActive(coursesSidebarNav);
setFirstElementActive(workWithUsSidebarNav);


const screenIsWiderThanXL = window.matchMedia(`only screen and (min-width: 1200px)`).matches;


const removeNotActiveLink = () => {
  const link = document.querySelector('li.active');

  link && link.classList.remove('active');
}

function changeActiveLink(e){
  const parent = e.target.parentNode;
  removeNotActiveLink();
  parent.classList.add('active');
}

if (screenIsWiderThanXL) {
  const coursesAllSidebarLinks = document.querySelectorAll('.sidebar-nav a');

  coursesAllSidebarLinks.forEach( link => {
    link.addEventListener('click', changeActiveLink)
  })

  const workWithUsAllSidebarLinks = document.querySelectorAll('.work__sidebar a');

  workWithUsAllSidebarLinks.forEach( link => {
    link.addEventListener('click', changeActiveLink)
  })
}


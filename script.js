let dark_prefered = window.matchMedia("(prefers-color-scheme: dark)")
if(dark_prefered.matches) document.body.classList.add("dark")

dark_prefered.addEventListener("change", () => {
  if(dark_prefered.matches) document.body.classList.add("dark")
  else document.body.classList.remove("dark")
})


 AOS.init();
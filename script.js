
document.addEventListener("DOMContentLoaded", () => {     
        const projectButtons = document.querySelectorAll(".project-link");
    
        projectButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const projectUrl = button.getAttribute("data-url"); 
                if (projectUrl) {
                    window.open(projectUrl, '_blank'); 
                } else {
                    alert('Project link not available'); 
                }
            });
        });
    });
    
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const nav = document.getElementById('work');

    let currentProjectIndex = 0;

    function showProject(index) {
        projects.forEach((project, idx) => {
            if (idx === index) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    function showNextProject() {
        currentProjectIndex++;
        if (currentProjectIndex >= projects.length) {
            currentProjectIndex = 0;
        }
        showProject(currentProjectIndex);
    }

    function showPreviousProject() {
        currentProjectIndex--;
        if (currentProjectIndex < 0) {
            currentProjectIndex = projects.length - 1;
        }
        showProject(currentProjectIndex);
    }

    // Create and append next and previous buttons
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', showNextProject);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', showPreviousProject);

    nav.appendChild(prevButton);
    nav.appendChild(nextButton);

    // Show the first project initially
    showProject(currentProjectIndex);
});

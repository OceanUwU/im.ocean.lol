const transitionTime = getComputedStyle(document.getElementsByTagName('section')[0])['transition-duration'].slice(0,-1)*1000 + 20;
var currentSection;

function animateSectionChange(sectionName) {
    let newSection = document.getElementById(`${sectionName == '' ? 'home' : sectionName}Section`);
    if (!newSection) return;

    let dark = newSection.getAttribute('data-dark') == 'true';
    document.body.style.background = newSection.getAttribute('data-color');
    document.body.style.color = dark ? 'white' : 'black';
    requestAnimationFrame(() => {
        document.getElementById('content').style.background = `rgba(255, 255, 255, 0.45)`;
        let rgbval = dark ? 0 : 255;
        requestAnimationFrame(() => {
            let secondary = newSection.getAttribute('data-secondary-color')
            if (secondary == null)
                document.getElementById('content').style.background = `rgba(${rgbval}, ${rgbval}, ${rgbval}, 0.45)`;
            else
                document.getElementById('content').style.background = secondary;
        });
    });
    setTimeout(() => {
        let sectionLinks = document.getElementsByClassName('section-link');
        for (let link of sectionLinks) {
            link.classList.remove('light');
            link.classList.remove('dark');
            link.classList.add(dark ? 'dark' : 'light');
        }
    }, currentSection == null ? 0 : transitionTime);

    if (currentSection == null) {
        newSection.style.display = 'block';
        newSection.style.maxHeight = 'none';
        requestAnimationFrame(() => {
            setTimeout(() => {
                newSection.style.opacity = 1;
            }, transitionTime);
        });

        currentSection = newSection;
    } else if (currentSection != newSection) {
        currentSection.style.opacity = 0;
        currentSection.style.maxHeight = currentSection.scrollHeight+'px';
        newSection.style.display = 'block';
        setTimeout(() => {
            currentSection.style.maxHeight = 0;
            newSection.style.maxHeight = newSection.scrollHeight+'px';
            setTimeout(() => {
                document.body.style.color = newSection.getAttribute('data-dark') == 'true' ? 'white' : 'black';

                currentSection.style.display = 'none';
                newSection.style.opacity = 1;
                newSection.style.maxHeight = 'none';

                currentSection = newSection;
            }, transitionTime);
        }, transitionTime);
    }
}

window.addEventListener("hashchange", () => animateSectionChange(location.hash.slice(1)), false);

let hash = location.hash.slice(1);
if (!document.getElementById(`${hash}Section`))
    hash = '';
animateSectionChange(hash);
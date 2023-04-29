const setAppearance = () => {
    const onEntry = (entry) => {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };

    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    console.log(`set appearance for ${elements.length} elements`)

    for (let elm of elements) {
        observer.observe(elm);
    }
}

export default setAppearance;
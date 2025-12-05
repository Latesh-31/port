document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const projects = [
        { name: 'Website Interface', image: 'https://images.unsplash.com/photo-1545665277-593748957912?auto=format&fit=crop&w=400&q=80' },
        { name: 'Mobile App Screen', image: 'https://images.unsplash.com/photo-1601004860493-5475306385d3?auto=format&fit=crop&w=400&q=80' },
        { name: 'System Architecture', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
        { name: 'Data Visualization', image: 'https://images.unsplash.com/photo-1551288049-5b338f62e8d3?auto=format&fit=crop&w=400&q=80' },
        { name: 'E-commerce Platform', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=400&q=80' },
        { name: 'Cloud Infrastructure', image: 'https://images.unsplash.com/photo-1588665809885-04b3a1a5925a?auto=format&fit=crop&w=400&q=80' },
    ];

    const panelContainer = document.querySelector('.project-panels-container');
    projects.forEach((project, i) => {
        const panel = document.createElement('div');
        panel.classList.add('project-panel');
        panel.style.backgroundImage = `url(${project.image})`;
        // panel.innerHTML = project.name;
        panelContainer.appendChild(panel);
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#scroll-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
        }
    });

    // 1. The Diagonal Tear Animation
    tl.to('.planner-section', { 
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        ease: 'power2.inOut'
     }, 0);
    tl.to('.executor-section', { 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'power2.inOut'
    }, 0);

    // 2. Blueprint Tear Effect & Planner Fade
    tl.to('.blueprint', { opacity: 0, scale: 0.8, y: '+=100', rotation: -30, ease: 'power2.in' }, 0);
    tl.to('.person-planner', { opacity: 0, x: '-=100', ease: 'power2.in' }, 0);
    tl.to('.blueprint-tear', { opacity: 1, scale: 1.5, ease: 'expo.out' }, 0.1);
    tl.to('.blueprint-tear', { opacity: 0 }, 0.3);

    // 3. Executor Appears and Falls
    tl.fromTo('.person-executor', 
        { opacity: 0, y: '-100vh', scale: 1.5 }, 
        { opacity: 1, y: '100vh', scale: 1, ease: 'none' }, 0.2
    );

    // 4. Project Panels fly out
    gsap.utils.toArray('.project-panel').forEach((panel, i) => {
        tl.fromTo(panel, 
            { opacity: 0, scale: 0, x: '50vw', y: '50vh', rotation: 0 },
            {
                opacity: 1,
                scale: 1,
                x: () => (Math.random() - 0.5) * 80 + 'vw',
                y: () => (Math.random() - 0.5) * 80 + 'vh',
                rotation: () => (Math.random() - 0.5) * 720,
                ease: 'power2.out',
                duration: 2
            }, 
            0.3 + i * 0.05
        );
    });

    // 5. Data Streams Trail Behind
    gsap.utils.toArray('.data-stream').forEach((stream) => {
        tl.fromTo(stream,
            { opacity: 0, x: (idx) => (idx % 2 === 0 ? '-50vw' : '50vw') },
            { opacity: 1, x: '0', ease: 'power1.inOut', stagger: 0.2 },
            0.5
        );
        tl.to(stream, 
            { y: '100vh', ease: 'none' }, 0.5
        );
    });

    // 6. Landing Target Appears
    tl.to('.landing-section', { bottom: 0, ease: 'power3.in' }, '>-0.5');
    tl.from('.landing-target', { scale: 3, opacity: 0, ease: 'elastic.out(1, 0.5)' });

});
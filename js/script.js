document.addEventListener('DOMContentLoaded', () => {
    const activityCards = document.querySelectorAll('.activity-card');
    const modal = document.getElementById('activityModal');
    const closeButton = document.querySelector('.close-button');

    // Elementos del modal para actualizar
    const speakerName = document.getElementById('speakerName');
    const speakerBio = document.getElementById('speakerBio');
    const speakerPhoto = document.querySelector('.speaker-photo');
    const activityTitleModal = document.getElementById('activityTitleModal');
    const activityDescription = document.getElementById('activityDescription');
    const activityPhoto = document.querySelector('.activity-photo');

    // --- Datos de ejemplo de actividades ---
    // En un proyecto real, esto podría venir de una API o un archivo JSON más grande.
    const activitiesData = {
        "14": {
            "title": "Digital Twins",
            "time": "14:00 - 16:00",
            "speaker": {
                "name": "Ing Ignacio Salas",
                "bio": "José Ignacio Salas Cerón is a mechatronic engineer with over 7 years of experience integrating digital twins of powertrain in the automotive industry.He has worked at Ford since 2018. His current role/title is HIL/SIL Integration and Deployment Engineer in the Vehicle Controls department.He enjoys taking part of challenging situations that require some sort of knowledge about the classical control theory to be resolved. He graduated from the Faculty of Engineering at UNAM, class of 2017.",
			"photo": "img/speaker-ignacio-salas.jpg"
            },
            "activity": {
                "description": "Nowadays, compressed vehicle development time, reduced costs, and optimized personnel utilization in the development and validation of new customer-expected features in vehicles,are imperative goals in the automotive industry.In that context, the development of digital twins to represent the operation of the powertrain and its adjacent subsystems, takes on special relevance. The digital twins provide costeffective and safe virtual environments that enable rapid development and testing of any type of control code.This presentation will cover the use of digital twins for powertrain control code development and testing at Ford.",
			"photo": "img/activity-movilidad.jpg"
            }
        },
        "2": {
            "title": "Taller: Diseño Automotriz con IA",
            "time": "10:30 - 12:30",
            "speaker": {
                "name": "Ing. Ricardo Solís",
                "bio": "Jefe de Diseño UX/UI en Ford Global. Experto en la integración de la inteligencia artificial en el proceso de diseño de interfaces de usuario para vehículos. Ha trabajado en modelos como el Mustang Mach-E.",
                "photo": "img/speaker-ricardo-solis.jpg"
            },
            "activity": {
                "description": "Explora cómo la inteligencia artificial está revolucionando el diseño automotriz, desde la conceptualización hasta la personalización de la experiencia del usuario dentro del vehículo.",
                "photo": "img/activity-diseno-ia.jpg"
            }
        },
		 "m1": {
            "title": "¿Cómo preparar tu entrevista?",
            "time": "13:00 - 14:00",
            "speaker": {
                "name": "Lic Karen Vazquez",
                "bio": "Soy psicóloga organizacional con ocho años de experiencia en Recursos Humanos, especializada en atracción y desarrollo del talento. He tenido la oportunidad de liderar proyectos clave en empresas globales del sector de Telecomunicaciones y Automotriz, donde he contribuido al fortalecimiento de la cultura organizacional y al crecimiento del talento",
                "photo": "img/speaker-karen-vazquez.jpg"
            },
            "activity": {
                "description": "La entrevista de trabajo es una etapa crucial en tu camino profesional, una oportunidad única para demostrar tu potencial y asegurar el puesto de tus sueños. ¿Te gustaría afrontarla con total confianza y maximizar tus posibilidades de éxito? En esta ponencia, te proporcionaremos las herramientas y conocimientos fundamentales para navegar el proceso de entrevista de manera efectiva. Descubrirás cómo presentarte de la mejor forma posible, comunicar tu valor de manera impactante y dejar una impresión memorable en los reclutadores.",
            }
        },
        // Añade más actividades aquí, usando el ID correspondiente
        // "3": { ... }
    };

    // --- Funciones del Modal ---

    function openModal(activityId) {
        const data = activitiesData[activityId];
        if (data) {
            // Rellenar el contenido del modal
            speakerName.textContent = data.speaker.name;
            speakerBio.textContent = data.speaker.bio;
            speakerPhoto.src = data.speaker.photo;
            speakerPhoto.alt = `Foto de ${data.speaker.name}`;

            activityTitleModal.textContent = data.title; // Usamos el título de la actividad principal
            activityDescription.textContent = data.activity.description;
            activityPhoto.src = data.activity.photo;
            activityPhoto.alt = `Foto de la actividad: ${data.title}`;

            modal.style.display = 'flex'; // Mostrar el modal
        } else {
            console.error('No se encontraron datos para la actividad con ID:', activityId);
        }
    }

    function closeModal() {
        modal.style.display = 'none'; // Ocultar el modal
    }

    // --- Event Listeners ---

    // Abrir modal al hacer clic en una tarjeta de actividad
    activityCards.forEach(card => {
        card.addEventListener('click', () => {
            const activityId = card.dataset.activityId;
            openModal(activityId);
        });
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal al presionar la tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});




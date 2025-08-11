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
        "m-8": {
            "title": "Gemelos Digitales: La actualidad del desarrollo de controladores",
            "time": "14:00 - 15:00",
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
		 "w-2": {
            "title": "Innovación en el Vehículo",
            "time": "10:00 - 11:00",
            "speaker": {
                "name": "Marco Bello",
                "bio": "Me llamo Marco Antonio Bello Xelhuantzi, soy Ingeniero en Diseño Automotriz por el Tec de Monterrey y cuento con la maestría en Innovación para el Desarrollo Empresarial por la misma institución, tengo 9 años de experiencia, desde el área de diseño en diversos commodities hasta mi puesto actual como Coordinador de Innovación para el área de Desarrollo de Producto de Ford de México, siendo mis principales responsabilidad la estrategia de innovación, la administración del laboratorio llamado Makerspace, además de los temas relacionados a propiedad intelectual.",
                "photo": "img/speaker-marco-bello.jpg"
            },
            "activity": {
                "description": " aún no la suben "
            }
        },
		"l-6": {
            "title": "Elaboración de CV ",
            "time": "13:00 - 14:00",
            "speaker": {
                "name": "Alexia Huerta",
                "bio": "Profesional con formación en Diseño Industrial por la Universidad Anáhuac y una Maestría en Comunicación Digital, Redes Sociales y Marketing Online por el CEUPE. Cuenta con más de 6 años de experiencia en el desarrollo y gestión de estrategias de atracción de talento y programas enfocados en talento joven. Posee expertise en la implementación de estrategias externas orientadas a potenciar la marca empleadora. Es miembro de Ford desde agosto de 2023.",
                "photo": "img/speaker-alexia-huerta.jpg"
            },
            "activity": {
                "description": "¿Quieres que tu CV destaque entre cientos de candidaturas? En esta ponencia, desvelaremos las claves para construir un CV ganador, centrándonos en el eficiente CV estilo Harvard y entenderás la Visión del Reclutador: qué buscan, cómo leen tu CV en segundos y cómo asegurarte de captar su atención."
            }
        },
		"m-3": {
            "title": "Inteligencia artificial en los vehículos",
            "time": "10:00 - 11:00",
            "speaker": {
                "name": "Julieta Rojas & Marco Ramirez",
                "bio": "Ingeniera en Sistemas y Tecnologías de la Información por la Universidad Anáhuac México, actualmente me desempeño como Artificial Intelligence Engineer. Desde el área de Business Operations colaboro con los equipos de Product Development para identificar oportunidades de mejora, mapear procesos críticos, definir indicadores clave de desempeño (KPIs) que orienten la toma de decisiones y diseñar, desplegar y mantener soluciones de IA que automaticen tareas, optimicen la eficiencia operativa y mejoren la experiencia de usuario. Apasionada por la innovación y el aprendizaje continuo, combino pensamiento estratégico, creatividad y comunicación efectiva para convertir la ciencia de datos en valor tangible.",
                "photo": "img/speaker-julieta-rojas.jpg"
            },
            "activity": {
                "description": "Ingeniero en Sistemas Computacionales en la Escuela Superior de Cómputo del IPN, me especializo en ciencia de datos en el área de Business Operations. Mis principales funciones incluyen apoyar a los empleados de PD en la adopción y uso de herramientas de inteligencia artificial dentro de Ford, colaborar en el diseño e implementación de estrategias clave para su integración, así como contribuir a la automatización de procesos y a la visualización de métricas alineadas con los objetivos y políticas tanto de los empleados como de la compañía.",
				"photo": "img/speaker-marco-ramirez.jpg"
            }
        },
		"w-1": {
            "title": "¿Cómo se diseña un coche Ford?",
            "time": "09:00 - 10:00",
            "speaker": {
                "name": "Estefhanie Gutiérrez",
                "bio": "Ingeniera Mecánica con 9 años de experiencia práctica en el diseño de sistemas de exteriores e interiores y ornamentación automotriz. He colaborado en proyectos como el desarrollo de interiores para la Bronco Sport, Bronco y Mustang, combinando ingeniería con visión centrada en la experiencia del usuario. Con una maestría en Project Management por la Universidad de Barcelona y certificaciones como Scrum Master y Product Owner, reflejo de mi pasión por las metodologías ágiles, la mejora continua y la gestión de proyectos complejos y multidisciplinarios.",
                "photo": "img/speaker-esthefhanie-gutierrez.jpg"
            },
            "activity": {
                "description": "En esta plática, exploraremos el proceso completo de desarrollo de producto de Ford: desde la definición de una idea hasta el lanzamiento en planta, pasando por el diseño y la validación. Verás ejemplos reales de proyectos en los que Ingenieros mexicanos están marcando la diferencia, contribuyendo en cada una de estas etapas, desde el diseño hasta el ensamblaje de vehículos. También hablaremos del lado humano de la ingeniería: cómo habilidades como la comunicación, el liderazgo y el trabajo en equipo potencian tu carrera profesional."
            }
        },
		"w-5": {
            "title": "¿Cómo preparar tu entrevista?",
            "time": "13:00 - 14:00",
            "speaker": {
                "name": "Karen Vázquez",
                "bio": "Psicóloga organizacional con ocho años de experiencia en Recursos Humanos, especializada en atracción y desarrollo del talento. He tenido la oportunidad de liderar proyectos clave en empresas globales del sector de Telecomunicaciones y Automotriz, donde he contribuido al fortalecimiento de la cultura organizacional y al crecimiento del talento.",
                "photo": "img/speaker-karen-vazquez.jpg"
            },
            "activity": {
                "description": "¿Te sientes listo para afrontar una entrevista de trabajo con total confianza y maximizando tus posibilidades de éxito? En esta ponencia, te daremos las herramientas y conocimientos fundamentales para navegar el proceso de entrevista de manera efectiva. Descubrirás cómo presentarte de la mejor forma posible, comunicar tu valor de manera impactante y dejar una impresión memorable en los reclutadores."
            }
        },
		"j-3": {
            "title": "Simulación de Entrevista",
            "time": "14:00 - 15:00",
            "speaker": {
                "name": "Karen Palacios",
                "bio": "Más de 12 años de experiencia en Adquisición de Talento, especializada en perfiles de TI para empresas multinacionales en Norteamérica y Latinoamérica. Proceso de principio a fin, actuando como socio y consultor, alta demanda, liderando proyectos para BPO, RPO partnering y firmas de consultoría",
                "photo": "img/speaker-karen-palacios.jpg"
            },
            "activity": {
                "description": "Esta sesión está diseñada para los ganadores de nuestra actividad tipo Shark Tank, con la intención de que pongas a prueba tus habilidades de comunicación bajo la guía de Karen, recibas feedback personalizado y de alto valor sobre tu desempeño, perfecciones tu narrativa y aprendas a destacar tu propuesta de valor en un entorno realista."
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











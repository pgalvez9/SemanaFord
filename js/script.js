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
		/* HORARIO LUNES */
		
		"l-1": {
            "title": "Inauguración / 100 años de Ingeniería en México",
            "time": "09:00 - 10:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Juan Santillán",
                "bio": "Egresado de la Universidad Anáhuac como Ingeniero Mecánico Eléctrico con una Maestría en Planeación Estratégica y Tecnologias, Juan Santillán cuenta con 25 años de experiencia en Ford Motor Company, incluyendo 9 años en asignaciones internacionales. Su trayectoria abarca desde la ingeniería de chasis para camiones y autos de segmento familiar en EE.UU. y el desarrollo de plataformas globales en Japón (Mazda), hasta el desarrollo, pruebas y validación de vehículos compactos en Alemania. De vuelta en México, lideró lanzamientos de nuevos vehículos y, como Global Chief Engineer, dirigió el desarrollo de productos globales como Ford Bronco Sport y Maverick. Reconocido por la revista Expansión como una de las 30 promesas en México,  actualmente, como Director de Desarrollo de Producto de Ford de México, lidera un equipo de más de 3400 ingenieros, impulsando el diseño, desarrollo y validación de vehículos a nivel mundial.",
                "photo": "img/speaker-juan-santillan.png"
            },
            "activity": {
                "description": "Ingeniero en Sistemas Computacionales en la Escuela Superior de Cómputo del IPN, me especializo en ciencia de datos en el área de Business Operations. Mis principales funciones incluyen apoyar a los empleados de PD en la adopción y uso de herramientas de inteligencia artificial dentro de Ford, colaborar en el diseño e implementación de estrategias clave para su integración, así como contribuir a la automatización de procesos y a la visualización de métricas alineadas con los objetivos y políticas tanto de los empleados como de la compañía.",
				
            }
		},
		"l-2": {
            "title": "Ingenieras Mexicanas",
            "time": "10:00 - 11:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Stephanie Machorro, Michelle Jaramillo, Gabriela Vargas, Grisel Felipe",
                "bio": "Stephanie Marín es ingeniera en gestión empresarial con maestría en ingeniería industrial. Con más de una década de experiencia en áreas como recursos humanos, ventas, manufactura, estimación de costos y gestión de programas, actualmente se desempeña como Program Manager en el área de Global Engineering Services dentro de Ford, liderando proyectos estratégicos de alto impacto. Apasionada por la ingeniería y el impulso del talento femenino en STEM, combina su carrera con su vida personal como esposa y madre de una niña pequeña, inspirando a otras mujeres a construir trayectorias profesionales plenas y equilibradas.",
                "photo": "img/speaker-stephanie-marin.png"
            },
            "activity": {
                "description": "TBD",
				
            }
		},
		"l-3": {
            "title": "Taller de Design Thinking- Día 1",
            "time": "11:00 - 12:30",
			"audience": "Preselección",
			"location": "CIA - Sótano",
            "speaker": {
                "name": "Jessica Mayo. Arturo Garcia, Uriel Loza",
                "bio": "",
                "photo": "img/speaker-jessica-mayo.png"
            },
            "activity": {
                "description": "El equipo de Ford ha diseñado un taller para llevar a una selección de alumnos a través de el modelo de Design Thinking",
				
            }
		},
		"l-4": {
            "title": "Design Thinking",
            "time": "11:00 - 12:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Jessica Mayo",
                "bio": "TBD",
                "photo": "img/speaker-jessica-mayo.png"
            },
            "activity": {
                "description": "",
				
            }
		},
		"l-5": {
            "title": "Vehicle Showtime",
            "time": "12:00 - 13:00",
			"audience": "General",
			"location": "Explanada CIA",
            "activity": {
                "description": "Ven a conocer e interactuar con nuestros vehículos Ford",
				"photo": "img/speaker-vehicle-showtime.jpg"
            }
		},
		"l-6": {
            "title": "Elaboración de CV ",
            "time": "13:00 - 14:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Alexia Huerta",
                "bio": "Profesional con formación en Diseño Industrial por la Universidad Anáhuac y una Maestría en Comunicación Digital, Redes Sociales y Marketing Online por el CEUPE. Cuenta con más de 6 años de experiencia en el desarrollo y gestión de estrategias de atracción de talento y programas enfocados en talento joven. Posee expertise en la implementación de estrategias externas orientadas a potenciar la marca empleadora. Es miembro de Ford desde agosto de 2023.",
                "photo": "img/speaker-alexia-huerta.jpg"
            },
            "activity": {
                "description": "¿Quieres que tu CV destaque entre cientos de candidaturas? En esta ponencia, desvelaremos las claves para construir un CV ganador, centrándonos en el eficiente CV estilo Harvard y entenderás la Visión del Reclutador: qué buscan, cómo leen tu CV en segundos y cómo asegurarte de captar su atención."
            }
        },
		"l-7": {
            "title": "Hexadrive",
            "time": "14:00 - 15:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Rafael Hernández",
                "bio": "Rafael Hernández Cervantes es un ingeniero mecatrónico con una formación académica que incluye un MBA y estudios de maestría en Tecnologías de cómuputo y doctorado en proceso en Ciencias de la Computación. Con 12 años de trayectoria en Ford, lidera proyectos en los laboratorios de pruebas vehiculares, buscando generar ahorros a la compañía y mejorar la eficiencia operativa a través de la innovación proactiva.",
                "photo": "img/speaker-rafael-hernandez.jpg"
            },
            "activity": {
                "description": "¿Quieres que tu CV destaque entre cientos de candidaturas? En esta ponencia, desvelaremos las claves para construir un CV ganador, centrándonos en el eficiente CV estilo Harvard y entenderás la Visión del Reclutador: qué buscan, cómo leen tu CV en segundos y cómo asegurarte de captar su atención."
            }
        },
		/* HORARIO MARTES */
		"m-1": {
            "title": "Ford Clubs / Corporate Games",
            "time": "09:00 - 10:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Jocelyn Moctezuma, Gabriela Tiscareño, Fernando Barajas y Rodrigo Téllez",
                "bio": "TBD",
                "photo": "img/speaker-jocelyn-moctezuma.png"
            },
            "activity": {
                "description": "En esta sesión nos adentraremos en el mundo de los Ford Clubs, una iniciativa nacional diseñada para fomentar la integración, el bienestar y el espíritu de equipo entre empleados de diversas empresas a través de disciplinas deportivas, artísticas y más. Exploraremos qué son los Corporate Games y, específicamente, la experiencia de la participación de Ford en México, destacando cómo Ford ha impulsado activamente el desarrollo integral de sus colaboradores en este marco.",
            }
        },
		"m-2": {
            "title": "SCRUM",
            "time": "09:00 - 10:00",
			"audience": "Preselección",
			"location": "Sala",
            "speaker": {
                "name": "Pedro Gálvez",
                "bio": "Ingeniera en Sistemas y Tecnologías de la Información por la Universidad Anáhuac México, actualmente me desempeño como Artificial Intelligence Engineer. Desde el área de Business Operations colaboro con los equipos de Product Development para identificar oportunidades de mejora, mapear procesos críticos, definir indicadores clave de desempeño (KPIs) que orienten la toma de decisiones y diseñar, desplegar y mantener soluciones de IA que automaticen tareas, optimicen la eficiencia operativa y mejoren la experiencia de usuario. Apasionada por la innovación y el aprendizaje continuo, combino pensamiento estratégico, creatividad y comunicación efectiva para convertir la ciencia de datos en valor tangible.",
                "photo": "img/speaker-julieta-rojas.png"
            },
            "activity": {
                "description": "TBD",
            }
        },
		"m-3": {
            "title": "Inteligencia Artificial en los Vehículos",
            "time": "10:00 - 11:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Julieta Rojas & Marco Ramirez",
                "bio": "Ingeniera en Sistemas y Tecnologías de la Información por la Universidad Anáhuac México, actualmente me desempeño como Artificial Intelligence Engineer. Desde el área de Business Operations colaboro con los equipos de Product Development para identificar oportunidades de mejora, mapear procesos críticos, definir indicadores clave de desempeño (KPIs) que orienten la toma de decisiones y diseñar, desplegar y mantener soluciones de IA que automaticen tareas, optimicen la eficiencia operativa y mejoren la experiencia de usuario. Apasionada por la innovación y el aprendizaje continuo, combino pensamiento estratégico, creatividad y comunicación efectiva para convertir la ciencia de datos en valor tangible.",
                "photo": "img/speaker-julieta-rojas.png"
            },
            "activity": {
                "description": "Ingeniero en Sistemas Computacionales en la Escuela Superior de Cómputo del IPN, me especializo en ciencia de datos en el área de Business Operations. Mis principales funciones incluyen apoyar a los empleados de PD en la adopción y uso de herramientas de inteligencia artificial dentro de Ford, colaborar en el diseño e implementación de estrategias clave para su integración, así como contribuir a la automatización de procesos y a la visualización de métricas alineadas con los objetivos y políticas tanto de los empleados como de la compañía.",
				
            }
        },
		"m-4": {
            "title": "De la Facultad al Éxito",
            "time": "11:00 - 12:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Francisco Lugo",
                "bio": "Francisco Armando Lugo Mayorga es un destacado Ingeniero Mecatrónico, egresado de la Facultad de Ingeniería de la Universidad Nacional Autónoma de México (UNAM). Con una sólida trayectoria profesional, Francisco cuenta con más de 13 años de experiencia en la industria automotriz, específicamente en Ford Motor Company, donde ha desempeñado diversas funciones en áreas clave de ingeniería. Durante su carrera, ha demostrado una notable capacidad de liderazgo y gestión, lo que lo llevó a ocupar el cargo de Supervisor de Ingeniería en Liberaciones de Software a nivel mundial durante 3 años, cargo que sigue ocupando, aportando significativamente al desarrollo y la implementación de soluciones tecnológicas innovadoras. Además, Francisco ha complementado su formación técnica con un diplomado en Project Management, lo que le ha permitido dirigir proyectos complejos con eficiencia y eficacia, destacándose por su habilidad para coordinar equipos multidisciplinarios y asegurar el éxito en la entrega de resultados.",
                "photo": "img/speaker-francisco-lugo.png"
            },
            "activity": {
                "description": "¿Cómo transformar tu título de ingeniería en una carrera de impacto? En esta charla, compartiré mi viaje personal desde los salones de la facultad hasta la industria global. Les compartiré las habilidades clave y recomendaciones que para mí marcaron la diferencia.",
            }
        },
		"m-5": {
            "title": "Taller de Design Thinking- Día 2",
            "time": "11:00 - 12:30",
			"audience": "Preselección",
			"location": "CIA - Sótano",
            "speaker": {
                "name": "Jessica Mayo. Arturo Garcia, Uriel Loza",
                "bio": "",
                "photo": "img/speaker-jessica-mayo.png"
            },
            "activity": {
                "description": "El equipo de Ford ha diseñado un taller para llevar a una selección de alumnos a través de el modelo de Design Thinking",
            }
        },
		"m-6": {
            "title": "Vehicle Showtime",
            "time": "12:00 - 13:00",
			"audience": "General",
			"location": "Explanada CIA",
            "activity": {
                "description": "Ven a conocer e interactuar con nuestros vehículos Ford",
				"photo": "img/speaker-vehicle-showtime.jpg"
            }
        },
		"m-7": {
            "title": "Coloquio PARA - Experiencias compartidas por Ingenieros de Ford",
            "time": "13:00 - 14:00",
			"audience": "General y Agrupaciones",
			"location": "Auditorio",
            "speaker": {
                "name": "Carlos Melgarejo, Ivonne Bárcenas y Pablo Gómez",
                "bio": "TBD",
                "photo": "img/speaker-carlos-melgarejo.png"
            },
            "activity": {
                "description": "Una sesión de diálogo abierto que reúne a ingenieros experimentados de Ford y a estudiantes aspirantes de ingeniería, miembros del Programa de Alto Rendimiento Académico (PARA) de la Facultad de Ingeniería de la UNAM. Diseñada para cerrar la brecha entre el aprendizaje académico y los desafíos de ingeniería del mundo real, esta mesa redonda fomenta un intercambio de conocimientos. Los ponentes compartirán con los estudiantes cómo el PARA influyó en sus trayectorias profesionales y los estudiantes obtendrán conocimientos prácticos sobre el desarrollo de vehículos, metodologías de resolución de problemas y trayectorias profesionales directamente de líderes de la industria. Al mismo tiempo, los ingenieros de Ford podrán interactuar con la próxima generación de innovadores, comprendiendo filosofías de diseño emergentes y fomentando el talento futuro. Esta interacción dinámica tiene como objetivo inspirar, educar y cultivar una base sólida para la futura excelencia en ingeniería automotriz.",
            }
        },
        "m-8": {
            "title": "Gemelos Digitales: La actualidad del desarrollo de controladores",
            "time": "14:00 - 15:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Ing Ignacio Salas",
                "bio": "José Ignacio Salas Cerón is a mechatronic engineer with over 7 years of experience integrating digital twins of powertrain in the automotive industry.He has worked at Ford since 2018. His current role/title is HIL/SIL Integration and Deployment Engineer in the Vehicle Controls department.He enjoys taking part of challenging situations that require some sort of knowledge about the classical control theory to be resolved. He graduated from the Faculty of Engineering at UNAM, class of 2017.",
			"photo": "img/speaker-ignacio-salas.jpg"
            },
            "activity": {
                "description": "Hoy en día, la disminución de los tiempos de desarrollo de un automóvil, la reducción de costos y la optimización de la utilización de personal, así como la validación de nuevas funcionalidades altamente apreciadas por los consumidores, son metas esenciales en la industria automotriz. En ese contexto, el desarrollo de gemelos digitales para representar la operación de un tren motriz y sus subsistemas adyacentes, toma especial relevancia. Los gemelos digitales proveen entornos virtuales seguros y rentables, que permiten un desarrollo veloz y la puesta a prueba de cualquier tipo de código de control. Esta presentación cubrirá el uso de gemelos digitales del tren motriz para el desarrollo y puesta a prueba del código de controladores en Ford.",
            }
        },
		/* HORARIO MIÉRCOLES */
		"w-1": {
            "title": "¿Cómo se diseña un coche Ford?",
            "time": "09:00 - 10:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Estefhanie Gutiérrez",
                "bio": "Ingeniera Mecánica con 9 años de experiencia práctica en el diseño de sistemas de exteriores e interiores y ornamentación automotriz. He colaborado en proyectos como el desarrollo de interiores para la Bronco Sport, Bronco y Mustang, combinando ingeniería con visión centrada en la experiencia del usuario. Con una maestría en Project Management por la Universidad de Barcelona y certificaciones como Scrum Master y Product Owner, reflejo de mi pasión por las metodologías ágiles, la mejora continua y la gestión de proyectos complejos y multidisciplinarios.",
                "photo": "img/speaker-esthefhanie-gutierrez.jpg"
            },
            "activity": {
                "description": "En esta plática, exploraremos el proceso completo de desarrollo de producto de Ford: desde la definición de una idea hasta el lanzamiento en planta, pasando por el diseño y la validación. Verás ejemplos reales de proyectos en los que Ingenieros mexicanos están marcando la diferencia, contribuyendo en cada una de estas etapas, desde el diseño hasta el ensamblaje de vehículos. También hablaremos del lado humano de la ingeniería: cómo habilidades como la comunicación, el liderazgo y el trabajo en equipo potencian tu carrera profesional."
            }
        },
		 "w-2": {
            "title": "Innovación en el Vehículo",
            "time": "10:00 - 11:00",
			"audience": "General",
			"location": "Auditorio",
            "activity": {
                "description": " aún no la suben "
            },
            "speaker": {
                "name": "Marco Bello",
                "bio": "Me llamo Marco Antonio Bello Xelhuantzi, soy Ingeniero en Diseño Automotriz por el Tec de Monterrey y cuento con la maestría en Innovación para el Desarrollo Empresarial por la misma institución, tengo 9 años de experiencia, desde el área de diseño en diversos commodities hasta mi puesto actual como Coordinador de Innovación para el área de Desarrollo de Producto de Ford de México, siendo mis principales responsabilidad la estrategia de innovación, la administración del laboratorio llamado Makerspace, además de los temas relacionados a propiedad intelectual.",
                "photo": "img/speaker-marco-bello.JPG"
            }
        },
		"w-3": {
            "title": "Egresados en Ford",
            "time": "11:00 - 12:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Oscar Carranza, Fabián Sánchez, Karla Ramírez, Rodrigo Rodríguez, Erick Ramos, Ma. Fernanda Landeros, Brenda Ávila",
                "bio": "Falta",
                "photo": "img/speaker-egresados.jpg"
            },
            "activity": {
                "description": "Se trata de una dinámica en la que los estudiantes pueden hacer preguntas a los ingenieros que actualmente trabajan en Ford, que son egresados de la facultad de ingeniería sobre como es su día a día laboralmente, los retos que han enfrentado y las recomendaciones que les gustarían compartir con ellos para su desarrollo profesional y conocer la empresa. Registra tu asistencia en el siguiente link: https://forms.office.com/r/gz2WHDVxTe?origin=lprLink."
			}
			
            },
		"w-4": {
            "title": "Vehicle Showtime",
            "time": "12:00 - 13:00",
			"audience": "General",
			"location": "Explanada CIA",
            "activity": {
                "description": "Ven a conocer e interactuar con nuestros vehículos Ford",
				"photo": "img/speaker-vehicle-showtime.jpg"
            }
            },
		"w-5": {
            "title": "¿Cómo preparar tu entrevista?",
            "time": "13:00 - 14:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Karen Vázquez",
                "bio": "Psicóloga organizacional con ocho años de experiencia en Recursos Humanos, especializada en atracción y desarrollo del talento. He tenido la oportunidad de liderar proyectos clave en empresas globales del sector de Telecomunicaciones y Automotriz, donde he contribuido al fortalecimiento de la cultura organizacional y al crecimiento del talento.",
                "photo": "img/speaker-karen-vazquez.jpg"
            },
            "activity": {
                "description": "¿Te sientes listo para afrontar una entrevista de trabajo con total confianza y maximizando tus posibilidades de éxito? En esta ponencia, te daremos las herramientas y conocimientos fundamentales para navegar el proceso de entrevista de manera efectiva. Descubrirás cómo presentarte de la mejor forma posible, comunicar tu valor de manera impactante y dejar una impresión memorable en los reclutadores."
            }
        },
		"w-6": {
            "title": "¿Cómo construir sistemas basados en agentes?",
            "time": "14:00 - 15:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Leonardo Trujillo y Arturo Horcasitas",
                "bio": "",
                "photo": "img/speaker-arturo-horcasitas.jpg"
            },
            "activity": {
                "description": "TBD"
            }
        },
		"w-7": {
            "title": "Experiencia de trabajo en equipo en Ford",
            "time": "14:00 - 15:00",
			"audience": "Preselección",
			"location": "Sala",
            "speaker": {
                "name": "Roberto Peña y Enrique González",
                "bio": "TBD",
                "photo": "img/speaker-roberto-peña.jpg"
            },
            "activity": {
                "description": "TBD"
            }
        },
		"w-8": {
            "title": "De 'Fórmula SAE' a la ingeniería automotriz, experiencias compartidas.",
            "time": "15:00 - 16:30",
			"audience": "General y Agrupaciones",
			"location": "Auditorio",
            "speaker": {
                "name": "Santiago Aguilar, Paulo Becerril, Miguel Clemente, Salvador Honorato y Francisco Villa",
                "bio": "TBD",
                "photo": "img/speaker-santiago-aguilar.jpg"
            },
            "activity": {
                "description": "TBD"
            }
        },
			/* HORARIO JUEVES */
		"j-1": {
            "title": "Shark tank presentation",
            "time": "10:00 - 11:00",
            "audience": "General",
            "location": "TBD",
            "activity": {
                "description": "Te invitamos a las presentaciones finales de los equipos participantes del taller de Design Thinking.  Tendremos un panel de jueces invitados que darán retroalimentación a los equipos."
            }
        },
		"j-2": {
              "title": "Shark tank Awards",
            "time": "11:00 - 12:00",
            "audience": "General",
            "location": "TBD",
            "activity": {
                "description": "Acompáñanos a la premiación de los equipos participantes del taller de Design Thinking."
            }
        },
		"j-3": {
            "title": "Vehicle Show Time",
            "time": "12:00 - 13:00",
            "audience": "General",
            "location": "Explanada CIA",
            "activity": {
                "description": "Ven a conocer e interactuar con nuestros vehículos Ford."
            }
        },
		"j-4": {
            "title": "Simulación de Entrevista",
            "time": "14:00 - 15:00",
			"audience": "General",
			"location": "Auditorio",
            "speaker": {
                "name": "Karen Palacios",
                "bio": "Más de 12 años de experiencia en Adquisición de Talento, especializada en perfiles de TI para empresas multinacionales en Norteamérica y Latinoamérica. Proceso de principio a fin, actuando como socio y consultor, alta demanda, liderando proyectos para BPO, RPO partnering y firmas de consultoría",
                "photo": "img/speaker-karen-palacios.jpg"
            },
            "activity": {
                "description": "Esta sesión está diseñada para los ganadores de nuestra actividad tipo Shark Tank, con la intención de que pongas a prueba tus habilidades de comunicación bajo la guía de Karen, recibas feedback personalizado y de alto valor sobre tu desempeño, perfecciones tu narrativa y aprendas a destacar tu propuesta de valor en un entorno realista."
            }
        },
		"j-5": {
            "title": "Ford y Baja SAE",
            "time": "15:00 - 16:00",
            "audience": "General",
            "location": "TBD",
            "speaker": {
                "name": "Antonio Gómez",
                "bio": "falta",
                "photo": "img/speaker-Antonio-Gómez.jpg",
                "name": "Alan González",
                "bio": "falta",
                "photo": "img/speaker-Alan-González.jpg",
                "name": "Pablo Guzmán",
                "bio": "falta",
                "photo": "img/speaker-Pablo-Guzmán.jpg",
                "name": "Omar López",
                "bio": "falta",
                "photo": "img/speaker-Omar_López.jpg",
                "name": "Óscar Santos",
                "bio": "falta",
                "photo": "img/speaker-Óscar_Santos.jpg"
            },
            "activity": {
                "description": "¡Reúnete con ex-bajas y descubre el camino del éxito en Ford de la mano de quienes lo iniciaron como tú! Ellos están listos para compartir su experiencia para ayudarte en el diseño de tu vehículo y brindar una perspectiva real sobre cómo sus estudios y experiencias como baja SAE se tradujeron en habilidades aplicables y éxito en su vida laboral. Aprovecha esta conexión única para inspirarte y aprender."
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























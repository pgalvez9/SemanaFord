document.addEventListener('DOMContentLoaded', () => {
    const activityCards = document.querySelectorAll('.activity-card');
    const modal = document.getElementById('activityModal');
    const closeButton = document.querySelector('.close-button');

    // Elementos del modal para actualizar
    const modalSpeakerInfo = document.getElementById('modalSpeakerInfo');
    const speakerDetailsContainer = document.getElementById('speakerDetailsContainer'); // NUEVO: Referencia al contenedor de ponentes


    const activityAudience = document.getElementById('activityAudience');
    const activityLocation = document.getElementById('activityLocation');
    const activityTime = document.getElementById('activityTime');

    const modalContent = document.querySelector('.modal-content');
    // --- Datos de ejemplo de actividades ---
    // En un proyecto real, esto podría venir de una API o un archivo JSON más grande.
    const activitiesData = {
		/* HORARIO LUNES */
		
		"l-1": {
            "title": "Inauguración / 100 años de Ingeniería en México",
            "time": "09:00 - 10:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Juan Santillán",
                "bio": "Egresado de la <b>Universidad Anáhuac como Ingeniero Mecánico Eléctrico con una Maestría en Planeación Estratégica y Tecnologias</b>, Juan Santillán cuenta con 25 años de experiencia en Ford Motor Company, incluyendo 9 años en asignaciones internacionales. Su trayectoria abarca desde la ingeniería de chasis para camiones y autos de segmento familiar en EE.UU. y el desarrollo de plataformas globales en Japón (Mazda), hasta el desarrollo, pruebas y validación de vehículos compactos en Alemania. De vuelta en México, lideró lanzamientos de nuevos vehículos y, como Global Chief Engineer, dirigió el desarrollo de productos globales como Ford Bronco Sport y Maverick. Reconocido por la revista Expansión como una de las 30 promesas en México,  actualmente, como Director de Desarrollo de Producto de Ford de México, lidera un equipo de más de 3400 ingenieros, impulsando el diseño, desarrollo y validación de vehículos a nivel mundial.",
                "photo": "img/speaker-juan-santillan.jpg"
                }
            ],
            "activity": {
                "description": "¡Bienvenidos a la sesión de apertura de la Semana UNAM 2025! En esta sesión Juan Santillán, Director de Desarrollo de Producto de Ford de México, compartirá con nosotros la profunda historia y el impacto duradero de Ford en la industria automotriz, destacando la relevancia de esta celebración en nuestra universidad.",
            }
		},
		"l-2": {
            "title": "Voces de Ingenieras de Ford México en la UNAM",
            "time": "10:00 - 11:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Stephanie Marín",
                "bio": "Stephanie Marín es <b>Ingeniera en Gestión Empresarial con Maestría en Ingeniería Industrial</b>. Con más de una década de experiencia en áreas como recursos humanos, ventas, manufactura, estimación de costos y gestión de programas, actualmente se desempeña como Program Manager en el área de Global Engineering Services dentro de Ford, liderando proyectos estratégicos de alto impacto. Apasionada por la ingeniería y el impulso del talento femenino en STEM, combina su carrera con su vida personal como esposa y madre de una niña pequeña, inspirando a otras mujeres a construir trayectorias profesionales plenas y equilibradas.",
                "photo": "img/speaker-stephanie-marin.jpg"
                },
				{
                "name": "Michelle Jaramillo",
                "bio": "Con 29 años y más de 6 años de experiencia en la industria automotriz, Michelle Jaramillo ha liderado proyectos estratégicos en manufactura, producción e innovación. Su trayectoria incluye el lanzamiento exitoso de una planta de pintura, así como la implementación de mejoras operativas a través de metodologías de excelencia. Actualmente forma parte del equipo de CSAP, donde se desempeña en iniciativas de transformación enfocadas en eficiencia, calidad y sostenibilidad. Está certificada como Lean Six Sigma Black Belt, lo que respalda su capacidad para liderar proyectos de mejora continua con enfoque en datos y resultados. Michelle es Ingeniera egresada de la Facultad de Ingeniería de la UNAM y actualmente cursa una Maestría en el Tecnológico de Monterrey, fortaleciendo su perfil con herramientas de liderazgo, innovación y gestión avanzada de operaciones.",
                "photo": "img/speaker-michelle-jaramillo.jpg"
                },
				{
                "name": "Gabriela Ortiz",
                "bio": "Gabriela Ortiz Vargas es Ingeniera DevOps en el área de herramientas para desarrolladores en Ford.  Su proactividad y compromiso le han ayudado a tomar nuevas oportunidades de crecimiento profesional, ha trabajado en empresas internacionales en donde ha enriquecido su conocimiento técnico así como aprender de un ambiente multicultural.",
                "photo": "img/speaker-gabriela-ortiz.jpg"
                },
				{
                "name": "Grisel Felipe",
                "bio": "Grisel Felipe Avalos es <b>Ingeniera en Telecomunicaciones</b> y orgullosa <b>egresada de la UNAM</b>, es una líder innovadora en Ford. Con una década de experiencia, actualmente como Global Trade Services Product Manager, impulsa la innovación y lidera un equipo de desarrollo de software clave para la exportación de vehículos a escala global.",
                "photo": "img/speaker-grisel-felipe.jpg"
                }
            ],
            "activity": {
                "description": "¿Alguna vez te has preguntado cómo es el día a día de una ingeniera en una de las empresas automotrices más grandes del mundo? ¿Sueñas con innovar, diseñar y ser parte de la transformación de la movilidad? Te invitamos a un panel exclusivo y lleno de inspiración con cuatro destacadas ingenieras de Ford de México, y lo más importante: ¡todas ellas orgullosas exalumnas de la UNAM! Desde las líneas de producción más avanzadas hasta el desarrollo de nuevas tecnologías, nuestras panelistas compartirán sus experiencias, desafíos superados y los momentos más gratificantes de sus trayectorias profesionales, demostrando que el camino de la ingeniería egresado de la UNAM puede llevarte a las cimas de la industria global. Descubre de primera mano: Cómo es la vida de una ingeniera en la industria automotriz actual, con la perspectiva de quienes pisaron los mismos pasillos que tú. Las habilidades clave y las oportunidades de crecimiento en un sector en constante evolución. Consejos prácticos para estudiantes de ingeniería que buscan forjar su propio camino, directamente de quienes ya lo recorrieron. La visión de Ford sobre el futuro de la movilidad y el papel de la ingeniería en él. No pierdas esta oportunidad única de conectar con profesionales que están marcando la diferencia y de vislumbrar el impacto que tú puedes tener. ¡Prepárate para ser inspirado y para acelerar tu futuro profesional! ¡Te esperamos para impulsar juntos la ingeniería del mañana!",
            }
		},
		"l-3": {
            "title": "Taller de Design Thinking- Día 1",
            "time": "11:00 - 12:30",
			"audience": "Preselección",
			"location": "CIA - Sótano",
            "speakers": [
                {
                "name": "Arturo García",
                "bio": "Arturo García es <b>Maestro en Ingeniería Electromecánico</b> y actualmente tiene el puesto de Ingeniero de pruebas y Manager de Proyectos en Ford",
                "photo": "img/speaker-arturo-garcia.jpg"
                },
				 {
                "name": "Jessica Mayo",
                "bio": "Jessica Mayo es <b>Licenciada en Relaciones Comerciales del IPN</b> además de contar con una <b>Maestría en Gestión de Innovación Tecnológica por parte de la Ibero</b>. Actualmente tiene el puesto de Program Management Analyst",
                "photo": "img/speaker-jessica-mayo.jpg"
                },
				 {
                "name": "Uriel Loza",
                "bio": "Uriel Loza es <b>Maestro en Ingenería Aeronáutica</b> y actualmente tiene el puesto de Ingeniero de CAE Vehicle Durability en Ford",
                "photo": "img/speaker-uriel-loza.jpg"
                },
				 {
                "name": "Arturo Tuddon",
                "bio": "Arturo Tuddon estudió <b>Ingeniería Mecánica y Administración, así como una Maestría en Gestión de la Ingeniería en el Tec de Monterrey</b>. Con más de 14 años de experiencia en Ford, Arturo ha recorrido un camino que va desde trabajar en pruebas vehiculares y diversos laboratorios hasta llegar a su puesto actual de Global Vendor Tooling Purchasing Manager, liderando las compras globales de herramentales de inyección de plástico.",
                "photo": "img/speaker-arturo-tuddon.jpg"
                }
            ],
            "activity": {
                "description": "Design Thinking, es un modelo clave para el desarrollo de producto y de soluciones centradas en el usuario, será impartido por ingenieros expertos de Ford ¿Qué aprenderás en este taller? Fundamentos del Design Thinking, resolver desafíos reales de productos de Ford, networking con ingenieros de Ford. Esta es una oportunidad única para aplicar tus conocimientos, expandir tu red profesional y obtener una perspectiva sobre la cultura de innovación en una de las empresas líderes a nivel mundial.",
				
            }
		},
		"l-4": {
            "title": "Design Thinking",
            "time": "11:00 - 12:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Jessica Mayo",
                "bio": "Jessica Mayo es <b>Licenciada en Relaciones Comerciales del IPN</b> además de contar con una <b>Maestría en Gestión de Innovación Tecnológica por parte de la Ibero</b>. Actualmente tiene el puesto de Program Management Analyst",
                "photo": "img/speaker-jessica-mayo.jpg"
                }
            ],
            "activity": {
                "description": "Design Thinking es un modelo clave para el desarrollo de producto y de soluciones centradas en el usuario. Nos ayuda a comprender y diseñar para las necesidades de las personas mejor que nadie. Si bien se le conoce con diversos nombres, el Design Thinking es un enfoque creativo de resolución de problemas que ayuda a Ford a desarrollar resultados holísticos centrados en el ser humano. ",	
            }
		},
		"l-5": {
            "title": "Vehicle Showtime",
            "time": "12:00 - 13:00",
			"audience": "General",
			"location": "Explanada CIA",
			"speakers": [
				{
					"bio": "",
					"photo":"img/speaker-vehicle-showtime.jpg"
				}
				],
            "activity": {
                "description": "Ven a conocer e interactuar con nuestros vehículos Ford",
            }
		},
		"l-6": {
            "title": "Elaboración de CV ",
            "time": "13:00 - 14:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Alexia Huerta",
                "bio": "Profesional con formación en <b>Diseño Industrial por la Universidad Anáhuac</b> y una <b>Maestría en Comunicación Digital, Redes Sociales y Marketing Online por el CEUPE</b>. Cuenta con más de 6 años de experiencia en el desarrollo y gestión de estrategias de atracción de talento y programas enfocados en talento joven. Posee expertise en la implementación de estrategias externas orientadas a potenciar la marca empleadora. Es miembro de Ford desde agosto de 2023.",
                "photo": "img/speaker-alexia-huerta.jpg"
                }
            ],
			"activity": {
                "description": "¿Quieres que tu CV destaque entre cientos de candidaturas? En esta ponencia, desvelaremos las claves para construir un CV ganador, centrándonos en el eficiente CV estilo Harvard y entenderás la Visión del Reclutador: qué buscan, cómo leen tu CV en segundos y cómo asegurarte de captar su atención."
            }
            
        },
		"l-7": {
            "title": "Hexadrive",
            "time": "14:00 - 15:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Rafael Hernández",
                "bio": "Rafael Hernández Cervantes es un <b>Ingeniero Mecatrónico</b> con una formación académica que incluye un <b>MBA y estudios de maestría en Tecnologías de cómuputo y doctorado en proceso en Ciencias de la Computación</b>. Con 12 años de trayectoria en Ford, lidera proyectos en los laboratorios de pruebas vehiculares, buscando generar ahorros a la compañía y mejorar la eficiencia operativa a través de la innovación proactiva.",
                "photo": "img/speaker-rafael-hernandez.jpg"
                }
            ],
            "activity": {
                "description": "El Hexadrive es un equipo donde se realizan pruebas de tanques de combustible.En esta platica se abordará el proceso de correlación implementado para validar estas pruebas, destacando los desafíos de ingeniería enfrentados a lo largo del proyecto, describiendo acciones futuras."
            }
        },
		"l-8": {
            "title": "De 'Baja SAE' a la Industria Automotriz, experiencias compartidas",
            "time": "15:30 - 17:00",
            "audience": "General",
            "location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Antonio Gómez",
                "bio": "Antonio Gómez Ingeniero con formación de posgrado de la Facultad de Ingeniería. Cuenta con una sólida trayectoria en el área de Diseño y CAE, Su trayectoria profesional incluye la participación en proyectos de investigación nacionales e internacionales, así como experiencia en las industrias aeronáutica y automotriz. Actualmente se desempeña como Subject Matter Expert de Amortiguadores en Ford.",
                "photo": "img/speaker-antonio-gomez.jpg"
                },
                {
                "name": "Alan González",
                "bio": "Alan González se incorporó a Ford en 2017 y comenzó a trabajar como Trainee de Craftsmanship. Cinco meses después, comenzó su carrera en Ford como ingeniero de CAD, con experiencia en IP/Consola, Hard Trim y Seats, donde tuvo una trayectoria de 5 años. Desde 2022 a la fecha, se desempeña como ingeniero de Feasibility para Hard Trim en el departamento de Excellence Appearance Process. Desarrolla análisis de Feasibility para las superficies de la clase A (moldeo de la pieza, empaquetado de bolsas de aire, cinturones de seguridad, módulos electricos, arneses, regulaciones y normatividad por región) asegurando que el diseño de las piezas plásticas esté listo para ser manufacturadas y posteriormente ensambladas",
                "photo": "img/speaker-alan-gonzalez.jpg"
                },
                {
                "name": "Ulises Guzmán",
                "bio": "Ulises Guzmán es un <b>Ingeniero Mecánico egresado de la Facultad de Ingeniería de la UNAM</b>. Cuenta con experiencia en el sector automotriz, habiéndose desempeñado en roles clave dentro de Ford Motor Company, específicamente en las áreas de Ingeniería de Calidad y Business Solutions.",
                "photo": "img/speaker -ulises-guzman.jpg"
                },
                {
                "name": "Omar López",
                "bio": "<b>Ingeniero Mecatrónico egresado de la Facultad de Ingeniería</b>. Experiencia en el sector automotriz, desempeñado roles en áreas como Ingeniería de Calidad, Diseño Asistido por Computadora (CAD) y Gestión de Listas de Materiales (BOM). Trayectoria en empresas automotrices como Ford Motor Company y BMW Group.",
                "photo": "img/speaker-omar-lopez.jpg"
                },
                {
                "name": "Óscar Santos",
                "bio": "Oscar Daniel Santos Galán, Ingeniero de Integración de Hardware de Vehículos en Ford, con siete años de experiencia en la industria automotriz, se especializa en el lanzamiento de nuevos modelos y la gestión de la construcción de prototipos. Participa directamente en desarrollar y trabajar continuamente en la construcción de prototipos para la línea Ford Super Duty, con el objetivo de asegurar una integración de hardware óptima desde el concepto hasta la producción.",
                "photo": "img/speaker-oscar-santos.jpg"
                },
            ],
            "activity": {
                "description": "Una sesión de diálogo abierto que reúne a ingenieros experimentados de Ford y a estudiantes aspirantes de ingeniería del equipo de Baja SAE Puma Off-Road. Diseñada para cerrar la brecha entre el aprendizaje académico y los desafíos de ingeniería del mundo real, esta mesa redonda fomenta un intercambio de conocimientos. Los estudiantes obtendrán conocimientos prácticos sobre el desarrollo de vehículos, metodologías de resolución de problemas y trayectorias profesionales directamente de líderes de la industria. Al mismo tiempo, los ingenieros de Ford podrán interactuar con la próxima generación de innovadores, comprendiendo filosofías de diseño emergentes y fomentando el talento futuro. Esta interacción dinámica tiene como objetivo inspirar, educar y cultivar una base sólida para la futura excelencia en ingeniería automotriz. Acompáñanos al finalizar a la explanada del CIA para la exhibición del vehículo de esta agrupación."
            }
        },
		/* HORARIO MARTES */
		"m-1": {
            "title": "Ford Clubs - Corporate Games",
            "time": "09:00 - 10:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Jocelyn Moctezuma",
                "bio": "Jocelyn es <b>Ingeniero en Mecatrónica graduada del Tec de Monterrey Campus Estado de México</b>, tiene un <b>MBA con especialidad en calidad</b> y comenzó su carrera profesional en Ford Motor Company en el 2009. Dentro de Ford ha adquirido experiencia en diferentes áreas de la compañía, comenzando en el área de manufactura en la planta de Pintura en Cuautitán Izcalli con el proyecto del Ford Fiesta, posteriormente como ingeniero de Body Interior dentro del mismo programa solucionando y mejorando problemas de diseño. Ha sido ingeniero de diseño y desarrollo para diversos programas en Ford como F-150, Bronco Sport, Maverick, etc. Jocelyn también ha adquirido gran experiencia en el área de calidad y tiene una certificación como Black Belt en la metodología Six Sigma. Actualmente es Analista de exportación asegurándose de que las regulaciones necesarias para los diferentes mercados se cumplan y en paralelo a esto es líder de la iniciativa Ford Clubs en Ford de México desarrollando el crecimiento de esta estrategia que ha sido clave para la satisfacción y bienestar de los empleados en Ford.",
                "photo": "img/speaker-joss-moctezuma.jpg"
                },
				{
                "name": "Gabriela Tiscareño",
                "bio": "Gabriela Tiscareño es <b>Licenciada en Comunicación y Medios Digitales,graduada del Tec de Monterrey Campus estado de México con especialización en Estrategia en Redes Sociales</b>. Comenzó su trayectoria profesional como becaria en diferentes start-ups de Marketing Digital en el 2019, fue voluntaria en el Departamento de Comunicación e Información Pública de la UNESCO México, e inició su carrera profesional en Ford en marzo del 2023 como becaria en el área de Cultura y Diversidad, Equidad e Inclusión elaborando estrategias de comunicación interna. Desde diciembre del 2023 forma parte del proyecto Ford Business Solutions, área que le da soporte a los distribuidores de Estados Unidos, siendo parte primero de la región de Phoenix como Analista de Experiencia del Cliente y Servicio, y desde junio del 2025 como Analista de Planeación y Distribución en la región de Cincinnati. Forma parte de los líderes de Ford Clubs desde mayo del 2024 y dirige los temas de comunicación interna de los clubes. Estar en esta iniciativa le ha permitido vivir experiencias enriquecedoras no solo a nivel profesional sino también a nivel personal, pues permite conocer a personas de diversas áreas de la empresa, así como de diversos intereses y afinidades.",
                "photo": "img/speaker -gabriela-tiscareno.jpg"
                },
				{
                "name": "Fernando Barajas",
                "bio": "Fernando Barajas es un profesional con una sólida formación académica y 8 años de experiencia en Ford Motor Company. Es <b>Ingeniero Aeronáutico por el IPN</b>, posee una <b>Maestría en Administración de Empresas y un Doctorado en Ingeniería Mecánica</b>. Su trayectoria en Ford se centra en la Ingeniería de Diseño de Interiores y el Desarrollo de Producto. Lidera iniciativas de innovación, implementando mejores prácticas y nuevos procesos para optimizar la eficiencia en el diseño. Previamente, Fernando acumuló valiosa experiencia en el sector aeronáutico. En Airbus, líder mundial en fabricación de aeronaves, fue responsable de la ingeniería de diseño y reparaciones estructurales. Esta diversa experiencia le ha proporcionado una perspectiva integral, aplicable al diseño automotriz actual. Más allá de su ámbito profesional, Fernando ha desempeñado un papel fundamental en la organización de eventos deportivos corporativos. Desde 2018, ha representado a Ford en los Corporate Games Mexico, contribuyendo a que la empresa obtuviera el 1er lugar como 'mejor empresa deportiva en México' en 2023 y 2024, además de un récord de medallas. Combinando su sólida trayectoria profesional con la disciplina del deporte, actualmente coordina áreas de integración de innovación y los Corporate Games Mexico. Su enfoque principal es la estrategia y el valor añadido que la relación trabajo-vida genera en el bienestar de los empleados de Ford México.",
                "photo": "img/speaker-israel-barajas.jpg"
                },
				{
                "name": "Rodrigo Téllez",
                "bio": "Rodrigo Téllez Garza es egresado de la <b>Universidad de las Américas Puebla (UDLAP) de la carrera de Ingeniería Mecánica</b>. Inició su carrera profesional como Operations Specialist en una start-up de Inteligencia Artificial, donde desarrolló diversos proyectos con clientes como Apple y Meta. En abril del 2022, se incorporó a Ford de México como PD Serviceability Engineer, donde lideró diferentes iniciativas para mejorar el servicio a nuestros clientes. En diciembre de 2023, se integró al área de calidad, donde como OPD Engineer se asegura que la calidad de los componentes de combustible para Norte América cumpla con ciertas regulaciones y estándares de la industria automotriz. Es líder del Club de Basketball desde 2023, en donde a través de diversas actividades ha podido crecer personal como profesionalmente, permitiéndole hacer amistades fuera del trabajo y tener una red de contactos más amplia.",
                "photo": "img/speaker-rodrigo-tellez.jpg"
                }
            ],
            "activity": {
                "description": "En esta sesión nos adentraremos en el mundo de los Ford Clubs, una iniciativa nacional diseñada para fomentar la integración, el bienestar y el espíritu de equipo entre empleados de diversas empresas a través de disciplinas deportivas, artísticas y más. Exploraremos qué son los Corporate Games y, específicamente, la experiencia de la participación de Ford en México, destacando cómo Ford ha impulsado activamente el desarrollo integral de sus colaboradores en este marco.",
            }
        },
		"m-2": {
            "title": "SCRUM",
            "time": "08:00 - 12:00",
			"audience": "Preselección",
			"location": "Lobby CIA",
            "speakers": [
                {
                "name": "Pedro Gálvez",
                "bio": "  Con una sólida formación en <b>Ingeniería Mecatrónica y una maestría en Ingeniería Mecánica por la UNAM</b>, Pedro Gálvez ha consolidado una carrera exitosa en el mundo de la tecnología y la innovación. Con más de 12 años de experiencia en el desarrollo de software, ha demostrado una profunda expertise en la creación de soluciones tecnológicas avanzadas. Su trayectoria profesional ha evolucionado desde puestos técnicos hasta liderazgo, actualmente desempeñándose como Supervisor de Software Embebido en Ford",
                "photo": "img/speaker-pedro-galvez.png"
                }
            ],
            "activity": {
                "description": "El arte de amar los lunes, SCRUM es una metodología agil, la cual nos ayuda a desarrollar proyectos cuando el panorama esta lleno de incertidumbre, cuando el equipo es nuevo o cuando no sabemos como abordar un problema. En este taller te enseñaré a desarrollar proyectos con SCRUM desde cero y la improtancia de SCRUM en el ambiente actual",
            }
        },
		"m-3": {
            "title": "Inteligencia Artificial en los Vehiculos",
            "time": "10:00 - 11:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Julieta Rojas",
                "bio": "<b>Ingeniera en Sistemas y Tecnologías de la Información por la Universidad Anáhuac México</b>, actualmente me desempeño como Artificial Intelligence Engineer. Desde el área de Business Operations colaboro con los equipos de Product Development para identificar oportunidades de mejora, mapear procesos críticos, definir indicadores clave de desempeño (KPIs) que orienten la toma de decisiones y diseñar, desplegar y mantener soluciones de IA que automaticen tareas, optimicen la eficiencia operativa y mejoren la experiencia de usuario. Apasionada por la innovación y el aprendizaje continuo, combino pensamiento estratégico, creatividad y comunicación efectiva para convertir la ciencia de datos en valor tangible.",
                "photo": "img/speaker-julieta-rojas.png"
                },
				{
                "name": "Marco Ramirez",
                "bio": "Marco Antonio Ramírez es Ingeniero de Inteligencia Artificial en el equipo de AI, perteneciente al área de Business Operations. Se formó en <b>Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo del IPN</b> y actualmente se especializa en ciencia de datos. Sus principales funciones incluyen apoyar a los empleados de PD en la adopción y uso de herramientas de inteligencia artificial dentro de Ford, colaborar en el diseño e implementación de estrategias clave para su integración, así como contribuir a la automatización de procesos y a la visualización de métricas alineadas con los objetivos y políticas tanto de los empleados como de la compañía.",
                "photo": "img/speaker-marco-ramirez.jpg"
                }
            ],
            "activity": {
                "description": "En esta presentación se explicará por qué la IA es una pieza clave para el futuro automotriz. Parte de los fundamentos de Turing y McCarthy, distingue entre IA débil, fuerte y superinteligencia, y ubica tecnologías como machine learning, deep learning e IA generativa dentro de un mismo espectro. Explicaremos los tres modelos de aprendizaje (supervisado, no supervisado y por refuerzo) y, sobre todo, demostraremos su impacto directo en Ford: conducción autónoma, mantenimiento predictivo, personalización del usuario y control de calidad.",
            }
        },
		"m-4": {
            "title": "De la Facultad al Exito",
            "time": "11:00 - 12:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Francisco Lugo",
                "bio": "Francisco Armando Lugo Mayorga es un destacado <b>Ingeniero Mecatrónico, egresado de la Facultad de Ingeniería de la Universidad Nacional Autónoma de México (UNAM)</b>. Con una sólida trayectoria profesional, Francisco cuenta con más de 13 años de experiencia en la industria automotriz, específicamente en Ford Motor Company, donde ha desempeñado diversas funciones en áreas clave de ingeniería. Durante su carrera, ha demostrado una notable capacidad de liderazgo y gestión, lo que lo llevó a ocupar el cargo de Supervisor de Ingeniería en Liberaciones de Software a nivel mundial durante 3 años, cargo que sigue ocupando, aportando significativamente al desarrollo y la implementación de soluciones tecnológicas innovadoras. Además, Francisco ha complementado su formación técnica con un diplomado en Project Management, lo que le ha permitido dirigir proyectos complejos con eficiencia y eficacia, destacándose por su habilidad para coordinar equipos multidisciplinarios y asegurar el éxito en la entrega de resultados.",
                "photo": "img/speaker-francisco-lugo.jpg"
                }
            ],
            "activity": {
                "description": "¿Cómo transformar tu título de ingeniería en una carrera de impacto? En esta charla, compartiré mi viaje personal desde los salones de la facultad hasta la industria global. Les compartiré las habilidades clave y recomendaciones que para mí marcaron la diferencia.",
            }
        },
		"m-5": {
            "title": "Taller de Design Thinking- Día 2",
            "time": "11:00 - 12:30",
			"audience": "Preselección",
			"location": "CIA - Sótano",
            "speakers": [
                  {
                "name": "Arturo García",
                "bio": "Arturo García es <b>Maestro en Ingeniería Electromecánico</b> y actualmente tiene el puesto de Ingeniero de pruebas y Manager de Proyectos en Ford",
                "photo": "img/speaker-arturo-garcia.jpg"
                },
				 {
                "name": "Jessica Mayo",
                "bio": "Jessica Mayo es <b>Licenciada en Relaciones Comerciales del IPN</b> además de contar con una <b>Maestría en Gestión de Innovación Tecnológica por parte de la Ibero</b>. Actualmente tiene el puesto de Program Management Analyst",
                "photo": "img/speaker-jessica-mayo.jpg"
                },
				 {
                "name": "Uriel Loza",
                "bio": "Uriel Loza es <b>Maestro en Ingenería Aeronáutica</b> y actualmente tiene el puesto de Ingeniero de CAE Vehicle Durability en Ford",
                "photo": "img/speaker-uriel-loza.jpg"
                },
				 {
                "name": "Arturo Tuddon",
                "bio": "Arturo Tuddon estudió <b>Ingeniería Mecánica y Administración, así como una Maestría en Gestión de la Ingeniería en el Tec de Monterrey</b>. Con más de 14 años de experiencia en Ford, Arturo ha recorrido un camino que va desde trabajar en pruebas vehiculares y diversos laboratorios hasta llegar a su puesto actual de Global Vendor Tooling Purchasing Manager, liderando las compras globales de herramentales de inyección de plástico.",
                "photo": "img/speaker-arturo-tuddon.jpg"
                }
            ],
            "activity": {
                "description": "Design Thinking, es una metodología clave para el desarrollo de producto y de soluciones centradas en el usuario, será impartido por ingenieros expertos de Ford ¿Qué aprenderás en este taller? Fundamentos del Design Thinking, resolver desafíos reales de productos de Ford, networking con ingenieros de Ford. Esta es una oportunidad única para aplicar tus conocimientos, expandir tu red profesional y obtener una perspectiva sobre la cultura de innovación en una de las empresas líderes a nivel mundial.",
            }
        },
		"m-7": {
            "title": "Coloquio PARA: Experiencias compartidas por Ingenieros de Ford",
            "time": "13:00 - 14:30",
			"audience": "General y Agrupaciones",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Carlos Melgarejo",
                "bio": "Carlos Melgarejo, <b>Ingeniero en Mecatrónica egresado del Programa de Alto Rendimiento Académico (PARA) de la Facultad de Ingeniería y con Maestría en Diseño y Gestión de Sistemas por el Instituto Tecnológico de Massachusetts (MIT)</b>. Ha desempeñado diferentes puestos en el departamento de Desarrollo de Producto en Ford Motor Company y actualmente ocupa el cargo de Supervisor de Diseño de Sistemas de Distribución Eléctrica (EDS) de los vehículos Bronco Sport, Maverick, Expedition y Navigator.",
                "photo": "img/speaker-carlos-melgarejo.jpg"
                },
				{
                "name": "Ivonne Bárcenas",
                "bio": "Ivonne Bárcenas, es Ingeniera CAE especializada en Dinámica de Multicuerpos para el sistema de suspensión en los vehículos de Ford. Con casi nueve años en la compañía, empezó su carrera formando parte del primer programa Ford College Graduates, experiencia que amplió su perfil hacia áreas como Design and Release y Program Management. Actualmente desarrolla modelos para proveer cargas de camino mediante simulaciones de pistas de pruebas virtuales para los componentes de la suspensión. Su impulso por seguir aprendiendo la ha llevado a adquirir conocimientos variados en el área de simulación, desarrollando habilidades para el análisis de elementos finitos, análisis de fatiga y correlación de modelos con pruebas físicas.",
                "photo": "img/speaker-ivonne-barcenas.jpg"
                },
				{
                "name": "Pablo Gómez",
                "bio": "<b>Ingeniero Industrial e Ingeniero Mecánico egresado de la Facultad de Ingeniería de la UNAM</b>, fue miembro del Programa de Alto Rendimiento Académico (PARA), participó en el proyecto Fórmula SAE (temporadas 2012 y 2013), e hizo un semestre de intercambio en la NTNU en Trondheim, Noruega. Cuenta con 10 años de experiencia desempeñando diferentes puestos en el departamento de Desarrollo de Producto en Ford Motor Company en el área de Underbody en los equipos de Reducción de Costos, Mejoras de Calidad, Prevención de Modos de Fallas y actualmente ocupa el cargo de Ingeniero de Integración de Sistemas en los vehículos Expedition y Navigator.",
                "photo": "img/speaker-pablo-gomez.png"
                }
            ],
            "activity": {
                "description": "Una sesión de diálogo abierto que reúne a ingenieros experimentados de Ford y a estudiantes aspirantes de ingeniería, miembros del Programa de Alto Rendimiento Académico (PARA) de la Facultad de Ingeniería de la UNAM. Diseñada para cerrar la brecha entre el aprendizaje académico y los desafíos de ingeniería del mundo real, esta mesa redonda fomenta un intercambio de conocimientos. Los ponentes compartirán con los estudiantes cómo el PARA influyó en sus trayectorias profesionales y los estudiantes obtendrán conocimientos prácticos sobre el desarrollo de vehículos, metodologías de resolución de problemas y trayectorias profesionales directamente de líderes de la industria. Al mismo tiempo, los ingenieros de Ford podrán interactuar con la próxima generación de innovadores, comprendiendo filosofías de diseño emergentes y fomentando el talento futuro. Esta interacción dinámica tiene como objetivo inspirar, educar y cultivar una base sólida para la futura excelencia en ingeniería automotriz.",
            }
        },
        "m-8": {
            "title": "Gemelos Digitales: La actualidad del desarrollo de controladores",
            "time": "15:00 - 16:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Ignacio Salas",
                "bio": "José Ignacio Salas Cerón es <b>Ingeniero Mecatrónico</b> con más de 7 años de experiencia en la integración de gemelos digitales de sistemas de propulsión en la industria automotriz. Trabaja en Ford desde 2018. Su puesto actual es Ingeniero de Integración e Implementación de HIL/SIL en el departamento de Controles Vehiculares. Disfruta participando en situaciones desafiantes que requieren conocimientos de la teoría clásica de control para su resolución.",
                "photo": "img/speaker-ignacio-salas.jpg"
                }
            ],
            "activity": {
                "description": "Hoy en día, la disminución de los tiempos de desarrollo de un automóvil, la reducción de costos y la optimización de la utilización de personal, así como la validación de nuevas funcionalidades altamente apreciadas por los consumidores, son metas esenciales en la industria automotriz. En ese contexto, el desarrollo de gemelos digitales para representar la operación de un tren motriz y sus subsistemas adyacentes, toma especial relevancia. Los gemelos digitales proveen entornos virtuales seguros y rentables, que permiten un desarrollo veloz y la puesta a prueba de cualquier tipo de código de control. Esta presentación cubrirá el uso de gemelos digitales del tren motriz para el desarrollo y puesta a prueba del código de controladores en Ford.",
            }
        },
		/* HORARIO MIÉRCOLES */
		"w-1": {
            "title": "¿Cómo se diseña un automóvil?",
            "time": "09:00 - 10:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Estefhanie Gutiérrez",
                "bio": "<b>Ingeniera Mecánica</b> con 9 años de experiencia práctica en el diseño de sistemas de exteriores e interiores y ornamentación automotriz. He colaborado en proyectos como el desarrollo de interiores para la Bronco Sport, Bronco y Mustang, combinando ingeniería con visión centrada en la experiencia del usuario. Con una maestría en Project Management por la Universidad de Barcelona y certificaciones como Scrum Master y Product Owner, reflejo de mi pasión por las metodologías ágiles, la mejora continua y la gestión de proyectos complejos y multidisciplinarios.",
                "photo": "img/speaker-estefhanie-gutierrez.jpg"
                },
				{
                "name": "Verónica González",
                "bio": "Con una sólida trayectoria profesional desde 1985, Vero ha cultivado una profunda experiencia en el sector automotriz. Su formación académica incluye una <b>Licenciatura en Ingeniería Industrial y de Sistemas, un Posgrado en Operaciones Industriales y una Maestría en Habilidades Directivas</b>. Esta combinación de conocimientos tecnológicos, operativos y de gestión directiva le proporciona una perspectiva integral para la optimización de procesos. Actualmente se desenvuelve como analista líder de costos en el área de BOM, área fundamental para la planificación, control y ejecución de la producción. Su conocimiento abarca la optimización de la cadena de suministro y la reducción de errores y costos, asegurando que todos los elementos necesarios estén disponibles en el momento y la cantidad adecuados. Más allá de su destacada carrera, demuestra un fuerte compromiso social y una personalidad multifacética. Es una apasionada de la cocina, el baile y los animales, involucrándose en iniciativas de Ford de apoyo a refugios caninos, y participando en actividades comunitarias impulsadas por la empresa, como pintar escuelas.",
                "photo": "img/speaker-veronica-gonzalez.jpg"
                }
            ],
            "activity": {
                "description": "En esta plática, exploraremos el proceso completo de desarrollo de producto de Ford: desde la definición de una idea hasta el lanzamiento en planta, pasando por el diseño y la validación. Verás ejemplos reales de proyectos en los que Ingenieros mexicanos están marcando la diferencia, contribuyendo en cada una de estas etapas, desde el diseño hasta el ensamblaje de vehículos. También hablaremos del lado humano de la ingeniería: cómo habilidades como la comunicación, el liderazgo y el trabajo en equipo potencian tu carrera profesional."
            }
        },
		 "w-2": {
            "title": "Innovación en el Vehículo",
            "time": "10:00 - 11:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "activity": {
                "description": "La innovación es el motor que impulsa a Ford, transformando la industria automotriz desde el Modelo T hasta los vehículos eléctricos y autónomos de hoy. En esta charla, exploraremos cómo la innovación es clave en Ford y el papel fundamental de los coordinadores de innovación, quienes identifican oportunidades y gestionan proyectos de vanguardia. Es una oportunidad para que los estudiantes de ingeniería de la UNAM vean cómo su disciplina moldea el futuro de la movilidad y descubran cómo pueden ser parte de esta emocionante transformación."
            },
            "speakers": [
                {
                "name": "Marco Bello",
                "bio": "Me llamo Marco Antonio Bello Xelhuantzi, soy <b>Ingeniero en Diseño Automotriz por el Tec de Monterrey y cuento con la maestría en Innovación para el Desarrollo Empresarial</b> por la misma institución, tengo 9 años de experiencia, desde el área de diseño en diversos commodities hasta mi puesto actual como Coordinador de Innovación para el área de Desarrollo de Producto de Ford de México, siendo mis principales responsabilidad la estrategia de innovación, la administración del laboratorio llamado Makerspace, además de los temas relacionados a propiedad intelectual.",
                "photo": "img/speaker-marco-bello.JPG"
                },
				{
                "name": "Ligia Olivares",
                "bio": "Soy <b>Ingeniera Industrial y de Sistemas, egresada del Tecnológico de Monterrey Campus Estado de México</b>. Inicié mi trayectoria laboral en Ford en 2019 comenzando como trainee en el área de GES. Actualmente, me desempeño como Coordinadora de Innovación en el Departamento de Desarrollo de Producto. Actualmente cuento con 1 patente a mi nombre, 1 publicación defensiva y 2 ideas en proceso de investigación para obtención de patente. De igual forma, durante toda mi carrera en Ford he sido miembro del grupo Women of Ford dentro del pilar “STEM”, para fomentar la ciencia y tecnología en mujeres y niñas.",
                "photo": "img/speaker-ligia-olivares.jpg"
                }
            ]
        },
		"w-3": {
            "title": "Egresados en Ford",
            "time": "11:00 - 12:00",
			"audience": "General",
			"location": "Explanada CIA",
            "speakers": [
                {
                "name": "Oscar Carranza",
                "bio": "<b>Ingeniero Eléctrico Electrónico</b> (egresado en 2023), con experiencia en desarrollo de software y análisis de datos y actualmente colaborando en el área de sistemas de protección eléctrica en Vehículos Híbridos y Eléctricos de Ford.",
                "photo": "img/speaker-oscar-carranza.jpg"
                },
				{
                "name": "Fabián Sánchez",
                "bio": "Mi nombre es Fabián Sánchez Hernández, tengo 23 años y soy recién egresado de la carrera de <b>Ingeniería Aeroespacial en la UNAM</b>, actualmente me encuentro trabajando como Champ en el área de Body Interior, más específicamente en el equipo de despliegue de bolsas de aire, empecé a trabajar en Ford en marzo de 2025, y previamente estuve trabajando en Stellantis. A pesar de llevar relativamente poco tiempo dentro de la empresa, cada día busco aprender y prepararme para aplicar a una posición de full time, y aunque haber llegado hasta aquí ha sido complicado, siempre he creído que si te propones algo eres capaz de lograrlo.",
                "photo": "img/speaker-fabian-sanchez.jpg"
                },
				{
                "name": "Karla Ramírez",
                "bio": "Nací un 27 de septiembre del año 2000, en el Estado de México. Cursé la preparatoria en la ENP 2, posteriormente hice la licenciatura en <b>Ingeniería Mecánica</b> (generación 2020). Pertenecí BAJA SAE en el sistema de Masas No suspendidas (2022-2024). En mi penúltimo semestre de la carrera hice movilidad internacional a Japón en ⼤阪⼤学 en el periodo otoño-invierno. Entré a Ford como CHAMP en BOM en octubre de 2024 y pasé a ser tiempo completo en marzo 2025",
                "photo": "img/speaker-karla-ramirez.jpg"
                },
				{
                "name": "Rodrigo Rodríguez",
                "bio": "<b>Ingeniero Mecánico</b> egresado en Diciembre 2024; ex_Ford Champ de VHES (VSET ahora), ex_Ford Champ de “Ingeniería de Sistemas y Soporte en Optimización), actualmente Ingeniero de Diseño, CAD-3D, PD.",
                "photo": "img/speaker-rodrigo-rodriguez.jpg"
                },
				{
                "name": "Erick Ramos",
                "bio": "<b>Egresado de Mecatrónica</b> en 2016, ingreso a Ford en 2016 con rotación en distintas áreas: Ingeniero del diseño de producto: Programa de rotaciones FCG (2016-2020), Ingeniero de diseño y liberación del sistema térmico del tren motriz, Ingeniero de Calibración, Analista de Gestión de Programasd) Ingeniero de diseño y liberación del sistema térmico de la Batería de Alto Voltaje, Ingeniero de la batería de Alto Voltaje (2020-2022) e Ingeniero de Manufactura y Líder de Lanzamiento de la Batería de Alto Voltaje",
                "photo": "img/speaker-erick-ramos.jpg"
                },
				{
                "name": "Brenda Ávila",
                "bio": "<b>Ingeniera Industrial</b> egresada en 2021, formé parte del grupo estudiantil UNAM Motorsports (2018-2019) en el área de Management. Tuve la oportunidad de hacer movilidad estudiantil un semestre a la Universidad Nacional de Rosario, ARG. Posteriormente, fui becaria en Audi Mexico en el área de innovación y digitalización. Entre a Ford en 2021 en el área de compras prototipos. He sido compradora de prototipos para asientos y estampados, powertrain installations y actualmente soy compradora de componentes eléctricos.",
                "photo": "img/speaker-brenda-avila.png"
                }
            ],
            "activity": {
                "description": "Se trata de una dinámica en la que los estudiantes pueden hacer preguntas a los ingenieros que actualmente trabajan en Ford, que son egresados de la facultad de ingeniería sobre como es su día a día laboralmente, los retos que han enfrentado y las recomendaciones que les gustarían compartir con ellos para su desarrollo profesional y conocer la empresa. Nota: Cupo Limitado a 25 personas por grupo.",
                "url" : "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=eruQyfRRm0O9NpwH-xBBwP3AchSK4LlFhIUyInqkUt1UQkJKSTRTVVlIV0dOTTdMMjZHU1U1V1VHMi4u"
			}
			
            },
		"w-4": {
             "title": "Taller de Design Thinking- Día 3",
            "time": "11:00 - 12:30",
			"audience": "Preselección",
			"location": "CIA - Sótano",
            "speakers": [
                 {
                "name": "Arturo García",
                "bio": "Arturo García es <b>Maestro en Ingeniería Electromecánico</b> y actualmente tiene el puesto de Ingeniero de pruebas y Manager de Proyectos en Ford",
                "photo": "img/speaker-arturo-garcia.jpg"
                },
				 {
                "name": "Jessica Mayo",
                "bio": "Jessica Mayo es <b>Licenciada en Relaciones Comerciales del IPN</b> además de contar con una <b>Maestría en Gestión de Innovación Tecnológica por parte de la Ibero</b>. Actualmente tiene el puesto de Program Management Analyst",
                "photo": "img/speaker-jessica-mayo.jpg"
                },
				 {
                "name": "Uriel Loza",
                "bio": "Uriel Loza es <b>Maestro en Ingenería Aeronáutica</b> y actualmente tiene el puesto de Ingeniero de CAE Vehicle Durability en Ford",
                "photo": "img/speaker-uriel-loza.jpg"
                },
				 {
                "name": "Arturo Tuddon",
                "bio": "Arturo Tuddon estudió <b>Ingeniería Mecánica y Administración, así como una Maestría en Gestión de la Ingeniería en el Tec de Monterrey</b>. Con más de 14 años de experiencia en Ford, Arturo ha recorrido un camino que va desde trabajar en pruebas vehiculares y diversos laboratorios hasta llegar a su puesto actual de Global Vendor Tooling Purchasing Manager, liderando las compras globales de herramentales de inyección de plástico.",
                "photo": "img/speaker-arturo-tuddon.jpg"
                }
            ],
            
            "activity": {
                "description": "Design Thinking, es una metodología clave para el desarrollo de producto y de soluciones centradas en el usuario, será impartido por ingenieros expertos de Ford ¿Qué aprenderás en este taller? Fundamentos del Design Thinking, resolver desafíos reales de productos de Ford, networking con ingenieros de Ford. Esta es una oportunidad única para aplicar tus conocimientos, expandir tu red profesional y obtener una perspectiva sobre la cultura de innovación en una de las empresas líderes a nivel mundial.",
            }
            },
		"w-6": {
            "title": "¿Cómo preparar tu entrevista?",
            "time": "13:00 - 14:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Karen Vázquez",
                "bio": "<b>Psicóloga Organizacional</b> con ocho años de experiencia en Recursos Humanos, especializada en atracción y desarrollo del talento. He tenido la oportunidad de liderar proyectos clave en empresas globales del sector de Telecomunicaciones y Automotriz, donde he contribuido al fortalecimiento de la cultura organizacional y al crecimiento del talento.",
                "photo": "img/speaker-karen-vazquez.jpg"
                }
            ],
            "activity": {
                "description": "¿Te sientes listo para afrontar una entrevista de trabajo con total confianza y maximizando tus posibilidades de éxito? En esta ponencia, te daremos las herramientas y conocimientos fundamentales para navegar el proceso de entrevista de manera efectiva. Descubrirás cómo presentarte de la mejor forma posible, comunicar tu valor de manera impactante y dejar una impresión memorable en los reclutadores."
            }
        },
		"w-7": {
            "title": "Agentes de IA: Optimizando el Bienestar Personal y la Productividad",
            "time": "14:00 - 15:00",
			"audience": "General",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Arturo Horcasitas",
                "bio": "Jorge Arturo Rodríguez Horcasitas es <b>Maestro en Ciencias de la Computación por la UNAM</b>, donde también se desempeña como profesor tanto a nivel diplomado como en licenciatura. En el diplomado en inteligencia artificial aplicada imparte el módulo de redes neuronales para el análisis de secuencias y a nivel licenciatura imparte la clase de aprendizaje profundo. Además de su labor académica, Jorge Arturo lidera un equipo de científicos de datos en Ford. Cuenta con siete años de experiencia en la industria, durante los cuales ha tenido la oportunidad de trabajar en diversas áreas, como visión por computadora, tratamiento del lenguaje natural, análisis de series de tiempo y análisis de datos tabulares.",
                "photo": "img/speaker-arturo-horcasitas.jpg"
                },
				{
                "name": "Leonardo Trujillo",
                "bio": "Leonardo Trujillo es Coordinador de presupuesto, compras y control interno para mercados emergentes en Norteamerica. Además de ser el Coordinador del Club de Inteligencia Artificial de Ford de México. Con una mentalidad estratégica y creativa, busca sembrar semillas de innovación, aprovechando la tecnología y la resolución de problemas para enfrentar desafíos complejos y dar forma al futuro.",
                "photo": "img/speaker-leonardo-trujillo.jpg"
                }
            ],
            "activity": {
                "description": "En esta sesión se explorará cómo los agentes de IA, sistemas autónomos impulsados por LLMs, están redefiniendo el bienestar y la productividad. Se presentarán sus aplicaciones actuales en herramientas que optimizan tareas y salud, y se analizará su futuro impacto, incluyendo los desafíos éticos."
            }
        },
		"w-8": {
            "title": "Experiencia de trabajo en equipo en Ford",
            "time": "14:00 - 15:30",
			"audience": "Preselección",
			"location": "Sala por definir",
            "speakers": [
                {
                "name": "Roberto Peña",
                "bio": "Roberto Peña es <b>Ingeniero Mecánico y Maestro en Ingeniería Mecánica por la Universidad Nacional Autónoma de México (UNAM)</b>, con un Diplomado en Sistemas Complejos del Massachusetts Institute of Technology (MIT). Posee 15 años de sólida experiencia profesional en Ford Motor Company, donde se he especializado en el desarrollo de sistemas estructurales de carrocería metálica, así como en el diseño y liberación de sistemas de cierre (puertas laterales y traseras) y del sistema de panel de instrumentos. Su perfil se complementa con experiencia como Ingeniero de Sistemas, con un enfoque probado en modelado y optimización de funciones y diseño.",
                "photo": "img/speaker-roberto-peña.jpg"
                },
				{
                "name": "Enrique González",
                "bio": "Enrique González es <b>Ingeniero Mecánico egresado de la Facultad de Ingeniería de la UNAM</b>. Fue profesor de Introducción de Estudios de Mecanismos en la Facultad de Ingeniería de 2004 al 2009. Actualmente tiene el puesto de Chassis Multi Body Dynamics CAE Engineer en Ford.",
                "photo": "img/speaker-enrique-gonzalez.jpg"
                },
				{
                "name": "Shair Mendoza",
                "bio": "Shair Mendoza es <b>Ingeniero Mecánico egresado de la Facultad de Ingeniería</b> y cuenta con una <b>Maestría y Doctorado en Mecánica Aplicada</b>. Con más de 18 años de experiencia profesional, actualmente se desempeña como Safety Crash Engineer en Ford",
                "photo": "img/speaker-shair-mendoza.jpeg"
                }
            ],
            "activity": {
                "description": "Este taller está especialmente diseñado para profesores, buscando generar una interacción dinámica y fructífera entre la academia y la industria. Descubra de primera mano: Cómo Ford identifica y define un problema o una necesidad de mercado, transformándola en un producto innovador, las etapas clave del ciclo de vida del desarrollo de un vehículo, desde el concepto y el diseño, hasta la manufactura y el servicio post-venta, el enfoque de Ford en la ingeniería sistémica y la colaboración interfuncional para superar desafíos complejos y oportunidades de diálogo y transferencia de conocimiento que pueden enriquecer su labor docente y de investigación, preparando mejor a la próxima generación de ingenieros."
            }
        },
		"w-9": {
            "title": "De 'Fórmula SAE' a la Ingeniería Automotriz, experiencias compartidas.",
            "time": "15:30 - 17:00",
			"audience": "General y Agrupaciones",
			"location": "Auditorio Sotero Prieto",
            "speakers": [
                {
                "name": "Santiago Aguilar",
                "bio": "Santiago Aguilar Martínez es un <b>Ingeniero Mecatrónico egresado de la Universidad Nacional Autónoma de México</b> en 2023. Inició su carrera en Ford de México como becario en la posición de Ingeniero de Integración, siendo contratado de tiempo completo en 2024. Desde Hermosillo, ha contribuido al lanzamiento de la Bronco Sport 2025/2026 y la Maverick 2026. Actualmente trabaja desde ciudad de México en los modelos del año 2029. Su experiencia previa en UNAM Motorsports, en los sistemas de Transmisión y Management, le permitió desarrollar habilidades en validación, simulación y gestión de equipos.",
                "photo": "img/speaker-santiago-aguilar.jpg"
                },
				{
                "name": "Paulo Becerril",
                "bio": "Paulo César Becerril González, es un <b>Ingeniero Mecatrónico egresado de la Universidad Nacional Autónoma de México (UNAM)</b>. De 2011 a 2013 participó en el equipo de Formula SAE como desarrollador del sistema de suspensión, así como del atenuador de impacto y de coordinador de pruebas de vehículo. Desde 2015 forma parte de Ford Motor Company, donde se desempeña como ingeniero de CAD en PT Electronics Hardware.",
                "photo": "img/speaker-paulo-becerril.jpg"
                },
				{
                "name": "Miguel Clemente",
                "bio": "Miguel Clemente Eguiluz, <b>Ingeniero Mecánico egresado de la Facultad de Ingeniería</b>. Miembro de UNAM Motorsports en las temporadas 2012 y 2013 en el área de management. Su trayectoria profesional abarca Project Management para el desarrollo de Bronco Sport 2021 y su rediseño 2025 así como Maverick 2025 enfocados en program planning, user experience y lanzamiento en planta de producción; así como el área comercial en planeación y estrategia de producto en México, Caribe y Centroamérica. Actualmente se desempeña en planeación estratégica de producto futuro para el mercado mexicano.",
                "photo": "img/speaker-miguel-clemente.jpg"
                },
				{
                "name": "Salvador Honorato",
                "bio": "Salvador Honorato Navarrete, <b>Ingeniero Mecánico de la UNAM</b> (graduado en 2024), ocupó la posición de líder del sistema de Motor y Enfriamiento para el vehículo de combustión interna de UNAM Motorsports entre 2022 y 2024. Con 2.5 años de experiencia en Ford Motor Company, se ha especializado en el diseño de intercambiadores de calor para el Mustang. Sus responsabilidades incluyen la coordinación integral del desarrollo de componentes para el enfriamiento de motor y transmisión, abarcando desde la conceptualización inicial, diseño digital, evaluación CAE, gestión de proveedores, planificación de producción, hasta el lanzamiento.",
                "photo": "img/speaker-salvador-honorato.jpg"
                },
				{
                "name": "Francisco Villa",
                "bio": "Francisco Javier Villa Mancera, <b>Ingeniero Mecánico egresado de la UNAM</b> en 2015, fue capitán del equipo Formula SAE entre 2013 y 2015, logrando un tercer lugar en el reporte de costos en Lincoln 2015. Con 10 años en Ford Motor Company, se ha especializado en el diseño de componentes de materiales compuestos para vehículos comerciales y de Ford Performance. Actualmente, optimiza costos y manufactura de piezas interiores, convirtiendo componentes metálicos estructurales a polímeros compuestos. Sus responsabilidades incluyen la coordinación del diseño digital, evaluación CAE, gestión con proveedores y planificación de producción.",
                "photo": "img/speaker-francisco-villa.jpg"
                }
            ],
            "activity": {
                "description": "Una sesión de diálogo abierto que reúne a ingenieros experimentados de Ford y a estudiantes de ingeniería del equipo de Fórmula SAE UNAM Motorsports. Diseñada para cerrar la brecha entre el aprendizaje académico y los desafíos de ingeniería del mundo actual en el ámbito profesional, esta mesa redonda, fomenta un intercambio de conocimientos directamente de los profesionales de la industria con la próxima generación de ingenieros y diseñadores, comprendiendo filosofías de diseño emergentes y fomentando el talento futuro. Esta interacción dinámica tiene como objetivos el inspirar, educar y cultivar una base sólida para la futura excelencia en ingeniería automotriz.  Acompáñanos al finalizar a la explanada del CIA para la exhibición del vehículo de esta agrupación."
            }
        },
			/* HORARIO JUEVES */
		"j-0": {
            "title": "Prompts inteligentes. Traducciones en el mundo automotriz.",
            "time": "09:00 - 10:00",
            "audience": "General",
            "location": "Auditorio Sotero Prieto",
			"speakers": [
				{
				"name": "Dairem Díaz",
                "bio": "Dairem Díaz es <b>Licenciado en Traducción e Interpretación por la Universidad Tecnológica Americana</b>. Con más de 18 años de experiencia como traductor y siete años de trayectoria en Ford, se ha especializado en el área de Desarrollo de Producto, enfocándose en Traducciones para las pantallas de vehículos emblemáticos como Mustang, Bronco, Super Duty, Expedition y toda la gama de vehículos Lincoln. Su formación continua incluye capacitaciones en Liderazgo, Comunicación e Inteligencia Artificial. Actualmente, se desempeña en el equipo d Traducciones lidereando los programas de exportación y domésticos de los vehículos de China.",
                "photo": "img/speaker-dairem-diaz.jpg"
				}
				],
            "activity": {
                "description": "En esta sesión se profundizará en la integración de tecnología de punta, como la Inteligencia Artificial, y la necesidad de invertir en el desarrollo de las capacidades humanas de los equipos a manera de maximizar el impacto dentro de las organizaciones. El comprender la dualidad de la tecnología y el talento humano que la potencia te permitirá maximizar los recursos, fomentar la agilidad y asegurar una respuesta eficaz ante los desafíos de la industria."				
            }
        },
		"j-1": {
            "title": "Shark Tank",
            "time": "10:00 - 11:00",
            "audience": "General",
            "location": "CIA - Sótano",
			"speakers": [
				{
				"bio": "",
				"photo":"img/speaker-shark-tank.jpeg"
				}
				],
            "activity": {
                "description": "Te invitamos a las presentaciones finales de los equipos participantes del taller de Design Thinking.  Tendremos un panel de jueces invitados que darán retroalimentación a los equipos."
				
            }
        },
		"j-2": {
              "title": "Shark Tank Awards",
            "time": "11:00 - 12:00",
            "audience": "General",
            "location": "CIA - Sótano",
			"speakers": [
				{
				"bio": "",
				"photo":"img/speaker-shark-tank.jpeg"
				}
				],
            "activity": {
                "description": "Acompáñanos a la premiación de los equipos participantes del taller de Design Thinking.",
				
            }
        },
		"j-21": {
              "title": "Ingeniería de Diseño Automotriz en México: del concepto al modelo digital (CAD)",
            "time": "11:00 - 12:00",
            "audience": "General",
            "location": "Auditorio Sotero Prieto",
			"speakers": [
				{
				"name": "Alan Tinoco",
                "bio": "Alan Fernando Tinoco Jiménez, Ingeniero de Interiores en Ford Motor Company, con 10 años de experiencia. <b>Egresado de la Facultad de Ingeniería de la UNAM</b> con un semestre de intercambio en la Universidad del País Vasco, con Diplomado por el MIT en 'Architecture and Systems Engineering'. Ha diseñado componentes de interiores de alrededor de 10 nuevos vehículos, algunos tan emblemáticos como la Ford Lobo, Bronco & Bronco Raptor. Reconocido por eficientar el uso de componentes y reducir costos ensambles completos. Su pasión es innovar y liderar equipos hacia un diseño robusto que sobrepase las expectativas del cliente. Cuenta con una patente en Estados Unidos que integra un nuevo componente de consolas. Su objetivo es construir y probar que los futuros vehículos provean la mejor calidad y sensación para nuestros clientes finales.",
                "photo": "img/speaker-alan-tinoco.jpeg"
				},
				{
				"name": "Juan Palencia",
                "bio": "Juan Angel Palencia Morales, <b>Ingeniero Mecánico con especialidad en Diseño Mecánico egresado de la Facultad de Ingeniería de la UNAM</b>. Realizó su Servicio Social, Prácticas Profesionales y Tesis colaborando en el Instituto de Astronomía (IA-UNAM) en el desarrollo de Instrumentación para telescopios. Cuenta con un Diplomado en 'Architecture and Systems Engineering' del MIT y actualmente está cursando el Diplomado 'Artificial Inteligence for Leaders' de la Universidad de Texas. Juan cuenta con 20 años de experiencia en la industria automotriz, habiendo trabajado para Ford y Nissan. Su experiencia abarca una amplia variedad de sistemas, incluidos el Panel de instrumentos (IP), las Consolas, los paneles de acabado de interiores y asientos. Actualmente es Supervisor de Desarrollo de Producto del equipo de Consolas en la organización de Engineering Design.",
                "photo": "img/speaker-juan-palencia.jpeg"
				}
				],
            "activity": {
                "description": "¿Realmente se hace diseño automotriz en México? La respuesta es sí. Hoy, el diseño de automóviles se realiza mayoritariamente con modelos 3D (CAD): se construye el vehículo de forma digital antes de fabricarlo. Sobre ese gemelo tridimensional se ejecutan simulaciones, se verifican compatibilidades e interferencias entre componentes y se simulan las secuencias de ensamblaje y los procesos de fabricación para garantizar la producibilidad. Gracias a este enfoque digital, se pueden probar ideas, corregir errores y optimizar piezas sin recurrir a tantos prototipos físicos, lo que reduce tiempos y costos. En Ford de México contamos con un equipo de más de 250 ingenieros que diseñan nuevos modelos, acompañando el proceso desde la concepción hasta la entrega de un modelo 3D digital listo para su validación y posterior producción.",
				
            }
        },
		"j-3": {
            "title": "Simulación de Entrevista",
            "time": "13:00 - 14:00",
			"audience": "Preselección",
			"location": "CIA - Sótano",
            "speakers": [
                {
                "name": "Karen Palacios",
                "bio": "Más de 12 años de experiencia en Adquisición de Talento, especializada en perfiles de TI para empresas multinacionales en Norteamérica y Latinoamérica. Proceso de principio a fin, actuando como socio y consultor, alta demanda, liderando proyectos para BPO, RPO partnering y firmas de consultoría",
                "photo": "img/speaker-karen-palacios.jpg"
                }
            ],
            "activity": {
                "description": "Esta sesión está diseñada para los ganadores de nuestra actividad tipo Shark Tank, con la intención de que pongas a prueba tus habilidades de comunicación bajo la guía de Karen, recibas feedback personalizado y de alto valor sobre tu desempeño, perfecciones tu narrativa y aprendas a destacar tu propuesta de valor en un entorno realista."
            }
        },
		"j-5": {
            "title": "Clausura",
            "time": "14:00 - 14:15",
			"audience": "General",
			"location": "CIA - Sótano",
            "speakers": [
                {
                "name": "Arian Sosa",
                "bio": "Arian Sosa es <b>egresado de la primera generación de Mecatrónica de la FI-UNAM (CU)</b> -Generación 2002-1. Hizo una estancia en la Universidad de Skövde en 2005 y 2006 obteniendo <b<Master of Science in Mechanical Engineering</b> y desarrolló su proyecto de tesis en el laboratorio de termo fluidos de la Universidad de Chalmers. Cuenta con 19 años de experiencia profesional en áreas como Tren Motriz, Ingeniería de Vehículo, Calibración de Motor, Diseño de Características (Features) y Pruebas y Validación en Desarrollo de Producto (incluyendo una asignación internacional en 2019 y 2020). Actualmente tiene el puesto de Gerente de Pruebas en GTBC, lidereando un equipo de 180 personas.",
                "photo": "img/speaker-arian-sosa.jpg"
            }
            ],
            "activity": {
                "description": "Esta actividad dará fin a la semana UNAM 2025, acompáñanos pues habrá sorpresas y premios."
            }
        },
		
		
		
		
		
        // Añade más actividades aquí, usando el ID correspondiente
        // "3": { ... }
    };
    // --- Funciones del Modal ---

    function openModal(activityId) {
        const data = activitiesData[activityId];
        
        if (data) {
            allSpeakersContainer.innerHTML = '';

            if (data.speakers && data.speakers.length > 0) {
                modalSpeakerInfo.style.display = 'block'; // Asegura que la sección del ponente esté visible
                modalContent.classList.remove('single-column'); // Elimina la clase para cuando hay dos columnas

                data.speakers.forEach(speaker => {
                    const speakerDiv = document.createElement('div');
                    speakerDiv.classList.add('dynamic-speaker-block'); // Clase para estilos de cada ponente

                    const speakerPhotoElem = document.createElement('img');
                    speakerPhotoElem.src = speaker.photo;
                    speakerPhotoElem.alt = `Foto de ${speaker.name}`;
                    speakerPhotoElem.classList.add('speaker-photo-large'); // Clase para la foto grande

                    const speakerNameElem = document.createElement('h4');
                    speakerNameElem.textContent = speaker.name;

                    const speakerBioElem = document.createElement('p');
                    speakerBioElem.innerHTML = speaker.bio;

                    speakerDiv.appendChild(speakerPhotoElem);
                    speakerDiv.appendChild(speakerNameElem);
                    speakerDiv.appendChild(speakerBioElem);

                    allSpeakersContainer.appendChild(speakerDiv);
                });

            } else {
                modalSpeakerInfo.style.display = 'none'; // Ocultar la sección del ponente
                modalContent.classList.add('single-column'); // Añade la clase para cuando es una sola columna
            }
            // Rellenar el contenido del modal

			activityTitleModal.textContent = data.activity.title || data.title; // Usamos el título de la actividad principal
            activityDescription.innerHTML = data.activity.description;
            activityAudience.textContent = data.audience;
            activityLocation.textContent = data.location;
            activityTime.textContent = data.time;
            
			 let activityUrlContainer = document.getElementById('activityUrlContainer');
            if (!activityUrlContainer) {
                // Si el contenedor no existe, crearlo y añadirlo después de la descripción
                activityUrlContainer = document.createElement('div');
                activityUrlContainer.id = 'activityUrlContainer';
                activityDescription.parentNode.insertBefore(activityUrlContainer, activityDescription.nextSibling);
                // activityDescription.nextSibling asegura que se inserta después de la descripción
            }
            activityUrlContainer.innerHTML = ''; // Limpiar contenido anterior

            if (data.activity.url) { // Verificar si la URL existe para esta actividad
                const urlLink = document.createElement('a');
                urlLink.href = data.activity.url;
                urlLink.textContent = "Registra tu asistencia aquí"; // O el texto que prefieras
                urlLink.target = "_blank"; // Abrir en una nueva pestaña
                urlLink.rel = "noopener noreferrer"; // Buena práctica de seguridad

                activityUrlContainer.appendChild(urlLink);
                activityUrlContainer.style.display = 'block'; // Asegurarse de que el contenedor sea visible
            } else {
                activityUrlContainer.style.display = 'none'; // Ocultar el contenedor si no hay URL
            }
           

            
            //activityPhoto.src = data.activity.photo;
            //activityPhoto.alt = `Foto de la actividad: ${data.title}`;

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






























































































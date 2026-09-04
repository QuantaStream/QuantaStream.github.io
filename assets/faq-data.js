window.quantastreamFaq = {
  en: [
    {
      question: "What is QuantaStream?",
      answer: "QuantaStream is a bitmap-native analytical SQL engine. It exposes a MySQL-compatible front door while executing analytical workloads over compressed bitmap domains, bit-sliced values, and relationship vectors."
    },
    {
      question: "Is it solid?",
      answer: "QuantaStream is a young public preview, but it is not a toy. Excluding generated protobuf code, the project has 278,429 lines of Go, including 108,630 lines dedicated to Go test cases. Beyond unit tests, SQLRunner exercises end-to-end SQL behavior across query shapes, mutations, views, CTEs, temporary and derived tables, CTAS, prepared statements, metadata, text search, and runtime inspection. The MySQL compatibility suites run reference cases against MySQL and compare QuantaStream as the target so compatibility changes are caught directly."
    },
    {
      question: "Is QuantaStream a MySQL replacement?",
      answer: "It is MySQL-compatible where that surface helps users connect familiar clients and tools. It is not trying to be a byte-for-byte MySQL clone. Schemas are descriptor-driven, and the engine is optimized around bitmap-native analytical execution."
    },
    {
      question: "How do I try it?",
      answer: "Download the v0.1.2 Linux AMD64 release bundle from GitHub and follow the getting started guide. Users on Mac, ARM, or other platforms can build from source with Go installed."
    },
    {
      question: "What workloads fit QuantaStream?",
      answer: "The best fit is analytical filtering, grouping, joins, and streaming-ready HTAP workloads where data can be represented as compressed domains and queried repeatedly without reconstructing rows too early."
    },
    {
      question: "What does bitmap-native mean?",
      answer: "It means predicates, joins, relationship traversal, and reductions are expressed as set algebra over compressed bitmap domains where possible. Row materialization happens late, after the engine has reduced the candidate set."
    },
    {
      question: "What ships in 0.1.2?",
      answer: "The public preview includes the single-node server, qstream-admin, a MySQL-compatible endpoint, prepared-statement support, views, CTEs, derived and temporary tables, CTAS, backup and restore, support bundles, a JSON streaming loader, and a bundled sample data restore path. Version 0.1.2 also requires an explicit authentication mode and restricts permissive authentication to loopback-bound local evaluation."
    },
    {
      question: "Does QuantaStream support distributed execution?",
      answer: "The repository includes distributed-mode code and operational scripts, and distributed TPC-H runs have been used for benchmark validation. The 0.1.2 quick-start path is intentionally focused on the single-node engine."
    },
    {
      question: "Can I use existing MySQL clients?",
      answer: "Yes for the supported SQL and metadata surface. The team has tested command-line MySQL clients, application drivers, and MySQL Workbench workflows while continuing to close compatibility gaps."
    },
    {
      question: "Where should I ask questions or report issues?",
      answer: "Use the contact page for POC, support, or partnership conversations. Use GitHub issues for specific bugs, feature requests, and reproducible compatibility gaps."
    }
  ],
  es: [
    {
      question: "¿Qué es QuantaStream?",
      answer: "QuantaStream es un motor de SQL analítico nativo de bitmaps. Expone una puerta de entrada compatible con MySQL mientras ejecuta cargas analíticas sobre dominios de bitmaps comprimidos, valores bit-sliced y vectores de relación."
    },
    {
      question: "¿Es sólido?",
      answer: "QuantaStream es un public preview joven, pero no es un juguete. Excluyendo código protobuf generado, el proyecto tiene 278,429 líneas de Go, incluyendo 108,630 líneas dedicadas a casos de prueba en Go. Además de unit tests, SQLRunner ejercita comportamiento SQL de extremo a extremo sobre formas de consulta, mutaciones, views, CTEs, tablas temporales y derivadas, CTAS, prepared statements, metadatos, búsqueda de texto e inspección de runtime. Las suites de compatibilidad MySQL ejecutan casos de referencia contra MySQL y comparan QuantaStream como target para detectar cambios de compatibilidad directamente."
    },
    {
      question: "¿QuantaStream reemplaza a MySQL?",
      answer: "Es compatible con MySQL donde esa superficie ayuda a usar clientes y herramientas conocidas. No intenta ser un clon exacto de MySQL. Los esquemas se definen por descriptores y el motor está optimizado para ejecución analítica nativa de bitmaps."
    },
    {
      question: "¿Cómo lo pruebo?",
      answer: "Descarga el paquete Linux AMD64 v0.1.2 desde GitHub y sigue la guía de inicio. Los usuarios de Mac, ARM u otras plataformas pueden compilar desde el código fuente con Go instalado."
    },
    {
      question: "¿Qué cargas funcionan bien en QuantaStream?",
      answer: "El mejor encaje son filtros analíticos, agrupaciones, joins y cargas HTAP listas para streaming donde los datos se pueden representar como dominios comprimidos y consultar repetidamente sin reconstruir filas demasiado temprano."
    },
    {
      question: "¿Qué significa nativo de bitmaps?",
      answer: "Significa que predicados, joins, recorrido de relaciones y reducciones se expresan como álgebra de conjuntos sobre dominios de bitmaps comprimidos cuando es posible. La materialización de filas ocurre tarde, después de reducir el conjunto candidato."
    },
    {
      question: "¿Qué incluye 0.1.2?",
      answer: "El public preview incluye el servidor de un solo nodo, qstream-admin, endpoint compatible con MySQL, soporte de prepared statements, views, CTEs, tablas derivadas y temporales, CTAS, backup y restore, support bundles, cargador JSON para streaming y un camino de restore con datos de muestra. La versión 0.1.2 también exige un modo de autenticación explícito y limita la autenticación permisiva a evaluaciones locales sobre loopback."
    },
    {
      question: "¿QuantaStream soporta ejecución distribuida?",
      answer: "El repositorio incluye código de modo distribuido y scripts operacionales, y las corridas distribuidas de TPC-H se han usado para validar benchmarks. El camino rápido de 0.1.2 está enfocado intencionalmente en el motor de un solo nodo."
    },
    {
      question: "¿Puedo usar clientes MySQL existentes?",
      answer: "Sí para la superficie SQL y de metadatos soportada. Se han probado clientes MySQL de línea de comandos, drivers de aplicaciones y flujos con MySQL Workbench mientras se siguen cerrando brechas de compatibilidad."
    },
    {
      question: "¿Dónde hago preguntas o reporto problemas?",
      answer: "Usa la página de contacto para conversaciones sobre POC, soporte o colaboración. Usa GitHub issues para bugs concretos, solicitudes de features y brechas de compatibilidad reproducibles."
    }
  ]
};

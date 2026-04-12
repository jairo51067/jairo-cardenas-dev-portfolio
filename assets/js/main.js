/**
 * Main App Controller
 * Gestiona la carga modular y la inicialización de componentes
 */

/* The code you provided is a JavaScript module that serves as the main app controller for a web
application. Here is a breakdown of what it does: */
const App = {
    // Configuración de módulos
    modules: [
        { id: "navbar", path: "components/navbar/navbar.html" },
        { id: "hero", path: "components/hero/hero.html" },
        { id: "projects", path: "components/projects/projects.html" },
        { id: "about", path: "components/about/about.html" },
        { id: "contact", path: "components/contact/contact.html" }
    ],

    async init() {
        console.log("🚀 Iniciando carga modular...");
        
        // Cargamos todos los componentes en paralelo para máxima velocidad
        const loadPromises = this.modules.map(mod => this.loadComponent(mod.id, mod.path));
        
        await Promise.all(loadPromises);

        // Una vez cargado todo, inicializamos funciones globales
        this.setupSmoothScroll();
        this.initAnimations(); // Función que podrías tener en animations.js
    },

    async loadComponent(id, path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Error cargando ${path}`);
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
            
            // Disparar un evento personalizado por si el componente necesita su propio JS
            document.dispatchEvent(new CustomEvent(`moduleLoaded:${id}`));
            
        } catch (error) {
            console.error(`❌ Error en módulo [${id}]:`, error);
        }
    },

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });
    },

    initAnimations() {
        // Aquí puedes disparar Intersection Observers para revelar secciones
        console.log("✨ Animaciones listas");
    }
};

// Arrancar la aplicación cuando el DOM básico esté listo
document.addEventListener("DOMContentLoaded", () => App.init());
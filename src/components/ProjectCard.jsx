import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Cores para diferentes linguagens
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      React: '#61dafb',
      Python: '#3776ab',
      Java: '#ed8b00',
      HTML: '#e34f26',
      CSS: '#1572b6',
      Vue: '#4fc08d',
      PHP: '#777bb4',
      default: '#6b7280'
    };
    return colors[language] || colors.default;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <motion.div
        variants={hoverVariants}
        className="card-modern p-6 h-full flex flex-col relative overflow-hidden"
      >
        {/* Efeito de brilho no hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
          whileHover={{
            translateX: "100%",
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        />

        {/* Header do Card */}
        <div className="flex items-start justify-between mb-4">
          <motion.h3 
            className="text-xl font-semibold text-foreground group-hover:text-cherry transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {project.name}
          </motion.h3>
          
          <div className="flex space-x-2">
            <motion.a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Ver no GitHub"
            >
              <Github size={16} />
            </motion.a>
            
            {project.homepage && (
              <motion.a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Ver demo"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Descrição */}
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {project.description || 'Projeto desenvolvido com foco em boas práticas e tecnologias modernas.'}
        </p>

        {/* Footer do Card */}
        <div className="flex items-center justify-between">
          {/* Linguagem */}
          <div className="flex items-center space-x-2">
            {project.language && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${getLanguageColor(project.language)}20`,
                  color: getLanguageColor(project.language)
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getLanguageColor(project.language) }}
                />
                <span>{project.language}</span>
              </motion.div>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            {project.stargazers_count > 0 && (
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1 }}
              >
                <Star size={14} />
                <span>{project.stargazers_count}</span>
              </motion.div>
            )}
            
            {project.forks_count > 0 && (
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1 }}
              >
                <GitFork size={14} />
                <span>{project.forks_count}</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Indicador de hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cherry via-indigo-aura to-dill opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;


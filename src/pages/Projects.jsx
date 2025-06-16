import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { getRepos } from '../services/lib/github';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getRepos("Alisson-Rolim-knies");
        const desiredProjects = ["Clone_Disneyplus", "VisioCar_Vistorias", "Academia_Bem_Estar_e_Fitness", "Jquery_galeria_fotos", "Ebac_tech_talks", "Controle_Financeiro_Vistorias", "Alt-gest-o-imobili-ria-", "Galvao.vistorias", "Formatura-Carol", "Landing_page_Grey-s_anatomy", "Clone_Disneyplus", "EBAC-Motor", "Site_Escolha_Seu_Dragao", "Loja_de_calcados", "Loja_de_carros", "Agenda_contatos", "Site_gamesshop", "Projeto_calculadora_medias", "Lista.de.tarefas.vue"];
        const filteredData = data.filter(project => desiredProjects.map(name => name.toLowerCase()).includes(project.name.toLowerCase()));
        setProjects(filteredData);
        setFilteredProjects(filteredData);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrar por linguagem
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(project => project.language === selectedLanguage);
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedLanguage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Obter linguagens únicas
  const languages = ['all', ...new Set(projects.map(p => p.language).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-cherry border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="text-center space-y-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          Meus <span className="gradient-primary bg-clip-text text-transparent">Projetos</span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Uma coleção dos meus trabalhos mais recentes e projetos em destaque.
          Cada um representa um desafio único e uma oportunidade de aprendizado.
        </motion.p>
      </motion.section>

      {/* Filtros e Busca */}
      <motion.section
        variants={itemVariants}
        className="card-modern p-6 space-y-4"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Busca */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <motion.input
              type="text"
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          {/* Filtro por Linguagem */}
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-muted-foreground" />
            <motion.select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>
                  {lang === 'all' ? 'Todas as linguagens' : lang}
                </option>
              ))}
            </motion.select>
          </div>

          {/* Modo de Visualização */}
          <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Grid size={20} />
            </motion.button>

            <motion.button
              onClick={() => setViewMode('list')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <List size={20} />
            </motion.button>
          </div>
        </div>

        {/* Estatísticas */}
        <motion.div
          className="flex flex-wrap gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span>{filteredProjects.length} projeto(s) encontrado(s)</span>
          <span>•</span>
          <span>{projects.length} total</span>
          <span>•</span>
          <span>{languages.length - 1} linguagem(ns)</span>
        </motion.div>
      </motion.section>

      {/* Grid de Projetos */}
      <motion.section variants={itemVariants}>
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🔍
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou termo de busca
            </p>
          </motion.div>
        ) : (
          <motion.div
            className={`grid gap-6 ${viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
              }`}
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={itemVariants}
        className="text-center py-12 space-y-6"
      >
        <motion.h2
          className="text-3xl font-semibold text-foreground"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Gostou do que viu?
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Estes são apenas alguns dos meus projetos. Tenho muito mais para mostrar
          e estou sempre trabalhando em algo novo e interessante.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Alisson-Rolim-knies"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#C41E3A] text-white rounded-xl font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Ver no GitHub
          </motion.a>

          <motion.a
            href="/contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-[#4B0082] text-[#4B0082] bg-transparent rounded-xl font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-[#4B0082] hover:text-white"
          >
            Vamos Conversar
          </motion.a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Projects;


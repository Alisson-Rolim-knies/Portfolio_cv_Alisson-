import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Zap,
  Award,
  Target,
  Heart
} from 'lucide-react';

function About() {
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

  const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'TypeScript', level: 75, color: '#3178c6' },
    { name: 'Python', level: 70, color: '#3776ab' },
    { name: 'CSS/Tailwind', level: 88, color: '#06b6d4' },
    { name: 'Git/GitHub', level: 85, color: '#f05032' },
    { name: 'MongoDB', level: 65, color: '#47a248' }
  ];

  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Frontend',
      description: 'Criação de interfaces modernas e responsivas com React, Vue.js e tecnologias atuais.',
      color: 'text-blue-500'
    },
    {
      icon: Database,
      title: 'Desenvolvimento Backend',
      description: 'APIs robustas e escaláveis com Node.js, Python e bancos de dados modernos.',
      color: 'text-green-500'
    },
    {
      icon: Smartphone,
      title: 'Design Responsivo',
      description: 'Experiências perfeitas em todos os dispositivos, do mobile ao desktop.',
      color: 'text-purple-500'
    },
    {
      icon: Globe,
      title: 'Aplicações Web',
      description: 'Soluções completas end-to-end com foco em performance e usabilidade.',
      color: 'text-orange-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas e atraentes que proporcionam excelente experiência.',
      color: 'text-pink-500'
    },
    {
      icon: Zap,
      title: 'Otimização',
      description: 'Performance e SEO otimizados para máxima velocidade e visibilidade.',
      color: 'text-yellow-500'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Código limpo, bem documentado e seguindo as melhores práticas.'
    },
    {
      icon: Target,
      title: 'Foco no Resultado',
      description: 'Soluções que realmente resolvem problemas e geram valor.'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amor genuíno pelo que faço e busca constante por excelência.'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="space-y-20"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center space-y-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          Sobre <span className="gradient-primary bg-clip-text text-transparent">Mim</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Desenvolvedor apaixonado por tecnologia e inovação, com foco em criar 
          soluções que fazem a diferença na vida das pessoas. Sempre em busca de 
          novos desafios e oportunidades de crescimento.
        </motion.p>
      </motion.section>

      {/* História Pessoal */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-foreground">
            Minha Jornada
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Minha paixão por programação começou há alguns anos, quando descobri 
              o poder de transformar ideias em realidade através do código. Desde então, 
              tenho me dedicado a aprender e dominar as tecnologias mais modernas do mercado.
            </p>
            
            <p>
              Especializo-me em desenvolvimento web full-stack, com experiência em 
              React, Node.js, Python e diversas outras tecnologias. Acredito que a 
              melhor solução é sempre aquela que combina técnica sólida com criatividade.
            </p>
            
            <p>
              Quando não estou codando, gosto de estudar novas tecnologias, contribuir 
              para projetos open source e compartilhar conhecimento com a comunidade 
              de desenvolvedores.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-modern p-6 flex items-start space-x-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry/10 flex items-center justify-center text-cherry"
                >
                  <IconComponent size={24} />
                </motion.div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Habilidades */}
      <motion.section variants={itemVariants} className="space-y-8">
        <motion.h2 
          className="text-3xl font-semibold text-center text-foreground"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Serviços */}
      <motion.section variants={itemVariants} className="space-y-8">
        <motion.h2 
          className="text-3xl font-semibold text-center text-foreground"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O que eu faço
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-modern p-6 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 ${service.color} group-hover:bg-opacity-10`}
                >
                  <IconComponent size={32} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cherry transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        variants={itemVariants}
        className="text-center space-y-6 py-12"
      >
        <motion.h2 
          className="text-3xl font-semibold text-foreground"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Vamos trabalhar juntos?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Estou sempre aberto a novos projetos e oportunidades interessantes. 
          Entre em contato e vamos conversar sobre como posso ajudar!
        </motion.p>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#C41E3A] text-white rounded-xl font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 inline-block"
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default About;


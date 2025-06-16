import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Code, Coffee } from 'lucide-react';
import { getUser } from '../services/lib/github';

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser('Alisson-Rolim-knies');
        setUser(data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  const stats = [
    { icon: Code, label: 'Projetos', value: user?.public_repos || 0 },
    { icon: Users, label: 'Seguidores', value: user?.followers || 0 },
    { icon: Coffee, label: 'Commits', value: '500+' },
    { icon: Calendar, label: 'Anos', value: '3+' }
  ];

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
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Saudação */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block text-lg text-cherry font-medium mb-2"
                whileHover={{ scale: 1.05 }}
              >
                👋 Olá, eu sou
              </motion.span>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {user?.name || 'Alisson Rolim'}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-6"
              >
                <span>Desenvolvedor </span>
                <motion.span
                  className="gradient-primary bg-clip-text text-transparent font-semibold"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Full Stack
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Descrição */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Apaixonado por criar soluções inovadoras e funcionais.
              Especializado em desenvolvimento web moderno com foco em
              experiência do usuário e performance.
            </motion.p>

            {/* Localização */}
            {user?.location && (
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <MapPin size={20} className="text-cherry" />
                <span>{user.location}</span>
              </motion.div>
            )}

            {/* Botões de Ação */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/projetos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#C41E3A] text-white rounded-xl font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 text-center"
              >
                Ver Projetos
              </motion.a>

              <motion.a
                href="/contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-[#4B0082] text-[#4B0082] bg-transparent rounded-xl font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:bg-[#4B0082] hover:text-white text-center"
              >
                Entre em Contato
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Avatar e Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Avatar */}
            <motion.div
              className="relative mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.img
                src={user?.avatar_url}
                alt={user?.name || 'Alisson Rolim'}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--muted)"
                    }}
                    className="card-modern p-4 text-center cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cherry/10 text-cherry mb-2"
                    >
                      <IconComponent size={24} />
                    </motion.div>

                    <motion.div
                      className="text-2xl font-bold text-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>

                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;


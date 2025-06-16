import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Alisson-Rolim-knies',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/alisson-rolim-knies-2b1623316/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:alisson.arque@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-card border-t border-border mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              Alisson Rolim
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedor apaixonado por criar soluções inovadoras
            </p>
          </motion.div>

          {/* Links Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    color: 'var(--cherry-red)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={link.label}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Feito por Alisson Rolim
            </p>
          </motion.div>
        </div>

        {/* Linha decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <span>Desenvolvido com</span>
              <span className="font-semibold text-cherry">React</span>
              <span>•</span>
              <span className="font-semibold text-indigo-aura">Tailwind CSS</span>
              <span>•</span>
              <span className="font-semibold text-dill">Framer Motion</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;


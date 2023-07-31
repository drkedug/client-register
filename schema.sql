-- clientes.sql

-- Verifica se a tabela "clientes" já existe antes de criar
CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  data_nascimento VARCHAR(100),
  endereco VARCHAR(200),
  profissao VARCHAR(100)
);

-- Insere dados apenas se não houver conflito de chave primária
--   ('Maria', 'Santos', '98765432101', 'Avenida B, 456', 'Médica', '1985-05-20'),
--   ('Pedro', 'Ferreira', '78901234501', 'Praça C, 789', 'Advogado', '1982-11-10')
--   ON DUPLICATE KEY UPDATE id = id;

-- tabela produto
CREATE SEQUENCE produto_id_seq;
CREATE TABLE produto (
id int4 NOT NULL DEFAULT nextval('produto_id_seq'),
descricao varchar(200) NOT NULL,
valor numeric NOT NULL DEFAULT 0,
marca varchar(100) NULL,
CONSTRAINT produto_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX produto_id_idx ON public.produto USING btree (id);

INSERT INTO produto (descricao, valor, marca)
VALUES('Arroz parboilizado 5Kg', 25, 'Tio João');
INSERT INTO produto (descricao, valor, marca)
VALUES('Maionese 250gr', 7.2, 'Helmanns');
INSERT INTO produto (descricao, valor, marca)
VALUES('Iogurte Natural 200ml', 2.5, 'Itambé');
INSERT INTO produto (descricao, valor, marca)
VALUES('Nescau 400gr', 8, 'Nestlé');
INSERT INTO produto (descricao, valor, marca)
VALUES('Batata Palha 180gr', 5.2, 'Chipps');
INSERT INTO produto (descricao, valor, marca)
VALUES('Feijão Carioquinha', 5, 'Xap');

-- tabela curso
CREATE SEQUENCE curso_id_seq;
CREATE TABLE curso (
id int4 NOT NULL DEFAULT nextval('curso_id_seq'),
descricao varchar(200) NOT NULL,
valor numeric NOT NULL DEFAULT 0,
categoria varchar(100) NULL,
CONSTRAINT curso_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX curso_id_idx ON public.curso USING btree (id);

INSERT INTO curso (descricao, valor, categoria)
VALUES('Node.js do Básico ao Avançado', 119.9, 'Desenvolvimento');
INSERT INTO curso (descricao, valor, categoria)
VALUES('Docker para Iniciantes', 49, 'Infraestrutura');
INSERT INTO curso (descricao, valor, categoria)
VALUES('Java Ao Infinito e Além', 179.49, 'Desenvolvimento Back-end');
INSERT INTO curso (descricao, valor, categoria)
VALUES('React Pro', 89, 'Desenvolvimento Front-end');
INSERT INTO curso (descricao, valor, categoria)
VALUES('Padrões de Projeto', 24.9, 'Fundamentos');
INSERT INTO curso (descricao, valor, categoria)
VALUES('Android Studio Expert', 55.75, 'Desenvolvimento Mobile');
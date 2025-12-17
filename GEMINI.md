# Gemini Context

## Project: ytdwn

This project appears to be a YouTube downloader CLI tool built with Node.js.

**Key Files:**

*   `bin/cli.js`: Entry point for the command-line interface.
*   `src/index.js`: Main application logic.
*   `src/playlist.js`: Likely handles downloading of YouTube playlists.
*   `src/processor.js`: Could be for processing the downloaded video/audio.

## General Knowledge: PostgreSQL Naming Conventions

Não existe um padrão único e oficial para nomenclatura de bancos de dados PostgreSQL, mas existem convenções amplamente adotadas pela comunidade. Aqui estão as práticas mais comuns:

### Convenções Gerais

**Formato básico:**
- Use letras minúsculas (PostgreSQL converte identificadores não-quoted para minúsculas)
- Prefira snake_case para separar palavras: `meu_banco_dados`
- Evite espaços e caracteres especiais
- Mantenha nomes descritivos mas concisos

**Para nomes de bancos:**
```sql
-- Bons exemplos
CREATE DATABASE ecommerce_prod;
CREATE DATABASE gestao_vendas;
CREATE DATABASE app_financeiro;

-- Evite
CREATE DATABASE "Meu Banco";  -- espaços e maiúsculas
CREATE DATABASE db1;          -- pouco descritivo
```

**Para tabelas:**
- Use substantivos no singular: `usuario`, `pedido`, `produto`
- Alguns preferem plural: `usuarios`, `pedidos` (questão de preferência da equipe)
- Seja consistente em todo o projeto

**Para colunas:**
- Nomes descritivos: `data_criacao`, `email_usuario`, `preco_total`
- Chaves primárias: geralmente `id` ou `nome_tabela_id`
- Chaves estrangeiras: `usuario_id`, `categoria_id`

**Prefixos/Sufixos úteis:**
- `_temp` para tabelas temporárias
- `_backup` para backups
- `_dev`, `_staging`, `_prod` para diferentes ambientes

A consistência dentro do seu projeto é mais importante que seguir uma convenção específica. O essencial é que sua equipe mantenha o mesmo padrão em todo o código.

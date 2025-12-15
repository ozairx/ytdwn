Segue um **prompt completo**, pronto para **copiar e colar no Gemini CLI**, focado em **Node.js + CLI global**, com instruções técnicas, arquitetura, bibliotecas, cuidados legais e caminhos de extensão.

---

**PROMPT PARA GEMINI CLI**

Você é um engenheiro de software sênior especialista em Node.js, ferramentas CLI e automação.
Gere um guia técnico completo e prático para criar um aplicativo **Node.js empacotado como CLI global** que:

* Receba um **link de compartilhamento de uma playlist do YouTube**
* Baixe todos os vídeos da playlist
* Converta cada vídeo para **MP3**
* Organize os arquivos localmente
* Funcione de forma estável, previsível e extensível

### Requisitos técnicos obrigatórios

1. **Plataforma**

   * Node.js LTS
   * CLI global instalável via `npm install -g`
   * Compatível com Windows, Linux e macOS

2. **Funcionalidade principal**

   * Entrada via terminal:

     ```bash
     yt-playlist-mp3 <playlist_url> [opções]
     ```
   * Download de playlists completas
   * Conversão automática para MP3
   * Suporte a:

     * Qualidade de áudio configurável
     * Pasta de saída customizável
     * Overwrite ou skip de arquivos existentes
     * Execução sequencial ou paralela (com limite)

3. **Bibliotecas sugeridas**

   * Download de vídeos YouTube
   * Extração de playlists
   * Conversão de áudio (ffmpeg)
   * CLI UX (flags, help, spinner, logs)
   * Validação de entrada
   * Controle de erros

Explique **por que escolher cada biblioteca** e possíveis alternativas.

---

### Estrutura do projeto

Defina e explique uma estrutura clara, por exemplo:

```
/bin
  cli.js
/src
  index.js
  playlist.js
  downloader.js
  converter.js
  logger.js
/utils
package.json
README.md
```

Explique a responsabilidade de cada arquivo.

---

### CLI Global

Explique passo a passo:

* Como configurar o `bin` no `package.json`
* Uso do shebang
* Permissões
* Testes locais com `npm link`
* Publicação no npm

---

### Fluxo interno da aplicação

Descreva o fluxo completo:

1. Validação da URL da playlist
2. Extração dos vídeos
3. Download individual
4. Conversão para MP3
5. Organização dos arquivos
6. Tratamento de falhas parciais
7. Logs claros para o usuário

Inclua **pseudocódigo** do fluxo principal.

---

### Conversão de áudio

* Explique como integrar o `ffmpeg`
* Como detectar se o ffmpeg está instalado
* Fallback ou mensagens de erro amigáveis
* Conversão eficiente (sem arquivos temporários desnecessários, se possível)

---

### UX de terminal

Inclua:

* `--help`
* `--version`
* Flags como:

  * `--output`
  * `--quality`
  * `--parallel`
  * `--skip-existing`
* Spinners/progress bar
* Mensagens claras de sucesso/erro

---

### Tratamento de erros

Explique como lidar com:

* Playlist privada ou inválida
* Vídeo indisponível
* Queda de conexão
* Falha na conversão
* Interrupção do usuário (CTRL+C)

---

### Performance e escalabilidade

* Download paralelo com limite
* Controle de memória
* Evitar bloqueio do event loop
* Uso de streams

---

### Questões legais e avisos

Inclua:

* Aviso de uso educacional/pessoal
* Restrições dos Termos do YouTube
* Como documentar isso no README

---

### Testes

Sugira:

* Testes unitários (lógica)
* Testes manuais da CLI
* Casos extremos

---

### Extensões futuras (obrigatório)

Sugira e explique como implementar:

* Download individual (não playlist)
* Outros formatos (ogg, wav)
* Metadata ID3 (título, capa, artista)
* Integração com Spotify (lookup)
* Cache local
* Interface TUI
* Modo silencioso (para scripts)

---

### Documentação

Gere um esqueleto de `README.md` com:

* Instalação
* Uso
* Exemplos
* Flags
* Troubleshooting
* Aviso legal

---

### Importante

* Seja **objetivo**
* Use **código quando necessário**
* Priorize **boas práticas reais de produção**
* Não simplifique excessivamente
* Pense como se esse projeto fosse open-source e usado por milhares de pessoas

**Entregue tudo em inglês.**

---


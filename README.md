# Sidney Felinto Filmmaker — Site

Site de página única em HTML, CSS e JavaScript, com seções de casamentos e audiovisual corporativo, botão flutuante de WhatsApp e contato configurado, preparado para GitHub Pages.

## Arquivos
- `index.html`: estrutura e conteúdo.
- `css/style.css`: identidade visual e responsividade.
- `js/script.js`: menu mobile, WhatsApp, Instagram e modal de vídeos.

## Antes de publicar
1. O WhatsApp de Sidney está configurado como `558388719979`. Confirme se o número informado recebe mensagens no WhatsApp.
2. Informe `instagramUrl`.
3. Em `index.html`, troque `SUBSTITUA_ID_BIANCA`, `SUBSTITUA_ID_FILME_2` e `SUBSTITUA_ID_FILME_3` pelos IDs reais do YouTube.
4. Troque as imagens provisórias por fotografias autorizadas de Sidney e revise textos/serviços. O nome profissional exibido é “Sidney Felinto Filmmaker”.

## GitHub Pages
1. Crie o repositório `sidney-felinto` no GitHub.
2. Envie os arquivos e pastas para a raiz do repositório.
3. Acesse **Settings → Pages**.
4. Selecione **Deploy from a branch**, escolha `main` e `/ (root)`, e salve.

Não altere os DNS do domínio atual até que a nova versão esteja revisada e aprovada. As imagens e fontes remotas precisam de internet para carregar.


## Foto profissional
A foto enviada para a seção “Sobre mim” está em `assets/sidney-felinto-retrato.png`. Mantenha a pasta `assets` junto dos arquivos do site ao publicar.


## Páginas do site
- `index.html`: página inicial com portfólio de casamentos, corporativo e contato.
- `sobre.html`: página independente “Sobre Sidney”.

Menu principal: Início · Sobre · Casamentos · Corporativo · Contato.


## Estrutura atualizada (página única)
O site agora usa scroll em uma única página. O menu está na ordem: Início · Sobre · Casamentos · Corporativo · Contato. A seção Sobre aparece na página inicial entre a apresentação e o portfólio.
\n\nVídeo de apresentação de Sidney incluído na página inicial, com ID do YouTube `uWzU8NwRR3k`. O botão abre o player modal e também há link para assistir diretamente no YouTube.\n\n\nO vídeo de apresentação do Sidney está integrado à grade “Histórias em movimento”, junto aos demais filmes do portfólio.\n\n\nCorreções da versão 14: player de vídeo em proporção 16:9 e URL de incorporação atualizada para o domínio oficial youtube.com, incluindo o parâmetro de origem para corrigir erros de configuração do player (Erro 153).\n\n\nVersão 15: as capas do portfólio foram forçadas para proporção 16:9. Foi adicionada política explícita de referrer na página e no iframe do YouTube para tentar resolver o erro 153, que ocorre quando o player não recebe o cabeçalho Referer.\n
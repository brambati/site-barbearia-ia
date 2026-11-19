# Pedi um site inteiro para a IA. Deu certo?

Landing page de uma barbearia **fictícia** (Navalha & Cia) gerada por IA a partir de um prompt simples, auditada com Lighthouse e axe, e corrigida até chegar em **100 nas quatro notas**.

Vídeo 22 do canal **Cursos Online (JM Tutoriais)** · [Digital Lift](https://digitallift.com.br)

## O prompt

> Crie uma landing page para a barbearia Navalha & Cia, em Belo Horizonte: chamada para agendar, serviços com preço, galeria, horário, endereço e botão de WhatsApp. HTML, CSS e JavaScript puro.

## Antes e depois

| Lighthouse (celular) | `antes/` (versão da IA) | `depois/` (corrigida) |
| --- | --- | --- |
| Performance | 100 | 100 |
| Acessibilidade | 87 | 100 |
| Boas práticas | 89 | 100 |
| SEO | 90 | 100 |
| axe-core | 11 erros de contraste + falta de landmarks | 0 violações |

## Os 3 erros e as correções

1. **Celular** — faltava `<meta name="viewport">` (a página abria com 980px no celular), o texto tinha largura fixa e as grades tinham 4 colunas fixas.
   Correção: meta viewport, `max-width`, `repeat(auto-fit, minmax(220px, 1fr))` e `clamp()` nos tamanhos.
2. **Contraste** — 11 elementos abaixo de 4,5:1; o botão de agendar tinha 2,28:1 (branco sobre dourado).
   Correção: cores em variáveis (`--suave` 9:1, texto escuro no botão 8,3:1) e `:focus-visible`.
3. **HTML, acessibilidade e SEO** — botão era `<div onclick>`, sem `<main>`, sem meta description, favicon 404 e mensagem do WhatsApp sem codificação.
   Correção: `<a href>` de verdade, landmarks, lista de serviços, `aria-label`, meta description, `favicon.svg` e `encodeURIComponent`.

## Passo a passo para quem nunca programou

1. **Baixe o projeto:** clique no botão verde **Code** aqui em cima e depois em **Download ZIP**.
2. **Descompacte** o arquivo (clique com o botão direito → *Extrair tudo*).
3. Abra a pasta **`depois`** e dê dois cliques no **`index.html`**. O site abre no navegador.
4. Quer comparar? Abra também o `index.html` da pasta **`antes`**.
5. **Para usar na sua barbearia:** abra `depois/index.html` no Bloco de Notas (ou no [VS Code](https://code.visualstudio.com/), grátis) e troque nome, preços, horário e endereço. No `depois/script.js`, troque o número `5531900000000` pelo seu WhatsApp (55 + DDD + número) e a mensagem.
6. Salve e atualize a página no navegador (tecla F5).

## Como auditar o seu site (as 3 checagens)

1. **Abra no celular** (ou no Chrome: F12 → ícone de celular).
2. **Rode o Lighthouse:** no Chrome, F12 → aba *Lighthouse* → *Mobile* → *Analyze page load*.
3. **Navegue só com o teclado:** use Tab e Enter e veja se dá para chegar em tudo.

## Licença

MIT — use à vontade.

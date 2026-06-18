# Guia visual implementado - Marcus Reboque

## Identidade aplicada

A interface foi baseada no logotipo validado da Marcus Reboque: preto, branco, vermelho e amarelo. A homepage usa alto contraste, cartões objetivos e fotografias reais de operação, evitando ilustrações genéricas ou promessa visual que não esteja confirmada nos ativos.

## Tokens CSS

| Token | Valor | Uso |
| --- | --- | --- |
| `--brand-primary` | `#d71920` | CTAs principais, marcadores e estados de destaque |
| `--brand-secondary` | `#f2c400` | Sinais de emergência, foco visual e detalhes do hero |
| `--brand-accent` | `#2f80ed` | Acento reservado para evoluções de interface |
| `--brand-dark` | `#111111` | Header, hero, footer e faixas de contraste |
| `--brand-light` | `#ffffff` | Texto e fundos claros |
| `--surface` | `#ffffff` | Cartões de serviços, FAQ e listas |
| `--surface-muted` | `#f3f4f1` | Seções de respiro e fundos neutros |
| `--text-primary` | `#171717` | Texto principal |
| `--text-secondary` | `#5d646d` | Texto de apoio |
| `--border` | `#d8ddd5` | Divisórias, cards e controles |
| `--focus-ring` | `#f2c400` | Foco de teclado |

## Regras implementadas

- Cards com raio máximo de 8px, usados apenas para itens repetidos ou conteúdo enquadrado.
- Tipografia Geist via `next/font`, com Geist Mono restrita a numeração e códigos visuais.
- Imagens reais priorizadas em hero, cards, galeria e CTAs.
- Sem avaliações inventadas, estrelas, preços, prazos ou promessas mecânicas.
- Foco visível para navegação por teclado e menu móvel com `aria-expanded` e fechamento por Escape.

## Hero mobile

O recorte 4:5 puro cortaria partes importantes da caminhonete e da plataforma. Por isso foi gerada uma derivação 4:5 com preservação integral da foto original no topo e área escura inferior para leitura do texto no mobile.

- Original: `public/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp`
- Derivada: `public/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03-mobile.webp`
- Dimensões: `960x1200`
- Ferramenta: `ffmpeg`, com `scale=960:-2` e `pad=960:1200`
- SHA-256: `289DB562C7CFAB6084C5CC188587FE8B5C6185BB5A11856735C1CACA2B3C4B7F`

## Estratégia futura de domínio

O domínio canônico implementado é `https://marcusreboque.com.br/`. Caso a versão `www` seja usada no futuro, a recomendação é redirecionar `https://www.marcusreboque.com.br/*` para a versão sem `www`, preservando path e query. Nenhum redirect foi implementado nesta etapa.

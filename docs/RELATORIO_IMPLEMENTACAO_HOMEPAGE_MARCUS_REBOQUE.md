# Relatório de implementação da homepage - Marcus Reboque

## Escopo executado

Foi substituída a página técnica inicial por uma homepage comercial completa para `https://marcusreboque.com.br/`, mantendo `NEXT_PUBLIC_INDEXABLE=false` e a política pública de `noindex,nofollow`.

## Seções implementadas

1. Header sticky com logo, navegação, telefone, WhatsApp e menu móvel acessível.
2. Hero com H1 oficial, imagem responsiva desktop/mobile, movimento leve por scroll e CTAs.
3. Grid com 12 serviços, mensagens específicas de WhatsApp e imagem aprovada quando disponível.
4. Bloco emergencial `Precisa de guincho agora?`.
5. Fluxo `Como funciona` em quatro etapas.
6. Soluções de transporte: auto socorro 24 horas, transporte emergencial e transporte programado.
7. Áreas atendidas: Fortaleza, Região Metropolitana e outras localidades sob consulta.
8. Diferenciais com claims sustentáveis e sem promessa de prazo/preço.
9. Galeria inicial com seis imagens reais.
10. CTA de reputação no Google sem nota, reviews ou AggregateRating.
11. FAQ visível com 10 perguntas e schema `FAQPage`.
12. Presença oficial com site, telefone e WhatsApp confirmados.
13. CTA final.
14. Footer com contato e domínio oficial.

## SEO e dados estruturados

- Title: `Guincho 24h em Fortaleza | Reboque e Auto Socorro | Marcus Reboque`
- Description: `Guincho, reboque e auto socorro 24h em Fortaleza para motos, carros, vans, caminhonetes, barcos, máquinas e pequenas cargas. Atendimento pelo WhatsApp.`
- Canonical: `https://marcusreboque.com.br/`
- Robots: controlado por `NEXT_PUBLIC_INDEXABLE=false`, com `noindex,nofollow`.
- JSON-LD: `Organization`, `TowingService`, `WebSite` e `FAQPage`.
- O schema não inclui `AggregateRating`, preço, CNPJ, endereço físico ou coordenadas.
- `sameAs` fica vazio até validação de perfis oficiais.

## Imagens acima da dobra

- Desktop: `public/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp`
- Dimensões desktop: `677x510`
- Mobile: `public/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03-mobile.webp`
- Dimensões mobile: `960x1200`
- Implementação: `getImageProps` de `next/image`, art direction por `<picture>` e `fetchPriority="high"` no `img` final.

## Componentes client-side

- `src/components/layout/MobileMenu.tsx`: estado do menu móvel, `aria-expanded`, fechamento por Escape.
- `src/components/media/ScrollMotionHero.tsx`: atualiza variável CSS por `requestAnimationFrame`; respeita `prefers-reduced-motion`.

Todo o restante da homepage permanece como Server Component.

## Links externos e pendências oficiais

Não foi configurado link de Perfil da Empresa no Google nem redes sociais porque não há URL oficial validada no conteúdo local. A interface evita links quebrados: o CTA de avaliações aparece desabilitado até o perfil oficial ser informado em `src/content/site.ts`.

## Arquivos centrais alterados

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/content/site.ts`
- `src/content/images.ts`
- `src/content/home.ts`
- `src/lib/site-url.ts`
- `src/lib/metadata.ts`
- `src/lib/schema.ts`
- `src/lib/whatsapp.ts`
- `src/components/layout/*`
- `src/components/sections/*`
- `src/components/ui/*`
- `src/components/media/*`

## Ambientes

- `.env.example` criado com domínio oficial, indexação desativada e placeholder de GA.
- `.env.local` criado localmente com domínio oficial e indexação desativada. Este arquivo permanece ignorado pelo Git.

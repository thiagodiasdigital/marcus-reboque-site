# Relatorio Fundacao Tecnica - Marcus Reboque

Data: 2026-06-18
Raiz: `C:\Users\Dell\Desktop\marcus-reboque`

## Resultado

Fundacao tecnica Next.js criada na raiz do projeto, sem implementar o layout comercial final, sem paginas internas definitivas, sem bibliotecas de animacao, sem analytics, sem dominio, sem Vercel e sem remoto GitHub.

## Versoes

- Node: `v24.12.0`
- npm: `11.6.2`
- Next.js: `16.2.9`
- React: `19.2.4`
- React DOM: `19.2.4`
- TypeScript: `^5`
- Tailwind CSS: `^4`
- ESLint: `^9`

## Scaffold

- `create-next-app --help` foi consultado antes da criacao.
- O CLI rejeitou `_NEXT_SCAFFOLD_TEMP` como nome de pacote por restricoes do npm.
- Solucao aplicada: criar a pasta exigida `_NEXT_SCAFFOLD_TEMP/` e gerar o scaffold em `_NEXT_SCAFFOLD_TEMP/scaffold`.
- Scaffold usado com TypeScript, ESLint, Tailwind, App Router, `src/`, import alias `@/*`, `--empty`, npm e `--disable-git`.
- Apenas arquivos tecnicos necessarios foram integrados na raiz.
- `_NEXT_SCAFFOLD_TEMP/` foi removido apos lint, typecheck, build e teste local.

## Arquivos tecnicos criados

- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- `.gitignore`
- `.env.example`
- `README.md`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/not-found.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/content/site.ts`
- `src/content/images.ts`
- `src/content/navigation.ts`
- `src/lib/site-url.ts`
- `src/lib/metadata.ts`
- `src/lib/schema.ts`
- `src/components/seo/json-ld.tsx`

## Conteudo e SEO tecnico

- Idioma configurado como `pt-BR`.
- Metadata centralizada com titulo e descricao provisorios.
- `metadataBase` depende de `NEXT_PUBLIC_SITE_URL`; fallback local: `http://localhost:3000`.
- `NEXT_PUBLIC_INDEXABLE=false` bloqueia indexacao por padrao.
- `robots.txt` retorna `Disallow: /` por padrao.
- `sitemap.xml` nao expoe URLs quando indexacao esta bloqueada.
- JSON-LD de homepage inclui `Organization`, `TowingService` e `WebSite`.
- Nenhum review, rating, preco, CNPJ, coordenada, endereco publico ou area nao confirmada foi inventado.

## Homepage tecnica

- Server Component.
- H1: `Marcus Reboque`.
- Aviso visivel: `Fundacao tecnica, nao layout final.`
- Contato com telefone `(85) 98600-7392`.
- CTA `tel:+5585986007392`.
- CTA WhatsApp `https://wa.me/5585986007392`.
- Atendimento 24 horas.
- Fortaleza e Regiao Metropolitana.
- Imagem aprovada da homepage registrada e usada:
  `public/images/marcus-reboque/hero/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp`.

## Imagens

- Biblioteca fonte preservada: `IMAGENS_MARCUS_REBOQUE/`.
- Total na fonte: 83 arquivos.
- Pendentes preservadas fora de `public/`: 14 arquivos.
- Copias publicas aprovadas: 69 arquivos.
- Hashes das 69 copias publicas conferidos contra `MAPA_FINAL_ATIVOS_VISUAIS_MARCUS_REBOQUE.csv`.
- `public/images/marcus-reboque/servicos/utilitarios/` existe e esta sem imagens.
- Nenhum hash pendente aparece em `public/images/marcus-reboque/`.

## Documentos

- Documentos movidos da raiz para `docs/`: 21.
- `docs/README.md` criado como indice.
- `docs/MAPA_MIGRACAO_DOCUMENTOS_E_ATIVOS.csv` criado com documentos migrados, imagens copiadas e documentos gerados.
- Linhas finais no mapa apos registro deste relatorio: 92.

## Contagens

- Arquivos antes do scaffold: 103.
- Arquivos listados por `rg --files` apos fundacao, excluindo artefatos ignorados: 197.
- Arquivos rastreados no commit local: 198.
- Arquivos brutos locais incluem `node_modules` e `.next`, que sao artefatos ignorados por Git.

## Validacoes

| validacao | resultado |
| --- | --- |
| `npm.cmd install` | concluiu e gerou `package-lock.json` |
| `npm.cmd run lint` | passou |
| `npm.cmd run typecheck` | passou |
| `npm.cmd run build` | passou |
| Build Next | `Next.js 16.2.9 (Turbopack)` |
| Homepage local | HTTP 200 |
| `robots.txt` local | HTTP 200, bloqueio padrao ativo |
| `sitemap.xml` local | HTTP 200, sem URLs quando bloqueado |
| Imagens publicas | 69 |
| Utilitarios | 0 imagens |
| Pendencias em public | 0 por comparacao de hash |
| `.env.local` | ausente |
| `_NEXT_SCAFFOLD_TEMP/` | removido |

## Git

- Git local inicializado apos validacoes.
- Foi necessario registrar a raiz como `safe.directory` por diferenca de ownership entre sandbox e usuario local.
- Commit final criado com a mensagem: `chore: initialize Marcus Reboque website foundation`.
- Remoto GitHub: nao configurado.

## Pendencias tecnicas recomendadas

1. Definir dominio real e preencher `NEXT_PUBLIC_SITE_URL`.
2. Gerar derivada mobile da imagem hero `#064`.
3. Produzir imagens Open Graph 1200x630 no fluxo visual futuro.
4. Implementar layout comercial final e paginas internas somente na proxima etapa.

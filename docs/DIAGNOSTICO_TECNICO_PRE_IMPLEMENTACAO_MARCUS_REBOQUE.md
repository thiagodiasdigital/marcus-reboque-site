# Diagnostico Tecnico Pre-Implementacao - Marcus Reboque

Data: 2026-06-18

## 1. Resumo executivo

A pasta `C:\Users\Dell\Desktop\marcus-reboque` ainda nao contem um projeto web implementado. Nao ha `package.json`, `node_modules`, configuracao de framework, Git, Vercel, Tailwind, TypeScript, lint, testes ou componentes de interface. O que existe hoje e uma base documental e visual preparada para iniciar o site: 69 imagens publicaveis organizadas, 14 imagens pendentes isoladas e documentos de aplicacao visual, alt text, matriz por pagina e rastreabilidade.

Classificacao do estado: **B. projeto novo parcialmente iniciado**.

O projeto pode avancar para implementacao. Nao ha bloqueio tecnico real para iniciar o scaffold; ha pendencias editoriais e operacionais que devem ser tratadas no planejamento da proxima etapa.

Fonte externa consultada para referencia de stack: documentacao oficial do Next.js, que indica **Latest Version 16.2.9** na pagina de docs em 2026-06-18: https://nextjs.org/docs

## 2. Classificacao do estado da pasta

Classificacao: **B. projeto novo parcialmente iniciado**.

Criterios:

- Nao e uma pasta vazia, portanto nao se enquadra em `A`.
- Nao ha projeto web existente, portanto nao se enquadra em `C` nem `D`.
- A pasta nao e inadequada: os ativos estao organizados e ha documentacao suficiente para iniciar.
- A etapa de conteudo visual foi concluida, mas a etapa de codigo ainda nao comecou.

## 3. Stack encontrada

| Item | Estado encontrado |
| --- | --- |
| Projeto web | Nao encontrado |
| Framework | Nenhum |
| Linguagem | Nenhuma linguagem de app detectada |
| Versao do framework | Nao aplicavel |
| Gerenciador de pacotes | Nao encontrado |
| Dependencias instaladas | Nenhuma; `node_modules` ausente |
| TypeScript | Ausente |
| Sistema de estilos | Ausente |
| Biblioteca de animacao | Ausente |
| Biblioteca de icones | Ausente |
| Biblioteca de componentes | Ausente |
| Testes | Ausentes |
| Lint | Ausente |
| Git | Ausente |
| Repositorio remoto | Ausente |
| Vercel | Ausente |
| Arquivos de ambiente | Nenhum `.env*` encontrado |
| Segredos expostos | Nenhum arquivo de segredo detectado; nenhum valor foi lido ou exposto |

## 4. Estrutura atual

Resumo observado antes da criacao deste diagnostico:

- 100 arquivos.
- 35 diretorios.
- 83 imagens dentro de `IMAGENS_MARCUS_REBOQUE/`.
- 69 imagens publicaveis.
- 14 imagens em `IMAGENS_MARCUS_REBOQUE/99_PENDENTES_DE_REVISAO/`.
- 5 arquivos `.txt` de instrucao.
- 6 arquivos `.md` de relatorio/mapa.
- 6 arquivos `.csv` de rastreabilidade/matriz.
- `Photos-3-001/` existe, mas esta vazia.

Diretorios principais:

- `IMAGENS_MARCUS_REBOQUE/01_IDENTIDADE_VISUAL/`
- `IMAGENS_MARCUS_REBOQUE/02_HERO/`
- `IMAGENS_MARCUS_REBOQUE/03_SERVICOS/`
- `IMAGENS_MARCUS_REBOQUE/05_CAMINHOES_E_PLATAFORMAS/`
- `IMAGENS_MARCUS_REBOQUE/06_EQUIPAMENTOS_E_FIXACAO/`
- `IMAGENS_MARCUS_REBOQUE/09_ATENDIMENTO_NOTURNO/`
- `IMAGENS_MARCUS_REBOQUE/10_ATENDIMENTOS_REAIS/`
- `IMAGENS_MARCUS_REBOQUE/99_PENDENTES_DE_REVISAO/`

Pastas vazias relevantes:

- `Photos-3-001/`
- `IMAGENS_MARCUS_REBOQUE/03_SERVICOS/05_UTILITARIOS/`
- `IMAGENS_MARCUS_REBOQUE/04_OPERACIONAIS/*`
- `IMAGENS_MARCUS_REBOQUE/07_EQUIPE/`
- `IMAGENS_MARCUS_REBOQUE/08_FACHADA_E_BASE/`
- `IMAGENS_MARCUS_REBOQUE/11_LOCALIDADES/`
- `IMAGENS_MARCUS_REBOQUE/12_INSTITUCIONAL/`

## 5. Arquivos relevantes

Documentos obrigatorios lidos integralmente:

- `BACKUP_COMPLETO_NOMES_E_CAMINHOS_ORIGINAIS_MARCUS_REBOQUE.csv`
- `RELATORIO_FINAL_RENOMEACAO_E_ORGANIZACAO_MARCUS_REBOQUE.md`
- `MAPA_FINAL_ATIVOS_VISUAIS_MARCUS_REBOQUE.csv`
- `PENDENCIAS_VISUAIS_MARCUS_REBOQUE.md`
- `AUDITORIA_PRE_RENOMEACAO_IMAGENS_MARCUS_REBOQUE.md`
- `MATRIZ_COBERTURA_VISUAL_PAGINAS_MARCUS_REBOQUE.csv`
- `MAPA_DE_APLICACAO_VISUAL_SITE_MARCUS_REBOQUE.md`
- `MAPA_IMAGEM_PAGINA_SECAO_MARCUS_REBOQUE.csv`
- `MATRIZ_VISUAL_POR_PAGINA_MARCUS_REBOQUE.csv`
- `GUIA_ALT_TEXT_E_LEGENDAS_MARCUS_REBOQUE.md`

Arquivos que devem orientar a implementacao futura:

- `MAPA_DE_APLICACAO_VISUAL_SITE_MARCUS_REBOQUE.md`
- `MAPA_IMAGEM_PAGINA_SECAO_MARCUS_REBOQUE.csv`
- `MATRIZ_VISUAL_POR_PAGINA_MARCUS_REBOQUE.csv`
- `GUIA_ALT_TEXT_E_LEGENDAS_MARCUS_REBOQUE.md`

## 6. Dependencias

Nenhuma dependencia foi instalada. Nao existe gerenciador de pacotes definido. A futura implementacao deve escolher um gerenciador antes do scaffold, preferencialmente `npm` para manter a operacao simples no Windows e na Vercel, salvo decisao contraria do projeto.

## 7. Riscos

Riscos criticos:

- Nenhum risco critico bloqueante encontrado na pasta atual.

Riscos tecnicos importantes:

- A raiz nao esta vazia. Se for usado `create-next-app` diretamente em `.`, o scaffold pode exigir `--force`; isso deve ser decidido conscientemente para nao sobrescrever documentos.
- As imagens estao fora de uma estrutura `public/` ou `src/`. Na implementacao, sera necessario decidir entre mover/copiar ativos para `public/images/` ou importar imagens estaticamente por dados.
- `Photos-3-001/` vazio e um residuo operacional. Nao e bloqueio, mas pode confundir inventarios futuros.
- A pasta nao tem Git. Sem versionamento, qualquer implementacao futura tera menos rastreabilidade.
- `transporte de utilitarios` nao possui cobertura visual dedicada.
- `transporte de empilhadeiras` tem cobertura fraca.
- As imagens pendentes nao podem entrar no site sem revisao.

## 8. Conflitos

Conflitos encontrados:

- Nenhum conflito tecnico de framework, dependencia ou build, porque nao existe projeto web.
- Conflito potencial: raiz ja contem documentos e imagens; o scaffold futuro precisa preservar esses arquivos.
- Conflito editorial: rota de `transporte de utilitarios` existe na arquitetura prevista, mas nao ha ativo visual dedicado.

## 9. Ativos preservados

Biblioteca visual oficial:

- `IMAGENS_MARCUS_REBOQUE/`

Estado:

- Total de imagens preservadas: 83.
- Publicaveis: 69.
- Pendentes: 14.
- Hero principal: `IMAGENS_MARCUS_REBOQUE/02_HERO/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp`.
- Hero principal deve permanecer exclusivo da homepage.
- Arquivos em `99_PENDENTES_DE_REVISAO/` nao devem ser publicados nesta fase.

## 10. Estrategia recomendada

Stack recomendada para a futura implementacao:

- Next.js App Router em versao estavel atual no momento do scaffold.
- TypeScript.
- React.
- Tailwind CSS.
- Componentes proprios e pequenos.
- `next/image`.
- `next/font`.
- Metadata API.
- JSON-LD.
- `sitemap.ts` e `robots.ts` gerados pelo projeto.
- Deploy na Vercel.

Nao instalar por padrao:

- Framer Motion: nao e necessario para o primeiro lancamento; scroll motion pode ser feito com CSS e pouco JavaScript.
- GSAP: desnecessario para o escopo e pode elevar custo de JS.
- Biblioteca pesada de componentes: nao necessaria para site local institucional.
- Formulario externo: avaliar so se houver exigencia operacional.
- Analytics: recomendado preparar eventos, mas ativar somente apos decisao de ferramenta e consentimento.
- Gerenciador de consentimento: necessario apenas se houver cookies nao essenciais/analytics/remarketing.
- Geracao dinamica de OG: util, mas pode comecar com OG estatico/derivado se prazo for curto.

Pode ser util:

- Biblioteca de icones leve, como `lucide-react`, se os icones forem usados em CTAs, cards e listas.

## 11. Recomendacao para imagens

Regras de implementacao:

- Usar o mapa `MAPA_IMAGEM_PAGINA_SECAO_MARCUS_REBOQUE.csv` como fonte de verdade.
- Nao carregar as 27 imagens mapeadas da homepage de uma vez.
- Carregar o Hero com prioridade.
- Usar lazy loading abaixo da dobra.
- No maximo 6 imagens iniciais na galeria.
- Manter dimensoes fixas ou `aspect-ratio` para prevenir CLS.
- Preservar imagem principal exclusiva por pagina de servico.
- Nao reutilizar imagem operacional em mais de tres contextos visuais.
- Manter `utilitarios` como lacuna visual.
- Tratar `empilhadeiras` como cobertura fraca.
- Nao publicar pendentes.

Recomendacao tecnica:

- Em Next.js, preferir `next/image` com dimensoes explicitas.
- Organizar futuramente os ativos em `public/images/marcus-reboque/` ou criar um modulo de dados que importe imagens estaticamente.
- Criar um arquivo de dados, por exemplo `src/content/images.ts`, derivado dos CSVs.

## 12. Recomendacao para scroll motion

Hero futuro:

- Arquivo: `IMAGENS_MARCUS_REBOQUE/02_HERO/marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp`.
- Deve aparecer imediatamente no HTML inicial.
- Deve usar carregamento prioritario.
- Texto principal deve ser HTML estatico e rastreavel.
- Aplicar overlay escuro ou gradiente para contraste.
- Ponto focal: picape cinza e caminhao plataforma.
- Desktop: pode usar recorte horizontal controlado.
- Mobile: recomenda-se derivar uma versao mobile ou usar recorte 4:5 controlado.
- Movimento: parallax leve, escala baixa ou deslocamento minimo da imagem.
- Fallback: hero estatico equivalente.
- `prefers-reduced-motion`: desativar scroll motion automaticamente.
- Evitar video, canvas pesado ou animacao dependente de JS para conteudo essencial.

## 13. Arquitetura tecnica sugerida

Diretorios sugeridos para a futura implementacao:

```txt
src/
  app/
    (site)/
      page.tsx
      servicos/
      areas-atendidas/
      sobre-a-marcus-reboque/
      avaliacoes/
      contato/
      guias/
    politica-de-privacidade/
    termos-de-uso/
    robots.ts
    sitemap.ts
    layout.tsx
    not-found.tsx
  components/
    layout/
    sections/
    service/
    ui/
  content/
    site.ts
    services.ts
    images.ts
    routes.ts
    seo.ts
  lib/
    schema.ts
    seo.ts
    phone.ts
  styles/
```

Rotas previstas:

- Institucionais devem ser estaticas.
- Paginas de servico podem compartilhar template por dados, mas cada uma precisa de conteudo e metadados proprios.
- `/servicos/` deve funcionar como hub.
- As quatro paginas centrais podem existir como paginas de intencao ampla.
- Evitar canibalizacao com titulos e H1 distintos entre `guincho-reboque-24h`, `auto-socorro-24h`, `transporte-emergencial` e paginas por veiculo.

## 14. Estrutura de componentes sugerida

Componentes de layout:

- `SiteHeader`
- `MobileNav`
- `Footer`
- `Breadcrumbs`
- `WhatsAppCta`
- `PhoneCta`

Componentes de homepage:

- `HomeHero`
- `ServiceCardsGrid`
- `EmergencySection`
- `HowItWorks`
- `AttendanceTypes`
- `ServiceAreas`
- `Differentials`
- `ReviewsPreview`
- `GalleryPreview`
- `FaqSection`
- `OfficialPresence`
- `FinalCta`

Componentes de servico:

- `ServiceHero`
- `ServiceIntro`
- `ServiceProof`
- `VehicleGallery`
- `ServiceFaq`
- `RelatedServices`
- `ServiceJsonLd`

Componentes de imagem:

- `MappedImage`
- `ResponsiveImageFrame`
- `GalleryImage`

## 15. Estrategia de metadados

Cada rota deve ter:

- `title` exclusivo.
- `description` unica.
- `alternates.canonical`.
- Open Graph coerente.
- Twitter/X card.
- Imagem OG derivada em 1200 x 630 px futuramente.

Metadados devem ser gerados por dados centralizados em `src/content/seo.ts`.

## 16. Estrategia de schema

Schemas recomendados:

- `LocalBusiness` ou `AutomotiveBusiness` para a empresa.
- `Service` por pagina de servico.
- `FAQPage` quando houver FAQ real na pagina.
- `BreadcrumbList` em paginas internas.
- `WebSite` na homepage.

Cuidados:

- Nao inventar bairro, coordenada ou area de atendimento sem fonte.
- Nao marcar avaliacoes sem dados reais.
- Nao duplicar schemas conflitantes.

## 17. Estrategia de performance

Requisitos:

- Conteudo critico renderizado em HTML.
- Site mobile-first.
- Hero priorizado.
- Imagens abaixo da dobra em lazy loading.
- Dimensoes explicitas e `aspect-ratio`.
- Baixo JavaScript.
- Evitar bibliotecas de animacao pesadas.
- Evitar carregar toda a galeria no primeiro paint.
- Usar `next/font` para reduzir CLS.
- Usar Server Components por padrao.
- Usar Client Components somente para interacoes reais.

## 18. Estrategia de acessibilidade

Requisitos:

- Semantica HTML correta.
- Um H1 por pagina.
- Navegacao por teclado.
- Estados de foco visiveis.
- Contraste adequado sobre o Hero.
- Alt text vindo de `GUIA_ALT_TEXT_E_LEGENDAS_MARCUS_REBOQUE.md`.
- Botao/links de telefone e WhatsApp com nomes acessiveis.
- Respeito a `prefers-reduced-motion`.
- Galerias navegaveis e sem dependencia obrigatoria de gestos.

## 19. Estrategia de testes

Antes do lancamento:

- Build do Next.js.
- Typecheck.
- Lint.
- Teste manual de navegacao por teclado.
- Auditoria Lighthouse mobile.
- Verificacao de CLS/LCP no Hero.
- Validacao de metadados por rota.
- Validacao de JSON-LD.
- Teste de links `tel:` e WhatsApp.
- Teste visual desktop e mobile.

Ferramentas recomendadas:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Playwright apenas se houver fluxo de formulario ou navegacao critica.

## 20. Passos exatos da futura implementacao

1. Criar Git antes de iniciar alteracoes.
2. Decidir se o scaffold sera feito na raiz atual ou em subpasta temporaria.
3. Se for na raiz, preservar explicitamente documentos e `IMAGENS_MARCUS_REBOQUE/`.
4. Criar projeto Next.js App Router com TypeScript e Tailwind.
5. Definir `src/`, alias `@/*`, `next/font` e estrutura de dados.
6. Copiar ou mapear imagens publicaveis para uma localizacao servivel pelo Next.js.
7. Criar `content/images.ts` com base no mapa visual.
8. Criar `content/services.ts` e `content/routes.ts`.
9. Implementar layout, header, footer e CTAs.
10. Implementar homepage com Hero estatico primeiro.
11. Adicionar scroll motion progressivo com fallback e `prefers-reduced-motion`.
12. Implementar hub `/servicos/`.
13. Implementar paginas de servico por template de dados.
14. Implementar paginas institucionais.
15. Implementar Metadata API, canonical, OG e Twitter cards.
16. Implementar `robots.ts` e `sitemap.ts`.
17. Implementar JSON-LD por tipo de pagina.
18. Executar build, lint, typecheck e verificacao visual.
19. Corrigir performance e acessibilidade.
20. Preparar deploy na Vercel somente apos aprovacao.

## 21. Validacoes finais

- Nenhuma imagem foi modificada.
- Nenhuma dependencia foi instalada.
- Nenhum deploy foi executado.
- Nenhum segredo foi exposto.
- Nenhum arquivo de ambiente foi encontrado.
- A pasta foi lida integralmente.
- Classificacao confirmada: **B. projeto novo parcialmente iniciado**.
- Pode avancar para implementacao: **sim**.

Bloqueios reais:

- Nenhum bloqueio tecnico real.

Pendencias nao bloqueantes:

- Decidir scaffold na raiz ou em subpasta.
- Inicializar Git.
- Definir destino tecnico das imagens no projeto Next.js.
- Resolver lacuna visual de utilitarios.
- Ampliar cobertura de empilhadeiras no futuro.
- Decidir ferramenta de analytics e consentimento.

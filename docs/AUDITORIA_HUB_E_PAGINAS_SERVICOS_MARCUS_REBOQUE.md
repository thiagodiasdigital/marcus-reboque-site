# Auditoria do hub e das páginas de serviços da Marcus Reboque

## 1. Resumo executivo

- O hub de serviços foi estabilizado em `/servicos` e a rota dinâmica física está correta em `src/app/servicos/[slug]/page.tsx`.
- O build gera 13 páginas estáticas de serviço nesta fase: 1 hub + 12 páginas de detalhe.
- Existem 4 páginas operacionais previstas, mas ainda não publicadas.
- `generateStaticParams` agora usa os slugs do catálogo oficial com sufixo `-fortaleza`.
- O slug inexistente `/servicos/servico-inexistente-fortaleza` retorna 404 real.
- O site permanece com `NEXT_PUBLIC_INDEXABLE=false`, então `robots` bloqueia indexação e o sitemap fica vazio.
- Corrigi os pontos objetivos encontrados: slugs, schema do hub, breadcrumb visível, FAQ específica por serviço, CTAs de telefone e WhatsApp, e navegação global para o hub.

## 2. Caminho da rota

O caminho físico real da rota dinâmica é:

`src/app/servicos/[slug]/page.tsx`

## 3. Inventário de rotas

Observação importante: o build do Next gera o hub como `/servicos` sem barra final. A variante `/servicos/` redireciona para a URL canônica sem a barra, por causa da configuração padrão do projeto.

| rota | slug | tipo | status_implementacao | gerada_no_build | origem_dos_dados | observacoes |
|---|---|---:|---|---|---|---|
| `/servicos` | `servicos` | hub | publicada | sim | `src/app/servicos/page.tsx` | Página central do catálogo; canonical próprio; noindex ativo. |
| `/servicos/guincho-para-motos-fortaleza` | `guincho-para-motos-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/guincho-para-carros-fortaleza` | `guincho-para-carros-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/guincho-para-caminhonetes-fortaleza` | `guincho-para-caminhonetes-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/guincho-para-vans-fortaleza` | `guincho-para-vans-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/transporte-de-utilitarios-fortaleza` | `transporte-de-utilitarios-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Sem imagem dedicada; tratamento institucional honesto. |
| `/servicos/transporte-de-veiculos-especiais-fortaleza` | `transporte-de-veiculos-especiais-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/transporte-de-barcos-fortaleza` | `transporte-de-barcos-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/transporte-de-maquinas-agricolas-fortaleza` | `transporte-de-maquinas-agricolas-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/transporte-de-veiculos-antigos-fortaleza` | `transporte-de-veiculos-antigos-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/transporte-de-empilhadeiras-fortaleza` | `transporte-de-empilhadeiras-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Cobertura visual mais fraca; imagem aprovada mantida. |
| `/servicos/guincho-para-pequenos-caminhoes-fortaleza` | `guincho-para-pequenos-caminhoes-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/transporte-de-pequenas-cargas-fortaleza` | `transporte-de-pequenas-cargas-fortaleza` | detalhe | publicada | sim | `src/content/home.ts` + `src/app/servicos/[slug]/page.tsx` | Página estática; imagem dedicada; FAQ específica. |
| `/servicos/guincho-reboque-24h-fortaleza` | `guincho-reboque-24h-fortaleza` | operacional prevista | ausente | nao | instrução da auditoria | Não criar nesta fase. |
| `/servicos/auto-socorro-24h-fortaleza` | `auto-socorro-24h-fortaleza` | operacional prevista | ausente | nao | instrução da auditoria | Não criar nesta fase. |
| `/servicos/transporte-emergencial-fortaleza` | `transporte-emergencial-fortaleza` | operacional prevista | ausente | nao | instrução da auditoria | Não criar nesta fase. |
| `/servicos/transporte-programado-fortaleza` | `transporte-programado-fortaleza` | operacional prevista | ausente | nao | instrução da auditoria | Não criar nesta fase. |

## 4. O que significa “13 páginas estáticas”

- Inclui o hub `/servicos`.
- Inclui 12 páginas de detalhe geradas por `generateStaticParams`.
- Não inclui as 4 páginas operacionais previstas, porque elas ainda não existem.
- O build completo do app gera 18 rotas estáticas no total quando se contam home, not-found, robots e sitemap.

## 5. Páginas existentes

- `/servicos`
- `/servicos/guincho-para-motos-fortaleza`
- `/servicos/guincho-para-carros-fortaleza`
- `/servicos/guincho-para-caminhonetes-fortaleza`
- `/servicos/guincho-para-vans-fortaleza`
- `/servicos/transporte-de-utilitarios-fortaleza`
- `/servicos/transporte-de-veiculos-especiais-fortaleza`
- `/servicos/transporte-de-barcos-fortaleza`
- `/servicos/transporte-de-maquinas-agricolas-fortaleza`
- `/servicos/transporte-de-veiculos-antigos-fortaleza`
- `/servicos/transporte-de-empilhadeiras-fortaleza`
- `/servicos/guincho-para-pequenos-caminhoes-fortaleza`
- `/servicos/transporte-de-pequenas-cargas-fortaleza`

## 6. Páginas faltantes

- `/servicos/guincho-reboque-24h-fortaleza`
- `/servicos/auto-socorro-24h-fortaleza`
- `/servicos/transporte-emergencial-fortaleza`
- `/servicos/transporte-programado-fortaleza`

## 7. generateStaticParams

- Fonte dos slugs: `services` em `src/content/home.ts`.
- Unicidade: cada item do array gera um único slug; não há duplicação no catálogo atual.
- Slugs vazios: não há entradas vazias.
- Slugs inválidos: a rota dinâmica usa `dynamicParams = false` e `notFound()` para entradas inexistentes.
- Correspondência: cada item do catálogo existente gera exatamente uma página.
- Estabilidade: a geração é determinística porque vem de array estático versionado.

## 8. 404

- A URL inexistente `/servicos/servico-inexistente-fortaleza` retornou HTTP 404.
- Não há fallback genérico nem página vazia para slugs desconhecidos.
- `dynamicParams = false` impede geração dinâmica de serviços inexistentes.

## 9. Metadados

- Title próprio por página.
- Description própria por página.
- Canonical próprio por página.
- Open Graph próprio.
- Twitter Card próprio.
- Imagem coerente com a categoria.
- Um único H1 por página.
- Nenhuma URL localhost em metadata.
- Domínio canônico configurado para `https://marcusreboque.com.br`.
- `NEXT_PUBLIC_INDEXABLE=false` mantém `noindex,nofollow` e `noimageindex`.

## 10. Conteúdo

- O hub organiza o catálogo e não replica a home de forma mecânica.
- As páginas de detalhe agora trazem:
  - breadcrumb visível;
  - resposta direta;
  - contexto do serviço;
  - situações de contratação;
  - processo;
  - cuidados específicos;
  - informação de orçamento;
  - fatores de preço;
  - imagem principal;
  - prova operacional;
  - FAQ específica;
  - CTA de WhatsApp;
  - telefone;
  - serviços relacionados;
  - retorno para o hub.
- A página de utilitários usa tratamento institucional honesto, sem fingir imagem dedicada.

## 11. Similaridade

- Similaridade máxima estimada: MÉDIA.
- As páginas compartilham a mesma estrutura, mas agora têm textos específicos por categoria, FAQ própria e cuidados distintos.
- Risco de thin content: baixo na maior parte do catálogo; médio em utilitários e empilhadeiras pela cobertura visual mais limitada.

## 12. Imagens

- Moto, carro, caminhonete, van, veículos especiais, barcos, máquinas agrícolas, veículos antigos, empilhadeiras, pequenos caminhões e pequenas cargas usam imagens aprovadas.
- Utilitários não possuem imagem dedicada e mantêm tratamento institucional.
- As imagens têm width/height e `sizes` definidos na página de detalhe.

## 13. Links

- Home → hub: presente no card de serviços, no cabeçalho e no rodapé.
- Home → páginas de serviços: presente nos cards da home.
- Hub → páginas ativas: presente nos cards do hub.
- Página de serviço → hub: presente no breadcrumb e nas CTAs finais.
- Página de serviço → serviços relacionados: presente nos cards relacionados.
- Header → hub: presente.
- Footer → rotas existentes: presente, incluindo o hub e os links de seção.
- Não foram encontrados links quebrados ou `href="#"`.

## 14. Hub

- Title: próprio.
- Description: própria.
- Canonical: próprio.
- H1: próprio.
- Introdução: orienta a escolha do serviço.
- Organização: catálogo validado + roadmap separado.
- Cards: com imagem, CTA WhatsApp e link para a página interna.
- CTAs: hub para WhatsApp e retorno à home.
- Conexão com a homepage: existe.
- Schema: `CollectionPage`, `BreadcrumbList` e `ItemList`.

## 15. Schema

- JSON-LD válido.
- Hub:
  - `CollectionPage`
  - `BreadcrumbList`
  - `ItemList`
- Página de detalhe:
  - `BreadcrumbList`
  - `Service`
  - `FAQPage` alinhada ao conteúdo visível
- `offers`, `AggregateRating` e preço permanecem ausentes.
- O `ItemList` do hub agora aponta para URLs reais das páginas, não para âncoras internas.

## 16. FAQ

- As perguntas são visíveis.
- As respostas são visíveis.
- A FAQ de cada página é específica do serviço exibido.
- Não há duplicação mecânica da FAQ genérica da home.
- O `FAQPage` do schema segue o conteúdo visível.

## 17. Conversão

- Há CTA de WhatsApp em todas as páginas.
- Há CTA de telefone visível nas páginas de serviço e no cabeçalho/rodapé.
- As mensagens usam contexto do serviço.
- `data-conversion` e `data-location` continuam sendo gerados por `conversionAttributes`.
- Não há UTM inventado, preço inventado ou prazo inventado.

## 18. Performance

- As páginas de serviço seguem majoritariamente como Server Components.
- O único Client Component relevante continua sendo o menu móvel.
- As imagens usam dimensões explícitas e `sizes`.
- O build continua estático.
- Não foi adicionada biblioteca nova desnecessária.

## 19. Indexação

- `NEXT_PUBLIC_INDEXABLE=false` mantém `noindex,nofollow`.
- `robots.txt` responde 200 e bloqueia a indexação.
- `sitemap.xml` responde 200, mas fica vazio enquanto a indexação estiver bloqueada.
- Não houve liberação de indexação.

## 20. Testes

- `npm.cmd run lint` passou.
- `npm.cmd run typecheck` passou.
- `npm.cmd run build` passou.
- HTTP:
  - `/servicos` retornou 200.
  - `/servicos/guincho-para-motos-fortaleza` retornou 200.
  - `/servicos/servico-inexistente-fortaleza` retornou 404.
  - `/robots.txt` retornou 200.
  - `/sitemap.xml` retornou 200.
  - imagem principal testada retornou 200.
- A variante `/servicos/` redireciona para a forma sem barra final.

## 21. Correções

- Corrigido o sufixo dos slugs para o padrão `-fortaleza`.
- Corrigido o schema do hub para apontar para URLs reais.
- Adicionado breadcrumb visível.
- Adicionada FAQ específica por página.
- Adicionados CTAs de telefone e WhatsApp nas páginas de serviço.
- Adicionado link para o hub no cabeçalho e no rodapé.
- Removido o arquivo acidental `Atue como responsável pelo ENCERRAM.txt`.

## 22. Pendências

- As 4 páginas operacionais previstas continuam ausentes por instrução explícita da auditoria.
- A inspeção visual em navegador local não foi concluída nesta rodada por limitação do ambiente para manter o servidor de forma persistente entre chamadas.

## 23. Recomendação do próximo estágio

- Publicar apenas depois de decidir se as 4 páginas operacionais previstas entram ou permanecem como roadmap.
- Se a próxima etapa for expandir o catálogo, comece pelas 4 páginas operacionais previstas e mantenha o mesmo padrão de breadcrumb, FAQ, CTA, schema e canonical.

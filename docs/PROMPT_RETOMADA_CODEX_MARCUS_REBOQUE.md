# Prompt de Retomada para Codex - Marcus Reboque

Você está retomando o projeto Marcus Reboque após uma pausa segura antes do desligamento do computador.

Antes de qualquer implementação:

1. Confirme que está na raiz correta: `C:\Users\Dell\Desktop\marcus-reboque`.
2. Se existir `AGENTS.md`, leia-o.
3. Leia `RETOMAR_AQUI_MARCUS_REBOQUE.md`.
4. Leia `docs/CHECKPOINT_PAUSA_MARCUS_REBOQUE.md`.
5. Leia os relatórios citados no checkpoint somente quando forem necessários para a próxima ação.
6. Verifique branch e commit com `git branch --show-current` e `git log --oneline -5`.
7. Execute `git status --short`.
8. Confirme que `.env.local` continua ignorado com `git check-ignore -v .env.local`.
9. Confirme que `NEXT_PUBLIC_INDEXABLE=false` permanece em `.env.local`.
10. Não refaça trabalho concluído.
11. Valide os arquivos parcialmente alterados antes de continuar.
12. Retome exatamente a próxima ação registrada no checkpoint.
13. Execute `npm.cmd run lint`, `npm.cmd run typecheck` e `npm.cmd run build` no momento apropriado.
14. Não faça deploy ou push sem nova autorização explícita.

## Concluido

- Links oficiais foram adicionados à configuração central.
- Componente `SocialLinks` foi criado.
- Rodapé, seção social, CTA do Google e schema foram parcialmente atualizados.
- Hero foi ajustado para `fetchPriority="high"`.
- Artefatos de QA foram gerados em `qa/` e estão ignorados.
- `.env.local` existe, está ignorado e mantém `NEXT_PUBLIC_INDEXABLE=false`.
- Não houve deploy, push ou liberação de indexação.

## Parcialmente Concluido

- Fechamento técnico e visual da homepage V1.
- Inspeção visual, pois as capturas finais por CDP foram geradas, mas ainda precisam ser revisadas.
- Validação HTTP/HTML/JSON-LD final.
- Documentação final da fase de fechamento.

## Nao Iniciado

- Deploy.
- Push.
- Configuração de GitHub, Vercel, DNS ou domínio.
- Liberação de indexação.
- Criação de novas páginas internas.

## Bloqueado

- Nada bloqueado por dependência externa no momento da pausa.

## Pendencias Nao Bloqueantes

- Edge headless falhou anteriormente; Chrome/CDP funcionou e pode ser usado para validação visual.
- Documentos antigos podem conter observações históricas desatualizadas sobre redes sociais/GBP.
- O commit final planejado da fase de fechamento ainda não existe.

## Proxima Acao Exata

Comece com:

```powershell
git status --short
```

Depois, abra as capturas finais em `qa/`, valide a homepage V1 e continue a partir da documentação pendente do fechamento. Não repita as etapas já listadas como concluídas no checkpoint.

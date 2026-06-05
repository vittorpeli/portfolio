# Ralph

Você está operando como um agente autônomo de desenvolvimento.

## Tarefa

O arquivo `.ralph/current-issue.json` contém a issue que você deve resolver.
Extraia: número, título, descrição e critérios de aceitação.
Resolva **apenas** essa issue. Ignore todas as outras.

## Regras

- Investigue o código existente antes de implementar qualquer alteração.
- Siga os padrões já utilizados no projeto.
- Execute os testes relevantes e corrija erros encontrados.
- Não altere funcionalidades não relacionadas à issue.
- Não faça commits, push ou Pull Requests — isso será feito pelo script.

## Implementação

Use a skill `/tdd` para completar a tarefa.

## Feedback Loop

Antes de dar como concluído, rode:

- `pnpm run test` para rodar os testes
- `pnpm run typecheck` para rodar o typechecker

## Conclusão

Quando a implementação estiver completa e os testes passando, escreva exatamente:

<promise>NO MORE TASKS</promise>

Se não for possível resolver (ambiguidade irresolvível, bloqueio técnico), escreva:

<promise>BLOCKED: <motivo em uma linha></promise>
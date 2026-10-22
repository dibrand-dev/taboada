# Flujo de trabajo Git

Políticas obligatorias para toda contribución (humana o de agentes IA) al repositorio `dibrand-dev/taboada`.

## Ramas

- **Prohibido el push directo a `main`.** Todo cambio entra a `main` exclusivamente mediante Pull Request revisado.
- Es obligatorio trabajar en **ramas temáticas** con el formato `<tipo>/<descripcion-en-kebab-case>`, donde `<tipo>` coincide con el prefijo de Conventional Commits.
  - ✅ `chore/setup-project-environment`, `feat/articles-menu`, `fix/avatar-url-type`
  - ❌ `dev`, `cambios`, `norberto-test`
- Crear la rama siempre desde un `main` actualizado (`git switch main && git pull && git switch -c <rama>`).

## Commits

- Formato obligatorio [Conventional Commits](https://www.conventionalcommits.org/): `<tipo>(<scope opcional>): <Descripción>`.
- Tipos permitidos: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`.
- La descripción se escribe en **Sentence case** (solo la primera letra en mayúscula, además de nombres propios y siglas), en modo imperativo y sin punto final.
  - ✅ `chore: Configure GitHub MCP and development rules`
  - ❌ `chore: Configure Github Mcp And Development Rules.`
- Un commit = un cambio lógico. No mezclar refactors con features.

## Pull Requests

- Destino por defecto: `main`.
- El título sigue el mismo formato que los commits y va en **Sentence case** (ej.: `chore: Setup project environment and git workflow`).
- La descripción debe incluir: resumen, lista de cambios y forma de verificación.

## Secretos

- **Nunca** versionar tokens, contraseñas ni claves (`.env*`, `mcp_config.json` con credenciales, etc.).
- `mcp_config.json` es local y está en `.gitignore`; se versiona únicamente `mcp_config.example.json` con placeholders.
- Si un secreto llega a un commit o a un canal público, se considera comprometido y debe **revocarse y rotarse** de inmediato.

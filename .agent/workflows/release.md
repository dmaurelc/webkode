---
description: Proceso estandarizado para realizar releases con SemVer, actualización de docs y git tags.
---

Este workflow debe ejecutarse cuando el usuario solicite actualizar documentación, hacer commit de cambios pendientes y liberar una nueva versión (Release).

1. Determinar la nueva versión SemVer (PATCH, MINOR o MAJOR) basada en los cambios recientes.
2. Actualizar `docs/CHANGELOG.md` insertando la nueva versión al inicio.
3. Copiar los artefactos actuales a la carpeta de documentación:
   - `cp .gemini/antigravity/brain/.../task.md docs/tasks.md` (Ajustar ruta de origen dinámicamente)
   - `cp .gemini/antigravity/brain/.../walkthrough.md docs/walkthrough.md` (Ajustar ruta de origen dinámicamente)
   - _Nota: Usar las herramientas de `write_to_file` o `run_command` para esto._
4. Hacer Stage de todos los cambios:
   - `git add .`
5. Realizar Commit con mensaje convencional:
   - `git commit -m "chore: release <VERSION> - <RESUMEN>"`
6. Crear Tag anotado:
   - `git tag -a v<VERSION> -m "Release <VERSION>"`
   - _Ejemplo: `git tag -a v1.5.1 -m "Release 1.5.1"`_
7. Push de cambios y tags:
   - `git push`
   - `git push origin v<VERSION>`

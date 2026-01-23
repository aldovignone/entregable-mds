# Modelos de Desarrollo del Software

Este repositorio está dedicado al entregable final de la asignatura Modelos de Desarrollo del Software

## Enunciado del entregable

Implementar un sistema de CI/CD de un servicio REST API (gRPC, … también válido) que devuelva Hello World.

### CI

- El servicio tiene que tener un unit test
- Modelo de branching
- Análisis estático de código (linter) Fallar el build si incorrecto
- El servicio tiene que estar en un repositorio de código
- Cuando haya un cambio tiene que lanzarse el proceso de CI mediante un PR donde ejecuta los tests, no es necesario análisis estático de código, ni crear artefacto
- Cuando se hace el merge Se ejecuta todo el pipeline de CI
- Versionar artefacto
- Finalmente el paquete se debe subir en un repositorio de artefactos (artifactory, nexus, docker hub, quayio)

#### CD
- El servicio tiene que tener un E2E/Integration test
- Desplegar el servicio

#### Demo

- Slides
- Tener la versión 1.0.0 desplegada a producción
- Cambiar el mensaje de bienvenida
- Ver el mensaje a producción 
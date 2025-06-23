# 📋 Regras de Negócio – Plataforma AgendaPro

Sistema de agendamentos com integração a calendário, feito com Laravel, React e React Native.

---

## 🔐 Usuários e Autenticação

- Usuário pode ser `admin`, `prestador` ou `cliente`.
- Cada tipo de usuário tem permissões específicas.
- Login e registro requerem e-mail único e senha (mínimo 6 caracteres).
- JWT (ou Sanctum) é usado para autenticação segura.
- E-mail pode ser verificado (opcional para MVP).

---

## 👤 Perfil do Usuário

- Todos os usuários podem editar suas informações (nome, telefone, senha, avatar).
- Prestadores devem completar perfil antes de publicar serviços.
  - Campos obrigatórios: nome, descrição, localização, especialidade, horários.

---

## 💇 Serviços

- Prestador pode cadastrar múltiplos serviços.
  - Campos: nome, duração (em minutos), valor, descrição.
- Serviço pertence a um único prestador.
- Apenas o dono do serviço pode editar ou excluir.

---

## 📆 Disponibilidade

- Prestador define horários semanais disponíveis.
  - Exemplo: Segunda das 08:00 às 12:00 e das 14:00 às 18:00.
- Sistema gera automaticamente blocos de tempo com base na duração do serviço.
- Prestador pode bloquear dias específicos (ex: feriados, folgas).

---

## 📅 Agendamentos

- Cliente só pode agendar em horários disponíveis.
- Agendamento exige: prestador, serviço, data e horário.
- Conflitos de horário são evitados automaticamente.
- Agendamento é confirmado automaticamente (ou manualmente, se ativado).
- Cliente pode cancelar até **X horas antes**.
- Prestador pode cancelar a qualquer momento.
- Agendamentos passados não podem ser modificados.

---

## 📊 Painel do Prestador

- Visualização de agendamentos em formato de lista e calendário.
- Estatísticas disponíveis:
  - Total de agendamentos
  - Horários mais populares
  - Serviços mais agendados

---

## 🗓️ Painel do Cliente

- Histórico de agendamentos.
- Filtros por status: confirmado, cancelado, realizado.
- Reagendamento permitido se dentro do prazo.

---

## 🧑‍💼 Administração

- Admin pode visualizar todos os usuários, agendamentos e serviços.
- Pode ativar/desativar prestadores.
- Pode gerar relatórios e ver estatísticas gerais:
  - Total de agendamentos
  - Usuários ativos
  - Horários de pico

---

## 🔔 Notificações

- Prestadores recebem notificação ao receber novo agendamento.
- Clientes recebem notificações de confirmação ou cancelamento.
- Notificações são registradas com data, hora e status de leitura.

---

## 📅 Integração com Google Calendar (opcional)

- Prestadores podem conectar suas contas Google.
- Agendamentos confirmados são enviados ao Google Calendar.
- Atualizações e cancelamentos refletem automaticamente no evento.

---

## 📤 Exportação de Dados

- Prestadores podem exportar relatórios em PDF ou Excel.
- Exportação contém: lista de agendamentos, totais por serviço e data.

---

## 💳 Pagamento (opcional)

- Cliente pode pagar no momento do agendamento.
- Formas de pagamento: Stripe, Pix ou MercadoPago.
- Agendamento só é confirmado após pagamento.
- Reembolsos automáticos disponíveis até **X horas antes**.

---

## 🛑 Validações e Restrições

- Não é permitido agendar dois compromissos no mesmo horário.
- Horários devem respeitar a disponibilidade do prestador.
- Serviços com agendamentos vinculados não podem ser excluídos.
- Prestador só acessa seus próprios agendamentos.
- Cliente só acessa seus próprios agendamentos.

---

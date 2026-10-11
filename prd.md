# PRD — AAB RideShare

**Shkurtesat:** PWA (Progressive Web App – aplikacion web progresiv); PRD (Product Requirements Document – dokumenti i kërkesave të produktit); MVP (Minimum Viable Product – produkti minimal i përdorshëm).

**Kursi:** Programimi për Pajisje Mobile (2026/2027)  
**Kolegji:** AAB  
**Emri i Projektit:** AAB RideShare  
**Themeluesi / Ekipi:** Amar Pantina — RE-78538/24  
**Data & Versioni:** Java 02 • Versioni 1.0 (Draft për MVP)

## 1. Përdoruesi dhe Problemi Real

- **Kush e përjeton problemin?** Studentët e Kolegjit AAB që udhëtojnë nga qytetet e tjera drejt kampusit në Prishtinë, si dhe studentët që kanë vetura dhe vende të lira.
- **Kur ndodh?** Kryesisht para fillimit të ligjëratave në mëngjes dhe pas përfundimit të tyre.
- **Si e zgjidhin sot?** Përmes transportit publik, taksive, shokëve ose grupeve në rrjete sociale. Këto mënyra mund ta vështirësojnë koordinimin dhe rrisin kohën ose koston e udhëtimit.

## 2. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)

Këto biseda duhet të plotësohen pas intervistimit të përdoruesve realë.

- **Biseda 1 — Shofer student:** Të kuptohet sa shpenzon për udhëtimet dhe a do të merrte studentë të tjerë.
- **Biseda 2 — Pasagjer student:** Të kuptohet çfarë vështirësish ka me transportin dhe çfarë do ta ndihmonte të gjente udhëtim.
- **Biseda 3 — Student që përdor rrjete sociale:** Të kuptohet si organizohen udhëtimet sot dhe cilat janë problemet kryesore.

## 3. Hipoteza e Vlerës

**Nëse** u ofrojmë studentëve një aplikacion PWA ku shoferët mund të publikojnë udhëtime dhe pasagjerët mund të kërkojnë e rezervojnë vende, **atëherë** do ta kenë më të lehtë koordinimin e udhëtimeve dhe mund të ulin kohën dhe koston e transportit.

Kjo hipotezë do të testohet përmes feedback-ut të studentëve dhe përdorimit të versionit fillestar.

## 4. Rrjedha Kryesore e Përdoruesit (Core Flow — Maksimumi 5 Hapa)

1. **Kyçja:** Studenti kyçet me email institucional AAB.
2. **Kërkimi / Postimi:** Shoferi publikon nisjen, destinacionin, orën dhe vendet e lira; pasagjeri kërkon udhëtime.
3. **Kërkesa:** Pasagjeri zgjedh udhëtimin dhe kërkon një vend.
4. **Konfirmimi:** Shoferi e shqyrton dhe e konfirmon kërkesën.
5. **Përfundimi:** Shoferi dhe pasagjeri e realizojnë udhëtimin dhe mund të japin feedback.

## 5. Kufijtë e MVP-së (Scope Contract)

**BRENDA MVP-së:**

1. Regjistrimi dhe kyçja e përdoruesve me email institucional AAB.
2. Publikimi i udhëtimit me nisje, destinacion, orë, vende të lira dhe çmim.
3. Kërkimi i udhëtimeve dhe kërkesa për rezervim, me konfirmim nga shoferi.

**JASHTË MVP-së:**

- Pagesat me kartela bankare; pagesa mund të bëhet drejtpërdrejt mes përdoruesve.
- Navigimi GPS dhe hartat në kohë reale.
- Chat-i i brendshëm në aplikacion.

## 6. Kriteret e Pranimit (Acceptance Criteria)

- [ ] **AC-1:** Kur shoferi publikon një udhëtim me numër të caktuar vendesh, udhëtimi shfaqet në listën e kërkimit.
- [ ] **AC-2:** Pas konfirmimit të një rezervimi, numri i vendeve të lira përditësohet saktë.
- [ ] **AC-3:** Përdoruesit pa email institucional të lejuar nuk mund të regjistrohen.
- [ ] **AC-4:** Aplikacioni shfaq një mesazh të qartë kur mungon lidhja me internetin.

## 7. Modeli Minimal i të Dhënave

Modeli fillestar mund të përmbajë këto tabela në PostgreSQL:

```sql
profiles (id, full_name, email, phone, role)
rides (id, driver_id, origin, destination, departure_time, available_seats, price_eur, status)
bookings (id, ride_id, passenger_id, status, created_at)
```

## 8. Rreziku Kryesor që Duhet Testuar

- **Rreziku:** A do të kenë studentët besim të udhëtojnë me shoferë që nuk i njohin personalisht?
- **Testi në Javën 2:** Të pyeten studentët nëse verifikimi me email institucional AAB do të rriste besimin e tyre dhe çfarë informacionesh shtesë do t'u duheshin para rezervimit.
# AAB RideShare — Java 2

**Studenti:** Amar Pantina  
**ID e studentit:** RE-78538/24  
**Kursi:** Programimi për Pajisje Mobile (2026/2027)  
**Projekti:** AAB RideShare

## 1. Problemi

Studentët që udhëtojnë drejt Kolegjit AAB në Prishtinë mund ta kenë të vështirë të gjejnë një udhëtim që përputhet me orarin dhe destinacionin e tyre. Informacioni shpesh shpërndahet në grupe të ndryshme ose kërkohet përmes njohjeve personale. Në të njëjtën kohë, shoferët që kanë vende të lira mund të mos i gjejnë lehtë pasagjerët që udhëtojnë në të njëjtin drejtim.

## 2. Përdoruesit

- **Shoferi:** dëshiron të publikojë udhëtimin, orën e nisjes, vendtakimin dhe numrin e vendeve të lira. Ai duhet të mund t'i shqyrtojë kërkesat dhe t'i pranojë ose refuzojë.
- **Udhëtari:** dëshiron të kërkojë udhëtime sipas nevojës së tij, t'i kontrollojë detajet dhe të kuptojë nëse kërkesa është ende në pritje apo është konfirmuar.

## 3. Tri ekranet kryesore

1. **Lista e udhëtimeve:** shfaq nisjen, destinacionin, orën dhe numrin e vendeve të lira. Përdoruesi zgjedh një udhëtim për të parë më shumë informacione.
2. **Detajet e udhëtimit:** shfaq informacionet e udhëtimit, vendtakimin dhe të dhënat për shoferin. Butoni “Kërko një vend” shfaqet pasi përdoruesi t'i kontrollojë detajet.
3. **Statusi i kërkesës:** shfaq “Në pritje të shoferit”, “E konfirmuar” ose “E refuzuar”, varësisht nga përgjigjja e shoferit.

## 4. MVP — Tri veçoritë kryesore

1. Publikimi i udhëtimeve nga shoferi, me orën, vendtakimin dhe numrin e vendeve të lira.
2. Shikimi i listës dhe detajeve të udhëtimeve, si dhe dërgimi i një kërkese për vend nga udhëtari.
3. Menaxhimi i kërkesave nga shoferi, me pranim ose refuzim dhe ruajtje të statusit.

## 5. Veçoritë që lihen për më vonë

- Harta dhe gjurmimi i automjetit në kohë reale.
- Pagesat brenda aplikacionit.
- Chat-i i brendshëm dhe sistemi i vlerësimeve.

## 6. Kriteret e testimit

- Pas dërgimit të kërkesës, përdoruesi sheh statusin “Në pritje të shoferit”.
- Shtypja e përsëritur e butonit nuk duhet të krijojë kërkesa të dyfishta për të njëjtin udhëtar dhe udhëtim.
- Numri i vendeve të lira zvogëlohet vetëm pasi shoferi ta pranojë kërkesën.
- Kur nuk ka vende të lira, kërkesa bllokohet dhe përdoruesit i shfaqet mesazhi “Nuk ka vende të lira”.
- Numri i vendeve të lira nuk duhet të bjerë nën zero.

## 7. Feedback-u për dizajnin

Gjatë shqyrtimit të dizajnit duhet të kontrollohet nëse përdoruesit e kuptojnë dallimin ndërmjet kërkesës për vend dhe rezervimit të konfirmuar. Për këtë arsye, etiketa “Kërko një vend” dhe statusi “Në pritje të shoferit” përdoren për ta bërë procesin më të qartë.

**Shënim:** Nëse kryhet testim me një koleg, këtu duhet të shënohet feedback-u real dhe ndryshimi që është bërë si rezultat i tij.

## 8. Ndihma nga AI

AI u përdor si mjet ndihmës për organizimin dhe formulimin e dokumentit. Përmbajtja duhet të kontrollohet nga studenti dhe të përputhet me skicën, kërkesat e lëndës dhe punën e realizuar. Çdo testim ose feedback i përmendur duhet të pasqyrojë atë që është kryer realisht.
# RideShare — Java 3

## Çfarë ndërtova

Ndërtova listën e tri udhëtimeve drejt kampusit, faqen me detajet e secilit udhëtim, simulimin e kërkesës për vend në pritje dhe faqen për udhëtimet që nuk gjenden. Shtova edhe kontrollin për udhëtimet pa vende të lira.

## Provat që bëra

### Prova 1: Lista në telefon

Hapa faqen kryesore në pamjen e telefonit; prisja tri karta udhëtimesh pa lëvizje anash dhe pashë tri udhëtime nga Peja, Istogu dhe Klina, me oraret, emrat e shoferëve dhe numrin e vendeve të lira.

### Prova 2: Detajet e udhëtimit të dytë

Klikova kartën 2; prisja adresën `/udhetimi/2` dhe vendtakimin e udhëtimit, ndërsa te kodi janë përcaktuar nisja nga Istogu, ora 08:00, shoferja Vjosa dhe vendtakimi te Stacioni kryesor. Te karta 3, udhëtimi nga Klina shfaqet pa vende të lira, ndërsa `/udhetimi/99` duhet të shfaqë mesazhin se udhëtimi nuk u gjet.

### Prova 3: Kërkesa në pritje

Klikova Kërko një vend; prisja një simulim me statusin “Në pritje të shoferit”, pa rezervim real. Kodi e shfaq këtë status dhe sqaron se nuk dërgohet rezervim real. Nga faqja e pritjes mund të kthehem te detajet e udhëtimit ose te lista.

## Çfarë do të përmirësoj

Do të përmirësoj pamjen dhe testimin e aplikacionit në madhësi të ndryshme të ekranit dhe do të kontrolloj që të gjitha lidhjet të funksionojnë siç duhet.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora AI për të më ndihmuar me strukturën e komponentëve React, navigimin ndërmjet faqeve dhe trajtimin e rasteve kur një udhëtim nuk ekziston ose nuk ka vende të lira. Kodin dhe funksionalitetet do t'i kontrolloj vetë duke i provuar në shfletues.
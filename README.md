Nom : DA COSTA Tiago

Description : Étant seul j'ai commencé par faire un fork puis j'ai clone mon dépot distant, ensuite j'ai créé les fonctionnalités une à une sur les branches correspondantes avec les tests nécessaires.
Ensuite je me suis occupé des workflows afin de faire les tests de chaque branche, et j'ai finis par merge toutes les branches sur main.

Commandes : Pour ce projet j'ai utilisé les commandes :
  - git clone
  - git checkout
  - git branch
  - git push
  - git pull

Différences :
 - switch/checkout : switch est utilisable uniquement afin de changer ou créer une branche, checkout a une plus large portée afin d'explorer l'historique ou même restaurer des éléments.
 - pull/fetch : pull récupère les modifications distantes pour les mettre en local sans se soucier de son travail, le fetch ne modifie pas notre code de travail en ne modifiant uniquement les nouveautés.
 - rebase/revert : rebase permet de nettoyer un historique sans se soucier de l'organisation, revert conserve l'historique et permet d'annuler un commit.

Description commandes : 
 - tag : tag permet de marquer des endroits dans l'historique qui sont estimés comme important afin d'en garder une trace.
 - stash : permet de sauvegarder des modifications sans les commit.
 - release : release permet d'avoir une version taguée de façon plus efficace.

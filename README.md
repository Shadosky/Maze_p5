# maze_p5
A maze generator using p5.js Lib

Live Demo [Here](https://shadosky.github.io/Maze_p5/)

---
# Recursive backtracker

Recursive backtracker on a hexagonal grid
The depth-first search algorithm of maze generation is frequently implemented using backtracking:

- Make the initial cell the current cell and mark it as visited
- While there are unvisited cells
  - If the current cell has any neighbours which have not been visited
    - Choose randomly one of the unvisited neighbours
    - Push the current cell to the stack
    - Remove the wall between the current cell and the chosen cell
    - Make the chosen cell the current cell and mark it as visited
  - Else if stack is not empty
    - Pop a cell from the stack
    - Make it the current cell

---

# Exploration exhaustive

![](https://upload.wikimedia.org/wikipedia/commons/b/b3/Yl_maze_ani_algo2.gif)

On part d'un labyrinthe où tous les murs sont fermés. Chaque cellule contient une variable booléenne qui indique si la cellule a déjà été visitée ou non (i.e. les cellules visitées sont celles qui appartiennent au chemin du labyrinthe en cours de construction).

Au départ, toutes les cellules sont marquées comme non visitées (faux).

On choisit arbitrairement une cellule, on stocke la position en cours et on la marque comme visitée (vrai).

Puis on regarde quelles sont les cellules voisines possibles et non visitées.

S'il y a au moins une possibilité, on en choisit une au hasard, on ouvre le mur et on recommence avec la nouvelle cellule.

S'il n'y en pas, on revient à la case précédente et on recommence.

Lorsque l'on est revenu à la case de départ et qu'il n'y a plus de possibilités, le labyrinthe est terminé.

L'historique des emplacements des cellules précédentes peut être géré de deux façons équivalentes :

  - par la sauvegarde dans un tableau de *mn-1*
  - par la sauvegarde dans la pile, en utilisant la récursivité
  
La formulation récursive donne de très bons résultats pour des labyrinthes de taille modeste. Dès lors que l'on veut générer de grands labyrinthes (1000 x 1000, par exemple), le programme risque de se terminer brutalement si la taille de la pile est insuffisante. Il est donc important de prévoir une taille de pile suffisante ou à défaut de passer à une autre solution comme l'historique à base de tableau.

L'exploration exhaustive est moins complexe que la fusion de chemins car elle ne nécessite pas la mise en œuvre de structures complexes

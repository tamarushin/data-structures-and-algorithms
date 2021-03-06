![cf](http://i.imgur.com/7v5ASc8.png) Tree Data Structure
====

## To Submit this Assignment
  * Do all your work in a public repository called `data-structures-and-algorithms`
  * fork this repository
  * write all of your code in a directory named `trees`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **index.js** -- The entry point to your module
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests

#### Testing  
  * write at least three test assertions for each method of the Tree Data Structure
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block useage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks  
  * implement a Tree Constructor
  * implement `insert(node)` and `remove(node)` methods on the class
  * implement `find(node)` methods on the class
  * implement `serialize()` and `deserialize()` methods on the class
    * Why?  You cannot simply use `JSON.stringify` and `JSON.parse` because your tree will be made up of class instances.  For that reason, you'll need to concoct a way to traverse the tree into a structure that you **can** run through `JSON.parse/stringify`.  One idea might be to do a traversal, building up an object literal with all of the right references, or perhaps an in-order array that simply notes all of the node values and links...

##### Trees
Breaking Down A Tree
root: - the top node in a tree
parent: - a node that links down to other nodes (is the root of a sub-tree)
child: - a node that's a direct sub-tree of another node
siblings: - a group of nodes with the same parent
leaf: - a node with node children
edge: - a connection (link) between nodes
height: - the distance (# of edges) from the root of a tree or sub-tree to the furthest leaf
Leaves will always have a height of zero
depth: - the distance (# of edges) from a node to the root
The root node will always have a depth of 0
level: - nodes that exist at the same height in a tree (1-based)
balance: - if the height of both sides of a tree are <= 1, the tree is balanced

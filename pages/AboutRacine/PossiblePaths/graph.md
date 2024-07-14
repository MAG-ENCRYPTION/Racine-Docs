# Graph Structure

The `Graph` class represents a graph with nodes and links. It allows creating and manipulating graphs, finding possible paths between nodes, optimizing shared and dedicated services, and performing other operations related to network topology.

## Class Attributes

- `nodes`: A list containing the nodes in the graph.
- `links`: A list containing the links between nodes in the graph.

## Class Methods <br>

<div style="border: 10px solid #c54747; padding: 10px;">
<em><b>Notice:</b></em> 🚧🚧🚧🚧

Before Using this classes methods you have to import 
the necessary classes from the `GraphUtils` package with following code : 

```python
# import GraphUtils Package 
from GraphUtils import Graph,Node,Link
```

- You alse have to define the graph object : 

    ```python
    # ObjectGraph 
    graph = Graph()
    ```
</div>

### `get_link_by_port1(self, node1: Node, port: int) -> Link`

This method retrieves a specific link based on a given node and the port number connected to that node. It iterates through the `links` list and returns the first link that matches the given criteria. If no link is found, it returns `None`.

**Example:**
```python
node1 = Node(Id=1)
port = 2
link = graph.get_link_by_port1(node1, port)
```


### `get_link_by_port2(self, node2: Node, port: int) -> Link`

Similar to the previous method, this function retrieves a specific link based on a given node and the port number connected to that node. It iterates through the `links` list and returns the first link that matches the given criteria. If no link is found, it returns `None`.

**Example:**
```python
node2 = Node(Id=2)
port = 1
link = graph.get_link_by_port2(node2, port)
```

### `set_bandwidth_link_list(self, bandwidthList) -> Link`

This method sets the bandwidth for each link in the `links` list based on a provided `bandwidthList`. It iterates through the `links` list and assigns the corresponding bandwidth value from the `bandwidthList` to each link. If there are more links than bandwidth values, it stops assigning values and breaks out of the loop.

**Example:**
```python
bandwidthList = [100, 200, 300]
graph.set_bandwidth_link_list(bandwidthList)
```

### `remove_link(self, node)`

This method removes all links connected to a given node from the `links` list. It iterates through the `links` list and removes any link where either the start node or the end node matches the given node.

**Example:**
```python
node = Node(Id=1)
graph.remove_link(node)
```

### `refresh_link(self)`

This method refreshes the `links` list by removing any links that are no longer connected to valid nodes. It iterates through the `links` list and removes any link where either the start node or the end node is not present in the `nodes` list.

**Example:**
```python
graph.refresh_link()
```

### `create_from_topology(self, N: list, L: list)`

This method creates a graph from a given topology represented by a list of nodes (`N`) and a list of links (`L`). It iterates through the `N` list and adds any nodes that are not already present in the `nodes` list. It then iterates through the `L` list and adds links between the corresponding nodes, considering the port numbers.

**Example:**
```python
nodes = [Node(Id=1), Node(Id=2), Node(Id=3)]
links = [Link(Node(Id=1), Node(Id=2), 1, 2), Link(Node(Id=2), Node(Id=3), 1, 2)]
graph.create_from_topology(nodes, links)
```

### `refresh_energies(self, energy_dict: dict)`

This method updates the remaining energy values for nodes based on a provided dictionary (`energy_dict`). It iterates through the key-value pairs in `energy_dict`, retrieves the corresponding node object based on the key, and sets the remaining energy value to the provided value.

**Example:**
```python
energy_dict = {1: 50, 2: 75, 3: 100}
graph.refresh_energies(energy_dict)
```

### `print_graph(self)`

This method prints the graph representation to the console. It displays the list of nodes and the list of links in a readable format.

**Example:**
```python
graph.print_graph()
```

### `add_node(self, node: Node)`

This method adds a node to the `nodes` list.

**Example:**
```python
node = Node(4)
graph.add_node(node)
```

### `add_link(self, link: Link)`

This method adds a link to the `links` list.

**Example:**
```python
link = Link(Node(4), Node(5), 1, 2)
graph.add_link(link)
```

### `get_link_by_id(self, idNode1: int, idNode2: int) -> Link`

This method retrieves a specific link based on the identifiers of two nodes. It iter```markdown
### `get_node_by_id(self, idNode: int) -> Node`

This method retrieves a specific node based on its identifier. It iterates through the `nodes` list and returns the first node that matches the given identifier. If no node is found, it returns `None`.

**Example:**
```python
node_id = 2
node = graph.get_node_by_id(node_id)
```


# Breadth-First Search for Possible Paths

This project implements the search for possible paths using the Breadth-First Search (BFS) algorithm in the "Racine" project. The BFS algorithm is useful for exploring a graph in a systematic manner, ensuring that all reachable nodes are visited in a breadth-first order.

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

## Functionality

The `Graph` class provides several methods for finding and filtering possible paths using the BFS algorithm. Here's an overview of each method and its role in the path finding process:

### Method `_is_valid_path(path: list) -> bool`

This method checks if a given path is valid by ensuring that certain conditions are met. You can customize the validation criteria based on your specific requirements.

#### Parameters

- `path`: A list representing a path in the graph.

#### Return

The method returns `True` if the path is valid, and `False` otherwise.

**Example:**

```python
# Assume we have a graph object and a path list (path_list)

# Check if the path is valid
is_valid = graph._is_valid_path(path_list)

# Display the result
print(is_valid)
```

### Method `_bfs(start_node: Node, end_node: Node) -> list`

This method performs the Breadth-First Search (BFS) algorithm to find all possible paths between a start node and an end node in the graph.

#### Parameters

- `start_node`: The start node for path finding.
- `end_node`: The end node for path finding.

#### Return

The method returns a list of paths found during the BFS traversal.

**Example:**

```python
# Create a graph instance
graph = Graph()

# Create nodes
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

# Create links
link1 = Link(node1, node2)
link2 = Link(node2, node3)
link3 = Link(node3, node4)
link4 = Link(node1, node4)

# Add nodes and links to the graph
graph.add_node(node1)
graph.add_node(node2)
graph.add_node(node3)
graph.add_node(node4)
graph.add_link(link1)
graph.add_link(link2)
graph.add_link(link3)
graph.add_link(link4)

# Perform BFS to find all paths between nodes 1 and 4
start_node = node1
end_node = node4
paths = graph._bfs(start_node, end_node)

# Print the paths
for path in paths:
    path_ids = [node.get_id() for node in path]
    print(" -> ".join(map(str, path_ids)))
```

Output:
```
1 -> 4
1 -> 2 -> 3 -> 4
```

In this example, we create a graph with four nodes (1, 2, 3, 4) and four links connecting them. We then call the `_bfs` method to find all possible paths between node 1 and node 4. The obtained paths are displayed, showing the different valid paths from 1 to 4.

### Method `_filter_paths(paths: list) -> list`

This method filters the paths obtained after running the BFS algorithm. It checks if each path is valid using the `_is_valid_path` method.

#### Parameters

- `paths`: A list of paths obtained after running the BFS algorithm.

#### Return

The method returns a filtered list of valid paths.

**Example:**

```python
# Assume we have a graph object and a list of paths (paths_list)

# Filter the paths
filtered_paths = graph._filter_paths(paths_list)

# Display the filtered paths
for path in filtered_paths:
    path_ids = [node.get_id() for node in path]
    print(" -> ".join(map(str, path_ids)))
```

### Method `find_possible_paths(start_node: Node, end_node: Node) -> list`

This method finds all possible paths between a start node and an end node in the graph using the BFS algorithm. It returns a list of valid paths.

#### Parameters

- `start_node`: The start node for path finding.
- `end_node`: The end node for path finding.

#### Return

The method returns a list of valid paths between the start node and the end node.

**Example:**

```python
# Create a graph instance
graph = Graph()

# Create nodes
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

# Create links
link1 = Link(node1, node2)
link2 = Link(node2, node3)
link3 = Link(node3, node4)
link4 = Link(node1, node4)

# Add nodes and links to the graph
graph.add_node(node1)
graph.add_node(node2)
graph.add_node(node3)
graph.add_node(node4)
graph.add_link(link1)
graph.add_link(link2)
graph.add_link(link3)
graph.add_link(link4)

# Find possible paths between nodes 1 and 4
start_node = node1
end_node = node4
possible_paths = graph.find_possible_paths(start_node, end_node)

# Print the possible paths
for path in possible_paths:
    path_ids = [node.get_id() for node in path]
    print(" -> ".join(map(str, path_ids)))
```

Output:
```
1 -> 4
1-> 2 -> 3 -> 4
```

In this example, we create a graph with four nodes (1, 2, 3, 4) and four links connecting them. We use the `find_possible_paths` method to find all valid paths between node 1 and node 4. The resulting paths are displayed, showing the different valid paths from 1 to 4.

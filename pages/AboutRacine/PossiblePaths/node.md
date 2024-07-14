## Node Structure

### Introduction
The Racine project is a network management system aimed at optimizing network resources and services. It utilizes an object-oriented approach to model and manipulate the network's topology, nodes, and links. The `GraphUtils` file is an essential component of the project, providing classes and methods for creating and managing the network graph.

### GraphUtils
The `GraphUtils` file contains the implementation of various classes and methods related to the network graph representation. It includes the following classes:

- `Graph`: Represents the global graph of the network.
- `Node`: Represents a node in the network.
- `Link`: Represents a link connecting two nodes in the network.

The `Graph` class encapsulates the network graph and provides methods to add nodes and links, retrieve nodes and links by ID, find possible paths between nodes, and perform various optimizations on the network graph.

### Object-Oriented Approach
The Racine project follows an object-oriented approach to model the network and its components. Object-oriented programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. Each class represents a specific entity or concept, and objects of that class possess properties (attributes) and behaviors (methods) associated with that entity.

The advantages of using an object-oriented approach in the Racine project are:

1. **Modularity**: OOP promotes modularity by encapsulating related data and behavior within classes. This allows for easier code organization, maintenance, and reusability.

2. **Abstraction**: Classes provide a way to abstract complex data structures and operations. They encapsulate the implementation details, allowing users of the class to focus on using the provided interface without worrying about the internal workings.

3. **Inheritance**: OOP supports inheritance, which enables the creation of hierarchical relationships between classes. Inheritance allows for code reuse and the definition of specialized classes (subclasses) based on more general classes (superclasses).

4. **Polymorphism**: OOP allows for polymorphism, which means that objects of different classes can be treated as instances of a common superclass. This enables code flexibility and extensibility, as different objects can respond to the same method calls in different ways.

### Node Class
The `Node` class represents a node in the network graph. It has the following attributes:

- `Id`: An identifier uniquely identifying the node.
- `threshold_energy`: The minimum energy threshold required for the node to operate efficiently.
- `remaining_energy`: The amount of energy currently available in the node.

The `Node` class provides the following methods:

- `set_remaining_energy(energy: float)`: Sets the remaining energy of the node to the specified value.
- `get_remaining_energy() -> float`: Retrieves the current remaining energy of the node.
- `get_threshold_energy() -> float`: Retrieves the threshold energy required for the node.
- `get_id() -> int`: Retrieves the identifier of the node.

The `Node` class is a fundamental building block of the network graph. It represents a network device or element and holds information about its energy levels. By encapsulating the properties and behaviors of a node within the `Node` class, the Racine project achieves a modular and extensible design, allowing for easy manipulation and analysis of network nodes.

---

This README provides an overview of the `GraphUtils` file, explains the object-oriented approach used in the Racine project, and provides a detailed explanation of the `Node` class. For more information and detailed usage examples, please refer to the [source code](https://github.com/foupouagnigni/PROJET-RESEAU).
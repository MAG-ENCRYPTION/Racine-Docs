# Link Structure

The `Link` class represents a communication link between two nodes in the RACINE project network. It provides a structured and intuitive way to manage the properties and behavior of the network links.

## Attributes

The `Link` class has the following attributes:

- `start`: The starting node of the link.
- `end`: The ending node of the link.
- `bandwidth`: The total available bandwidth of the link.
- `bandwidth_rate`: The rate at which the bandwidth is being used.
- `bandwidth_remaining`: The remaining available bandwidth of the link.
- `incoming_packets`: The number of incoming packets on the link.
- `outgoing_packets`: The number of outgoing packets on the link.
- `loss_rate`: The rate of packet loss on the link.
- `port1`: The port number on the starting node.
- `port2`: The port number on the ending node.

## Methods

The `Link` class provides methods to access and modify the attributes of the link. These methods include getters and setters for each attribute.

The getters allow you to retrieve the current values of the attributes, while the setters enable you to update the attributes with new values.

Using these methods, you can easily retrieve information about the link, such as the starting and ending nodes, available bandwidth, bandwidth utilization rate, remaining bandwidth, packet loss rate, and port numbers.

## Advantages of the Link Class Structure

The `Link` class structure offers several advantages for managing the network links in the RACINE project:

1. **Encapsulation**: The `Link` class encapsulates the attributes and methods related to the link, providing a clear and organized structure. This makes it easier to understand and maintain the codebase.

2. **Abstraction**: By providing getters and setters, the class abstracts the internal implementation details of the link attributes. This allows users to interact with the link object using intuitive methods, without worrying about the underlying logic.

3. **Data Integrity**: The class enforces data integrity by encapsulating attribute access within methods. This prevents direct access to attributes from outside the class, ensuring that the attributes are accessed and modified in a controlled manner.

4. **Flexibility**: The class allows for easy modification and expansion of the link attributes and methods. If additional functionality or attributes are required in the future, they can be added to the class without impacting the existing codebase.

5. **Code Reusability**: The `Link` class can be reused across multiple parts of the RACINE project, providing a consistent and standardized way to manage network links. This promotes code reuse, reduces redundancy, and improves overall code maintainability.

## Example Usage

Here's an example of how the `Link` class can be used in the context of the RACINE project:

```python
#Importing the Class
from GraphUtils import Node,Link

# Create nodes
nodeA = Node(1)
nodeB = Node(2)

# Create a link between nodeA and nodeB
linkAB = Link(nodeA, nodeB, 1, 2)

# Set the bandwidth and bandwidth rate for the link
linkAB.set_bandwidth(100e6)
linkAB.set_bandwidth_rate(0.5)

# Get the remaining available bandwidth of the link
remaining_bandwidth = linkAB.get_bandwidth_remaining()

# Update packet information for the link
linkAB.set_incoming_packets(10)
linkAB.set_outgoing_packets(8)
loss_rate = linkAB.get_loss_rate()

# Connect additional nodes
nodeC = Node(3)
nodeD = Node(4)

# Create another link between nodeC and nodeD
linkCD = Link(nodeC, nodeD, 3, 4)

# Set the bandwidth and bandwidth rate for the second link
linkCD.set_bandwidth(50e6)
linkCD.set_bandwidth_rate(0.2)

# Get the starting and ending nodes of the second link
start_node = linkCD.get_start()
end_node = linkCD.get_end()

# Update the port numbers for the first link
linkAB.set_port1(5)
linkAB.set_port2(6)

# Retrieve the port numbers for the first link
port1 = linkAB.get_port1()
port2 = linkAB.get_port2()
```

In this example, we create a network consisting of four nodes (`nodeA`, `nodeB`, `nodeC`, and `nodeD`). Two links (`linkAB` and `linkCD`) are created to connect these nodes. We then set the bandwidth and bandwidth rate for each link and retrieve the remaining available bandwidth.

We also update the packet information for `linkAB` and retrieve the loss rate. Additionally, we connect `nodeA` to `nodeB` using port numbers 1 and 2, and retrieve the port numbers for `linkAB`.

This example demonstrates how the `Link` class can be utilized to manage the network links in the RACINE project, allowing for easy configuration and retrieval of link attributes.
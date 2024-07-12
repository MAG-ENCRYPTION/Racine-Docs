# Quick Start

The Racine project is a wireless network monitoring platform based on Mininet, Ryu, and D-ITG.
This quick start guide will help you get started with the Racine project on your system.

## Installation

1. Clone the Racine project repository from GitHub:

   ```shell
   git clone https://github.com/MAG-ENCRYPTION/Racine-Project
   ```

2. Navigate to the project directory:

   ```shell
   cd Racine-Project
   ```


## Launching the Project

Follow the steps below to launch the Racine project:

1. Open two terminals.

2. In the first terminal, launch the Ryu controller:

   ```shell
   ryu-manager src/wifi_monitor_v8.py
   ```

3. In the second terminal, launch the Mininet WiFi topology:

   ```shell
   sudo python src/wifi_AP_ST_Topo.py
   ```

4. Once both terminals are open, you can generate traffic using D-ITG. For example, to generate DNS traffic between two hosts:

   - In the receiving host terminal, execute the following command to start receiving the traffic:

     ```shell
     ITGRecv -l recv.log
     ```

   - In the sending host terminal, execute the following command to send DNS traffic:

     ```shell
     ITGSend -t 15000 -a 10.0.0.2 -rp 10003 DNS
     ```

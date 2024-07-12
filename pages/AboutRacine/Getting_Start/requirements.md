# Racine Project

## Requirements

To deploy the Racine project, please ensure the following components are installed:

- **Operating System**: Ubuntu Linux
  - Distribution ID: Ubuntu
  - Description: Ubuntu 18.04.6 LTS
  - Release: 18.04
  - Codename: Bionic

- **Python**: Version 2 or Version 3

- **Ryu**: Version 4.15
  - [Ryu GitHub Repository](https://github.com/faucetsdn/ryu)

- **D-ITG**: Traffic generator and receiver
  - [D-ITG GitHub Repository](https://github.com/GridVoB/D-ITG)

- **Mininet WiFi**: Version 2.3.0.dev6
  - [Mininet WiFi GitHub Repository](https://github.com/intrig-unicamp/mininet-wifi)

If any of the above components are missing, you can use a pre-configured virtual machine that contains all the necessary dependencies. Please download the virtual machine image from [VM Download Page](https://example.com/vm-download) and follow the provided instructions to set it up.

## Folder Structure

The project folder, named "PROJET-RESEAU," has the following structure:

- **binary**: Contains the binary file of the machine learning model used.
- **dataset**: Contains all the datasets used for model training.
- **Documents**: Contains important project-related documents such as reports and useful books.
  - [TP_4GI_SD_WMN.pdf](Documents/TP_4GI_SD_WMN.pdf): Document providing guidance on Mininet, Ryu, and OpenFlow.
  - [D_ITG-2.8.1-manual.pdf](Documents/D_ITG-2.8.1-manual.pdf): Manual for D-ITG traffic generation.
- **interface**: Contains the code for the project's user interface.
- **Notebook**: Contains various notebooks used during the machine learning algorithm training phase.
- **src**: Contains the project launch files:
  - **classifier.py**: Module for classifying flows based on service types. (Note: This file calls a binary file present in the `binary` folder)
  - **file_write3.py**: Module for writing log files.
  - **Flow.py**: Class for retrieving packet flows.
  - **GraphUtils.py**: Class for the project's data structure.
  - **wifi_AP_ST_Topo.py**: Contains the physical network topology.
  - **wifi_classifier.py**: Module for generating datasets and creating an external classifier.
  - **wifi_monitor_v8.py**: Ryu controller with new rules and functionalities.

## Project Launch

To launch the Racine project, follow these steps:

1. Open two Ubuntu terminals using the command: `Ctrl + Alt + T`.
2. Switch to the superuser mode by executing the command: `sudo su` and enter your password.
3. In each terminal, navigate to the project's source code directory: `cd Documents/PROJET_RESEAU/src`.
4. In Terminal 1, launch the classifier:
   ```bash
   python3 classifier.py "unsupervised"
   ```
   or
   ```bash
   python3 classifier.py "supervised"
   ```
5. In Terminal 2, launch the Mininet WiFi topology:
   ```bash
   python2 wifi_AP_ST_Topo.py
   ```
   For a better understanding of Mininet, Ryu, and OpenFlow, refer to the [TP_4GI_SD_WMN.pdf](https://www.traffic.comics.unina.it/software/ITG/manual/D-ITG-2.8.1-manual.pdf)
6. Once the two terminals are open, you can generate traffic from host h1 (10.0.0.1) to host h2 (10.0.0.2). h1 will act as the sender, and h2 will act as the receiver.
   For example, to generate DNS traffic:
   - In the xterm for h2, enter the following command:
     ```bash
     ITGRecv -l recv.log
     ```
   - In the xterm for h1, enter the following command:
     ```bash
     ITGSend -t 15000 -a 10.0.0.2 -rp 10003 DNS
     ```
   For more information on traffic generation using D-ITG, refer to the [D_ITG-2.8.1-manual.pdf](Documents/D_ITG-2.8.1-manual.pdf) document.

Please ensure that all the required components and dependencies are properly installed and configured before launching the project.




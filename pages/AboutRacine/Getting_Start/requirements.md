# REQUIREMENTS

This guide will provide you with instructions to install all the dependencies required to run the Racine project on your system.

## Prerequisites

Before you begin, make sure your system meets the following requirements:

[![Ubuntu Linux](https://img.shields.io/badge/Ubuntu%20Linux-18.04.6%20LTS%20or%20Higher-blue.svg?logo=ubuntu)](https://releases.ubuntu.com/18.04/?C=N;O=D) <br>
[![Python](https://img.shields.io/badge/Python-3.6%20or%20higher-blue.svg?logo=python)](https://www.python.org/downloads/release/python-370/)

## Installing Dependencies

Follow the steps below to install the necessary dependencies:

### 1. Ryu

Ryu is the OpenFlow controller used by the Racine project.
Installing Ryu is a straightforward process. This guide will walk you through the steps to install Ryu on your system.
To install the prerequisites on Ubuntu, open a terminal and run the following command:

```shell
% apt install gcc python-dev libffi-dev libssl-dev libxml2-dev libxslt1-dev zlib1g-dev
```

#### Installation Steps
You can install Ryu either using pip or by cloning the source code from GitHub.

- Option 1: Installation using pip
  1. Open a terminal and run the following command to install Ryu using pip:

  ```shell
  % pip3 install ryu
  ```

  2. Wait for the installation to complete. Once finished, Ryu will be installed on your system.

- Option 2: Installation from source code
  1. Open a terminal and run the following commands to clone the Ryu repository from GitHub and navigate to the cloned directory:

  ```shell
  % git clone https://github.com/faucetsdn/ryu.git
  % cd ryu
  ```

  2. Run the following command to install Ryu using pip:

  ```shell
  % pip3 install .
  ```

  3. Wait for the installation to complete. Once finished, Ryu will be installed on your system.

#### Optional Requirements
Ryu has some optional features that require additional packages. If you want to use these features, you need to install the required packages.

1. Open a terminal and run the following command to install the optional requirements:

```shell
% pip3 install -r tools/optional-requires
```

2. Refer to the `tools/optional-requires` file for more details on the optional requirements.

### Writing Ryu Applications
To write your own Ryu application, you can refer to the "Writing Ryu Application" document. After writing your application, follow these steps to run it:

1. Open a terminal and navigate to the directory where your Ryu application file (`yourapp.py`) is located.

2. Run the following command to start the Ryu manager and execute your application:

```shell
% ryu-manager yourapp.py
```

*Note: The instructions provided in this guide assume a Linux-based system. If you are using a different operating system, please refer to the appropriate documentation for installation instructions.*

### 2. D-ITG

D-ITG is used for generating traffic in the Racine project.

- Clone the D-ITG GitHub repository:

  ```bash
  git clone https://github.com/GridVoB/D-ITG.git
  ```

- Navigate to the D-ITG directory:

  ```bash
  cd D-ITG
  ```

- Compile and install D-ITG:

  ```bash
  make
  sudo make install
  ```

### 3. Mininet WiFi

Mininet WiFi is a wireless network emulator based on Mininet.

- Clone the Mininet WiFi GitHub repository:

  ```bash
  git clone https://github.com/intrig-unicamp/mininet-wifi.git
  ```

- Navigate to the Mininet WiFi directory:

  ```bash
  cd mininet-wifi
  ```

- Install Mininet WiFi:

  ```bash
  sudo util/install.sh -Wlnfv
  ```

After following these steps, all the required dependencies for the Racine project should be installed on your system.
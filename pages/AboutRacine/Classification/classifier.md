# Python Classification

This project implements a Wi-Fi traffic classification system using Machine Learning techniques. It consists of three main files:

- **`wifi_monitor_v8.py`**: This file is a Ryu script that collects Wi-Fi traffic data and sends it to the classification script.
- **`wifi_classifier.py`**: This file handles the traffic classification, using pre-trained Machine Learning models.
- **`wifi_data_processing.py`**: This file processes the raw traffic data collected by `wifi_monitor_v8.py` and prepares it for classification.

## Dependencies

To run this project, you need to install the following dependencies:

[![NumPy](https://img.shields.io/badge/numpy-v1.24.3-blue.svg)](https://numpy.org/) <br>
[![Scikit-learn](https://img.shields.io/badge/scikit--learn-v1.2.2-blue.svg)](https://scikit-learn.org/stable/)<br>
[![Pickle](https://img.shields.io/badge/pickle-v5.0-blue.svg)](https://docs.python.org/3/library/pickle.html)<br>
[![Prettytable](https://img.shields.io/badge/prettytable-v3.7.0-blue.svg)](https://pypi.org/project/prettytable/)<br>

To install all of these packages you have to run the following command :

```shell
sudo pip3 install numpy scikit-learn pickle prettytable
```



## Usage

### Collecting Traffic Data

1. Run the Ryu script `wifi_monitor_v8.py` in "observe-links" mode:

   ```bash
   sudo ryu-manager wifi_monitor_v8.py --observe-links --ofp-tcp-listen-port 6634
   ```

2. The `wifi_monitor_v8.py` script will collect Wi-Fi traffic data and send it to the classification script `wifi_classifier.py`.

### Classifying Traffic

1. Run the classification script `wifi_classifier.py` with the "train" option to collect training data for a specific traffic type:

   ```bash
   sudo python3 wifi_classifier.py train [traffic_type]
   ```

   Where `[traffic_type]` can be:

   - **voice**: For voice traffic.
   - **video**: For video traffic.
   - **ftp**: For FTP traffic.

2. Run the classification script `wifi_classifier.py` with the "classify" option to classify traffic in real-time using a pre-trained Machine Learning model:

   ```bash
   sudo python3 wifi_classifier.py classify [mode]
   ```

   Where `[mode]` can be:

   - **supervised**: For supervised classification.
   - **unsupervised**: For unsupervised classification.

### Binary Files

The `binary` folder contains the following binary files:

- **`classifier_model`**: Contains the trained supervised classification model.
- **`random_forest_classifier_binary`**: Contains the trained unsupervised classification model.

### Methods

The `wifi_classifier.py` script uses the following methods:

- **`printclassifier(model)`**: Prints the results of the traffic classification.
- **`printflows(traffic_type,f)`**: Writes the raw traffic data to a file.
- **`run_ryu(p,traffic_type=None,f=None,model=None)`**: Runs the Ryu script `wifi_monitor_v8.py` and handles the traffic classification.
- **`printHelp()`**: Prints the script help.
- **`alarm_handler(signum, frame)`**: Handles the stopping of training data collection.

### Classes

The `wifi_classifier.py` script uses the `Flow` class to represent traffic flows. This class contains the following attributes:

- **`time_start`**: The time when the flow started.
- **`datapath`**: The identifier of the switch where the flow originated.
- **`inport`**: The input port of the flow.
- **`ethsrc`**: The source MAC address of the flow.
- **`ethdst`**: The destination MAC address of the flow.
- **`outport`**: The output port of the flow.
- **`tos`**: The type of service (ToS) field of the flow.
- **`forward_packets`**: The number of packets in the forward direction.
- **`forward_bytes`**: The number of bytes in the forward direction.
- **`forward_delta_packets`**: The change in the number of packets in the forward direction.
- **`forward_delta_bytes`**: The change in the number of bytes in the forward direction.
- **`forward_inst_pps`**: The instantaneous packets per second in the forward direction.
- **`forward_avg_pps`**: The average packets per second in the forward direction.
- **`forward_inst_bps`**: The instantaneous bytes per second in the forward direction.
- **`forward_avg_bps`**: The average bytes per second in the forward direction.
- **`forward_status`**: The status of the forward direction (ACTIVE or INACTIVE).
- **`forward_last_time`**: The last time the forward direction was updated.
- **`reverse_packets`**: The number of packets in the reverse direction.
- **`reverse_bytes`**: The number of bytes in the reverse direction.
- **`reverse_delta_packets`**: The change in the number of packets in the reverse direction.
- **`reverse_delta_bytes`**: The change in the number of bytes in the reverse direction.
- **`reverse_inst_pps`**: The instantaneous packets per second in the reverse direction.
- **`reverse_avg_pps`**: The average packets per second in the reverse direction.
- **`reverse_inst_bps`**: The instantaneous bytes per second in the reverse direction.
- **`reverse_avg_bps`**: The average bytes per second in the reverse direction.
- **`reverse_status`**: The status of the reverse direction (ACTIVE or INACTIVE).
- **`reverse_last_time`**: The last time the reverse direction was updated.


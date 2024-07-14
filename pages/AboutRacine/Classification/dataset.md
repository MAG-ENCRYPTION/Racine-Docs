# Dataset for Machine Learning

This README provides an overview of the datasets used in the RACINE project for traffic classification. The datasets are designed to train machine learning models to identify different types of network traffic.

## Dataset Structure

Each dataset consists of CSV files containing network traffic features extracted from different network protocols. The following features are present in all datasets:

- **Forward Packets:** Number of packets transmitted in the forward direction.
- **Forward Bytes:** Total number of bytes transmitted in the forward direction.
- **Delta Forward Packets:** Change in the number of forward packets.
- **Delta Forward Bytes:** Change in the number of forward bytes.
- **Forward Instantaneous Packets per Second:** Instantaneous packet transmission rate in the forward direction.
- **Forward Average Packets per second:** Average packet transmission rate in the forward direction.
- **Forward Instantaneous Bytes per Second:** Instantaneous byte transmission rate in the forward direction.
- **Forward Average Bytes per second:** Average byte transmission rate in the forward direction.
- **Reverse Packets:** Number of packets transmitted in the reverse direction.
- **Reverse Bytes:** Total number of bytes transmitted in the reverse direction.
- **Delta Reverse Packets:** Change in the number of reverse packets.
- **Delta Reverse Bytes:** Change in the number of reverse bytes.
- **Delta Reverse Instantaneous Packets per Second:** Instantaneous packet transmission rate in the reverse direction.
- **Reverse Average Packets per second:** Average packet transmission rate in the reverse direction.
- **Reverse Instantaneous Bytes per Second:** Instantaneous byte transmission rate in the reverse direction.
- **Reverse Average Bytes per second:** Average byte transmission rate in the reverse direction.
- **Traffic Type:** Type of traffic (e.g., real-time, shared-time, dedicated).


## Usage

These datasets can be used for various machine learning tasks, including:

- **Traffic classification:** Identifying the type of network traffic based on its features.
- **Anomaly detection:** Detecting unusual traffic patterns that may indicate malicious activity.
- **Network performance optimization:** Identifying traffic patterns that impact network performance and optimizing network resources accordingly.

## Classification

Each dataset is labeled with a "Traffic Type" column, which indicates the type of network traffic represented by the data. This information can be used to train machine learning models to classify network traffic based on its characteristics.

The classification process involves analyzing the traffic type column and assigning each dataset entry to one of the following service categories:

- **_Real-time_**: Represents traffic that requires immediate transmission, such as voice or video streaming.
- _**Shared-time**_: Refers to traffic that shares resources with other services, typically characterized by medium-priority traffic.
- **_Dedicated_**: Denotes traffic that has dedicated resources and high-priority transmission.

By examining the traffic type column, the RACINE project can classify the datasets (e.g., CSA, CSI, PING, etc.) into the respective service categories, enabling further analysis and network optimization.

## Summary of Dataset Files

| File                   | Number of Rows | Number of Columns | File Size | Type of Service |
|------------------------|----------------|-------------------|-----------|-----------------|
| CSA_training_data.csv  | 43 010         | 17                | 5 517 Ko  | Dedicated       |
| CSI_training_data.csv  | 42 902         | 17                | 5 613 Ko  | Real-time       |
| DNS_training_data.csv  | 42 995         | 17                | 5 290 Ko  | Shared-time     |
| PING_training_data.csv | 69 796         | 17                | 5 998 Ko  | Shared-time     |
| QUAKE3_training_data.csv| 42 991         | 17                | 5 999 Ko  | Real-time       |
| TELNET_training_data.csv| 42 941         | 17                | 6 036 Ko  | Real-time        |
| VOICE_training_data.csv | 42 940         | 17                | 5 712 Ko  | Real-time       |

Enjoy exploring the datasets and leveraging their valuable information for traffic classification within the RACINE project! 😊
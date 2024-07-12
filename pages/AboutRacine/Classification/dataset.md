# Dataset for Machine Learning model

This part provides an overview of the datasets used in the RACINE project for classification purposes. The datasets include the following files:

## CSA_training_data.csv

- Structure:
  - Columns:
    - `Forward Packets`: Number of packets transmitted in the forward direction.
    - `Forward Bytes`: Total number of bytes transmitted in the forward direction.
    - `Delta Forward Packets`: Change in the number of forward packets.
    - `Delta Forward Bytes`: Change in the number of forward bytes.
    - `Forward Instantaneous Packets per Second`: Instantaneous packet transmission rate in the forward direction.
    - `Forward Average Packets per second`: Average packet transmission rate in the forward direction.
    - `Forward Instantaneous Bytes per Second`: Instantaneous byte transmission rate in the forward direction.
    - `Forward Average Bytes per second`: Average byte transmission rate in the forward direction.
    - `Reverse Packets`: Number of packets transmitted in the reverse direction.
    - `Reverse Bytes`: Total number of bytes transmitted in the reverse direction.
    - `Delta Reverse Packets`: Change in the number of reverse packets.
    - `Delta Reverse Bytes`: Change in the number of reverse bytes.
    - `Delta Reverse Instantaneous Packets per Second`: Instantaneous packet transmission rate in the reverse direction.
    - `Reverse Average Packets per second`: Average packet transmission rate in the reverse direction.
    - `Reverse Instantaneous Bytes per Second`: Instantaneous byte transmission rate in the reverse direction.
    - `Reverse Average Bytes per second`: Average byte transmission rate in the reverse direction.
    - `Traffic Type`: Type of traffic (e.g., real-time, shared-time, dedicated).

- Classification:
  - Based on the provided traffic type, CSA data can be classified into the appropriate service category.

## CSI_training_data.csv

- Structure:
  - Columns: (same as CSA_training_data.csv)
    - Forward Packets, Forward Bytes, Delta Forward Packets, Delta Forward Bytes, Forward Instantaneous Packets per Second, Forward Average Packets per second, Forward Instantaneous Bytes per Second, Forward Average Bytes per second, Reverse Packets, Reverse Bytes, Delta Reverse Packets, Delta Reverse Bytes, DeltaReverse Instantaneous Packets per Second, Reverse Average Packets per second, Reverse Instantaneous Bytes per Second, Reverse Average Bytes per second, Traffic Type.

- Classification:
  - Based on the provided traffic type, CSI data can be classified into the appropriate service category.

## DNS_training_data.csv

- Structure:
  - Columns: (same as CSA_training_data.csv)
    - Forward Packets, Forward Bytes, Delta Forward Packets, Delta Forward Bytes, Forward Instantaneous Packets per Second, Forward Average Packets per second, Forward Instantaneous Bytes per Second, Forward Average Bytes per second, Reverse Packets, Reverse Bytes, Delta Reverse Packets, Delta Reverse Bytes, DeltaReverse Instantaneous Packets per Second, Reverse Average Packets per second, Reverse Instantaneous Bytes per Second, Reverse Average Bytes per second, Traffic Type.

- Classification:
  - Based on the provided traffic type, DNS data can be classified into the appropriate service category.

## PING_training_data.csv

- Structure:
  - Columns: (same as CSA_training_data.csv)
    - Forward Packets, Forward Bytes, Delta Forward Packets, Delta Forward Bytes, Forward Instantaneous Packets per Second, Forward Average Packets per second, Forward Instantaneous Bytes per Second, Forward Average Bytes per second, Reverse Packets, Reverse Bytes, Delta Reverse Packets, Delta Reverse Bytes, DeltaReverse Instantaneous Packets per Second, Reverse Average Packets per second, Reverse Instantaneous Bytes per Second, Reverse Average Bytes per second, Traffic Type.

- Classification:
  - Based on the provided traffic type, PING data can be classified into the appropriate service category.

## QUAKE3_training_data.csv

- Structure:
  - Columns: (same as CSA_training_data.csv)
    - Forward Packets, Forward Bytes, Delta Forward Packets, Delta Forward Bytes, Forward Instantaneous Packets per Second, Forward Average Packets per second, Forward Instantaneous Bytes per Second, Forward Average Bytes per second, Reverse Packets, Reverse Bytes, Delta Reverse Packets, Delta Reverse Bytes, DeltaReverse Instantaneous Packets per Second, Reverse Average Packets per second, Reverse Instantaneous Bytes per Second, Reverse Average Bytes per second, Traffic Type.

- Classification:
  - Based on the provided traffic type, QUAKE3 data can be classified into the appropriate service category.

## TELNET_training_data.csv

- Structure:
  - Columns: (same as CSA_training_data.csv)
    - Forward Packets, Forward Bytes, Delta Forward Packets, Delta Forward Bytes, Forward Instantaneous Packets per Second, Forward Average Packets per second, Forward Instantaneous Bytes per Second,```markdown
Forward Average Bytes per second, Reverse Packets, Reverse Bytes, Delta Reverse Packets, Delta Reverse Bytes, DeltaReverse Instantaneous Packets per Second, Reverse Average Packets per second, Reverse Instantaneous Bytes per Second, Reverse Average Bytes per second, Traffic Type.

- Classification:
  - Based on the provided traffic type, TELNET data can be classified into the appropriate service category.

## VOICE_training_data.csv

- Structure:
  - Columns: (same as CSA_training_data.csv)
    - Forward Packets, Forward Bytes, Delta Forward Packets, Delta Forward Bytes, Forward Instantaneous Packets per Second, Forward Average Packets per second, Forward Instantaneous Bytes per Second, Forward Average Bytes per second, Reverse Packets, Reverse Bytes, Delta Reverse Packets, Delta Reverse Bytes, DeltaReverse Instantaneous Packets per Second, Reverse Average Packets per second, Reverse Instantaneous Bytes per Second, Reverse Average Bytes per second, Traffic Type.

- Classification:
  - Based on the provided traffic type, VOICE data can be classified into the appropriate service category.

---

Please note that all datasets share the same column structure, which includes various packet and byte-related features, as well as the traffic type. These features provide valuable information for classifying the network traffic into different service categories.

The classification process involves analyzing the traffic type column and assigning each dataset entry to one of the following service categories:

- Real-time: Represents traffic that requires immediate transmission, such as voice or video streaming.
- Shared-time: Refers to traffic that shares resources with other services, typically characterized by medium-priority traffic.
- Dedicated: Denotes traffic that has dedicated resources and high-priority transmission.

By examining the traffic type column, the RACINE project can classify the datasets (e.g., CSA, CSI, PING, etc.) into the respective service categories, enabling further analysis and network optimization.

## Summary of Dataset Files

| File                   | Number of Rows | Number of Columns | File Size | Best Based on         |
|------------------------|----------------|-------------------|-----------|-----------------------|
| CSA_training_data.csv  | 43 010         | 17                | 5 517 Ko  | Accuracy              |
| CSI_training_data.csv  | 42 902         | 17                | 5 613 Ko  | Speed                 |
| DNS_training_data.csv  | 42 995         | 17                | 5 290 Ko  | Stability             |
| PING_training_data.csv | 69 796         | 17                | 5 998 Ko  | Availability          |
| QUAKE3_training_data.csv| 42 991         | 17                | 5 999 Ko  | Reliability           |
| TELNET_training_data.csv| 42 941         | 17                | 6 036 Ko  | Efficiency            |
| VOICE_training_data.csv | 42 940         | 17                | 5 712 Ko  | Quality               |

In this summary table, we compared the dataset files based on their number of rows, number of columns, file size, and different selection criteria. Each file was evaluated based on the following criteria:

- Accuracy: Evaluates the model's ability to accurately predict the traffic type.
- Speed: Measures the execution speed of the model for classification.
- Stability: Indicates the stability and consistency of the classification results.
- Availability: Evaluates the availability of data and its representativeness for classification.
- Reliability: Measures the reliability of the data and its ability to provide consistent results.
- Efficiency: Evaluates the efficiency of the model in quickly classifying the data.
- Quality: Indicates the overall quality of the dataset file in terms of data representativeness and reliability.

Based on these criteria, the best dataset file may vary depending on the specific requirements of the project. Therefore, please choose the file that best aligns with your objectives and relevant criteria for your use case.

Enjoy exploring the datasets and leveraging their valuable information for traffic classification within the RACINE project! 😊
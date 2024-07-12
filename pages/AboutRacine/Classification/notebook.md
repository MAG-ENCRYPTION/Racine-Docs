# Notebook

This repository contains a notebook and related files for performing classification using XGBoost, AdaBoost, and CatBoost models. The notebook provides an overview of the dataset, implements the models, evaluates their performance, and saves them for future use.

## Files

The following files are included in this repository:

| File Name              | Description                                          |
|------------------------|------------------------------------------------------|
| `Bachirou.ipynb`       | Jupyter Notebook containing code and explanations related to Bachirou's analysis or project |
| `Projet_Memoire.ipynb` | Jupyter Notebook containing code and explanations related to a project or research memoire |
| `deepLearning.ipynb`   | Jupyter Notebook containing code and explanations related to deep learning techniques |
| `trainingCenter.ipynb` | Jupyter Notebook containing code and explanations related to training center operations or activities |

## Predictions

The notebook applies three different models to classify the traffic type based on the provided training data. Here is a brief explanation of each model:

### XGBoost

XGBoost is an optimized gradient boosting algorithm that uses a combination of weak prediction models (decision trees) to make accurate predictions. It enhances performance through parallel computing and regularization techniques.

The XGBoost model in this notebook is trained on the combined dataset from various traffic types. It predicts the traffic type for new data based on the learned patterns and relationships in the training set.

### AdaBoost

AdaBoost (Adaptive Boosting) is an ensemble learning method that combines multiple weak classifiers to create a strong classifier. Each weak classifier focuses on misclassified instances to improve the overall performance.

The AdaBoost model in this notebook is trained on the combined dataset from various traffic types. It leverages the strengths of weak classifiers to classify the traffic type of new data.

### CatBoost

CatBoost is a gradient boosting algorithm that handles categorical features naturally without requiring manual encoding. It uses an ordered boosting scheme and combines numerical and categorical features effectively.

The CatBoost model in this notebook is trained on the combined dataset from various traffic types. It predicts the traffic type for new data, taking advantage of the categorical feature handling capabilities of CatBoost.

For further details and implementation, please refer to the notebook file (`Notebook.ipynb`).
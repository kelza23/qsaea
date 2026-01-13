<div align="center">
  <h1 align="center">QSAEA Visualizer</h1>
  <h3>Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-objective Optimisation</h3>
  <p>
    <b>Zheng Cai, Yit Hong Choo, Tao Zhou, Vu Le, Wei Hong Lim, and Chee Peng Lim</b>
  </p>
  <p>
    <i>IEEE Transactions on Evolutionary Computation (TEVC), 2025</i>
  </p>
  <a href="https://doi.org/10.1109/TEVC.2025.3635778"><strong>Read the Person »</strong></a>
  <br />
  <br />
  <a href="https://kelza23.github.io/qsaea/"><strong>View Live Demo »</strong></a>
</div>

<br />

## About The Research

This project visualizes the concepts and results presented in the paper **"Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-objective Optimisation"**.

**Abstract:**
Surrogate-assisted evolutionary algorithms (SAEAs) are promising for solving expensive constrained multi-objective optimisation problems (ECMOPs). However, existing methods often use fixed strategies. This paper proposes **QSAEA**, a Double Q-learning-based SAEA. It adaptively selects one of three surrogate modelling strategies based on the correlation between objective improvement and constraint violation to efficiently navigate the search space.

### Key Features of QSAEA:
-   **Double Q-Learning**: Adaptively selects the best modelling strategy.
-   **State Extraction**: Uses Pearson correlation between convergence and feasibility.
-   **Three Strategies**: 
    1. Objectives only.
    2. Objectives + Constraint Violation.
    3. Objectives + Unsatisfied Constraints.

## Project Structure

This visualizer demonstrates:
-   **Strategies**: The three modelling strategies used in QSAEA.
-   **Workflow**: An interactive flow of the algorithm's process.
-   **Results**: Performance comparison against state-of-the-art algorithms (e.g., KTS, MO-EGO).
-   **Applications**: Real-world engineering problems solved by QSAEA.

## Run Locally

To run this visualization tool locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Citation

If you use this work, please cite the paper:

```bibtex
@article{cai2025learning,
  title={Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-objective Optimisation},
  author={Cai, Zheng and Choo, Yit Hong and Zhou, Tao and Le, Vu and Lim, Wei Hong and Lim, Chee Peng},
  journal={IEEE Transactions on Evolutionary Computation},
  year={2025},
  doi={10.1109/TEVC.2025.3635778}
}
```

<div align="center">
  <h1 align="center">QSAEA Visualizer</h1>
  <h3>Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-objective Optimisation</h3>
  <p>
    <b>Zheng Cai, Yit Hong Choo, Tao Zhou, Vu Le, Wei Hong Lim, and Chee Peng Lim</b>
  </p>
  <p>
    <i>IEEE Transactions on Evolutionary Computation (TEVC), 2025</i>
  </p>
  <a href="https://doi.org/10.1109/TEVC.2025.3635778"><strong>Read the Paper »</strong></a>
  <br />
  <br />
  <a href="https://kelza23.github.io/qsaea/"><strong>View the Website »</strong></a>
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

## Citation

If you use this work, please cite the paper:

```bibtex
@ARTICLE{11263939,
  author={Cai, Zheng and Choo, Yit Hong and Zhou, Tao and Le, Vu and Lim, Wei Hong and Lim, Chee Peng},
  journal={IEEE Transactions on Evolutionary Computation}, 
  title={Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-Objective Optimisation}, 
  year={2025},
  volume={},
  number={},
  pages={1-1},
  abstract={Surrogate assisted evolutionary algorithms (SAEAs) have emerged as a promising approach to solving expensive constrained multi-objective optimisation problems (ECMOPs) by significantly reducing computational costs. However, existing SAEAs typically rely on fixed surrogate modelling strategies or manually predefined switching mechanisms, which limits their adaptability and effectiveness across diverse optimisation scenarios. To address this issue, this paper proposes a double Q-learning-based surrogate-assisted evolutionary algorithm, denoted as QSAEA, to solve expensive constrained multi-objective optimisation problems (ECMOPs). The algorithm combines three surrogate modelling strategies and adopts the double Q-learning mechanism for adaptive selection. The first strategy models only approximate the objectives, helping the population traverses across infeasible regions and approach the unconstrained Pareto front (UPF) quickly. The second strategy considers both objectives and constraint violation (CV), guiding the population moves towards the feasible region while preserving solution quality. The third strategy incorporates objectives and each unsatisfied constraint to perform local search within the feasible region, improving convergence accuracy and solution diversity. The double Q-learning mechanism takes the Pearson correlation between the contributions of individuals with respect to objective improvement and constraint violation as the state input. This allows the algorithm to dynamically choose the most suitable modelling strategy at each stage and adapt to the changing search landscape. Experimental results on a series of benchmark test suites and five real-world mechanical design problems demonstrate the effectiveness of QSAEA in solving ECMOP.},
  keywords={Optimization;Adaptation models;Computational modeling;Evolutionary computation;Convergence;Computational efficiency;Switches;Q-learning;Scheduling;Heuristic algorithms;Expensive constrained multi-objective optimisation;Kriging model;evolutionary algorithm;reinforcement learning},
  doi={10.1109/TEVC.2025.3635778},
  ISSN={1941-0026},
  month={},}
```

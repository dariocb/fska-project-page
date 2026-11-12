# Flow-based Spectral Kernel Learning for Nonstationary Attention

**FSKA · NeurIPS 2026**

Zi Yang, Ying Li, Alejandro Lancho, Darío Cabezas Larese, Pablo M. Olmos, and Michael Minyi Zhang

The University of Hong Kong · National University of Singapore · Universidad Carlos III de Madrid

[Project website](https://dariocb.github.io/fska-project-page/) · [Paper](https://openreview.net/forum?id=aP71hsUN95) · [Code](https://github.com/ziyang18/FSKA) · [Video](https://youtu.be/MBPC_6GG1Cw) · [Poster](assets/poster.pdf) · [Presentation slides](assets/slides.pdf)

## Overview

FSKA learns a nonstationary attention kernel through its spectral density. A RealNVP normalizing flow generates paired frequencies for random features. Head-specific kernels adapt token similarities, while fixed value projections preserve complementary information across heads.

Positive features support aggregation whose cost grows linearly with sequence length for fixed feature and value dimensions.

## Results

The sentence-classification comparison reports the highest mean macro-F1 for FSKA on five of six datasets. The project page includes the complete comparison, parameter and throughput figures, and an expandable MNIST ablation study.

The classification table reports means and standard deviations over three runs from the poster. The implementation repository defaults to five model seeds per experiment, with data and split seed 42. See the [experiment instructions](https://github.com/ziyang18/FSKA#experiments) for sentence classification, full-document classification, and nonstationary toy regression.

## Website contents

- An overview of the method and its assumptions.
- Sentence-classification results and efficiency measurements.
- Additional MNIST ablation results.
- A YouTube presentation alongside a framed, nine-slide PDF preview.
- Downloadable poster and presentation PDFs.
- Reproduction details and the paper citation.

## Local preview

Open index.html in a browser, or serve this directory locally.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000. The website uses static HTML, CSS, JavaScript, and relative asset links. No build step is required.

## Citation

```bibtex
@inproceedings{yang2026fska,
  title = {Flow-based Spectral Kernel Learning for Nonstationary Attention},
  author = {Yang, Zi and Li, Ying and Lancho, Alejandro and Larese, Dar{\'i}o C. and Olmos, Pablo M. and Zhang, Michael Minyi},
  booktitle = {Advances in Neural Information Processing Systems},
  year = {2026}
}
```

## Contact

[pamartin@ing.uc3m.es](mailto:pamartin@ing.uc3m.es) · [mzhang18@hku.hk](mailto:mzhang18@hku.hk)

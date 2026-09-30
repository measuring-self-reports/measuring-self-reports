import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import { execSync } from 'child_process';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import starlightImageZoom from 'starlight-image-zoom';
import remarkSourceQuotes from './src/plugins/remark-source-quotes.mjs';

export default defineConfig({
  site: 'https://measuring-self-reports.github.io',
  base: '/measuring-self-reports',
  markdown: {
    remarkPlugins: [remarkMath, remarkSourceQuotes],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    {
      name: 'build-backlinks',
      hooks: {
        'astro:build:start': () => execSync('node scripts/build-backlinks.mjs'),
        'astro:server:start': () => execSync('node scripts/build-backlinks.mjs'),
      },
    },
    starlight({
      plugins: [starlightImageZoom()],
      title: 'Measuring AI Self-Reports',
            lastUpdated: false,
      description: 'What language models say about themselves, read as measurements: a measurement card built from metrology, philosophy of measurement and consciousness science, applied to introspection, chain-of-thought faithfulness and activation verbalizers',
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        styleOverrides: {
          borderRadius: '0.375rem',
        },
      },
      components: {
        Pagination: './src/components/PageFooter.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Measurement Card',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/measurement-card/' },
            { label: '1. Measurand', link: '/measurement-card/measurand/' },
            { label: '2. Procedure', link: '/measurement-card/procedure/' },
            { label: '3. Instrument and Indication', link: '/measurement-card/instrument/' },
            { label: '4. Measurement Model', link: '/measurement-card/measurement-model/' },
            { label: '5. Calibration', link: '/measurement-card/calibration/' },
            { label: '6. Uncertainty', link: '/measurement-card/uncertainty/' },
            { label: '7. Comparability', link: '/measurement-card/comparability/' },
            { label: '8. Validity Conditions', link: '/measurement-card/validity-conditions/' },
          ],
        },
        {
          label: 'Papers',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/papers/' },
            {
              label: 'Introspection',
              collapsed: false,
              items: [
                { label: 'Overview', link: '/papers/introspection/' },
                {
                  label: 'Concept Injection',
                  collapsed: true,
                  items: [
                    { label: 'Lindsey 2025', link: '/papers/lindsey-2025/' },
                    { label: 'Macar et al. 2026', link: '/papers/macar-2026/' },
                    { label: 'Lederman & Mahowald 2026', link: '/papers/lederman-mahowald-2026/' },
                    { label: 'Singh et al. 2026', link: '/papers/singh-2026/' },
                    { label: 'Ferrara 2026', link: '/papers/ferrara-2026/' },
                    { label: 'Pearson-Vogel et al. 2026', link: '/papers/pearson-vogel-2026/' },
                    { label: 'Fonseca Rivera 2025', link: '/papers/fonseca-rivera-2025/' },
                    { label: 'Hahami et al. 2025', link: '/papers/hahami-2025/' },
                  ],
                },
                {
                  label: 'Self-Prediction',
                  collapsed: true,
                  items: [
                    { label: 'Binder et al. 2025', link: '/papers/binder-2025/' },
                    { label: 'Song, Hu & Mahowald 2025', link: '/papers/song-hu-mahowald-2025/' },
                    { label: 'Blandfort & Pawar 2026', link: '/papers/blandfort-2026/' },
                  ],
                },
                {
                  label: 'Reports of Learned Behavior',
                  collapsed: true,
                  items: [
                    { label: 'Betley et al. 2025', link: '/papers/betley-2025/' },
                    { label: 'Plunkett et al. 2025', link: '/papers/plunkett-2025/' },
                    { label: 'Atkinson, Plunkett & Bau 2026', link: '/papers/atkinson-2026/' },
                  ],
                },
                {
                  label: 'Trained Reporters',
                  collapsed: true,
                  items: [
                    { label: 'Shenoy et al. 2026', link: '/papers/shenoy-2026/' },
                    { label: 'Li et al. 2025', link: '/papers/li-2025/' },
                    { label: 'Kutsyk & Zieliński 2026', link: '/papers/kutsyk-2026/' },
                    { label: 'Guo et al. 2026', link: '/papers/guo-2026/' },
                  ],
                },
                {
                  label: 'Metacognition and Confidence',
                  collapsed: true,
                  items: [
                    { label: 'Kadavath et al. 2022', link: '/papers/kadavath-2022/' },
                    { label: 'Ackerman 2025', link: '/papers/ackerman-2025/' },
                    { label: 'Moran & Whiting 2026', link: '/papers/moran-2026/' },
                    { label: 'Ji-An et al. 2025', link: '/papers/ji-an-2025/' },
                  ],
                },
                {
                  label: 'Prefill Detection',
                  collapsed: true,
                  items: [
                    { label: 'Nguyen et al. 2026', link: '/papers/nguyen-2026/' },
                  ],
                },
              ],
            },
            {
              label: 'Chain-of-Thought Faithfulness',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/papers/faithfulness/' },
              ],
            },
            {
              label: 'Verbalizers and NLAs',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/papers/verbalizers/' },
              ],
            },
          ],
        },
        {
          label: 'Theoretical Foundations',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/foundations/' },
            {
              label: 'Metrology',
              collapsed: true,
              items: [
                { label: 'VIM and GUM', link: '/foundations/metrology/' },
              ],
            },
            {
              label: 'Philosophy of Measurement',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/foundations/philosophy-of-measurement/' },
                { label: 'Tal: Model-Based Measurement', link: '/foundations/tal/' },
                { label: 'Chang: Epistemic Iteration', link: '/foundations/chang/' },
                { label: 'Robustness and Convergence', link: '/foundations/robustness/' },
              ],
            },
            {
              label: 'Psychometrics',
              collapsed: true,
              items: [
                { label: 'Construct Validity', link: '/foundations/psychometrics/' },
                { label: 'Multitrait-Multimethod Matrix', link: '/foundations/multitrait-multimethod/' },
              ],
            },
            {
              label: 'Consciousness Science',
              collapsed: true,
              items: [
                { label: 'Michel: Coordination and Calibration', link: '/foundations/consciousness-science/' },
                { label: 'Signal Detection and Metacognition', link: '/foundations/signal-detection/' },
              ],
            },
            {
              label: 'Philosophy of Mind',
              collapsed: true,
              items: [
                { label: 'Introspection', link: '/foundations/philosophy-of-introspection/' },
              ],
            },
            {
              label: 'Machine Learning',
              collapsed: true,
              items: [
                { label: 'Accounts of LLM Introspection', link: '/foundations/llm-introspection-accounts/' },
                { label: 'Measurement in AI Evaluation', link: '/foundations/ai-evaluation/' },
              ],
            },
            {
              label: 'Mechanistic Interpretability',
              collapsed: true,
              items: [
                { label: 'Interpretability as Instruments', link: '/foundations/interpretability-instruments/' },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          collapsed: false,
          items: [
            { label: 'Glossary', link: '/glossary/' },
            { label: 'About', link: '/about/' },
          ],
        },
      ],
    }),
    mdx({
      remarkPlugins: [remarkGfm, remarkMath, remarkSourceQuotes],
      rehypePlugins: [rehypeKatex],
    }),
  ],
});

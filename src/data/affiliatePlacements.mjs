/**
 * Affiliate placement configuration (ESM)
 *
 * Single source of truth for CTA content across all articles.
 * Used by rehype-affiliate-cta plugin in astro.config.mjs.
 * Update URLs and copy here when affiliate programs change.
 */

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  fireWorks: {
    name: '不用品回収FireWorks',
    network: 'A8',
    rewardYen: 8000,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+6CMH2Q+4X26+NTJWY',
  },
  ihin110: {
    name: '遺品整理110番',
    network: 'A8',
    rewardYen: 6000,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+61WO6Q+39GM+5MFT42',
  },
  emeao: {
    name: 'EMEAO! 遺品整理',
    network: 'A8',
    rewardYen: 6000,
    status: 'pending',
    affiliateUrl: '',
  },
};

export const affiliatePlacements = {
  top: {
    title: '遺品整理の無料見積もりを最初に確認',
    description:
      '遺品整理110番は最短即日対応にも対応。まずは費用目安と対応範囲を確認して、比較の軸を決めましょう。',
    buttonText: '遺品整理110番の無料見積もりを確認する →',
    affiliateUrl: affiliatePrograms.ihin110.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '複数社比較はEMEAO!の条件もチェック',
    description:
      'EMEAO!は審査中のため、正式提携後にリンク差し替え予定です。比較候補として条件を先に把握できます。',
    buttonText: 'EMEAO!の比較条件を確認する →',
    affiliateUrl: affiliatePrograms.emeao.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最終判断前に遺品整理110番を再確認',
    description:
      '見積もり内容と追加費用の有無を最終チェックし、納得できる条件で依頼先を決めましょう。',
    buttonText: '遺品整理110番の最新条件を確認する →',
    affiliateUrl: affiliatePrograms.ihin110.affiliateUrl,
    note: PR_NOTE,
  },
};

# 作業状況

更新日: 2026-11-13

## 2026-11-13 業績更新

- ChemTSv3の論文「Generalizing molecular design via flexible search space control」を追加。出版社ページと[YCU研究室の論文一覧](https://ycu-iil.github.io/cls-lab.jp.github.io/publications/)で題名・著者順・年・掲載誌・DOIを照合。出版社の書誌メタデータに巻・記事番号の記載がなかったため、掲載誌名のみ表示。
  - https://doi.org/10.1038/s42004-026-02172-7
- CBI学会2026年大会のポスター発表2件を追加。公式要旨で演題名・著者順を確認し、会期（10月26〜29日）と会場を公式大会ページで確認。
  - https://cbi-society.org/taikai/taikai26/abstracts/Poster_ab/P09-14.html
  - https://cbi-society.org/taikai/taikai26/abstracts/Poster_ab/P02-13.html
  - https://cbi-society.org/taikai/taikai26/index.html
- 第54回構造活性相関シンポジウムの発表3件（KP-21、KO-06、KP-07）を追加。公式プログラムで演題名・著者順・口頭／ポスターを確認。会期は11月12〜13日、会場は文部科学省研究交流センター。
  - https://www.qsarj.org/54sympo/program.php
  - https://www.qsarj.org/54sympo/
- ページ内の「学会発表情報は…参照して整理しています。」の注記を削除。
- 本人指定のChemRxivページをブラウザで確認し、精製の論文「Guiding chromatographic purification through data-driven condition recommendations」を追加。著者順・2026年10月6日公開・Version 1・未査読を確認し、掲載誌欄に「ChemRxiv（プレプリント・未査読）」と明記。
  - https://chemrxiv.org/doi/full/10.26434/chemrxiv.15009978/v1
- 検証: 最終変更後の `npm run lint`、`npm run build`（TypeScript検査を含む）、`git diff --check` が成功。生成HTMLで追加論文2件・発表5件・本人名31か所のstrong要素・論文リンク・注記削除を確認。ビルド時に既存のBrowserslistデータが古い旨の警告あり（ビルドは成功）。

## 対応済み

- 自己紹介の関心を「PROTACを含む分子の設計・評価」とし、キーワードも「リンカー設計」から「分子設計」へ変更（2026-09-12）。
- スマートフォン向け開閉メニューを追加。リンク選択で閉じ、Escapeでボタンへフォーカスを戻す。
- 2021年の学会発表に含まれる「村上優希」を「村上優貴」に修正。
- ブログのページ・読込処理・Markdown処理・記事を除去。元ファイルは `garbage/blog-removed.qx31Nz.tar.gz` に保存。
- プロフィール画像を `next/image` に変更し、表示幅に応じて最適化して配信。
- 論文・学会発表・書籍の著者一覧で本人名を太字化。日本語の空白有無と英語の略記・姓名順に対応。
- 学会発表の形式を専用の `format` フィールドへ分離。確認済み項目に統一したラベルを表示。

## 発表形式の確認記録

発表の同定には [YCU生命情報科学研究室の学会発表一覧](https://ycu-iil.github.io/cls-lab.jp.github.io/talks/) と [NIHS有機化学部の研究業績](https://www.nihs.go.jp/doc/publications/index.html) を使用。NIHSの一覧はブラウザで対象年度の「もっと読み込む」を開いて確認した。形式の記載がないものは学会公式プログラムで補足した。著者順や演題名だけで形式は推定しない。

| 年 | 学会・識別情報 | 形式 | 根拠 |
| --- | --- | --- | --- |
| 2026 | 日本薬学会第146年会 GS05-3 | 口頭発表 | [公式プログラム](https://forum.nacos.com/146nenkai/pharm146_program_20260206.pdf)のシンポジウム、13:52–14:11の講演枠 |
| 2025 | Pacifichem PROTACリンカー設計 | ポスター発表 | 本人確認（2026-09-12） |
| 2025 | CBI P06-10 | ポスター発表 | [公式ポスター要旨](https://cbi-society.org/taikai/taikai25/abstracts/Poster_ab/P06-10.html) |
| 2025 | 日本薬学会第145年会 27P-am130S | ポスター発表 | [公式プログラム](https://forum.nacos.com/145nenkai/pharm145_program.pdf)の一般ポスター発表枠 |
| 2024 | 第52回構造活性相関シンポジウム KP15 | ポスター発表 | YCUのSAR Presentation Award（ポスター）の記載と同一発表 |
| 2024 | CBI P07-06 | ポスター発表 | YCUの演題番号と[公式ポスター要旨集](https://cbi-society.org/taikai/taikai24/CBI2024_proceedings.pdf) |
| 2024 | 第24回日本蛋白質科学会 WS3-4 | 口頭発表 | YCUのワークショップ講演番号 |
| 2023 | 日本薬学会第143年会 27E2-pm17S | 口頭発表 | YCUの口頭セッション講演番号 |
| 2022 | CBI P08-17 | ポスター発表 | YCUに「ポスター」と明記 |
| 2022 | IIBMP P-72 | ポスター発表 | YCUに「ポスター」と明記 |
| 2022 | CBI H-PGDS構造活性相関（大澤氏筆頭） | 口頭発表 | [公式プログラム](https://cbi-society.org/taikai/taikai22/2022proceedings/CBI2022Proceedings_4_Oct26.pdf)のO6-3 |
| 2022 | 日本薬学会第142年会 H-PGDS構造活性相関（本人筆頭） | ポスター発表 | [NIHS掲載の横尾氏CV](https://www.nihs.go.jp/doc/pdf/CV_H.Yokoo.pdf)にポスター発表の部と明記 |
| 2021 | AIMECS2021 H-PGDS分解誘導剤 | ポスター発表 | [公式ポスタープログラム](https://biz.knt.co.jp/tour/2021/11/aimecs/pdf/poster_program.pdf)のPO-01 |
| 2021 | 第65回日本薬学会関東支部大会 H-PGDS分解誘導剤の創製 | 口頭発表 | 本人確認（2026-09-12） |
| 2021 | 日本薬学会第141年会 プロスタグランジン合成酵素を標的とした分解誘導剤 | ポスター発表 | 本人確認（2026-09-12） |

## 未確定の発表形式

以下は指定されたHPと取得できた公式プログラムから確定できず、本人も不明との回答だったため、`format: null` とし、ラベルを表示していない。

- 2022 Ubiquitin New Frontier: H-PGDS構造活性相関（大澤氏筆頭）。
- 2021 ケミカルバイオロジー第15回年会: 高活性・高選択的H-PGDS分解誘導剤。

## 検証

- 最終変更後の `npm run lint` と `npm run build` が成功（TypeScript検査を含む）。生成ルートはトップページと404のみ。
- ブラウザで開閉ボタン、Enterでの開閉、Escapeでの閉鎖とボタンへのフォーカス復帰、リンク選択後の閉鎖・対象セクションへの移動とフォーカスを確認。
- 幅320px・390px・1280pxで横はみ出しがないことを確認。スマートフォンとPCのナビゲーション表示、および発表ラベルの見た目を確認。
- 本人名24か所が `font-weight: 700` で表示され、確認済み15件の発表ラベルが描画されることを確認。
- 最適化画像（幅640px、品質75、WebP）のHTTP応答は200、45,716 bytes。元JPEGの2,976,996 bytesに対して約98.5%削減。配信量は画面幅・対応形式により変わる。
- `/blog/first-note` は404を返す。退避アーカイブ内の4ファイルと `git diff --check` を確認。

export const profile = {
  name: "Yuki Murakami",
  nameJa: "村上 優貴",
  affiliation: "Yokohama City University",
  affiliationJa: "横浜市立大学",
  title: "Ph.D. Student",
  titleJa: "博士後期課程",
  field: "AI for Drug Discovery / PROTAC Design",
  fieldJa: "AI創薬 / PROTAC設計",
  email: "w245513c@yokohama-cu.ac.jp",
  githubUrl: "https://github.com/yukiycu",
  image: "/images/profile.jpg",
  intro:
    "AI創薬とPROTAC設計を中心に、機械学習を用いた分子設計・評価手法の研究に取り組んでいます。",
  about: [
    "横浜市立大学に所属する博士後期課程の学生です。機械学習、ケモインフォマティクス、創薬化学の接点で、分子設計を支援する実用的な計算手法を研究しています。",
    "主な関心は、PROTACリンカー設計、細胞膜透過性を考慮した分子生成、非天然アミノ酸を含むペプチド設計、研究ワークフローの再現性向上です。"
  ],
  timeline: [
    "横浜市立大学 博士後期課程",
    "研究分野: AI創薬、PROTAC設計、分子生成",
    "キーワード: PROTAC、リンカー設計、ベイズ最適化、ケモインフォマティクス"
  ],
  career: [
    {
      period: "2020年9月-2022年3月",
      title:
        "横浜市立大学 国際総合科学部 国際総合科学科 理学系 生命医科学コース 創薬有機化学研究室",
      note: "国立医薬品食品衛生研究所 有機化学部"
    },
    {
      period: "2022年4月-2024年3月",
      title:
        "横浜市立大学大学院 生命医科学研究科 生命医科学専攻 博士前期課程 生命情報科学研究室"
    },
    {
      period: "2024年4月-現在",
      title:
        "横浜市立大学大学院 生命医科学研究科 生命医科学専攻 博士後期課程 生命情報科学研究室"
    }
  ],
  researchTopics: [
    {
      title: "細胞膜透過性を考慮したPROTACリンカー設計",
      description:
        "PROTACの実用化で課題となる細胞膜透過性に着目し、リンカー構造をデータ駆動で設計する分子生成AIの研究を進めています。PROTAC-TSでは、生成・評価・候補選択を一体化した設計支援を目指しています。"
    },
    {
      title: "H-PGDSを標的としたPROTACの構造活性相関",
      description:
        "造血器型プロスタグランジンD合成酵素（H-PGDS）を標的としたPROTACについて、分子設計、合成、活性評価、構造活性相関を通じて、選択的なタンパク質分解誘導剤の設計指針を整理しています。"
    },
    {
      title: "非天然アミノ酸を含む抗菌ペプチド設計",
      description:
        "非天然アミノ酸を含む抗菌ペプチドを対象に、多目的ベイズ最適化を用いて活性・毒性など複数の評価軸を同時に考慮する分子設計手法を研究しています。"
    },
    {
      title: "創薬研究データの統合解析と自動化",
      description:
        "Multi-omicsと機械学習を用いた疾患メカニズムの可視化や、ラボラトリーオートメーションを見据えた設計ワークフローの整備にも取り組んでいます。実験と計算を接続し、再現性のある探索サイクルを構築することを重視しています。"
    }
  ],
  publications: [
    {
      year: "2026",
      authors:
        "Yuki Murakami, Shoichi Ishida, Nobuo Cho, Hitomi Yuki, Masateru Ohta, Teruki Honma, Yosuke Demizu, Kei Terayama",
      title:
        "Data-driven Design of PROTAC Linkers to Improve PROTAC Cell Membrane Permeability",
      venue: "JACS Au 6, 1400-1410",
      url: "https://doi.org/10.1021/jacsau.6c00033",
      commentUrl: "https://www.yokohama-cu.ac.jp/news/2025/20260220murakami.html"
    },
    {
      year: "2025",
      authors:
        "Yusuke Kobayashi, Naoki Fujiwara, Yuki Murakami, Shoichi Ishida, Sho Kinguchi, Tatsuya Haze, Kengo Azushima, Akira Fujiwara, Hiromichi Wakui, Masayoshi Sakakura, Kei Terayama, Nobuhito Hirawa, Tetsuo Isozaki, Hiroaki Yasuzaki, Hajime Takase, Yuichiro Yano, Kouichi Tamura",
      title:
        "Visualizing fatigue mechanisms in noncommunicable diseases: an integrative approach with multi-omics and machine learning",
      venue: "BMC Med. Inform. Decis. Mak. 25, 204",
      url: "https://doi.org/10.1186/s12911-025-03034-3",
      commentUrl: "https://www.yokohama-cu.ac.jp/res-portal/news/20250708kobayashi.html"
    },
    {
      year: "2023",
      authors: "Yuki Murakami, Shoichi Ishida, Yosuke Demizu, Kei Terayama",
      title:
        "Design of antimicrobial peptides containing non-proteinogenic amino acids using multi-objective Bayesian optimization",
      venue: "Digital Discovery 2, 1347-1353",
      url: "https://doi.org/10.1039/D3DD00090G",
      commentUrl: "https://www.yokohama-cu.ac.jp/news/2023/20230824murakamiyuuki.html"
    },
    {
      year: "2022",
      authors:
        "Yuki Murakami, Hinata Osawa, Takashi Kurohara, Yuta Yanase, Takahito Ito, Hidetomo Yokoo, Norihito Shibata, Mikihiko Naito, Kosuke Aritake, Yosuke Demizu",
      title:
        "Structure-activity relationship study of PROTACs against hematopoietic prostaglandin D2 synthase",
      venue: "RSC Med. Chem. 13, 1495-1503",
      url: "https://doi.org/10.1039/D2MD00284A",
      commentUrl: "https://www.tsurumi.yokohama-cu.ac.jp/news/20230110murakami.html"
    },
    {
      year: "2021",
      authors:
        "Hidetomo Yokoo, Norihito Shibata, Akinori Endo, Takahito Ito, Yuta Yanase, Yuki Murakami, Kiyonaga Fujii, Kengo Hamamura, Yasushi Saeki, Mikihiko Naito, Kosuke Aritake, Yosuke Demizu",
      title:
        "Discovery of a Highly Potent and Selective Degrader Targeting Hematopoietic Prostaglandin D Synthase via In Silico Design",
      venue: "J. Med. Chem. 64, 15868-15882",
      url: "https://doi.org/10.1021/acs.jmedchem.1c01206"
    },
    {
      year: "2021",
      authors:
        "Hidetomo Yokoo, Norihito Shibata, Miyako Naganuma, Yuki Murakami, Kiyonaga Fujii, Takahito Ito, Kosuke Aritake, Mikihiko Naito, Yosuke Demizu",
      title: "Development of a Hematopoietic Prostaglandin D Synthase-Degradation Inducer",
      venue: "ACS Med. Chem. Lett. 12, 236-241",
      url: "https://doi.org/10.1021/acsmedchemlett.0c00605"
    }
  ],
  awards: [
    {
      year: "2025",
      title: "日本薬学会第145年会 学生優秀発表賞",
      description: "細胞膜透過性を加味したPROTACリンカー生成AIの開発",
      url: "https://www.yokohama-cu.ac.jp/news/2025/20250509murakami.html"
    },
    {
      year: "2024",
      title: "第52回構造活性相関シンポジウム SAR Presentation Award（ポスター）",
      description: "細胞膜透過性を考慮したPROTACリンカー生成AIの開発",
      url: "https://www-sb.tsurumi.yokohama-cu.ac.jp/news/20250114murakami.html"
    }
  ],
  fellowships: [
    {
      year: "2026",
      title: "日本学術振興会特別研究員（DC1）採用"
    },
    {
      year: "2025",
      title: "2025年度 首藤奨学財団 奨学生"
    },
    {
      year: "2024",
      title: "2024年度 首藤奨学財団 奨学生"
    },
    {
      year: "2023",
      title: "2023年度 公益財団法人徳洲会国際奨学財団 奨学生"
    },
    {
      year: "2022",
      title: "2022年度 公益財団法人徳洲会国際奨学財団 奨学生"
    }
  ],
  presentations: [
    {
      year: "2026",
      title: "PROTAC-TS : 細胞膜透過性を考慮したPROTACリンカー生成AI",
      authors: "村上 優貴、石田 祥一、長 展生、幸 瞳、大田 雅照、本間 光貴、出水 庸介、寺山 慧",
      venue: "日本薬学会第146年会、GS05-3、関西大学 千里山キャンパス、2026年3月26日-29日"
    },
    {
      year: "2025",
      title: "Machine learning-based PROTAC linker design method to enhance cell membrane permeability",
      authors: "Yuki Murakami, Shoichi Ishida, Masateru Ohta, Teruki Honma, Yosuke Demizu, Kei Terayama",
      venue: "The International Chemical Congress of Pacific Basin Societies 2025, Hawaii, 2025/12/15-20"
    },
    {
      year: "2025",
      title: "Data-driven Design of PROTAC Linkers to enhance Cell Membrane Permeability",
      authors:
        "Yuki Murakami, Shoichi Ishida, Nobuo Cho, Hitomi Yuki, Masateru Ohta, Teruki Honma, Yosuke Demizu, Kei Terayama",
      venue: "CBI学会2025年大会、P06-10、タワーホール船堀、2025年10月27日-30日"
    },
    {
      year: "2025",
      title: "細胞膜透過性を加味したPROTACリンカー生成AIの開発",
      authors: "村上 優貴、石田 祥一、大田 雅照、本間 光貴、出水 庸介、寺山 慧",
      venue: "日本薬学会第145年会、27P-am130S、福岡国際会議場 他、2025年3月26日-29日"
    },
    {
      year: "2024",
      title: "細胞膜透過性を考慮したPROTACリンカー生成AIの開発",
      authors: "村上優貴、石田祥一、出水庸介、寺山慧",
      venue: "第52回構造活性相関シンポジウム、KP15、川崎市産業振興会館、2024年12月12日-13日"
    },
    {
      year: "2024",
      title: "De novo PROTAC linker design to enhance cell membrane permeability based on a data-driven method",
      authors: "Yuki Murakami, Shoichi Ishida, Yosuke Demizu, Kei Terayama",
      venue: "CBI学会2024年大会、P07-06、タワーホール船堀、2024年10月28日-31日"
    },
    {
      year: "2024",
      title: "ラボラトリーオートメーションの実現に向けた抗菌ペプチド設計におけるワークフロー開発",
      authors: "村上優貴、石田祥一、出水庸介、寺山慧",
      venue: "第24回日本蛋白質科学会年会、WS3-4、札幌コンベンションセンター、2024年6月11-13日"
    },
    {
      year: "2023",
      title: "多目的ベイズ最適化を用いた非天然アミノ酸を考慮した抗菌ペプチド設計手法の検討",
      authors: "村上優貴、石田祥一、出水庸介、寺山慧",
      venue: "日本薬学会 第143年会、27E2-pm17S、札幌、2023年3月25日-28日"
    },
    {
      year: "2022",
      title: "Multi-objective Bayesian optimization for antimicrobial peptides design using non-natural amino acids",
      authors: "Y. Murakami, S. Ishida, Y. Demizu, K. Terayama",
      venue: "情報計算科学生物学会2022年大会(CBI2022)、P08-17、タワーホール船堀、2022年10月25-27日（ポスター）"
    },
    {
      year: "2022",
      title: "非天然アミノ酸を加味した低毒性抗菌ペプチド設計に向けた多目的ベイズ最適化の検討",
      authors: "Y. Murakami, S. Ishida, Y. Demizu, K. Terayama",
      venue: "第11回生命医薬情報学連合大会(IIBMP2022), P-72, 大阪, 2022年9月14日（ポスター）"
    },
    {
      year: "2022",
      title: "Structure-activity relationship study of PROTACs against hematopoietic prostaglandin D2 synthase",
      authors: "Osawa, H., Kurohara, T., Murakami, Y., Shibata, N., Naito, M., Demizu, Y.",
      venue: "Ubiquitin New Frontier “from Neo-Biology to Targeted Protein Degradation”, Tokyo, 2022年12月"
    },
    {
      year: "2022",
      title: "Structure-activity relationship study of PROTACs against hematopoietic prostaglandin D2 synthase",
      authors: "大澤陽、黒原崇、村上優貴、柴田識人、内藤幹彦、出水庸介",
      venue: "CBI学会2022年大会、東京、2022年10月"
    },
    {
      year: "2022",
      title: "H-PGDS分解誘導剤の構造活性相関研究",
      authors: "村上優貴、黒原崇、横尾英知、伊藤貴仁、柳瀬雄太、柴田識人、有竹浩介、内藤幹彦、出水庸介",
      venue: "日本薬学会第142年会、名古屋、2022年3月"
    },
    {
      year: "2021",
      title: "Discovery of a highly potent and selective PROTAC targeting hematopoietic prostaglandin D synthase via in silico design",
      authors:
        "Yokoo, H., Shibata, N., Endo, A., Ito, T., Yanase, Y., Murakami, Y., Fujii, K., Saeki, Y., Naito, M., Aritake, K., Demizu, Y.",
      venue: "AIMECS2021, Tokyo (Web), 2021年11月"
    },
    {
      year: "2021",
      title: "造血器型プロスタグランジンD合成酵素分解誘導剤の創製",
      authors: "村上優貴、大澤陽、柴田識人、横尾英知、伊藤貴仁、柳瀬雄太、黒原崇、出水庸介",
      venue: "第65回日本薬学会関東支部大会、Web、2021年9月"
    },
    {
      year: "2021",
      title: "高活性・高選択的な造血器型プロスタグランジンD合成酵素分解誘導剤の開発",
      authors: "横尾英知、柴田識人、遠藤彬則、伊藤貴仁、柳瀬雄太、村上優貴、藤井清永、大庭誠、佐伯泰、内藤幹彦、有竹浩介、出水庸介",
      venue: "ケミカルバイオロジー第15回年会、福岡（Web）、2021年6月"
    },
    {
      year: "2021",
      title: "造血器型プロスタグランジン合成酵素を標的とした分解誘導剤の開発",
      authors: "横尾英知、柴田識人、永沼美弥子、村上優希、藤井清永、伊藤貴仁、有竹浩介、内藤幹彦、出水庸介",
      venue: "日本薬学会第141年会、広島、2021年3月"
    }
  ],
  invitedTalks: [
    {
      year: "2026",
      title: "第7回AIロボット駆動科学研究会",
      venue: "AIロボット駆動科学研究会",
      url: "https://ai-robot-science.connpass.com/event/388928/"
    },
    {
      year: "2024",
      title: "ラボラトリーオートメーションの実現に向けた抗菌ペプチド設計におけるワークフロー開発",
      venue: "Laboratory Automation月例勉強会 / 2024.12",
      url: "https://techplay.jp/event/961710"
    }
  ],
  books: [
    {
      year: "2026",
      authors: "村上 優貴、寺山 慧",
      title: "タンパク質分解誘導薬設計における分子生成AIの活用",
      venue:
        "Drug delivery system : DDS : official journal of the Japan Society of Drug Delivery System 41(2), 143-149",
      url: "https://cir.nii.ac.jp/crid/1520870861008861952"
    }
  ]
};

export type Profile = typeof profile;

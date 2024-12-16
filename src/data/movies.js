import i18n from "i18next";

const data = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: {
      en: "Once Upon a Time in... Hollywood",
      ja: "ワンス・アポン・ア・タイム・イン・ハリウッド",
    },
    description: {
      en: "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      ja: "1969年の黄金期のハリウッドを舞台に、落ち目の俳優とその専属スタントマンが映画界で奔走する姿を描く",
    },

    genre: {
      en: "Drama",
      ja: "ドラマ",
    },
    rating: 5,
    price: 14,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: {
      en: "Marriage Story",
      ja: "マリッジ・ストーリー",
    },
    description: {
      en: "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
      ja: "離婚プロセスに戸惑い、子の親としてのこれからに苦悩する夫婦の姿を、アカデミー賞候補監督ノア・バームバックが、リアルで辛辣ながら思いやりあふれる視点で描く。",
    },
    genre: {
      en: "Drama",
      ja: "ドラマ",
    },
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: {
      en: "Pain & Gain",
      ja: "ペイン＆ゲイン",
    },
    description: {
      en: "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
      ja: "ジムトレーナーのダニエルは、仲間と共に金持ちの顧客ヴィクターを誘拐。全財産を強奪することに成功し豪遊三昧の生活を送っていたが、辛くも逃げ出したヴィクターは探偵を雇い彼らを追い詰める。一方ダニエルたちは第2の犯罪に着手しようとして…。",
    },
    genre: {
      en: "Action",
      ja: "アクション",
    },
    rating: 4,
    price: 10,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: {
      en: "Parasite",
      ja: "パラサイト",
    },
    description: {
      en: "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
      ja: "全員失業中で、その日暮らしの生活を送る貧しいキム一家。長男ギウは、ひょんなことからIT企業のCEOである超裕福なパク氏の家へ、家庭教師の面接を受けに行くことになる。そして、兄に続き、妹のギジョンも豪邸に足を踏み入れるが...この相反する2つの家族の出会いは、誰も観たことのない想像を超える悲喜劇へと猛烈に加速していく――。アクション",
    },
    genre: {
      en: "Comedy, Drama, Thriller",
      ja: "コメディ、ドラマ、サスペンス、",
    },
    rating: 4,
    price: 25,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: {
      en: "Iron Man",
      ja: "アイアンマン",
    },
    description: {
      en: "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      ja: "コメディ、ドラマ、サスペンス、",
    },
    genre: {
      en: "Action/Adventure/Sci-fi",
      ja: "アクション、アドベンチャー・冒険、SF",
    },
    rating: 5,
    price: 10,
  },
  {
    id: crypto.randomUUID(),
    cover: "avatar.png",
    title: {
      en: "Avatar",
      ja: "アバター",
    },
    description: {
      en: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      ja: "「アバター」が私たちに見せてくれるのは、パンドラのすばらしい世界。そこでは１人の男が冒険と愛の壮大な旅に乗り出し、彼が故郷と呼ぶ唯一無二の場所を救うために戦うことを決意する。「タイタニック」でアカデミー賞を受賞したジェームズ・キャメロン監督は没入感を味わえる映画体験を提供。時代を超越した感動的な物語の中で革新的な技術と魅力的なキャラクターたちが融合する。",
    },
    genre: {
      en: "Action/Adventure/Sci-fi/Fantasy",
      ja: "アクション、アドベンチャー・冒険、ファンタジー",
    },
    rating: 8,
    price: 20,
  },
];

function getAllMovies(lang) {
  const currentLanguage = lang || "en";

  return data.map((movie) => ({
    ...movie,
    title: movie.title[currentLanguage],
    description: movie.description[currentLanguage],
    genre: movie.genre[currentLanguage],
  }));
}

export { getAllMovies };

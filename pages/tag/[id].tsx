import Link from "next/link";
import { client } from "../../libs/client";
import { Article } from "../../types/article";

type Props = {
    articles: Array<Article>;
  };

export default function CategoryId({ articles }: Props) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (articles.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <div>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tag" });

  const paths = data.contents.map((content: any) => `/tag/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", queries: { filters: `tag[equals]${id}` } });

  return {
    props: {
      articles: data.contents,
    },
  };
};
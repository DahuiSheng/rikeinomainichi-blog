import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { client } from '../libs/client'
import type { Article } from "../types/article"
import Link from "next/link"
import { Tag } from '../types/tag'
import InfoCouple from '../components/InfoCouple'

type Props = {
  articles: Array<Article>;
  tag: Array<Tag>
}

export default function Home({ articles, tag }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      
      {/* タグ一覧 */}
      <div>
        <ul>
        {tag.map((tag) => (
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
        </ul>
      </div>

      {/* 投稿一覧 */}
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {articles.map(article => (
          <div className="rounded overflow-hidden shadow-lg" key={article.id}>
            <Link href={`/article/${article.id}`} passHref>
              <img
                className="w-full"
                src={article.eyecatch.url}
                alt="Sunset in the mountains"
              />
            </Link>
            <div className="px-6 py-4">
              <Link href={`/article/${article.id}`} passHref>
               <a>{article.title}</a>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
              {article.tag && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{article.tag.name}
                </span>
                )}
            </div>
          </div>
        ))}
      </div>
      <InfoCouple />
    </>
  )
}


// 投稿データとタグデータをAPIより取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'articles', });
  const categoryData = await client.get({ endpoint: 'tag' });

  return {
    props: {
      articles: data.contents,
      tag: categoryData.contents,
    },
  };
};
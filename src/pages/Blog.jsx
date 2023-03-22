import { useEffect, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';

function PostPreview({ pubdate, preview, title, link }) {
  const date = new Date(pubdate);
  const pDay = new Intl.DateTimeFormat('ru-RU', { day: '2-digit' }).format(date);
  const pMon = new Intl.DateTimeFormat('ru-RU', { month: 'short' }).format(date);
  return (
    <div className="col-lg-4 mb-5">
      <div className="position-relative mb-4">
        <img className="img-fluid rounded w-100" src={preview} alt="" />
        <div className="blog-date">
          <h4 className="text-white font-weight-bold mb-n1">{pDay}</h4>
          <small className="text-white text-uppercase">{pMon}</small>
        </div>
      </div>
      <h5 className="font-weight-medium mb-4">{title}</h5>
      <a className="btn btn-sm btn-outline-primary py-2" href={link}>
        Читать
      </a>
    </div>
  );
}

export function Blog({ hidden }) {
  if (hidden) return <div />;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blog.k3env.site/ghost/api/content/posts/?key=64ad4584f3d8b19543b58b1af8')
      .then((r) => r.json())
      .then((p) =>
        setPosts(
          p.posts
            .map((gp) => ({
              id: gp.id,
              title: gp.title,
              pubdate: gp.published_at,
              preview: gp.feature_image,
              link: gp.url,
            }))
            .sort((a, b) => a.pubdate - b.pubdate)
            .slice(0, 3),
        ),
      );
  }, []);
  return (
    <div className="container-fluid pt-5" id="blog">
      <div className="container">
        <SectionHeading bgText="Блог" title="Последние посты" />
        <div className="row">
          {posts.length > 0 ? (
            posts.map((p) => <PostPreview key={p.id} {...p} />)
          ) : (
            <div className="col-12 ">Ничего нет</div>
          )}
        </div>
      </div>
    </div>
  );
}

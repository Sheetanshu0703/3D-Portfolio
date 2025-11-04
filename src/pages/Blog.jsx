import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How I built my 3D portfolio with React Three Fiber',
    summary: 'A quick write-up on lessons, pitfalls, and useful patterns.',
    twitterUrl: 'https://twitter.com/your_handle/status/0000000000000000000',
  },
  {
    title: 'Optimizing Vite builds for WebGL apps',
    summary: 'Chunking, preloading models, and cutting TTI.',
    twitterUrl: 'https://twitter.com/your_handle/status/0000000000000000001',
  },
]

const Blog = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Blog</h1>
      <p className='text-slate-500 mt-2'>Short reads and threads on things I build.</p>

      <div className='flex flex-col gap-6 mt-10'>
        {posts.map((post) => (
          <article key={post.title} className='glassmorphism p-5'>
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p className='text-slate-600 mt-2'>{post.summary}</p>
            <div className='mt-3'>
              <a href={post.twitterUrl} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                Read on Twitter
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog

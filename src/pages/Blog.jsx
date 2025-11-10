import { useState } from "react";
// No Link import needed unless you link to a full page
// import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// --- Imports for the new markdown renderer ---
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// ✨ Posts with full content & memes
const posts = [
  {
    title: "How I built my 3D portfolio with React Three Fiber",
    summary: "A quick write-up on lessons, pitfalls, and useful patterns.",
    content: `
**TL;DR:** I went down the 3D rabbit hole, broke my GPU twice, and came back stronger with a floating astronaut and 60 FPS glory 🚀.

When I first touched React Three Fiber (R3F), I thought it was just React + some 3D spice. Spoiler: it's React + Blender + math + mild emotional damage.
But it's *so worth it*.

### 🧱 Step 1: Building the Scene
I started with a simple canvas and ended up orbit-controlling a spinning mesh like a NASA intern.
R3F's declarative syntax made it super intuitive — no need to manually manage WebGL contexts like it's 2008.

> "Why use R3F?" — Because normal portfolios don't have orbiting donuts, that's why.

### ⚙️ Step 2: Performance = Oxygen
Imported a single .glb and my FPS dropped harder than a React dev realizing useEffect ran twice.
Fixed it using **draco compression**, **lazy loading**, and **baked shadows**.

### 🎨 Step 3: Animation that *Feels Alive*
Framer Motion + R3F = 💅.
Smooth transitions made the UI feel alive, like the objects had their own vibe.

### 💡 Key Takeaway
If you want your portfolio to scream "I'm built different," go 3D — but bring a strong GPU, coffee, and patience.

**Meme moment:**
<img src="/confused.jpg" alt="3D confusion meme" class="rounded-xl mt-3" />

> "Why is it always 2 units below the floor?!" 😭
`,
    twitterUrl: "https://x.com/shxxt_0703/status/1987015806807646380?t=DXLglVLSONcmDFLenSse7A&s=19",
  },
  {
    title: "Optimizing Vite builds for WebGL apps",
    summary: "Chunking, preloading models, and cutting TTI.",
    content: `
**TL;DR:** I took my 100MB WebGL build and turned it into something deployable. My Lighthouse score went from *ouch* to *chef's kiss* 💅.

### 🧩 1. Chunk It Like It's Hot
Code-splitting + dynamic imports = smaller bundles.
Result? My Time To Interactive (TTI) dropped from 7.8s → 2.3s.
> "Every MB counts" — someone who paid for Netlify bandwidth.

### 🕹️ 2. Compress Everything (Even Your Soul)
Used **Draco + KTX2** compression. Reduced .glb by 80%, texture sizes by half, and regret by 100%.

### 🚀 3. Preload Smartly
\`<link rel="preload">\` for assets that load on the hero section.
\`<Suspense>\` for everything else.

### 💀 4. Debug Mode Off
No one needs to see "missing normal map, continuing anyway" in production.

### 🧠 5. Bonus Tip
Add a fake loading bar that jumps 0 → 90% instantly.
Because users love progress — even when it's fake 😅.

**Meme moment:**
<img src="https://i.imgur.com/bV1Zk6P.jpeg" alt="WebGL meme" class="rounded-xl mt-3" />

> *"You can't defeat me" — WebGL*
> *"I know, but he can." — Brotli Compression*
`,
    twitterUrl: "https://x.com/shxxt_0703/status/1987036230979395593?t=7kCjKSwxM1nxS2k-388Lnw&s=19",
  },
  {
    title: "From Pegasus to Flan-T5: My MLOps Hustle for Text Summarization",
    summary: "Dockerized, optimized, and deployed on AWS t3.micro — all without a GPU 💀",
    content: `
**TL;DR:** Started with Pegasus Transformer for text summarization, ended up with Flan-T5 because my laptop's GPU was a myth. Wrapped it all in Docker and shipped it to AWS like a true broke MLOps engineer 🚢.

### 🤖 1. When Pegasus Met CPU Reality
Pegasus was powerful — too powerful.
My CPU started sounding like a jet engine, and inference times felt like ice ages.
> "GPU not found" — the line that broke me.

### 🔁 2. Flan-T5 to the Rescue
Switched to **Flan-T5**, optimized for CPU inference.
Summaries still crisp, latency way down, and my laptop finally forgave me.

### 🐳 3. Dockerize Everything
Created a **Docker image** for clean, repeatable deployments.
No more "works on my machine" moments — just "docker run" and done ✅.

### ☁️ 4. Cloud Flex on a Budget
Deployed on **AWS EC2 (t3.micro)** — not the fastest, but perfect for a personal MLOps setup.
Connected the API, tested endpoints, and watched the summaries roll in from the cloud ☁️.

### 💡 5. Lessons Learned
- Optimize early — GPUs aren't always an option.
- Docker makes life easier than debugging dependencies.
- You can *absolutely* do MLOps on a free-tier EC2 if you have patience (and caffeine).

**Meme moment:**
<img src="https://i.imgur.com/ZnUQ7yO.jpeg" alt="FlanT5 meme" class="rounded-xl mt-3" />

> *"Use Pegasus," they said. It'll be fun, they said.*
> *Meanwhile, my CPU: I'm fighting for my life 😭*
`,
    twitterUrl: "https://x.com/shxxt_0703/status/1987030540017672682?t=ELJHFsYGF21nfWdU7QXoPg&s=19",
  },
  
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="max-container">
      <h1 className="head-text">Blog</h1>
      <p className="text-slate-500 mt-2">
        Short reads and threads on things I build.
      </p>

      {/* Blog list */}
      <div className="flex flex-col gap-6 mt-10">
        {posts.map((post) => (
          <motion.article
            key={post.title}
            className="glassmorphism p-5 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedPost(post)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-slate-600 mt-2">{post.summary}</p>
            <div className="mt-3">
              <a
                href={post.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
                onClick={(e) => e.stopPropagation()} // Good call!
              >
                Read on Twitter
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Expanded blog modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white max-w-3xl w-full p-6 rounded-2xl overflow-y-auto max-h-[80vh] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
              {/* FIX 2: Replaced dangerouslySetInnerHTML with ReactMarkdown.
                - It's safer (prevents XSS attacks).
                - It correctly parses markdown.
                - 'rehypeRaw' allows it to render the <img> tags in your content.
              */}
              <ReactMarkdown
                className="prose prose-slate mt-4"
                rehypePlugins={[rehypeRaw]}
              >
                {selectedPost.content}
              </ReactMarkdown>
              
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={selectedPost.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  View Thread on Twitter
                </a>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Back to Blog
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
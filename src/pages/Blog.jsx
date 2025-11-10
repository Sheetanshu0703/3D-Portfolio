import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Imports for the new markdown renderer ---
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// --- Social Icons ---
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// --- UI/UX Note: Added a clean 'X' icon for the modal ---
import { X } from "lucide-react";

// ✨ Posts with new data for a richer UI
const posts = [
  {
    title: "How I built my 3D portfolio with React Three Fiber",
    summary: "A quick write-up on lessons, pitfalls, and useful patterns.",
    tags: ["React Three Fiber", "3D", "WebGL"],
    readTime: "3 min read",
    content: `I went down the 3D rabbit hole, broke my GPU twice, and came back stronger with a floating astronaut and 60 FPS glory 🚀.

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


<img src="/omg.gif" alt="3D confusion meme" class="rounded-xl mt-3" />`, 
    twitterUrl: "https://x.com/shxxt_0703/status/1987015806807646380?t=DXLglVLSONcmDFLenSse7A&s=19",
  },
  {
    title: "Optimizing Vite builds for WebGL apps",
    summary: "Chunking, preloading models, and cutting TTI.",
    tags: ["Vite", "Performance", "DevOps"],
    readTime: "2 min read",
    content: `I took my 100MB WebGL build and turned it into something deployable. My Lighthouse score went from *ouch* to *chef's kiss* 💅.
<img src="/joey.gif" alt="WebGL meme" class="rounded-xl mt-3" />
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


<img src="/brotli.jpg" alt="WebGL meme" class="rounded-xl mt-3" />`,
    twitterUrl: "https://x.com/shxxt_0703/status/1987036230979395593?t=7kCjKSwxM1nxS2k-388Lnw&s=19",
  },
  {
    title: "From Pegasus to Flan-T5: My MLOps Hustle",
    summary: "Dockerized, optimized, and deployed on AWS t3.micro.",
    tags: ["MLOps", "AWS", "Docker"],
    readTime: "3 min read",
    content: ` Started with Pegasus Transformer for text summarization, ended up with Flan-T5 because my laptop's GPU was a myth. Wrapped it all in Docker and shipped it to AWS like a true broke MLOps engineer 🚢.

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


<img src="/summarize.jpg" alt="FlanT5 meme" class="rounded-xl mt-3" />

> *"Use Pegasus," they said. It'll be fun, they said.*
> *Meanwhile, my CPU: I'm fighting for my life 😭*`, // Your existing content...
    twitterUrl:  "https://x.com/shxxt_0703/status/1987030540017672682?t=ELJHFsYGF21nfWdU7QXoPg&s=19",
  },
];

// --- UI/UX Note: Created a reusable Tag component ---
const PostTag = ({ children }) => (
  <span className="text-xs font-medium text-blue-700 bg-blue-100 rounded-full px-3 py-1">
    {children}
  </span>
);

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="max-container">
      <div className="pb-10 border-b border-slate-200">
        <h1 className="head-text">My Thoughts</h1>
        <p className="text-slate-500 mt-2">
          Short reads, technical deep-dives, and things I'm building.
        </p>
        
        {/* --- HERE ARE THE UPDATED ICONS --- */}
        <div className="flex justify-start gap-6 mt-5">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://x.com/shxxt_0703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-600 text-2xl"
            aria-label="View my Twitter profile"
          >
            <FaTwitter />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://www.linkedin.com/in/sheetanshu-gautam-a589aa249"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700 text-2xl"
            aria-label="View my LinkedIn profile"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://www.instagram.com/shxxtanshu?igsh=MXB6Y2p4ZmhucWxuNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-pink-600 text-2xl"
            aria-label="View my Instagram profile"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>

      {/* ... (rest of your component) ... */}

      {/* --- UI/UX Note: Changed from flex-col to a responsive grid.
          This is the #1 "new age" layout change.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {posts.map((post) => (
          <motion.article
            key={post.title}
            // --- UI/UX Note: Ditched glassmorphism for a cleaner, border-based card.
            // This is more minimal and classy. The hover is subtle but rewarding.
            className="bg-white border border-slate-200 rounded-xl p-6 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            onClick={() => setSelectedPost(post)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* --- UI/UX Note: Added tags for scannability --- */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <PostTag key={tag}>{tag}</PostTag>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="text-slate-600 mt-2">{post.summary}</p>

            {/* --- UI/UX Note: Clearer CTA + metadata --- */}
            <div className="flex justify-between items-center mt-5 text-sm">
              <span className="font-semibold text-blue-600 transition-all group-hover:tracking-wider">
                Read more →
              </span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* --- UI/UX Note: Refined Modal for a "Focused Reading" experience --- */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // --- UI/UX Note: Lighter backdrop blur is classier ---
            className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              // --- UI/UX Note: Full-height panel on mobile, contained on desktop.
              // 'flex-col' allows for a sticky-in-modal header/footer.
              className="bg-slate-50 rounded-2xl shadow-xl w-full max-w-3xl h-full md:h-auto md:max-h-[85vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 1. Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-200 flex-shrink-0">
                <h2 className="text-2xl font-bold text-slate-900">
                  {selectedPost.title}
                </h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="Close post"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 2. Modal Content (Scrollable) */}
              <div className="p-6 overflow-y-auto">
                {/* --- UI/UX Note: 'prose-lg' makes it much more readable --- */}
                <ReactMarkdown
                  className="prose prose-lg prose-slate max-w-none"
                  rehypePlugins={[rehypeRaw]}
                >
                  {selectedPost.content}
                </ReactMarkdown>
              </div>

              {/* 3. Modal Footer */}
              <div className="p-6 bg-slate-100 border-t border-slate-200 flex-shrink-0 flex justify-end items-center gap-4">
                <a
                  href={selectedPost.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  View on Twitter
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- UI/UX Note: Removed the old social footer.
          It's now part of the header, which is cleaner.
      */}
    </section>
  );
};

export default Blog;
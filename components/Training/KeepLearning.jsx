"use client";

import Image from "next/image";


export default function KeepLearning() {
  return (
    <section className="keep-learning">

      {/* LEFT DECORATIVE LEAF */}
      <div className="keep-learning-leaf keep-learning-leaf-left">
        <Image
          src="/images/leaves/leaf-left.png"
          alt=""
          width={100}
          height={140}
        />
      </div>


      {/* MAIN CONTENT */}
      <div className="keep-learning-content">

        <h2>
          KEEP LEARNING. KEEP GROWING.
        </h2>

        <p>
          New skills. Better ideas. A stronger you — for a brighter future with EMAS.
        </p>

        <button
          type="button"
          className="keep-learning-button"
        >
          <span>Explore Knowledge</span>

          <strong>→</strong>
        </button>

      </div>


      {/* RIGHT DECORATIVE LEAF */}
      <div className="keep-learning-leaf keep-learning-leaf-right">
        <Image
          src="/images/leaves/leaf-right.png"
          alt=""
          width={100}
          height={140}
        />
      </div>

    </section>
  );
}
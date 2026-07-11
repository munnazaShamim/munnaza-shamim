'use client';

import { useState } from 'react';
import Link from 'next/link';
import CaseStudyThumbnail from '@/components/CaseStudyThumbnail';
import type { CaseStudy } from '@/lib/caseStudies';
import RightArrow from '@/lib/icons/ArrowRight';

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
  categories: string[];
}

const ALL_TAB = 'All';

export default function CaseStudiesGrid({ caseStudies, categories }: CaseStudiesGridProps) {
  const [activeTab, setActiveTab] = useState(ALL_TAB);

  const tabs = [ALL_TAB, ...categories];
  const filtered =
    activeTab === ALL_TAB
      ? caseStudies
      : caseStudies.filter((study) => study.categories.includes(activeTab));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              activeTab === tab
                ? 'bg-primaryAccent text-background border-primaryAccent'
                : 'bg-cardBackground text-secondaryText border-border hover:text-primaryText'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filtered.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden block"
          >
            <div className="p-8">
              <CaseStudyThumbnail study={study} className="mb-6" />
              <div className="flex flex-wrap gap-2 mb-3">
                {study.categories.map((category) => (
                  <span
                    key={category}
                    className="text-xs bg-secondaryBackground text-primaryAccent px-3 py-1 rounded-full border border-primaryAccent/30"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="text-primaryAccent text-sm font-semibold mb-2">{study.client}</div>
              <h2 className="text-xl font-bold mb-3">{study.title}</h2>
              <p className="text-sm text-secondaryText mb-4">{study.summary}</p>
              <span className="inline-flex items-center gap-1.5 text-primaryAccent font-semibold text-sm">
                Read full case study
                <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

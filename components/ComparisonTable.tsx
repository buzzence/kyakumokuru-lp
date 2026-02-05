"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, ShieldCheck, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompetitorData {
  name: string;
  subtitle: string;
  value: string;
  quality: string;
  recruitment: "excellent" | "good" | "none";
  industryKnowledge: "excellent" | "good" | "average";
  effort: string;
  results: string;
  price: string;
}

const competitors: CompetitorData[] = [
  {
    name: "一般的な",
    subtitle: "SNS代理店",
    value: "認知・\nブランディングのみ",
    quality: "外部アサイン",
    recruitment: "none",
    industryKnowledge: "average",
    effort: "なし",
    results: "数値成果が\n見えにくい",
    price: "25〜50万円",
  },
  {
    name: "インフルエンサー",
    subtitle: "施策",
    value: "単発のPR・\n認知拡大",
    quality: "公募制",
    recruitment: "none",
    industryKnowledge: "average",
    effort: "あり",
    results: "インプレッション\nのみ",
    price: "5万円〜",
  },
  {
    name: "求人媒体",
    subtitle: "",
    value: "応募者の\n獲得のみ",
    quality: "なし",
    recruitment: "good",
    industryKnowledge: "good",
    effort: "あり",
    results: "閲覧数のみ",
    price: "数万円〜",
  },
];

const metrics = [
  "主な提供価値",
  "人材・PRの質",
  "採用支援（求人）",
  "飲食業界の知見",
  "運用の手間",
  "実績",
  "月額費用",
];

function RecruitmentIcon({ level }: { level: "excellent" | "good" | "none" }) {
  if (level === "excellent") {
    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#ffe700] shadow-[0_0_20px_rgba(255,231,0,0.5)] bg-[#ffe700]/10" />
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffe700] to-[#fbb03b] shadow-[0_0_10px_rgba(255,231,0,0.8)]" />
      </div>
    );
  }
  if (level === "good") {
    return <Circle className="w-6 h-6 text-gray-500" />;
  }
  return (
    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function IndustryIcon({ level }: { level: "excellent" | "good" | "average" }) {
  if (level === "excellent") {
    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#ffe700] shadow-[0_0_20px_rgba(255,231,0,0.5)] bg-[#ffe700]/10" />
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffe700] to-[#fbb03b] shadow-[0_0_10px_rgba(255,231,0,0.8)]" />
      </div>
    );
  }
  if (level === "good") {
    return <Circle className="w-6 h-6 text-gray-500" />;
  }
  return (
    <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <section className="relative bg-[#050505] py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#ffe700]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#fbb03b] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 border border-[#fbb03b]/30 px-3 py-1 rounded-full bg-[#fbb03b]/5 shadow-[0_0_15px_rgba(251,176,59,0.2)]">
            High Performance
          </span>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            他社を圧倒する
            <br />
            <span className="bg-gradient-to-br from-[#ffe700] to-[#fbb03b] bg-clip-text text-transparent">
              Buzzenceの品質と成果
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-bold">
            一般的なSNS運用代行や従来の求人媒体とは一線を画す、
            <br className="hidden md:block" />
            飲食店に特化した「集客×採用」の包括的ソリューション。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-12">
          <div className="grid grid-cols-[140px_320px_1fr_1fr_1fr] min-w-[1100px] max-w-[1400px] mx-auto text-center items-end bg-[#0a0a0a] rounded-3xl">
            {/* Metrics Column */}
            <div className="flex flex-col bg-[#0f0f0f] rounded-l-3xl border-y border-l border-white/5">
              <div className="h-[140px] flex flex-col items-center justify-center p-4 border-b border-white/5 bg-[#121212] rounded-tl-3xl">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">Metrics</span>
                <span className="text-gray-300 font-bold text-sm">比較項目</span>
              </div>
              {metrics.slice(0, -1).map((metric, i) => (
                <div key={i} className="h-[80px] flex items-center justify-center px-4 border-b border-white/5 bg-[#121212]">
                  <span className="text-gray-400 text-xs font-bold">{metric}</span>
                </div>
              ))}
              <div className="h-[80px] flex items-center justify-center px-4 bg-[#161616] rounded-bl-3xl">
                <span className="text-[#ffe700] text-sm font-bold">月額費用</span>
              </div>
            </div>

            {/* Buzzence Column (Highlighted) */}
            <div className="flex flex-col relative z-20 -my-4 shadow-[0_0_60px_rgba(255,231,0,0.15)] rounded-2xl overflow-hidden border-2 border-[#ffe700] bg-[#1a1a1a]">
              <div className="h-[140px] flex flex-col items-center justify-center p-4 border-b border-[#ffe700]/30 relative overflow-hidden bg-[radial-gradient(circle_at_center_top,rgba(255,231,0,0.15),transparent_70%)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ffe700]/10 to-transparent opacity-50" />
                <h3 className="text-white font-black text-4xl tracking-tighter drop-shadow-md mt-4 relative">
                  Buzzence
                </h3>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[#ffe700] text-[10px] font-bold tracking-widest uppercase">Premium Plan</span>
                </div>
              </div>

              {/* Value */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-[#ffe700]/20 bg-gradient-to-b from-[#ffe700]/5 to-[#fbb03b]/2 relative">
                <span className="text-white font-black text-lg leading-tight text-center">
                  集客×求人の
                  <br />
                  一気通貫支援
                </span>
                <span className="absolute top-2 right-2 text-[9px] bg-[#ffe700]/20 text-[#ffe700] border border-[#ffe700]/30 px-1.5 py-0.5 rounded font-bold">
                  ROI最大
                </span>
              </div>

              {/* Quality */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-[#ffe700]/20 bg-gradient-to-b from-[#ffe700]/5 to-[#fbb03b]/2 relative">
                <span className="text-white font-bold text-base leading-tight text-center">
                  自社スクール
                  <br />
                  卒業生中心
                </span>
                <span className="absolute top-2 right-2 text-[9px] bg-[#ffe700]/20 text-[#ffe700] border border-[#ffe700]/30 px-1.5 py-0.5 rounded font-bold">
                  高品質
                </span>
              </div>

              {/* Recruitment */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-[#ffe700]/20 bg-gradient-to-b from-[#ffe700]/5 to-[#fbb03b]/2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#ffe700] shadow-[0_0_15px_rgba(255,231,0,0.4)]" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffe700] to-[#fbb03b] shadow-inner" />
                </div>
              </div>

              {/* Industry Knowledge */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-[#ffe700]/20 bg-gradient-to-b from-[#ffe700]/5 to-[#fbb03b]/2 relative">
                <IndustryIcon level="excellent" />
              </div>

              {/* Effort */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-[#ffe700]/20 bg-gradient-to-b from-[#ffe700]/5 to-[#fbb03b]/2 relative">
                <span className="text-white font-bold text-base">完全にお任せ</span>
                <span className="absolute top-2 right-2 text-[9px] bg-[#ffe700]/20 text-[#ffe700] border border-[#ffe700]/30 px-1.5 py-0.5 rounded font-bold">
                  楽々
                </span>
              </div>

              {/* Results */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-[#ffe700]/20 bg-gradient-to-b from-[#ffe700]/5 to-[#fbb03b]/2">
                <div className="flex items-baseline gap-1">
                  <span className="text-[#ffe700] font-black text-3xl drop-shadow-sm">300</span>
                  <span className="text-[#ffe700]/80 font-bold text-sm">件+</span>
                </div>
                <span className="text-gray-400 text-[10px] font-bold">1投稿 平均予約獲得</span>
              </div>

              {/* Price */}
              <div className="h-[80px] flex flex-col items-center justify-center px-2 bg-gradient-to-b from-[#ffe700]/20 to-[#ffe700]/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#ffe700]/5 animate-pulse" />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-[#ffe700] font-black text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    15〜40<span className="text-lg">万円</span>
                  </span>
                  <span className="text-[10px] text-[#fbb03b]/80 font-bold uppercase tracking-wider mt-1">Best Value</span>
                </div>
              </div>
            </div>

            {/* Competitor Columns */}
            {competitors.map((comp, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col bg-[#0e0e0e] border-y border-r border-white/5",
                  idx === competitors.length - 1 && "rounded-r-3xl"
                )}
              >
                <div
                  className={cn(
                    "h-[140px] flex flex-col items-center justify-center p-4 border-b border-white/5",
                    idx === competitors.length - 1 && "rounded-tr-3xl"
                  )}
                >
                  <span className="text-[10px] text-gray-500 font-bold mb-1">Competitor {String.fromCharCode(65 + idx)}</span>
                  <span className="text-gray-300 font-bold text-sm leading-tight text-center">
                    {comp.name}
                    {comp.subtitle && (
                      <>
                        <br />
                        {comp.subtitle}
                      </>
                    )}
                  </span>
                </div>

                <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-white/5">
                  <span className="text-gray-500 text-xs font-medium leading-tight text-center whitespace-pre-line">
                    {comp.value}
                  </span>
                </div>

                <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-white/5">
                  <span className="text-gray-500 text-xs font-medium">{comp.quality}</span>
                </div>

                <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-white/5">
                  <RecruitmentIcon level={comp.recruitment} />
                </div>

                <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-white/5">
                  <IndustryIcon level={comp.industryKnowledge} />
                </div>

                <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-white/5">
                  <span className="text-gray-500 text-sm font-medium">{comp.effort}</span>
                </div>

                <div className="h-[80px] flex flex-col items-center justify-center px-2 border-b border-white/5">
                  <span className="text-gray-600 text-xs font-medium leading-tight text-center whitespace-pre-line">
                    {comp.results}
                  </span>
                </div>

                <div
                  className={cn(
                    "h-[80px] flex flex-col items-center justify-center px-2 bg-[#121212]",
                    idx === competitors.length - 1 && "rounded-br-3xl"
                  )}
                >
                  <span className="text-gray-500 font-bold text-lg">{comp.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffe700]/30 via-white/10 to-[#ffe700]/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-[#151515] border border-[#ffe700]/30 rounded-xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-[#ffe700] flex items-center justify-center bg-[#ffe700]/10 relative z-10">
                  <ShieldCheck className="w-10 h-10 text-[#ffe700] drop-shadow-[0_0_8px_rgba(255,231,0,0.5)]" />
                </div>
                <div className="absolute inset-0 bg-[#ffe700]/20 blur-xl rounded-full" />
              </div>
              <div className="text-left">
                <h4 className="text-[#ffe700] font-black text-xl md:text-2xl mb-1 tracking-tight drop-shadow-sm">
                  Satisfaction Guaranteed
                </h4>
                <p className="text-white font-bold text-lg leading-snug">
                  自信があるからこその価格設定。
                  <br />
                  <span className="text-gray-400 text-sm font-normal">
                    提示した金額以外、追加費用は一切いただきません（※オプション除く）
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <Button
            size="lg"
            className="relative group min-w-[320px] h-20 px-12 bg-gradient-to-r from-[#ffe700] to-[#fbb03b] hover:from-[#fff033] hover:to-[#fcc155] text-black text-xl font-black tracking-wide rounded-full shadow-[0_0_40px_rgba(255,231,0,0.3)] hover:shadow-[0_0_60px_rgba(255,231,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <span className="mr-3">今すぐ無料で相談する</span>
            <ArrowRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
          <p className="text-gray-400 text-sm font-medium flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
            導入実績 <span className="text-white font-bold">500店舗以上</span> ・ 継続率{" "}
            <span className="text-white font-bold">98%</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;

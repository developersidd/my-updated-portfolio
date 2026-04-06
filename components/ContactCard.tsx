import { ArrowRight, Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

const ContactCard = ({
  icon: Icon,
  title,
  subtitle,
  actionText,
  actionHref,
  isCopyable = false,
  copyValue = "",
}: {
  icon: any;
  title: string;
  subtitle: string;
  actionText?: string;
  actionHref?: string;
  isCopyable?: boolean;
  copyValue?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCopyable && copyValue) {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      className="group relative flex items-center justify-between p-4 md:p-5 rounded-2xl bg-[#0a0a0a] border border-white/[0.05] hover:border-emerald-500/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <div className="flex items-center gap-2.5 md:gap-4">
        <div className="flex items-center justify-center  size-11 rounded-xl bg-[#121212] border border-white/[0.05] group-hover:border-emerald-500/30 transition-colors">
          <Icon className="size-5 text-emerald-500" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm md:text-[15px] font-semibold text-white/90 tracking-tight">
            {title}
          </h3>
          <p className="text-[13px] md:text-[14px] text-white/40 font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        {actionText && actionHref && (
          <a
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-medium text-white/30 hover:text-white transition-colors group/link"
          >
            <span className="hidden md:inline-block">{actionText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        )}

        {isCopyable && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover:bg-white/5 text-white/30 hover:text-white transition-all"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="w-4.5 h-4.5 text-emerald-400" />
            ) : (
              <Copy className="w-4.5 h-4.5" />
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};
export default ContactCard;

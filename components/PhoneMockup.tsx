"use client";

import { useState } from "react";
import Image from "next/image";

interface PhoneMockupProps {
	src: string;
	alt: string;
	label?: string;
	description?: string;
	rotate?: boolean;
	priority?: boolean;
}

export default function PhoneMockup({ src, alt, label, description, rotate = false, priority = false }: PhoneMockupProps) {
	const [imgError, setImgError] = useState(false);

	return (
		<div className="flex flex-col items-center">
			<div className={rotate ? "rotate-3" : ""}>
				<div className="relative bg-[#1a0a2e] rounded-[2.8rem] p-[10px] shadow-2xl w-[200px] md:w-[220px]">
					<div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[96px] h-[20px] bg-[#1a0a2e] rounded-full z-10 flex items-center justify-center gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-[#0f0620]" />
					</div>
					<div className="relative overflow-hidden rounded-[2.3rem] bg-card" style={{ aspectRatio: "9 / 19.5" }}>
						{imgError ? (
							<div className="absolute inset-0 bg-card flex flex-col items-center justify-center gap-3 px-4">
								<span className="text-5xl">📱</span>
								<span className="text-text/30 text-xs text-center leading-relaxed">{alt}</span>
							</div>
						) : (
							<Image src={src} alt={alt} fill className="object-cover" onError={() => setImgError(true)} priority={priority} />
						)}
					</div>
				</div>
			</div>
			{label && <p className="text-sm text-center mt-4 text-text/60 font-medium">{label}</p>}
		{description && <p className="text-xs text-center mt-1 text-text/40 leading-snug px-1">{description}</p>}
		</div>
	);
}

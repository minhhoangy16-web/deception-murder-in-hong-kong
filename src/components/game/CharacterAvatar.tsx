import React from "react";
import { User, Shield, Skull, Eye, Camera, Stethoscope, Search, Glasses } from "lucide-react";

export interface AvatarProfile {
  id: string;
  nameVi: string;
  nameEn: string;
  roleHint: string;
  gradient: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeColor: string;
}

export const AVATAR_PROFILES: AvatarProfile[] = [
  {
    id: "senior_inspector",
    nameVi: "Thanh Tra Trưởng",
    nameEn: "Senior Inspector",
    roleHint: "Cảnh sát hình sự Hong Kong",
    gradient: "from-blue-900 via-slate-900 to-black",
    borderColor: "border-sky-500/60",
    icon: Shield,
    badgeColor: "bg-sky-500 text-slate-950",
  },
  {
    id: "forensic_specialist",
    nameVi: "Bác Sĩ Pháp Y",
    nameEn: "Forensic Specialist",
    roleHint: "Chuyên gia giám định dấu vết",
    gradient: "from-teal-900 via-slate-900 to-black",
    borderColor: "border-teal-500/60",
    icon: Search,
    badgeColor: "bg-teal-400 text-slate-950",
  },
  {
    id: "undercover_agent",
    nameVi: "Cảnh Sát Chìm",
    nameEn: "Undercover Agent",
    roleHint: "Trinh sát ngầm khu Tiêm Sa Chủy",
    gradient: "from-amber-950 via-stone-900 to-black",
    borderColor: "border-amber-500/60",
    icon: Glasses,
    badgeColor: "bg-amber-400 text-slate-950",
  },
  {
    id: "femme_fatale",
    nameVi: "Quý Cô Thượng Lưu",
    nameEn: "Femme Fatale",
    roleHint: "Nhân vật bí ẩn sòng bạc Ma Cao",
    gradient: "from-rose-950 via-purple-950 to-black",
    borderColor: "border-rose-500/60",
    icon: Eye,
    badgeColor: "bg-rose-500 text-white",
  },
  {
    id: "triad_boss",
    nameVi: "Trùm Xã Hội Đen",
    nameEn: "Triad Boss",
    roleHint: "Thủ lĩnh băng đảng Vịnh Cửu Long",
    gradient: "from-red-950 via-stone-950 to-black",
    borderColor: "border-red-600/60",
    icon: Skull,
    badgeColor: "bg-red-600 text-white",
  },
  {
    id: "tactical_officer",
    nameVi: "Đặc Nhiệm SDU",
    nameEn: "Tactical SDU",
    roleHint: "Đội phản ứng nhanh Phi Hổ Đội",
    gradient: "from-slate-800 via-zinc-900 to-black",
    borderColor: "border-blue-400/60",
    icon: Shield,
    badgeColor: "bg-blue-500 text-white",
  },
  {
    id: "medical_examiner",
    nameVi: "Giám Định Y Khoa",
    nameEn: "Medical Examiner",
    roleHint: "Bác sĩ giải phẫu pháp y",
    gradient: "from-emerald-950 via-slate-900 to-black",
    borderColor: "border-emerald-500/60",
    icon: Stethoscope,
    badgeColor: "bg-emerald-400 text-slate-950",
  },
  {
    id: "crime_journalist",
    nameVi: "Phóng Viên Báo Chí",
    nameEn: "Crime Journalist",
    roleHint: "Ký giả săn tin hiện trường vụ án",
    gradient: "from-indigo-950 via-slate-900 to-black",
    borderColor: "border-indigo-500/60",
    icon: Camera,
    badgeColor: "bg-indigo-400 text-slate-950",
  },
];

interface CharacterAvatarProps {
  avatarId?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  avatarId = "senior_inspector",
  size = "md",
  className = "",
}) => {
  const profile =
    AVATAR_PROFILES.find((p) => p.id === avatarId) ||
    AVATAR_PROFILES[Math.abs(avatarId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % AVATAR_PROFILES.length] ||
    AVATAR_PROFILES[0];

  const IconComp = profile.icon;

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-16 h-16 sm:w-20 sm:h-20",
  }[size];

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-8 h-8 sm:w-10 sm:h-10",
  }[size];

  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br ${profile.gradient} border-2 ${profile.borderColor} flex items-center justify-center shadow-md overflow-hidden shrink-0 ${sizeClasses} ${className}`}
      title={`${profile.nameEn} (${profile.nameVi})`}
    >
      {/* Background vignette & texture */}
      <div className="absolute inset-0 bg-radial from-transparent to-black/60" />

      {/* Center Character Role Icon */}
      <IconComp className={`${iconSizes} text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] relative z-10`} />

      {/* Subtle border shine */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
    </div>
  );
};

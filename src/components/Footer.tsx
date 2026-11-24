import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  MessageCircle,
  Clock,
  Instagram,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { PSI_PROFILE, getWhatsAppUrl } from "@/lib/constants";

/**
 * Global Footer mirroring the trust & contact architecture with CFP compliance and admin access link.
 */
export function Footer(): React.ReactElement {
  return (
    <footer className="bg-petrol-950 text-sand-100 border-t border-bronze-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Monogram & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sage-600 to-petrol-900 border-2 border-bronze-400 flex items-center justify-center shadow-md">
                <span className="font-serif text-2xl font-bold tracking-wider text-sand-50">
                  IM
                </span>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-sand-50">
                  {PSI_PROFILE.name}
                </h2>
                <p className="text-xs uppercase tracking-widest text-bronze-400 font-semibold">
                  {PSI_PROFILE.crp} • {PSI_PROFILE.approach}
                </p>
              </div>
            </div>

            <p className="text-sm text-sand-200/85 leading-relaxed max-w-md">
              Atendimentos presenciais em Sorocaba/SP ({PSI_PROFILE.clinicName}) e
              psicoterapia online para todo o Brasil e brasileiros no exterior.
              Acolhimento humano, escuta ética e base científica para adolescentes,
              adultos, idosos e casais.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={PSI_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-petrol-900 hover:bg-sage-700 border border-white/10 text-xs font-medium text-sand-100 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-bronze-400" />
                <span>{PSI_PROFILE.handle}</span>
              </a>
              <a
                href={PSI_PROFILE.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-petrol-900 hover:bg-sage-700 border border-white/10 text-xs font-medium text-sand-100 transition-colors"
              >
                <span className="text-bronze-400 font-bold">TikTok</span>
                <span>@psibelle10</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-bronze-400 tracking-wide">
              Navegação Rápida
            </h3>
            <ul className="space-y-2 text-sm text-sand-200/90">
              <li>
                <Link href="/" className="hover:text-bronze-400 transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-bronze-400 transition-colors">
                  Quem Sou Eu (Sobre Mim)
                </Link>
              </li>
              <li>
                <Link
                  href="/#especialidades"
                  className="hover:text-bronze-400 transition-colors"
                >
                  Principais Demandas & TCC
                </Link>
              </li>
              <li>
                <Link
                  href="/valor-da-consulta"
                  className="hover:text-bronze-400 transition-colors"
                >
                  Valor da Consulta & Reembolso
                </Link>
              </li>
              <li>
                <Link
                  href="/o-consultorio"
                  className="hover:text-bronze-400 transition-colors"
                >
                  O Consultório ({PSI_PROFILE.clinicName})
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-bronze-400 transition-colors">
                  Blog de Saúde Emocional
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contacts & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-bronze-400 tracking-wide">
              Atendimento Presencial e Online
            </h3>
            <ul className="space-y-3 text-sm text-sand-200/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-1" />
                <span>{PSI_PROFILE.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>{PSI_PROFILE.businessHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-medium transition-colors"
                >
                  {PSI_PROFILE.whatsappDisplay} (WhatsApp Agendamentos)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bronze-400 shrink-0" />
                <a
                  href={`mailto:${PSI_PROFILE.email}`}
                  className="hover:text-bronze-400 transition-colors break-all"
                >
                  {PSI_PROFILE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethics Note & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-300/75">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-bronze-400 shrink-0" />
            <span>
              Todos os direitos reservados © {new Date().getFullYear()} |{" "}
              <strong className="text-sand-100">{PSI_PROFILE.name}</strong> –{" "}
              {PSI_PROFILE.crp}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Em conformidade com o Código de Ética do CFP</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-sand-300/60 hover:text-bronze-400 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Painel da Psicóloga</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

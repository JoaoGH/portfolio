import React, {useState, useEffect, useCallback} from 'react';
import {FiX, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {useTranslation} from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

export const ProjectDetailsModal = ({project, onClose}) => {
    const {t} = useTranslation();
    const [images, setImages] = useState([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Carrega imagens adicionais se existirem
    useEffect(() => {
        const loadAdditionalImages = async () => {
            try {
                const projectId = project.id.toString().padStart(2, '0');
                const imageModules = import.meta.glob(
                    '../assets/images/project-*/*.{jpg,jpeg,png,gif,webp}',
                    {eager: true}
                );

                const projectImages = Object.entries(imageModules)
                    .filter((path) => path.includes(`project-${projectId}/`))
                    .map((path) => path);

                let imagesToShow = [project.image];
                if (projectImages.length > 0) {
                    if (!projectImages.includes(project.image)) {
                        imagesToShow = [imagesToShow].concat(projectImages);
                    }
                    setImages(imagesToShow);
                } else {
                    setImages(imagesToShow);
                }
            } catch (error) {
                console.error("Error loading additional images:", error);
                setImages([project.image]);
            }
        };

        loadAdditionalImages();
    }, [project]);

    const handleScroll = useCallback(() => {
        if (!emblaApi) {
            return;
        }
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        emblaApi.on('select', handleScroll);
        handleScroll();

        return () => emblaApi.off('select', handleScroll);
    }, [emblaApi, handleScroll]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
        >
            <div
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto cursor-auto text-slate-900 dark:text-zinc-100 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xs border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center px-6 py-4 z-10">
                    <h3 id="modal-project-title" className="font-mono text-lg sm:text-xl font-bold tracking-tight">
                        {t(project.title)}
                    </h3>
                    <button
                        onClick={onClose}
                        className="cursor-pointer p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label={t("projects.modal.close.hint")}
                    >
                        <FiX size={20}/>
                    </button>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                    {/* Carrossel de Imagens */}
                    <div className="mb-6 relative group">
                        <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200/60 dark:border-zinc-800" ref={emblaRef}>
                            <div className="flex">
                                {images.map((img, index) => {
                                    return (
                                        <div key={index} className="flex-[0_0_100%] min-w-0">
                                            <img
                                                src={img}
                                                alt={`${t(project.title)} - ${index + 1}`}
                                                className="w-full h-auto max-h-[380px] object-contain"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Indicadores do carrossel (se tiver múltiplas imagens) */}
                        {images.length > 1 && (
                            <>
                                <button
                                    className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 p-2 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm transition-all ${
                                        !canScrollPrev ? 'opacity-0 group-hover:opacity-30 cursor-default' : 'opacity-0 group-hover:opacity-100'
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        emblaApi?.scrollPrev();
                                    }}
                                    disabled={!canScrollPrev}
                                    aria-label={t("projects.modal.previous.hint")}
                                >
                                    <FiChevronLeft size={20}/>
                                </button>

                                <button
                                    className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 p-2 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm transition-all ${
                                        !canScrollNext ? 'opacity-0 group-hover:opacity-30 cursor-default' : 'opacity-0 group-hover:opacity-100'
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        emblaApi?.scrollNext();
                                    }}
                                    disabled={!canScrollNext}
                                    aria-label={t("projects.modal.next.hint")}
                                >
                                    <FiChevronRight size={20}/>
                                </button>

                                <div className="flex justify-center gap-2 mt-4">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`h-1.5 rounded-full transition-all ${index === selectedIndex ? 'w-5 bg-indigo-600 dark:bg-indigo-400' : 'w-1.5 bg-slate-300 dark:bg-zinc-700'}`}
                                            onClick={() => emblaApi?.scrollTo(index)}
                                            aria-label={`${t("projects.modal.goToImage.hint")} ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Descrição */}
                    <div className="mb-6">
                        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-300 whitespace-pre-line text-left">
                            {t(project.details?.fullDescription || project.description)}
                        </p>
                    </div>

                    {/* Funcionalidades */}
                    {project.details?.features && (
                        <div className="mb-6">
                            <h4 className="font-mono text-sm font-semibold mb-2.5 text-slate-900 dark:text-zinc-100">
                                {t("projects.modal.features.label")}
                            </h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-zinc-300">
                                {project.details.features.map((feature, i) => (
                                    <li key={i}>{t(feature)}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 mt-7">
                        {project.details?.codeUrl && (
                            <a
                                href={project.details.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-xs font-medium bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white px-4 py-2.5 rounded-xl transition-colors"
                            >
                                <FaGithub/> {t("projects.modal.viewCode.label")}
                            </a>
                        )}
                        {project.details?.demoUrl && (
                            <a
                                href={project.details.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl transition-colors"
                            >
                                <FaExternalLinkAlt/> {t("projects.modal.viewDemo.label")}
                            </a>
                        )}
                    </div>

                    {/* Tags na parte inferior */}
                    <div className="mt-7 pt-5 border-t border-slate-200 dark:border-zinc-800">
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">
                            {t("projects.modal.technologies.label")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="font-mono text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/70 dark:border-zinc-700/70 px-3 py-1 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

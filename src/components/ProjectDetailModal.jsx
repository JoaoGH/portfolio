import React, {useState, useEffect} from 'react';
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
                    .filter(([path]) => path.includes(`project-${projectId}/`))
                    .map(([path]) => {
                        return path.replace('../assets', '/src/assets');
                    });

                if (projectImages.length > 0) {
                    setImages([project.image, ...projectImages]);
                }
            } catch (error) {
                console.error("Error loading additional images:", error);
            }
        };

        loadAdditionalImages();
    }, [project]);

    const handleScroll = () => {
        if (!emblaApi) {
            return
        }
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    };

    useEffect(() => {
        if (!emblaApi) {
            return
        }

        emblaApi.on('select', handleScroll);
        handleScroll();

        return () => emblaApi.off('select', handleScroll);
    }, [emblaApi]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto cursor-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-purple-300 flex justify-between items-center p-4 z-10">
                    <h3 className="text-xl font-bold">
                        {t(project.title)}
                    </h3>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label={t("projects.modal.close.hint")}
                    >
                        <FiX size={24}/>
                    </button>
                </div>

                {/* Conteudo */}
                <div className="p-6">
                    {/* Carrossel de Imagens */}
                    <div className="mb-6 relative group">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {images.map((img, index) => {
                                    return (
                                        <div key={index} className="flex-[0_0_100%] min-w-0">
                                            <img
                                                src={img}
                                                alt={`${project.title} - ${index + 1}`}
                                                className="w-full h-auto max-h-[400px] object-contain rounded-lg"
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
                                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all ${
                                        !canScrollPrev ? 'opacity-0 group-hover:opacity-30 cursor-default' : 'opacity-0 group-hover:opacity-100'
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        emblaApi?.scrollPrev();
                                    }}
                                    disabled={!canScrollPrev}
                                    aria-label={t("projects.modal.previous.hint")}
                                >
                                    <FiChevronLeft size={24}/>
                                </button>

                                <button
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all ${
                                        !canScrollNext ? 'opacity-0 group-hover:opacity-30 cursor-default' : 'opacity-0 group-hover:opacity-100'
                                    }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        emblaApi?.scrollNext();
                                    }}
                                    disabled={!canScrollNext}
                                    aria-label={t("projects.modal.nextImage")}
                                >
                                    <FiChevronRight size={24}/>
                                </button>
                            </>
                        )}

                        {/* Indicadores do carrossel (se tiver múltiplas imagens) */}
                        {images.length > 1 && (
                            <div className="flex justify-center gap-2 mt-4">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-purple-600' : 'bg-gray-300'}`}
                                        onClick={() => emblaApi?.scrollTo(index)}
                                        aria-label={`${t("projects.modal.goToImage.hint")} ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Descrição */}
                    <div className="mb-6">
                        <p className="text-gray-700 whitespace-pre-line">
                            {t(project.details?.fullDescription || project.description)}
                        </p>
                    </div>

                    {/* Funcionalidades */}
                    {project.details?.features && (
                        <div className="mb-6">
                            <h4 className="font-semibold mb-2">{t("projects.modal.features.label")}</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {project.details.features.map((feature, i) => (
                                    <li key={i}>{t(feature)}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {project.details?.codeUrl && (
                            <a
                                href={project.details.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                            >
                                <FaGithub/> {t("projects.modal.viewCode.label")}
                            </a>
                        )}
                        {project.details?.demoUrl && (
                            <a
                                href={project.details.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                            >
                                <FaExternalLinkAlt/> {t("projects.modal.viewDemo.label")}
                            </a>
                        )}
                    </div>

                    {/* Tags na parte inferior */}
                    <div className="mt-8 pt-4 border-t border-purple-300">
                        <h4 className="font-semibold mb-2">
                            {t("projects.modal.technologies.label")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded"
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

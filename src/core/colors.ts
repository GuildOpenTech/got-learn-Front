export enum Colors {  
    BLEU_OUTREMER="#0D2D45",
    BLEU_NUIT="#071520",
    TURQUOISE="#2AB8CD",
    LUEUR_BLEUE="#93D3E9",
    ORANGE="#F6A316",

    // Gradients
    BUTTON_GRADIENT=`
    radial-gradient(
        170.24% 336.33% at 100% 84.88%, 
        ${BLEU_OUTREMER} 0%, 
        ${BLEU_OUTREMER} 38.42%, 
        ${TURQUOISE} 100%
    )`,
    BUTTON_GRADIENT_OPACITY_50=`
    radial-gradient(
        170.24% 336.33% at 100% 84.88%, 
        color-mix(in srgb, ${BLEU_OUTREMER}, transparent 50%) 0%, 
        color-mix(in srgb, ${BLEU_OUTREMER}, transparent 50%) 38.42%, 
        color-mix(in srgb, ${TURQUOISE}, transparent 50%) 100%
    )`,

    // Theme
    PRIMARY= BLEU_OUTREMER,
    SECONDARY= ORANGE,
}
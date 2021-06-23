export default {
    weekdays: [
        { label: 'Selecione', value: '' },
        { label: 'Domingo', value: 'Domingo' },
        { label: 'Segunda', value: 'Segunda' },
        { label: 'Terça', value: 'Terça' },
        { label: 'Quarta', value: 'Quarta' },
        { label: 'Quinta', value: 'Quinta' },
        { label: 'Sexta', value: 'Sexta' },
        { label: 'Sábado', value: 'Sábado' }
    ],
    typesAPN: [
        { label: 'Uma foto', value: 1 },
        //{ label: 'Duas fotos', value: 2 },
        { label: 'Foto da Cidade', value: 3 },
        { label: 'Padrão', value: 4 }
    ],
    typesB2B: [
        { label: 'Uma foto', value: 1 },
        { label: 'Duas fotos', value: 2 },
        { label: 'Padrão', value: 3 }
    ],
    typesRec: [
        { label: 'Sem foto', value: 'A' },
        { label: 'Com foto', value: 'B' },
    ],
    modelsRec: [
        { label: 'Safira', value: 'safira' },
        { label: 'Rubi', value: 'ruby' },
        { label: 'Esmeralda', value: 'emerald' },
        { label: 'Diamante', value: 'diamond' },
        { label: 'Blue Diamond', value: 'diamond-blue' },
        { label: 'Black Diamond', value: 'diamond-black' },
    ],
    typesRecM: [
        { label: 'Sem foto', value: 'A' },
        { label: 'Com foto', value: 'B' },
    ],
    modelsRecM: [
        { label: 'Safira', value: 'reconhecimento_safira' },
        { label: 'Rubi', value: 'reconhecimento_rubi' },
        { label: 'Red', value: 'reconhecimento_red' },
        { label: 'Esmeralda', value: 'reconhecimento_esmeralda' },
        { label: 'Elite', value: 'reconhecimento_elite' },
        { label: 'Diamante', value: 'reconhecimento_diamante' },
        { label: 'Blue Diamond', value: 'reconhecimento_blue' },
        { label: 'Black Diamond', value: 'reconhecimento_black' },
    ],
    modelsBiogenica: [
        { label: 'Post', value: 'post' },
        { label: 'Stories', value: 'stories' },
    ],
    modelsBanner: [
        { label: 'Banner', value: 'banner' },
    ],
    typesBanner: [
        { label: 'Sem foto', value: 'A' },
        { label: 'Com foto', value: 'B' },
    ],
    getLabelModelRec: function(value)
    {
        return this.modelsRec.find(item => value === item.value )
    },

    getLabelModelRecM: function(value)
    {
        return this.modelsRecM.find(item => value === item.value )
    },

    getLabelModelBanner: function(value)
    {
        return this.modelsBanner.find(item => value === item.value )
    },

    getLabelModelBiogenica: function(value)
    {
        return this.modelsBiogenica.find(item => value === item.value )
    }
}
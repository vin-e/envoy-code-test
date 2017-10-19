import { Slider, SliderItem } from 'vue-easy-slider'

new Vue({
    el: '#slideshow',
    data() {
        return {
            items: [
                { name: 'django', backgroundImage: 'django.jpg', headline: 'The IPHONE UNCHAINED.', text: 'Tarantino’s outrageous film Djano Unchained needed an equally in your face mobile experience. Bloody good awesomeness ensued.' },
                { name: 'vizio', backgroundImage: 'vizio.jpg', headline: 'SAY HELLO TO THE future of VIZIO.', text: 'When Vizio needed to pull the wrap off its new family of PCs they called on Envoy to conceptualize, direct and produce a series of short product films.' },
                { name: 'escape', backgroundImage: 'escape.jpg', headline: 'HELPING Earth’s Greatest Secrets break out.', text: 'Activate rocket boots! We created a series of out of this world mobile apps and games to introduce the hilarious animated film Escape From Planet Earth.' },
                { name: 'utlra', backgroundImage: 'ultra.jpg', headline: 'WORLD MEET ULTRA. ULTRA MEET WORLD.', text: 'Asked to launch T-Mobile’s new internationally-minded brand, Ultra Mobile, we created a campaign that’s creativity knows no borders.' }
            ]
        }
    },
    computed: {
        getHeight() {
            return '675px';
        }
    },
    methods: {
        getStyle(item) {
            var style = `background-image: url(./images/${ item.backgroundImage }); background-repeat: no-repeat;`;
            style += `height: 675px;`;
            
            return style;
        }
    },
    components: {
        'Slider': Slider,
        'SliderItem': SliderItem
    }
})
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class CvItemMixin extends Vue{
    @Prop({type: String, required: true})
    title!: string;

    @Prop({type: String, required: true})
    institution!: string;

    @Prop({type: String, required: true})
    period!: string;

    @Prop({type: String, required: true})
    location!: string;

    @Prop({type: String, required: true})
    description!: string;

    @Prop({type: Array, required: true})
    tags!: string;
}
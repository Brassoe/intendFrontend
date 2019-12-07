<template>
    <v-item-group>
        <v-layout 
        v-for="(item, i) in moduleCatalogue"
        :key="i"
        class="catalogItemsContainer"
        :style="'background-color: rgba('+item.color+',0.8);'">
            <v-flex xs7>
                <div class="catalogContainer">
                    <v-badge
                    color="teal"
                    right
                    :overlap="false"
                    class="catalogTag">
                    <template v-slot:badge>
                        <v-icon>mdi-tag</v-icon>
                    </template>
                        <div class="title font-weight-thin">{{item.category}}</div>
                    </v-badge>
                    <div class="display-1 font-weight-light">{{item.name}}</div>
                    <div class="display-1 font-weight-thin">{{item.price}},-</div>
                    <ModulesCatalogModal :module="item"/>
                </div>
            </v-flex>
            <v-flex xs5>
                <v-img
                class="mt-8"
                :src="'http://localhost:8080/modules/'+item.name+'/icon.svg'"
                height="120"
                width="120">
                </v-img>
            </v-flex>
        </v-layout>
    </v-item-group>
</template>

<script>
import ModulesCatalogModal from './dialog/CatalogModuleModal'
export default {
    name: "ModulesCatalogue",
    components: {
        ModulesCatalogModal
    },
    data () {
        return {
            isActive: false,
      selected: [],
        }
    },
    computed: {
        moduleCatalogue() {
            return this.$store.getters.moduleCatalogue
        },
        isLoading() {
            return this.$store.getters.loading
        }
    }

}
</script>

<style lang="scss">

    body .container {
        margin: 0;
        padding: 30px 6px 30px 6px;
        max-width: 100%;
    }

    .catalogContainer > div {
        margin-left: 10%;
    }
    .catalogTag {
        margin-left: 10%;
    }
    .catalog-show-more-btn {
        margin-top: 10%;
        margin-left: 10%;
        border-radius: 20px;
    }
    .catalogItemsContainer {
        padding: 30px 0px 30px 0px;
    }
</style>
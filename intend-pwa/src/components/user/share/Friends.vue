<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="4"
                md="3">
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-avatar 
                            class="friend-avatar"
                            size="65">
                                <img
                                src="https://picsum.photos/200"
                                alt="John">
                            </v-avatar>
                        </v-flex>
                        <v-flex xs12>
                            <div class="text-center mt-1">{{item.text}}</div>
                        </v-flex>
                    </v-layout>
                </v-col>
            </v-row>    
                <v-card-actions class="justify-center">
                    <v-btn
                    class="ma-1"
                    color="#10ac84"
                    fab 
                    small 
                    dark
                    @click="">
                        <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Friends",
    data() {
        return {
            items: [
                {
                icon: 'mdi-account-circle',
                text: 'Ole',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Ditte',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Cecilie',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Christian',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Ole',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Ditte',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Cecilie',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Christian',
                },
            ],
        }
    }

}
</script>

<style lang="scss" scoped>

    .friend-avatar {
        left: 50%;
        transform: translate( -50%);
    }

</style>
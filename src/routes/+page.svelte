<script>
    import Send from "./icons/Send.svelte";
    import Search from "./icons/Search.svelte";
    import { Items } from "../store/store";
    import Arrow from "./icons/Arrow.svelte";
</script>

<div class="flex flex-col gap-3">
    <div
        class="px-6 py-4 flex justify-between items-center border-[#24FFBC] border-[1px] rounded-[10px] bg-[#1B1E22] send-shadow"
    >
        <div class="flex flex-col font-[Inter] text-[14px]">
            <span class="font-[500] text-[#F5F5F5]">Send us a message</span>
            <span class="text-[#83838D] font-[400]"
                >We typically reply within a day</span
            >
        </div>
        <div class="hover:cursor-pointer">
            <Send />
        </div>
    </div>

    <div
        class="flex flex-col p-2 gap-2 bg-[#0B0B0F] border-[#15171B] border-[1px] search-shadow rounded-[10px]"
    >
        <div class="bg-[#1B1E22] py-2.5 px-3 flex justify-between rounded-lg">
            <span class="font-[Inter] text-[#F5F5F5] font-[500] text-[14px]"
                >Search for help</span
            >
            <div class="hover:cursor-pointer">
                <Search />
            </div>
        </div>
        <div class="flex flex-col rounded-lg overflow-hidden">
            {#each $Items as item, index}
                <div
                    class="py-2.5 px-3 flex justify-between hover:cursor-pointer hover:bg-[#1B1E22]"
                >
                    <span class="font-[Inter] text-[#F5F5F5] font-[300]"
                        >{item.title}</span
                    >
                    <Arrow />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .send-shadow {
        box-shadow: 0px 0px 0px 1px #00000014;
        box-shadow: 0px 2px 8px 0px #0000000f;
    }

    .search-shadow {
        box-shadow: 0px 0px 0px 1px #00000014;
        box-shadow: 0px 2px 8px 0px #0000000f;
    }
</style>

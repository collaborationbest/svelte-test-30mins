<script>
    import { FooterItems } from "../store/store";
</script>

<div
    class="flex justify-between bg-[#0B0B0F] border-[1px] border-[#15171B] rounded-lg h-[81px]"
>
    {#each $FooterItems as item, index}
        <div
            class="w-1/3 flex justify-center items-center flex-col gap-2 hover:cursor-pointer"
        >
            <item.Icon />
            <span
                class="font-[Inter] font-[400] {item.title == 'Home'
                    ? 'text-[#24FFBC]'
                    : 'text-[#F5F5F5]'}">{item.title}</span
            >
        </div>
    {/each}
</div>

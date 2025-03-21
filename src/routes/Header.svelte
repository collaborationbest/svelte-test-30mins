<script>
    import { UserAvatars } from "../store/store";
</script>

<div class="pt-5 px-5 flex flex-col">
    <div class="w-full flex justify-between tracking-wide">
        <span class=" text-[#24FFBC] text-[32px] font-[600] items-start">
            <span class="font-[Nohemi]"> Eiger </span>
            <span class="text-white font-[Mattone] text-[32px] -ml-2"> X </span>
        </span>
        <div class="flex justify-center items-center">
            {#each $UserAvatars as item, index}
                <div
                    class="flex -ml-[10px] {item.isBorder == true &&
                        'border-[2px] border-[#0B0B0F] rounded-full'}"
                    style={`z-index: ${$UserAvatars.length - index}`}
                >
                    <img
                        src={item.url}
                        alt={`image${index}`}
                        class="w-10 h-10 rounded-full"
                    />
                </div>
            {/each}
        </div>
    </div>
    <div
        class="mt-[100px] flex flex-col font-[SF Pro Display] text-[32px] font-[700] text-white"
    >
        <span class=" opacity-70"> Hello there </span>
        <span> How can we help? </span>
    </div>
</div>

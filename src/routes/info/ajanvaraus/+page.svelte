<script>
import { timereserveURL } from "$lib/constants";
</script>
<div class="text-2xl text-center">
    <p>Tässä on linkki koko ajanvaraus sivulle, josta voi varata hoitajan.</p>
    <br>
    <a class="font-bold mb-4 text-blue-600" target="_blank" href="{`${timereserveURL}book/4?lang=fi`}">ajanvaraus</a>
    <iframe class="w-full pt-2 min-h-[75vh]" src={`${timereserveURL}book/4?lang=fi`} title="ajanvaraus"> 
    </iframe>
</div>

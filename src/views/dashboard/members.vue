<template>
  <div class="card">
    <div class="card-header flex justify-between items-center">
      <h4 class="card-title">Team Members</h4>
      <div>
        <select class="form-select form-select-sm">
          <option selected>Active</option>
          <option value="1">Offline</option>
        </select>
      </div>
    </div>

    <div class="py-6">
      <simplebar class="px-6" data-simplebar style="max-height: 304px">
        <div class="space-y-6">
          <div
              class="flex items-center"
              v-for="(member, index) in teamMembers"
              :key="index"
          >
            <img
                class="me-3 rounded-full"
                :src="member.img"
                width="40"
                alt=""
            />
            <div class="w-full overflow-hidden">
              <h5 class="font-semibold">
                <a
                    href="javascript:void(0);"
                    class="text-gray-600 dark:text-gray-400"
                >{{ member.name }}</a
                >
              </h5>
              <div class="flex items-center gap-2">
                <div>{{ member.role }}</div>
                <i class="mgc_round_fill text-[5px]"></i>
                <div>{{ member.experience }} Experience</div>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script lang="ts">
import simplebar from 'simplebar-vue';
import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";

export default {
  components: {simplebar},
  data() {
    return {
      teamMembers: [
        {
          img: avatar1,
          name: "Risa Pearson",
          role: "UI/UX Designer",
          experience: "2.5 Year",
        },
        {
          img: avatar2,
          name: "Margaret D. Evans",
          role: "PHP Developer",
          experience: "2 Year",
        },
        {
          img: avatar3,
          name: "Bryan J. Luellen",
          role: "Front end Developer",
          experience: "1 Year",
        },
        {
          img: avatar4,
          name: "Kathryn S. Collier",
          role: "UI/UX Designer",
          experience: "3 Year",
        },
        {
          img: avatar5,
          name: "Timothy Kauper",
          role: "Backend Developer",
          experience: "2 Year",
        },
        {
          img: avatar6,
          name: "Zara Raws",
          role: "Python Developer",
          experience: "1 Year",
        },
      ],
    }
  }
}
</script>

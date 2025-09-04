<template>
  <Layout>
    <Breadcrumb title="Typography" subtitle="Components"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div class="col-span-2">

        <CustomSyntax title="Heading Examples">
          <template #card-body>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div class="space-y-4">
                <h1 class="text-xs">
                  text-xs <span class="text-base">(12px)</span>
                </h1>
                <h1 class="text-sm">
                  text-sm <span class="text-base">(14px)</span>
                </h1>
                <h1 class="text-base">text-base (16px)</h1>
                <h1 class="text-lg">
                  text-lg <span class="text-base">(18px)</span>
                </h1>
                <h1 class="text-xl">
                  text-xl <span class="text-base">(20px)</span>
                </h1>
                <h1 class="text-2xl">
                  text-2xl <span class="text-base">(24px)</span>
                </h1>
                <h1 class="text-3xl">
                  text-3xl <span class="text-base">(30px)</span>
                </h1>
                <h1 class="text-4xl">
                  text-4xl <span class="text-base">(36px)</span>
                </h1>
                <h1 class="text-5xl">
                  text-5xl <span class="text-base">(48px)</span>
                </h1>
              </div>
              <div class="space-y-4">
                <h1 class="text-6xl">
                  text-6xl <span class="text-base">(60px)</span>
                </h1>
                <h1 class="text-7xl">
                  text-7xl <span class="text-base"> (72px)</span>
                </h1>
                <h1 class="text-8xl">
                  text-8xl <span class="text-base">(96px)</span>
                </h1>
                <h1 class="text-9xl">
                  text-9xl<span class="text-base">(128px)</span>
                </h1>
              </div>
            </div>
          </template>
        </CustomSyntax>

      </div>

      <CustomSyntax title="Text Colored Examples">
        <template #card-body>
          <div class="space-y-4">
            <h1 class="text-primary text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-secondary text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-success text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-info text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-danger text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Text gradient Examples">
        <template #card-body>
          <div class="space-y-4">
            <p
                class="text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
            <p
                class="text-3xl bg-gradient-to-l from-primary to-info bg-clip-text font-semibold text-transparent"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
            <p
                class="text-3xl bg-gradient-to-r from-danger to-success bg-clip-text font-semibold text-transparent"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
            <p
                class="text-3xl bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text font-semibold text-transparent"
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Text Colored Opacity Examples">
        <template #card-body>
          <div class="space-y-4">
            <h1 class="text-primary/90 text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-primary/75 text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-primary/50 text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-primary/25 text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
            <h1 class="text-primary/10 text-lg">
              The quick brown fox jumps over the lazy dog.
            </h1>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Text Decoration Examples">
        <template #card-body>
          <div class="space-y-4">
            <p class="text-lg underline">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg overline">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg line-through">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg no-underline">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Text Colored Decoration">
        <template #card-body>
          <div class="space-y-4">
            <p class="text-lg underline decoration-primary">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg overline decoration-success decoration-2">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg line-through decoration-danger decoration-2">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg no-underline">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Text Decoration Style">
        <template #card-body>
          <div class="space-y-4">
            <p class="text-lg underline decoration-solid">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg underline decoration-double">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg underline decoration-dotted">
              The quick brown fox jumps over the lazy dog.
            </p>
            <p class="text-lg underline decoration-wavy">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </template>
      </CustomSyntax>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Layout, Breadcrumb},
};
</script>
